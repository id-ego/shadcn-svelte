<script lang="ts" module>
	import { z } from "zod/v4";
	const formSchema = z.object({
		bio: z
			.string()
			.min(10, "소개는 최소 10자 이상이어야 합니다.")
			.max(160, "소개는 최대 160자까지 입력할 수 있습니다."),
	});
</script>

<script lang="ts">
	import { defaults, superForm } from "sveltekit-superforms";
	import { zod4 } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import * as Form from "$lib/registry/ui/form/index.js";
	import { Textarea } from "$lib/registry/ui/textarea/index.js";

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success(`You submitted ${JSON.stringify(f.data, null, 2)}`);
			} else {
				toast.error("양식의 오류를 수정해주세요.");
			}
		},
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="w-2/3 space-y-6" use:enhance>
	<Form.Field {form} name="bio">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>소개</Form.Label>
				<Textarea
					{...props}
					placeholder="자신에 대해 간단히 소개해주세요"
					class="resize-none"
					bind:value={$formData.bio}
				/>
				<Form.Description>
					<span>@멘션</span>으로 다른 사용자나 조직을 언급할 수 있습니다.
				</Form.Description>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>제출</Form.Button>
</form>
