<script lang="ts" module>
	import AudioWaveformIcon from "@lucide/svelte/icons/audio-waveform";
	import BookOpenIcon from "@lucide/svelte/icons/book-open";
	import BotIcon from "@lucide/svelte/icons/bot";
	import ChartPieIcon from "@lucide/svelte/icons/chart-pie";
	import CommandIcon from "@lucide/svelte/icons/command";
	import FrameIcon from "@lucide/svelte/icons/frame";
	import GalleryVerticalEndIcon from "@lucide/svelte/icons/gallery-vertical-end";
	import MapIcon from "@lucide/svelte/icons/map";
	import Settings2Icon from "@lucide/svelte/icons/settings-2";
	import SquareTerminalIcon from "@lucide/svelte/icons/square-terminal";

	// This is sample data.
	const data = {
		user: {
			name: "shadcn",
			email: "m@example.com",
			avatar: "/avatars/shadcn.jpg",
		},
		teams: [
			{
				name: "Acme Inc",
				logo: GalleryVerticalEndIcon,
				plan: "Enterprise",
			},
			{
				name: "Acme Corp.",
				logo: AudioWaveformIcon,
				plan: "Startup",
			},
			{
				name: "Evil Corp.",
				logo: CommandIcon,
				plan: "Free",
			},
		],
		navMain: [
			{
				title: "플레이그라운드",
				url: "#",
				icon: SquareTerminalIcon,
				isActive: true,
				items: [
					{
						title: "히스토리",
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
						title: "청구",
						url: "#",
					},
					{
						title: "제한",
						url: "#",
					},
				],
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
				icon: ChartPieIcon,
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
	import NavMain from "./nav-main.svelte";
	import NavProjects from "./nav-projects.svelte";
	import NavUser from "./nav-user.svelte";
	import TeamSwitcher from "./team-switcher.svelte";
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";

	let {
		ref = $bindable(null),
		collapsible = "icon",
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {collapsible} {...restProps}>
	<Sidebar.Header>
		<TeamSwitcher teams={data.teams} />
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
		<NavProjects projects={data.projects} />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
