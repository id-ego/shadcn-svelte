<script lang="ts">
	import Announcement from "$lib/components/announcement.svelte";
	import PageActions from "$lib/components/page-header/page-actions.svelte";
	import PageHeaderDescription from "$lib/components/page-header/page-header-description.svelte";
	import PageHeaderHeading from "$lib/components/page-header/page-header-heading.svelte";
	import PageHeader from "$lib/components/page-header/page-header.svelte";
	import { Button } from "$lib/registry/ui/button/index.js";
	import PageNav from "$lib/components/page-nav.svelte";
	import ChartsNav from "$lib/components/charts-nav.svelte";
	import ThemeSelector from "$lib/components/theme-selector.svelte";
	import Metadata from "$lib/components/metadata.svelte";

	let { children } = $props();
	const title = "아름다운 차트와 그래프";
	const description =
		"LayerChart로 구축된 바로 사용 가능한 차트 컴포넌트 모음. 기본 차트부터 풍부한 데이터 시각화까지, 복사해서 앱에 붙여넣기만 하면 됩니다.";
</script>

<Metadata
	{title}
	{description}
	ogImage={{
		url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
	}}
/>

<PageHeader>
	<Announcement />
	<PageHeaderHeading>{title}</PageHeaderHeading>
	<PageHeaderDescription>{description}</PageHeaderDescription>
	<PageActions>
		<Button href="#charts" size="sm">차트 둘러보기</Button>
		<Button href="/docs/components/chart" variant="ghost" size="sm">문서</Button>
	</PageActions>
</PageHeader>
<PageNav id="charts">
	<ChartsNav />
	<ThemeSelector class="me-4 hidden md:flex" />
</PageNav>
<div class="container-wrapper section-soft flex-1">
	<div class="container pb-6">
		<section class="theme-container">{@render children?.()}</section>
	</div>
</div>
