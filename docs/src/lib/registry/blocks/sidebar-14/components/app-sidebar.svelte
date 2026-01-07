<script lang="ts">
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";

	// This is sample data.
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
						title: "지원되는 브라우저",
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

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref {...restProps}>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>목차</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each data.navMain as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton class="font-medium">
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										{item.title}
									</a>
								{/snippet}
							</Sidebar.MenuButton>
							{#if item.items?.length}
								<Sidebar.MenuSub>
									{#each item.items as subItem (subItem.title)}
										<Sidebar.MenuSubItem>
											<Sidebar.MenuSubButton
												href={subItem.url}
												isActive={subItem.isActive}
											>
												{subItem.title}
											</Sidebar.MenuSubButton>
										</Sidebar.MenuSubItem>
									{/each}
								</Sidebar.MenuSub>
							{/if}
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
