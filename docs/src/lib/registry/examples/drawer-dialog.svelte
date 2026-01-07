<script lang="ts">
	import { MediaQuery } from "svelte/reactivity";
	import * as Dialog from "$lib/registry/ui/dialog/index.js";
	import * as Drawer from "$lib/registry/ui/drawer/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
	import { Button, buttonVariants } from "$lib/registry/ui/button/index.js";

	let open = $state(false);
	const isDesktop = new MediaQuery("(min-width: 768px)");

	const id = $props.id();
</script>

{#if isDesktop.current}
	<Dialog.Root bind:open>
		<Dialog.Trigger class={buttonVariants({ variant: "outline" })}>프로필 편집</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title>프로필 편집</Dialog.Title>
				<Dialog.Description>
					여기에서 프로필을 변경하세요. 완료되면 저장을 클릭하세요.
				</Dialog.Description>
			</Dialog.Header>
			<form class="grid items-start gap-4">
				<div class="grid gap-2">
					<Label for="email-{id}">이메일</Label>
					<Input type="email" id="email-{id}" value="shadcn@example.com" />
				</div>
				<div class="grid gap-2">
					<Label for="username-{id}">사용자명</Label>
					<Input id="username-{id}" value="@shadcn" />
				</div>
				<Button type="submit">변경사항 저장</Button>
			</form>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open>
		<Drawer.Trigger class={buttonVariants({ variant: "outline" })}>프로필 편집</Drawer.Trigger>
		<Drawer.Content>
			<Drawer.Header class="text-start">
				<Drawer.Title>프로필 편집</Drawer.Title>
				<Drawer.Description>
					여기에서 프로필을 변경하세요. 완료되면 저장을 클릭하세요.
				</Drawer.Description>
			</Drawer.Header>
			<form class="grid items-start gap-4 px-4">
				<div class="grid gap-2">
					<Label for="email-{id}">이메일</Label>
					<Input type="email" id="email-{id}" value="shadcn@example.com" />
				</div>
				<div class="grid gap-2">
					<Label for="username-{id}">사용자명</Label>
					<Input id="username-{id}" value="@shadcn" />
				</div>
				<Button type="submit">변경사항 저장</Button>
			</form>
			<Drawer.Footer class="pt-2">
				<Drawer.Close class={buttonVariants({ variant: "outline" })}>취소</Drawer.Close>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
{/if}
