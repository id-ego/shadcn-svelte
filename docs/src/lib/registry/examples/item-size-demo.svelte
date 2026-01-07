<script lang="ts">
	import * as Item from "$lib/registry/ui/item/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import BadgeCheckIcon from "@lucide/svelte/icons/badge-check";
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
</script>

<div class="flex w-full max-w-md flex-col gap-6">
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>기본 아이템</Item.Title>
			<Item.Description>제목과 설명이 있는 간단한 아이템입니다.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm">작업</Button>
		</Item.Actions>
	</Item.Root>
	<Item.Root variant="outline" size="sm">
		{#snippet child({ props })}
			<a href="#/" {...props}>
				<Item.Media>
					<BadgeCheckIcon class="size-5" />
				</Item.Media>
				<Item.Content>
					<Item.Title>프로필이 인증되었습니다.</Item.Title>
				</Item.Content>
				<Item.Actions>
					<ChevronRightIcon class="size-4" />
				</Item.Actions>
			</a>
		{/snippet}
	</Item.Root>
</div>
