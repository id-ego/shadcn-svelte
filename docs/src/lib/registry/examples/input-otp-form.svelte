<script lang="ts" module>
	import { z } from "zod/v4";
	const formSchema = z.object({
		pin: z.string().min(6, {
			message: "일회용 비밀번호는 최소 6자 이상이어야 합니다.",
		}),
	});
</script>

<script lang="ts">
	import { defaults, superForm } from "sveltekit-superforms";
	import { zod4 } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import * as InputOTP from "$lib/registry/ui/input-otp/index.js";
	import * as Form from "$lib/registry/ui/form/index.js";

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success(`제출 완료: ${JSON.stringify(f.data, null, 2)}`);
			} else {
				toast.error("양식의 오류를 수정해 주세요.");
			}
		},
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="w-2/3 space-y-6" use:enhance>
	<Form.Field {form} name="pin">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>일회용 비밀번호</Form.Label>
				<InputOTP.Root maxlength={6} {...props} bind:value={$formData.pin}>
					{#snippet children({ cells })}
						<InputOTP.Group>
							{#each cells as cell (cell)}
								<InputOTP.Slot {cell} />
							{/each}
						</InputOTP.Group>
					{/snippet}
				</InputOTP.Root>
			{/snippet}
		</Form.Control>
		<Form.Description>휴대폰으로 전송된 일회용 비밀번호를 입력하세요.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>제출</Form.Button>
</form>
