<svelte:options runes />

<script lang="ts">
	import Announcement from "$lib/components/announcement.svelte";
	import ExamplesNav from "$lib/components/examples-nav.svelte";
	import PageActions from "$lib/components/page-header/page-actions.svelte";
	import PageHeaderDescription from "$lib/components/page-header/page-header-description.svelte";
	import PageHeaderHeading from "$lib/components/page-header/page-header-heading.svelte";
	import PageHeader from "$lib/components/page-header/page-header.svelte";
	import PageNav from "$lib/components/page-nav.svelte";
	import ThemeSelector from "$lib/components/theme-selector.svelte";
	import Button from "$lib/registry/ui/button/button.svelte";
	import RootComponents from "$lib/components/cards/root-components.svelte";
	import Metadata from "$lib/components/metadata.svelte";
	import { IsMobile } from "$lib/registry/hooks/is-mobile.svelte.js";

	const title = "디자인 시스템의 기초";
	const description =
		"아름답게 디자인된 컴포넌트를 커스터마이징하고, 확장하고, 빌드할 수 있습니다. 여기서 시작해서 나만의 것으로 만들어보세요. 오픈 소스. 오픈 코드.";

	const mobile = new IsMobile();
</script>

<Metadata {title} {description} />

<div class="flex flex-1 flex-col">
	<PageHeader>
		<Announcement />
		<PageHeaderHeading class="max-w-4xl">{title}</PageHeaderHeading>
		<PageHeaderDescription>{description}</PageHeaderDescription>
		<PageActions>
			<Button href="/docs/installation" size="sm">시작하기</Button>
			<Button href="/docs/components" size="sm" variant="ghost">컴포넌트 보기</Button>
		</PageActions>
	</PageHeader>
	{#if !mobile.current}
		<PageNav class="hidden md:flex">
			<ExamplesNav class="[&>a:first-child]:text-primary flex-1 overflow-hidden" />
			<ThemeSelector class="me-4 hidden md:flex" />
		</PageNav>
	{/if}
	<div class="container-wrapper section-soft flex-1 pb-6">
		<div class="container overflow-hidden">
			<section
				class="border-border/50 -mx-4 w-[160vw] overflow-hidden rounded-lg border md:hidden md:w-[150vw]"
			>
				<enhanced:img
					class="block dark:hidden"
					src="../../../static/img/registry/dashboard-01-light.png"
					alt="Dashboard"
					fetchpriority={mobile.current ? "high" : undefined}
					loading={mobile.current ? "eager" : "lazy"}
				/>
				<enhanced:img
					class="hidden dark:block"
					src="../../../static/img/registry/dashboard-01-dark.png"
					alt="Dashboard"
					fetchpriority="high"
					loading={mobile.current ? "eager" : "lazy"}
				/>
			</section>
			{#if !mobile.current}
				<section class="theme-container hidden md:block">
					<RootComponents />
				</section>
			{/if}
		</div>
	</div>
</div>
