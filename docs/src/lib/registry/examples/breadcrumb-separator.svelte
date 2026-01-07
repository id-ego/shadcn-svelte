<script lang="ts">
	import SlashIcon from "@lucide/svelte/icons/slash";
	import * as Breadcrumb from "$lib/registry/ui/breadcrumb/index.js";
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/">홈</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator>
			<SlashIcon />
		</Breadcrumb.Separator>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/components">컴포넌트</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator>
			<SlashIcon />
		</Breadcrumb.Separator>
		<Breadcrumb.Item>
			<Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>
