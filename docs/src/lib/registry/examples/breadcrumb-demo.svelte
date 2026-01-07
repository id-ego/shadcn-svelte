<script lang="ts">
	import * as Breadcrumb from "$lib/registry/ui/breadcrumb/index.js";
	import * as DropdownMenu from "$lib/registry/ui/dropdown-menu/index.js";
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/">홈</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="flex items-center gap-1">
					<Breadcrumb.Ellipsis class="size-4" />
					<span class="sr-only">메뉴 토글</span>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="start">
					<DropdownMenu.Item>문서</DropdownMenu.Item>
					<DropdownMenu.Item>테마</DropdownMenu.Item>
					<DropdownMenu.Item>GitHub</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/docs/components">컴포넌트</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>
