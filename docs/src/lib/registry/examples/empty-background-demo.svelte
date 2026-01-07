<script lang="ts">
	import * as Empty from "$lib/registry/ui/empty/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import BellIcon from "@tabler/icons-svelte/icons/bell";
	import RefreshCcwIcon from "@lucide/svelte/icons/refresh-ccw";
</script>

<Empty.Root class="from-muted/50 to-background h-full bg-gradient-to-b from-30%">
	<Empty.Header>
		<Empty.Media variant="icon">
			<BellIcon />
		</Empty.Media>
		<Empty.Title>알림이 없습니다</Empty.Title>
		<Empty.Description>
			모두 확인했습니다. 새 알림이 여기에 표시됩니다.
		</Empty.Description>
	</Empty.Header>
	<Empty.Content>
		<Button variant="outline" size="sm">
			<RefreshCcwIcon />
			새로고침
		</Button>
	</Empty.Content>
</Empty.Root>
