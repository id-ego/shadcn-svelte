<script lang="ts">
	import CircleAlertIcon from "@lucide/svelte/icons/circle-alert";
	import * as Alert from "$lib/registry/ui/alert/index.js";
</script>

<Alert.Root variant="destructive">
	<CircleAlertIcon class="size-4" />
	<Alert.Title>오류</Alert.Title>
	<Alert.Description>세션이 만료되었습니다. 다시 로그인해 주세요.</Alert.Description>
</Alert.Root>
