<script lang="ts" module>
	import { z } from "zod/v4";

	const languages = [
		{ label: "English", value: "en" },
		{ label: "French", value: "fr" },
		{ label: "German", value: "de" },
		{ label: "Spanish", value: "es" },
		{ label: "Portuguese", value: "pt" },
		{ label: "Russian", value: "ru" },
		{ label: "Japanese", value: "ja" },
		{ label: "Korean", value: "ko" },
		{ label: "Chinese", value: "zh" },
	] as const;

	const formSchema = z.object({
		language: z.enum(["en", "fr", "de", "es", "pt", "ru", "ja", "ko", "zh"]),
	});
</script>

<script lang="ts">
	import { defaults, superForm } from "sveltekit-superforms";
	import { tick } from "svelte";
	import CheckIcon from "@lucide/svelte/icons/check";
	import ChevronsUpDownIcon from "@lucide/svelte/icons/chevrons-up-down";
	import { zod4 } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import { useId } from "bits-ui";
	import * as Form from "$lib/registry/ui/form/index.js";
	import * as Popover from "$lib/registry/ui/popover/index.js";
	import * as Command from "$lib/registry/ui/command/index.js";
	import { cn } from "$lib/utils.js";
	import { buttonVariants } from "$lib/registry/ui/button/index.js";

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

	let open = false;

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
	const triggerId = useId();
</script>

<form method="POST" class="space-y-6" use:enhance>
	<Form.Field {form} name="language" class="flex flex-col">
		<Popover.Root bind:open>
			<Form.Control id={triggerId}>
				{#snippet children({ props })}
					<Form.Label>언어</Form.Label>
					<Popover.Trigger
						class={cn(
							buttonVariants({ variant: "outline" }),
							"w-[200px] justify-between",
							!$formData.language && "text-muted-foreground"
						)}
						role="combobox"
						{...props}
					>
						{languages.find((f) => f.value === $formData.language)?.label ??
							"언어 선택"}
						<ChevronsUpDownIcon class="opacity-50" />
					</Popover.Trigger>
					<input hidden value={$formData.language} name={props.name} />
				{/snippet}
			</Form.Control>
			<Popover.Content class="w-[200px] p-0">
				<Command.Root>
					<Command.Input autofocus placeholder="언어 검색..." class="h-9" />
					<Command.Empty>언어를 찾을 수 없습니다.</Command.Empty>
					<Command.Group value="languages">
						{#each languages as language (language.value)}
							<Command.Item
								value={language.label}
								onSelect={() => {
									$formData.language = language.value;
									closeAndFocusTrigger(triggerId);
								}}
							>
								{language.label}
								<CheckIcon
									class={cn(
										"ms-auto",
										language.value !== $formData.language && "text-transparent"
									)}
								/>
							</Command.Item>
						{/each}
					</Command.Group>
				</Command.Root>
			</Popover.Content>
		</Popover.Root>
		<Form.Description>
			대시보드에서 사용할 언어입니다.
		</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>제출</Form.Button>
</form>
