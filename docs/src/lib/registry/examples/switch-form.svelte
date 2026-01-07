<script lang="ts" module>
	import { z } from "zod/v4";
	const formSchema = z.object({
		marketing_emails: z.boolean().default(false),
		security_emails: z.boolean().default(true),
	});
</script>

<script lang="ts">
	import { defaults, superForm } from "sveltekit-superforms";
	import { zod4 } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import * as Form from "$lib/registry/ui/form/index.js";
	import { Switch } from "$lib/registry/ui/switch/index.js";

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success(`제출된 데이터: ${JSON.stringify(f.data, null, 2)}`);
			} else {
				toast.error("양식의 오류를 수정해주세요.");
			}
		},
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="w-full space-y-6" use:enhance>
	<fieldset>
		<legend class="mb-4 text-lg font-medium"> 이메일 알림 </legend>
		<div class="space-y-4">
			<Form.Field
				{form}
				name="marketing_emails"
				class="flex flex-row items-center justify-between rounded-lg border p-4"
			>
				<Form.Control>
					{#snippet children({ props })}
						<div class="space-y-0.5">
							<Form.Label>마케팅 이메일</Form.Label>
							<Form.Description>
								신제품, 기능 등에 대한 이메일을 받습니다.
							</Form.Description>
						</div>
						<Switch {...props} bind:checked={$formData.marketing_emails} />
					{/snippet}
				</Form.Control>
			</Form.Field>
			<Form.Field
				{form}
				name="security_emails"
				class="flex flex-row items-center justify-between rounded-lg border p-4"
			>
				<Form.Control>
					{#snippet children({ props })}
						<div class="space-y-0.5">
							<Form.Label>보안 이메일</Form.Label>
							<Form.Description>
								계정 보안에 대한 이메일을 받습니다.
							</Form.Description>
						</div>
						<Switch
							{...props}
							aria-readonly
							disabled
							bind:checked={$formData.security_emails}
						/>
					{/snippet}
				</Form.Control>
			</Form.Field>
		</div>
	</fieldset>
	<Form.Button>제출</Form.Button>
</form>
