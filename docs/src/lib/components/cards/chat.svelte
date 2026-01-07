<script lang="ts">
	import CheckIcon from "@lucide/svelte/icons/check";
	import PlusIcon from "@lucide/svelte/icons/plus";
	import ArrowUpIcon from "@lucide/svelte/icons/arrow-up";
	import { cn } from "$lib/utils.js";
	import * as Avatar from "$lib/registry/ui/avatar/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import * as Command from "$lib/registry/ui/command/index.js";
	import * as Dialog from "$lib/registry/ui/dialog/index.js";
	import * as Tooltip from "$lib/registry/ui/tooltip/index.js";
	import * as InputGroup from "$lib/registry/ui/input-group/index.js";

	const users = [
		{
			name: "Olivia Martin",
			email: "m@example.com",
			avatar: "/avatars/01.png",
		},
		{
			name: "Isabella Nguyen",
			email: "isabella.nguyen@email.com",
			avatar: "/avatars/03.png",
		},
		{
			name: "Emma Wilson",
			email: "emma@example.com",
			avatar: "/avatars/05.png",
		},
		{
			name: "Jackson Lee",
			email: "lee@example.com",
			avatar: "/avatars/02.png",
		},
		{
			name: "William Kim",
			email: "will@email.com",
			avatar: "/avatars/04.png",
		},
	] as const;

	type User = (typeof users)[number];

	let open = $state(false);
	let selectedUsers = $state<User[]>([]);

	let messages = $state([
		{
			role: "agent",
			content: "안녕하세요, 무엇을 도와드릴까요?",
		},
		{
			role: "user",
			content: "안녕하세요, 계정에 문제가 있어요.",
		},
		{
			role: "agent",
			content: "어떤 문제가 있으신가요?",
		},
		{
			role: "user",
			content: "로그인을 할 수 없어요.",
		},
	]);

	let input = $state("");
	let inputLength = $derived(input.trim().length);
</script>

<Card.Root>
	<Card.Header class="flex flex-row items-center">
		<div class="flex items-center gap-4">
			<Avatar.Root class="border">
				<Avatar.Image src="/avatars/01.png" alt="Image" />
				<Avatar.Fallback>OM</Avatar.Fallback>
			</Avatar.Root>
			<div class="flex flex-col gap-0.5">
				<p class="text-sm leading-none font-medium">Sofia Davis</p>
				<p class="text-muted-foreground text-xs">m@example.com</p>
			</div>
		</div>
		<Tooltip.Provider delayDuration={0}>
			<Tooltip.Root>
				<Tooltip.Trigger>
					{#snippet child({ props })}
						<Button
							{...props}
							size="icon"
							variant="secondary"
							class="ms-auto size-8 rounded-full"
							onclick={() => (open = true)}
						>
							<PlusIcon />
							<span class="sr-only">새 메시지</span>
						</Button>
					{/snippet}
				</Tooltip.Trigger>
				<Tooltip.Content sideOffset={10}>새 메시지</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	</Card.Header>
	<Card.Content>
		<div class="flex flex-col gap-4">
			{#each messages as message, index (index)}
				<div
					class={cn(
						"flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
						message.role === "user"
							? "bg-primary text-primary-foreground ms-auto"
							: "bg-muted"
					)}
				>
					{message.content}
				</div>
			{/each}
		</div>
	</Card.Content>
	<Card.Footer>
		<form
			onsubmit={(event) => {
				event.preventDefault();
				if (inputLength === 0) return;
				messages.push({
					role: "user",
					content: input,
				});
				input = "";
			}}
			class="relative w-full"
		>
			<InputGroup.Root>
				<InputGroup.Input
					id="message"
					placeholder="메시지를 입력하세요..."
					autocomplete="off"
					bind:value={input}
				/>
				<InputGroup.Addon align="inline-end">
					<InputGroup.Button type="submit" size="icon-xs" class="rounded-full">
						<ArrowUpIcon />
						<span class="sr-only">보내기</span>
					</InputGroup.Button>
				</InputGroup.Addon>
			</InputGroup.Root>
		</form>
	</Card.Footer>
</Card.Root>
<Dialog.Root bind:open>
	<Dialog.Content class="gap-0 p-0 outline-none">
		<Dialog.Header class="px-4 pt-5 pb-4">
			<Dialog.Title>새 메시지</Dialog.Title>
			<Dialog.Description>
				이 스레드에 사용자를 초대하세요. 새로운 그룹 메시지가 생성됩니다.
			</Dialog.Description>
		</Dialog.Header>
		<Command.Root class="overflow-hidden rounded-t-none border-t bg-transparent">
			<Command.Input placeholder="사용자 검색..." />
			<Command.List>
				<Command.Empty>사용자를 찾을 수 없습니다.</Command.Empty>
				<Command.Group class="p-2">
					{#each users as user (user.email)}
						<Command.Item
							class="data-[active=true]:opacity-50"
							onSelect={() => {
								if (selectedUsers.includes(user)) {
									selectedUsers = selectedUsers.filter(
										(u) => u.email !== user.email
									);
								} else {
									selectedUsers = [...users].filter((u) =>
										[...selectedUsers, user].includes(u)
									);
								}
							}}
						>
							<Avatar.Root class="border">
								<Avatar.Image src={user.avatar} alt="Image" />
								<Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
							</Avatar.Root>
							<div class="ms-2">
								<p class="text-sm leading-none font-medium">
									{user.name}
								</p>
								<p class="text-muted-foreground text-sm">
									{user.email}
								</p>
							</div>
							{#if selectedUsers.includes(user)}
								<CheckIcon class="text-primary ms-auto flex size-4" />
							{/if}
						</Command.Item>
					{/each}
				</Command.Group>
			</Command.List>
		</Command.Root>
		<Dialog.Footer class="flex items-center border-t p-4 sm:justify-between">
			{#if selectedUsers.length > 0}
				<div class="flex -space-x-2 overflow-hidden">
					{#each selectedUsers as user (user.email)}
						<Avatar.Root class="inline-block border">
							<Avatar.Image src={user.avatar} />
							<Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
						</Avatar.Root>
					{/each}
				</div>
			{:else}
				<p class="text-muted-foreground text-sm">이 스레드에 추가할 사용자를 선택하세요.</p>
			{/if}
			<Button disabled={selectedUsers.length < 2} onclick={() => (open = false)}>
				계속
			</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
