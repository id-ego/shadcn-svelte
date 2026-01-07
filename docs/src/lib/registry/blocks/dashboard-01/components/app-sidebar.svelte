<script lang="ts">
	import CameraIcon from "@tabler/icons-svelte/icons/camera";
	import ChartBarIcon from "@tabler/icons-svelte/icons/chart-bar";
	import DashboardIcon from "@tabler/icons-svelte/icons/dashboard";
	import DatabaseIcon from "@tabler/icons-svelte/icons/database";
	import FileAiIcon from "@tabler/icons-svelte/icons/file-ai";
	import FileDescriptionIcon from "@tabler/icons-svelte/icons/file-description";
	import FileWordIcon from "@tabler/icons-svelte/icons/file-word";
	import FolderIcon from "@tabler/icons-svelte/icons/folder";
	import HelpIcon from "@tabler/icons-svelte/icons/help";
	import InnerShadowTopIcon from "@tabler/icons-svelte/icons/inner-shadow-top";
	import ListDetailsIcon from "@tabler/icons-svelte/icons/list-details";
	import ReportIcon from "@tabler/icons-svelte/icons/report";
	import SearchIcon from "@tabler/icons-svelte/icons/search";
	import SettingsIcon from "@tabler/icons-svelte/icons/settings";
	import UsersIcon from "@tabler/icons-svelte/icons/users";
	import NavDocuments from "./nav-documents.svelte";
	import NavMain from "./nav-main.svelte";
	import NavSecondary from "./nav-secondary.svelte";
	import NavUser from "./nav-user.svelte";
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";

	const data = {
		user: {
			name: "shadcn",
			email: "m@example.com",
			avatar: "/avatars/shadcn.jpg",
		},
		navMain: [
			{
				title: "대시보드",
				url: "#",
				icon: DashboardIcon,
			},
			{
				title: "라이프사이클",
				url: "#",
				icon: ListDetailsIcon,
			},
			{
				title: "분석",
				url: "#",
				icon: ChartBarIcon,
			},
			{
				title: "프로젝트",
				url: "#",
				icon: FolderIcon,
			},
			{
				title: "팀",
				url: "#",
				icon: UsersIcon,
			},
		],
		navClouds: [
			{
				title: "캡처",
				icon: CameraIcon,
				isActive: true,
				url: "#",
				items: [
					{
						title: "활성 제안서",
						url: "#",
					},
					{
						title: "보관됨",
						url: "#",
					},
				],
			},
			{
				title: "제안서",
				icon: FileDescriptionIcon,
				url: "#",
				items: [
					{
						title: "활성 제안서",
						url: "#",
					},
					{
						title: "보관됨",
						url: "#",
					},
				],
			},
			{
				title: "프롬프트",
				icon: FileAiIcon,
				url: "#",
				items: [
					{
						title: "활성 제안서",
						url: "#",
					},
					{
						title: "보관됨",
						url: "#",
					},
				],
			},
		],
		navSecondary: [
			{
				title: "설정",
				url: "#",
				icon: SettingsIcon,
			},
			{
				title: "도움말",
				url: "#",
				icon: HelpIcon,
			},
			{
				title: "검색",
				url: "#",
				icon: SearchIcon,
			},
		],
		documents: [
			{
				name: "데이터 라이브러리",
				url: "#",
				icon: DatabaseIcon,
			},
			{
				name: "보고서",
				url: "#",
				icon: ReportIcon,
			},
			{
				name: "문서 어시스턴트",
				url: "#",
				icon: FileWordIcon,
			},
		],
	};

	let { ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root collapsible="offcanvas" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton class="data-[slot=sidebar-menu-button]:!p-1.5">
					{#snippet child({ props })}
						<a href="##" {...props}>
							<InnerShadowTopIcon class="!size-5" />
							<span class="text-base font-semibold">Acme Inc.</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
		<NavDocuments items={data.documents} />
		<NavSecondary items={data.navSecondary} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
</Sidebar.Root>
