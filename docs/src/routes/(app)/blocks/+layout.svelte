<script lang="ts">
	import Announcement from "$lib/components/announcement.svelte";
	import { Button } from "$lib/registry/ui/button/index.js";

	import BlocksNav from "$lib/components/blocks-nav.svelte";
	import PageHeader from "$lib/components/page-header/page-header.svelte";
	import PageHeaderHeading from "$lib/components/page-header/page-header-heading.svelte";
	import PageHeaderDescription from "$lib/components/page-header/page-header-description.svelte";
	import PageActions from "$lib/components/page-header/page-actions.svelte";
	import PageNav from "$lib/components/page-nav.svelte";
	import Metadata from "$lib/components/metadata.svelte";

	let { children } = $props();

	const title = "웹을 위한 빌딩 블록";
	const description =
		"깔끔하고 현대적인 빌딩 블록. 모든 Svelte 프로젝트에서 사용 가능. 복사해서 앱에 붙여넣기만 하면 됩니다. 오픈 소스. 영원히 무료.";
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
		<Button href="#blocks" size="sm">블록 둘러보기</Button>
		<!-- <Button href="/docs/blocks" variant="ghost" size="sm">Add a block</Button> -->
	</PageActions>
</PageHeader>
<PageNav>
	<BlocksNav />
	<Button
		size="sm"
		variant="secondary"
		href="/blocks/sidebar"
		class="me-7 hidden shadow-none lg:flex"
	>
		모든 블록 보기
	</Button>
</PageNav>
<div class="container-wrapper section-soft flex-1 md:py-12">
	<div class="container">{@render children?.()}</div>
</div>
