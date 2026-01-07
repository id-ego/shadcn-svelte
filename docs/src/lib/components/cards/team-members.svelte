<script lang="ts">
	import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
	import * as Card from "$lib/registry/ui/card/index.js";
	import * as Avatar from "$lib/registry/ui/avatar/index.js";
	import * as Popover from "$lib/registry/ui/popover/index.js";
	import * as Command from "$lib/registry/ui/command/index.js";
	import { buttonVariants } from "$lib/registry/ui/button/index.js";
	import * as Item from "$lib/registry/ui/item/index.js";

	let members = $state([
		{
			name: "Sofia Davis",
			email: "m@example.com",
			role: "소유자",
			avatar: "/avatars/01.png",
		},
		{
			name: "Jackson Lee",
			email: "p@example.com",
			role: "개발자",
			avatar: "/avatars/02.png",
		},
		{
			name: "Isabella Nguyen",
			email: "i@example.com",
			role: "결제",
			avatar: "/avatars/03.png",
		},
	]);

	const roles = [
		{
			name: "뷰어",
			description: "보기 및 댓글 작성 가능",
		},
		{
			name: "개발자",
			description: "보기, 댓글 및 편집 가능",
		},
		{
			name: "결제",
			description: "보기, 댓글 및 결제 관리 가능",
		},
		{
			name: "소유자",
			description: "모든 리소스에 대한 관리자 수준 액세스",
		},
	];
</script>

<Card.Root class="gap-4">
	<Card.Header>
		<Card.Title>팀 멤버</Card.Title>
		<Card.Description>팀 멤버를 초대하여 협업하세요.</Card.Description>
	</Card.Header>
	<Card.Content>
		{#each members as member (member.name)}
			<Item.Item size="sm" class="gap-4 px-0">
				<Avatar.Root class="shrink-0 self-start border">
					<Avatar.Image src={member.avatar} alt="Image" />
					<Avatar.Fallback>
						{member.name
							.split(" ")
							.map((n) => n[0])
							.join("")}
					</Avatar.Fallback>
				</Avatar.Root>
				<Item.Content>
					<Item.Title>{member.name}</Item.Title>
					<Item.Description>{member.email}</Item.Description>
				</Item.Content>
				<Item.Actions>
					<Popover.Root>
						<Popover.Trigger
							class={buttonVariants({
								variant: "outline",
								size: "sm",
								class: "ms-auto shadow-none",
							})}
						>
							{member.role}
							<ChevronDownIcon />
						</Popover.Trigger>
						<Popover.Content class="p-0" align="end">
							<Command.Root>
								<Command.Input placeholder="역할 선택..." />
								<Command.List>
									<Command.Empty>역할을 찾을 수 없습니다.</Command.Empty>
									<Command.Group>
										{#each roles as role (role.name)}
											<Command.Item
												onSelect={() => (member.role = role.name)}
											>
												<div class="flex flex-col">
													<p class="text-sm font-medium">{role.name}</p>
													<p class="text-muted-foreground">
														{role.description}
													</p>
												</div>
											</Command.Item>
										{/each}
									</Command.Group>
								</Command.List>
							</Command.Root>
						</Popover.Content>
					</Popover.Root>
				</Item.Actions>
			</Item.Item>
		{/each}
	</Card.Content>
</Card.Root>
