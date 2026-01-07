<script lang="ts" module>
	import { z } from "zod/v4";

	const items = [
		{
			id: "recents",
			label: "최근 항목",
		},
		{
			id: "home",
			label: "홈",
		},
		{
			id: "applications",
			label: "애플리케이션",
		},
		{
			id: "desktop",
			label: "데스크톱",
		},
		{
			id: "downloads",
			label: "다운로드",
		},
		{
			id: "documents",
			label: "문서",
		},
	] as const;

	const formSchema = z.object({
		items: z.array(z.string()).refine((value) => value.some((item) => item), {
			message: "최소 하나의 항목을 선택해야 합니다.",
		}),
	});
</script>

<script lang="ts">
	import { defaults, superForm } from "sveltekit-superforms";
	import { zod4 } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import * as Form from "$lib/registry/ui/form/index.js";
	import { Checkbox } from "$lib/registry/ui/checkbox/index.js";

	const form = superForm(defaults(zod4(formSchema)), {
		SPA: true,
		validators: zod4(formSchema),
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success(`제출되었습니다 ${JSON.stringify(f.data, null, 2)}`);
			} else {
				toast.error("폼의 오류를 수정해주세요.");
			}
		},
	});

	const { form: formData, enhance } = form;

	function addItem(id: string) {
		$formData.items = [...$formData.items, id];
	}

	function removeItem(id: string) {
		$formData.items = $formData.items.filter((i) => i !== id);
	}
</script>

<form method="POST" class="space-y-8" use:enhance>
	<Form.Fieldset {form} name="items" class="space-y-0">
		<div class="mb-4">
			<Form.Legend class="text-base">사이드바</Form.Legend>
			<Form.Description>
				사이드바에 표시할 항목을 선택하세요.
			</Form.Description>
		</div>
		<div class="space-y-2">
			{#each items as item (item.id)}
				{@const checked = $formData.items.includes(item.id)}
				<div class="flex flex-row items-start space-x-3">
					<Form.Control>
						{#snippet children({ props })}
							<Checkbox
								{...props}
								{checked}
								value={item.id}
								onCheckedChange={(v) => {
									if (v) {
										addItem(item.id);
									} else {
										removeItem(item.id);
									}
								}}
							/>
							<Form.Label class="font-normal">
								{item.label}
							</Form.Label>
						{/snippet}
					</Form.Control>
				</div>
			{/each}
			<Form.FieldErrors />
		</div>
	</Form.Fieldset>
	<Form.Button>디스플레이 업데이트</Form.Button>
</form>
