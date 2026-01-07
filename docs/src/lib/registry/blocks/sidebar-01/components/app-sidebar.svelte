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
						title: "Svelte 컴파일러",
						url: "#",
					},
					{
						title: "지원 브라우저",
						url: "#",
					},
					{
						title: "Rollup",
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
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {...restProps} bind:ref>
	<Sidebar.Header>
		<VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
		<SearchForm />
	</Sidebar.Header>
	<Sidebar.Content>
		<!-- We create a Sidebar.Group for each parent. -->
		{#each data.navMain as group (group.title)}
			<Sidebar.Group>
				<Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each group.items as item (item.title)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton isActive={item.isActive}>
									{#snippet child({ props })}
										<a href={item.url} {...props}>{item.title}</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
