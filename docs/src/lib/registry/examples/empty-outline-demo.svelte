<script lang="ts">
	import * as Empty from "$lib/registry/ui/empty/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import CloudIcon from "@tabler/icons-svelte/icons/cloud";
</script>

<Empty.Root class="border border-dashed">
	<Empty.Header>
		<Empty.Media variant="icon">
			<CloudIcon />
		</Empty.Media>
		<Empty.Title>클라우드 저장소가 비어 있습니다</Empty.Title>
		<Empty.Description>
			클라우드 저장소에 파일을 업로드하여 어디서나 액세스하세요.
		</Empty.Description>
	</Empty.Header>
	<Empty.Content>
		<Button variant="outline" size="sm">파일 업로드</Button>
	</Empty.Content>
</Empty.Root>
