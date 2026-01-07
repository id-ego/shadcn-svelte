<script lang="ts" module>
	import { z } from "zod/v4";
	const formSchema = z.object({
		mobile: z.boolean().default(false),
	});
</script>

<script lang="ts">
	import { defaults, superForm } from "sveltekit-superforms";
	import { zod4 } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import * as Form from "$lib/registry/ui/form/index.js";
	import { Checkbox } from "$lib/registry/ui/checkbox/index.js";

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success(`제출되었습니다 ${JSON.stringify(f.data, null, 2)}`);
			} else {
				toast.error("폼의 오류를 수정해주세요.");
			}
		},
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="space-y-6" use:enhance>
	<Form.Field
		{form}
		name="mobile"
		class="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4"
	>
		<Form.Control>
			{#snippet children({ props })}
				<Checkbox {...props} bind:checked={$formData.mobile} />
				<div class="space-y-1 leading-none">
					<Form.Label>모바일 기기에 다른 설정 사용</Form.Label>
					<Form.Description>
						<a href="/examples/forms">모바일 설정</a> 페이지에서 모바일 알림을 관리할 수 있습니다.
					</Form.Description>
				</div>
			{/snippet}
		</Form.Control>
	</Form.Field>
	<Form.Button>제출</Form.Button>
</form>
