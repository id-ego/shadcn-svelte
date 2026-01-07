<script lang="ts">
	import Announcement from "$lib/components/announcement.svelte";
	import Metadata from "$lib/components/metadata.svelte";
	import PageActions from "$lib/components/page-header/page-actions.svelte";
	import PageHeaderDescription from "$lib/components/page-header/page-header-description.svelte";
	import PageHeaderHeading from "$lib/components/page-header/page-header-heading.svelte";
	import PageHeader from "$lib/components/page-header/page-header.svelte";
	import { Button } from "$lib/registry/ui/button/index.js";

	let { children } = $props();

	const title = "색상을 선택하세요. 나만의 것으로 만드세요.";
	const description =
		"엄선된 테마를 사용해 보세요. 복사해서 프로젝트에 붙여넣기만 하면 됩니다. 새로운 테마 에디터가 곧 출시됩니다.";
</script>

<Metadata
	{title}
	{description}
	ogImage={{
		url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
	}}
/>

<div>
	<PageHeader>
		<Announcement />
		<PageHeaderHeading>{title}</PageHeaderHeading>
		<PageHeaderDescription>{description}</PageHeaderDescription>
		<PageActions>
			<Button href="#themes" size="sm">테마 둘러보기</Button>
			<Button href="/docs/theming" variant="ghost" size="sm">문서</Button>
		</PageActions>
	</PageHeader>
	{@render children()}
</div>
