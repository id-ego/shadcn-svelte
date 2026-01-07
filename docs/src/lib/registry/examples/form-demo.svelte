<script lang="ts" module>
	import { z } from "zod/v4";

	const formSchema = z.object({
		username: z.string().min(2).max(50),
	});
</script>

<script lang="ts">
	import { defaults, superForm } from "sveltekit-superforms";
	import { zod4 } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import * as Form from "$lib/registry/ui/form/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success(`제출하신 내용: ${JSON.stringify(f.data, null, 2)}`);
			} else {
				toast.error("양식의 오류를 수정해 주세요.");
			}
		},
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="w-2/3 space-y-6" use:enhance>
	<Form.Field {form} name="username">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>사용자명</Form.Label>
				<Input {...props} bind:value={$formData.username} />
			{/snippet}
		</Form.Control>
		<Form.Description>공개 표시 이름입니다.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>제출</Form.Button>
</form>
