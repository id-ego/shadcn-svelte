<script lang="ts">
	import * as Item from "$lib/registry/ui/item/index.js";
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
	import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
</script>

<div class="flex w-full max-w-md flex-col gap-4">
	<Item.Root>
		{#snippet child({ props })}
			<a href="#/" {...props}>
				<Item.Content>
					<Item.Title>문서 방문하기</Item.Title>
					<Item.Description>
						컴포넌트 시작 방법을 알아보세요.
					</Item.Description>
				</Item.Content>
				<Item.Actions>
					<ChevronRightIcon class="size-4" />
				</Item.Actions>
			</a>
		{/snippet}
	</Item.Root>
	<Item.Root variant="outline">
		{#snippet child({ props })}
			<a href="#/" target="_blank" rel="noopener noreferrer" {...props}>
				<Item.Content>
					<Item.Title>외부 리소스</Item.Title>
					<Item.Description>
						보안 속성과 함께 새 탭에서 열립니다.
					</Item.Description>
				</Item.Content>
				<Item.Actions>
					<ExternalLinkIcon class="size-4" />
				</Item.Actions>
			</a>
		{/snippet}
	</Item.Root>
</div>
