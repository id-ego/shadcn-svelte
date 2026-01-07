<script lang="ts" module>
	// sample data
	const data = {
		versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
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
			{
				title: "커뮤니티",
				url: "#",
				items: [
					{
						title: "기여 가이드",
						url: "#",
					},
				],
			},
		],
	};
</script>

<script lang="ts">
	import SearchForm from "./search-form.svelte";
	import VersionSwitcher from "./version-switcher.svelte";
	import * as Collapsible from "$lib/registry/ui/collapsible/index.js";
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
	import type { ComponentProps } from "svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref {...restProps}>
	<Sidebar.Header>
		<VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
		<SearchForm />
	</Sidebar.Header>
	<Sidebar.Content class="gap-0">
		<!-- We create a collapsible SidebarGroup for each parent. -->
		{#each data.navMain as item (item.title)}
			<Collapsible.Root title={item.title} open class="group/collapsible">
				<Sidebar.Group>
					<Sidebar.GroupLabel
						class="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
					>
						{#snippet child({ props })}
							<Collapsible.Trigger {...props}>
								{item.title}
								<ChevronRightIcon
									class="ms-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
								/>
							</Collapsible.Trigger>
						{/snippet}
					</Sidebar.GroupLabel>
					<Collapsible.Content>
						<Sidebar.GroupContent>
							<Sidebar.Menu>
								{#each item.items as subItem (subItem.title)}
									<Sidebar.MenuItem>
										<Sidebar.MenuButton isActive={subItem.isActive}>
											{#snippet child({ props })}
												<a href={subItem.url} {...props}>{subItem.title}</a>
											{/snippet}
										</Sidebar.MenuButton>
									</Sidebar.MenuItem>
								{/each}
							</Sidebar.Menu>
						</Sidebar.GroupContent>
					</Collapsible.Content>
				</Sidebar.Group>
			</Collapsible.Root>
		{/each}
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
