<script lang="ts">
	import BadgeCheckIcon from "@lucide/svelte/icons/badge-check";
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Item from "$lib/registry/ui/item/index.js";
</script>

<div class="flex w-full max-w-md flex-col gap-6">
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>2단계 인증</Item.Title>
			<Item.Description class="text-pretty xl:hidden 2xl:block">
				이메일 또는 전화번호로 인증합니다.
			</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button size="sm">활성화</Button>
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
