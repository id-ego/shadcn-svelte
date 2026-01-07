<script lang="ts">
	import * as Empty from "$lib/registry/ui/empty/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Avatar from "$lib/registry/ui/avatar/index.js";
</script>

<Empty.Root>
	<Empty.Header>
		<Empty.Media variant="default">
			<Avatar.Root class="size-12">
				<Avatar.Image src="https://github.com/shadcn.png" class="grayscale" />
				<Avatar.Fallback>LR</Avatar.Fallback>
			</Avatar.Root>
		</Empty.Media>
		<Empty.Title>사용자가 오프라인입니다</Empty.Title>
		<Empty.Description>
			이 사용자는 현재 오프라인 상태입니다. 메시지를 남겨 알리거나 나중에 다시 시도하세요.
		</Empty.Description>
	</Empty.Header>
	<Empty.Content>
		<Button size="sm">메시지 남기기</Button>
	</Empty.Content>
</Empty.Root>
