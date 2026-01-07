<script lang="ts">
	import * as NavigationMenu from "$lib/registry/ui/navigation-menu/index.js";
	import { cn } from "$lib/utils.js";
	import { navigationMenuTriggerStyle } from "$lib/registry/ui/navigation-menu/navigation-menu-trigger.svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import CircleHelpIcon from "@lucide/svelte/icons/circle-help";
	import CircleIcon from "@lucide/svelte/icons/circle";
	import CircleCheckIcon from "@lucide/svelte/icons/circle-check";

	import { IsMobile } from "$lib/registry/hooks/is-mobile.svelte.js";

	const isMobile = new IsMobile();

	const components: { title: string; href: string; description: string }[] = [
		{
			title: "Alert Dialog",
			href: "/docs/components/alert-dialog",
			description:
				"중요한 콘텐츠로 사용자를 중단시키고 응답을 기대하는 모달 다이얼로그입니다.",
		},
		{
			title: "Hover Card",
			href: "/docs/components/hover-card",
			description: "링크 뒤의 콘텐츠를 미리보기 위한 컴포넌트입니다.",
		},
		{
			title: "Progress",
			href: "/docs/components/progress",
			description:
				"작업의 완료 진행 상황을 나타내는 표시기로, 일반적으로 진행률 표시줄로 표시됩니다.",
		},
		{
			title: "Scroll-area",
			href: "/docs/components/scroll-area",
			description: "콘텐츠를 시각적 또는 의미론적으로 구분합니다.",
		},
		{
			title: "Tabs",
			href: "/docs/components/tabs",
			description:
				"탭 패널로 알려진 계층화된 콘텐츠 섹션의 집합으로, 한 번에 하나씩 표시됩니다.",
		},
		{
			title: "Tooltip",
			href: "/docs/components/tooltip",
			description:
				"요소가 키보드 포커스를 받거나 마우스가 요소 위로 올라갈 때 관련 정보를 표시하는 팝업입니다.",
		},
	];

	type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
		title: string;
		href: string;
		content: string;
	};
</script>

{#snippet ListItem({ title, content, href, class: className, ...restProps }: ListItemProps)}
	<li>
		<NavigationMenu.Link>
			{#snippet child()}
				<a
					{href}
					class={cn(
						"hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
						className
					)}
					{...restProps}
				>
					<div class="text-sm leading-none font-medium">{title}</div>
					<p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{content}
					</p>
				</a>
			{/snippet}
		</NavigationMenu.Link>
	</li>
{/snippet}

<NavigationMenu.Root viewport={isMobile.current}>
	<NavigationMenu.List class="flex-wrap">
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>홈</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
					<li class="row-span-3">
						<NavigationMenu.Link
							class="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden select-none focus:shadow-md md:p-6"
						>
							{#snippet child({ props })}
								<a {...props} href="/">
									<div class="mt-4 mb-2 text-lg font-medium">shadcn-svelte</div>
									<p class="text-muted-foreground text-sm leading-tight">
										Tailwind CSS로 구축된 아름답게 디자인된 컴포넌트.
									</p>
								</a>
							{/snippet}
						</NavigationMenu.Link>
					</li>
					{@render ListItem({
						href: "/docs",
						title: "소개",
						content: "Bits UI와 Tailwind CSS를 사용하여 구축된 재사용 가능한 컴포넌트.",
					})}
					{@render ListItem({
						href: "/docs/installation",
						title: "설치",
						content: "의존성을 설치하고 앱을 구조화하는 방법.",
					})}
					{@render ListItem({
						href: "/docs/components/typography",
						title: "타이포그래피",
						content: "제목, 단락, 목록 등을 위한 스타일",
					})}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>컴포넌트</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul
					class="grid w-[300px] gap-2 p-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]"
				>
					{#each components as component, i (i)}
						{@render ListItem({
							href: component.href,
							title: component.title,
							content: component.description,
						})}
					{/each}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>

		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a href="/docs" class={navigationMenuTriggerStyle()}>문서</a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item class="hidden md:block">
			<NavigationMenu.Trigger>목록</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[300px] gap-4 p-2">
					<li>
						<NavigationMenu.Link href="##">
							<div class="font-medium">컴포넌트</div>
							<div class="text-muted-foreground">
								라이브러리의 모든 컴포넌트를 둘러보세요.
							</div>
						</NavigationMenu.Link>
						<NavigationMenu.Link href="##">
							<div class="font-medium">문서</div>
							<div class="text-muted-foreground">라이브러리 사용 방법을 배워보세요.</div>
						</NavigationMenu.Link>
						<NavigationMenu.Link href="##">
							<div class="font-medium">블로그</div>
							<div class="text-muted-foreground">최신 블로그 포스트를 읽어보세요.</div>
						</NavigationMenu.Link>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item class="hidden md:block">
			<NavigationMenu.Trigger>간단한 예제</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[200px] gap-4 p-2">
					<li>
						<NavigationMenu.Link href="##">컴포넌트</NavigationMenu.Link>
						<NavigationMenu.Link href="##">문서</NavigationMenu.Link>
						<NavigationMenu.Link href="##">블록</NavigationMenu.Link>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item class="hidden md:block">
			<NavigationMenu.Trigger>아이콘 예제</NavigationMenu.Trigger>

			<NavigationMenu.Content>
				<ul class="grid w-[200px] gap-4 p-2">
					<li>
						<NavigationMenu.Link href="##" class="flex-row items-center gap-2">
							<CircleHelpIcon />
							백로그
						</NavigationMenu.Link>

						<NavigationMenu.Link href="##" class="flex-row items-center gap-2">
							<CircleIcon />
							할 일
						</NavigationMenu.Link>

						<NavigationMenu.Link href="##" class="flex-row items-center gap-2">
							<CircleCheckIcon />
							완료
						</NavigationMenu.Link>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
