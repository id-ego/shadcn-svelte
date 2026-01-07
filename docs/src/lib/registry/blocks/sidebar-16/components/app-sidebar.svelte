<script lang="ts" module>
	import SquareTerminalIcon from "@lucide/svelte/icons/square-terminal";
	import BotIcon from "@lucide/svelte/icons/bot";
	import BookOpenIcon from "@lucide/svelte/icons/book-open";
	import Settings2Icon from "@lucide/svelte/icons/settings-2";
	import LifeBuoyIcon from "@lucide/svelte/icons/life-buoy";
	import SendIcon from "@lucide/svelte/icons/send";
	import FrameIcon from "@lucide/svelte/icons/frame";
	import PieChartIcon from "@lucide/svelte/icons/pie-chart";
	import MapIcon from "@lucide/svelte/icons/map";
	import CommandIcon from "@lucide/svelte/icons/command";

	const data = {
		user: {
			name: "shadcn",
			email: "m@example.com",
			avatar: "/avatars/shadcn.jpg",
		},
		navMain: [
			{
				title: "플레이그라운드",
				url: "#",
				icon: SquareTerminalIcon,
				isActive: true,
				items: [
					{
						title: "기록",
						url: "#",
					},
					{
						title: "즐겨찾기",
						url: "#",
					},
					{
						title: "설정",
						url: "#",
					},
				],
			},
			{
				title: "모델",
				url: "#",
				icon: BotIcon,
				items: [
					{
						title: "Genesis",
						url: "#",
					},
					{
						title: "Explorer",
						url: "#",
					},
					{
						title: "Quantum",
						url: "#",
					},
				],
			},
			{
				title: "문서",
				url: "#",
				icon: BookOpenIcon,
				items: [
					{
						title: "소개",
						url: "#",
					},
					{
						title: "시작하기",
						url: "#",
					},
					{
						title: "튜토리얼",
						url: "#",
					},
					{
						title: "변경 로그",
						url: "#",
					},
				],
			},
			{
				title: "설정",
				url: "#",
				icon: Settings2Icon,
				items: [
					{
						title: "일반",
						url: "#",
					},
					{
						title: "팀",
						url: "#",
					},
					{
						title: "결제",
						url: "#",
					},
					{
						title: "한도",
						url: "#",
					},
				],
			},
		],
		navSecondary: [
			{
				title: "지원",
				url: "#",
				icon: LifeBuoyIcon,
			},
			{
				title: "피드백",
				url: "#",
				icon: SendIcon,
			},
		],
		projects: [
			{
				name: "디자인 엔지니어링",
				url: "#",
				icon: FrameIcon,
			},
			{
				name: "영업 및 마케팅",
				url: "#",
				icon: PieChartIcon,
			},
			{
				name: "여행",
				url: "#",
				icon: MapIcon,
			},
		],
	};
</script>

<script lang="ts">
	import type { ComponentProps } from "svelte";
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
	import NavMain from "./nav-main.svelte";
	import NavProjects from "./nav-projects.svelte";
	import NavSecondary from "./nav-secondary.svelte";
	import NavUser from "./nav-user.svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root class="top-(--header-height) h-[calc(100svh-var(--header-height))]!" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="##" {...props}>
							<div
								class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
							>
								<CommandIcon class="size-4" />
							</div>
							<div class="grid flex-1 text-start text-sm leading-tight">
								<span class="truncate font-medium">Acme Inc</span>
								<span class="truncate text-xs">Enterprise</span>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
		<NavProjects projects={data.projects} />
		<NavSecondary items={data.navSecondary} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
</Sidebar.Root>
