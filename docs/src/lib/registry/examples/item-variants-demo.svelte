<script lang="ts">
	import * as Item from "$lib/registry/ui/item/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
</script>

<div class="flex flex-col gap-6">
	<Item.Root>
		<Item.Content>
			<Item.Title>기본 변형</Item.Title>
			<Item.Description>
				은은한 배경과 테두리가 있는 표준 스타일입니다.
			</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm">열기</Button>
		</Item.Actions>
	</Item.Root>
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>아웃라인 변형</Item.Title>
			<Item.Description>
				명확한 테두리와 투명한 배경이 있는 아웃라인 스타일입니다.
			</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm">열기</Button>
		</Item.Actions>
	</Item.Root>
	<Item.Root variant="muted">
		<Item.Content>
			<Item.Title>뮤트 변형</Item.Title>
			<Item.Description>
				보조 콘텐츠를 위한 절제된 색상의 차분한 외관입니다.
			</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm">열기</Button>
		</Item.Actions>
	</Item.Root>
</div>
