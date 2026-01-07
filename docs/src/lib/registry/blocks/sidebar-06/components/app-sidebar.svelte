<script lang="ts" module>
	// sample data
	const data = {
		navMain: [
			{
				title: "시작하기",
				url: "#",
				items: [
					{
						title: "설치",
						url: "#",
					},
					{
						title: "프로젝트 구조",
						url: "#",
					},
				],
			},
			{
				title: "애플리케이션 구축",
				url: "#",
				items: [
					{
						title: "라우팅",
						url: "#",
					},
					{
						title: "데이터 페칭",
						url: "#",
						isActive: true,
					},
					{
						title: "렌더링",
						url: "#",
					},
					{
						title: "캐싱",
						url: "#",
					},
					{
						title: "스타일링",
						url: "#",
					},
					{
						title: "최적화",
						url: "#",
					},
					{
						title: "설정",
						url: "#",
					},
					{
						title: "테스트",
						url: "#",
					},
					{
						title: "인증",
						url: "#",
					},
					{
						title: "배포",
						url: "#",
					},
					{
						title: "업그레이드",
						url: "#",
					},
					{
						title: "예제",
						url: "#",
					},
				],
			},
			{
				title: "API 레퍼런스",
				url: "#",
				items: [
					{
						title: "컴포넌트",
						url: "#",
					},
					{
						title: "파일 규칙",
						url: "#",
					},
					{
						title: "함수",
						url: "#",
					},
					{
						title: "next.config.js 옵션",
						url: "#",
					},
					{
						title: "CLI",
						url: "#",
					},
					{
						title: "엣지 런타임",
						url: "#",
					},
				],
			},
			{
				title: "아키텍처",
				url: "#",
				items: [
					{
						title: "접근성",
						url: "#",
					},
					{
						title: "빠른 새로고침",
						url: "#",
					},
					{
						title: "Next.js 컴파일러",
						url: "#",
					},
					{
						title: "지원 브라우저",
						url: "#",
					},
					{
						title: "Turbopack",
						url: "#",
					},
				],
			},
		],
	};
</script>

<script lang="ts">
	import NavMain from "./nav-main.svelte";
	import SidebarOptInForm from "./sidebar-opt-in-form.svelte";
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
	import GalleryVerticalEndIcon from "@lucide/svelte/icons/gallery-vertical-end";
	import type { ComponentProps } from "svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="##" {...props}>
							<div
								class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
							>
								<GalleryVerticalEndIcon class="size-4" />
							</div>
							<div class="flex flex-col gap-0.5 leading-none">
								<span class="font-medium">문서</span>
								<span class="">v1.0.0</span>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
	</Sidebar.Content>
	<Sidebar.Footer>
		<div class="p-1">
			<SidebarOptInForm />
		</div>
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
