<script lang="ts">
	import { buttonVariants } from "$lib/registry/ui/button/index.js";
	import * as Dialog from "$lib/registry/ui/dialog/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: "outline" })}>공유</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-md">
		<Dialog.Header>
			<Dialog.Title>링크 공유</Dialog.Title>
			<Dialog.Description>
				이 링크를 가진 사람은 누구나 볼 수 있습니다.
			</Dialog.Description>
		</Dialog.Header>
		<div class="flex items-center gap-2">
			<div class="grid flex-1 gap-2">
				<Label for="link" class="sr-only">링크</Label>
				<Input id="link" defaultValue="https://shadcn-svelte.com/docs/installation" />
			</div>
		</div>
		<Dialog.Footer class="sm:justify-start">
			<Dialog.Close class={buttonVariants({ variant: "secondary" })}>닫기</Dialog.Close>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
