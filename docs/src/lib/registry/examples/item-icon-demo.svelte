<script lang="ts">
	import * as Item from "$lib/registry/ui/item/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import ShieldAlertIcon from "@lucide/svelte/icons/shield-alert";
</script>

<div class="flex w-full max-w-lg flex-col gap-6">
	<Item.Root variant="outline">
		<Item.Media variant="icon">
			<ShieldAlertIcon />
		</Item.Media>
		<Item.Content>
			<Item.Title>보안 알림</Item.Title>
			<Item.Description>알 수 없는 기기에서 새로운 로그인이 감지되었습니다.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button size="sm" variant="outline">확인</Button>
		</Item.Actions>
	</Item.Root>
</div>
