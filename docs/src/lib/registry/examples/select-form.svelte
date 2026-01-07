<script lang="ts" module>
	import { z } from "zod/v4";

	const formSchema = z.object({
		email: z.email({ message: "표시할 이메일을 선택해주세요" }),
	});
</script>

<script lang="ts">
	import { defaults, superForm } from "sveltekit-superforms";
	import { zod4 } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import * as Form from "$lib/registry/ui/form/index.js";
	import * as Select from "$lib/registry/ui/select/index.js";

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success(`You submitted ${JSON.stringify(f.data, null, 2)}`);
			} else {
				toast.error("폼의 오류를 수정해주세요.");
			}
		},
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="w-2/3 space-y-6" use:enhance>
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>이메일</Form.Label>
				<Select.Root type="single" bind:value={$formData.email} name={props.name}>
					<Select.Trigger {...props}>
						{$formData.email ? $formData.email : "표시할 인증된 이메일을 선택하세요"}
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="m@example.com" label="m@example.com" />
						<Select.Item value="m@google.com" label="m@google.com" />
						<Select.Item value="m@support.com" label="m@support.com" />
					</Select.Content>
				</Select.Root>
			{/snippet}
		</Form.Control>
		<Form.Description>
			<a href="/examples/forms">이메일 설정</a>에서 이메일 주소를 관리할 수 있습니다.
		</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>제출</Form.Button>
</form>
