<script lang="ts">
	import * as Empty from "$lib/registry/ui/empty/index.js";
	import { Spinner } from "$lib/registry/ui/spinner/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
</script>

<Empty.Root class="w-full border md:p-6">
	<Empty.Header>
		<Empty.Media variant="icon">
			<Spinner />
		</Empty.Media>
		<Empty.Title>요청 처리 중</Empty.Title>
		<Empty.Description>
			요청을 처리하는 동안 잠시 기다려주세요. 페이지를 새로고침하지 마세요.
		</Empty.Description>
	</Empty.Header>
	<Empty.Content>
		<Button variant="outline" size="sm">취소</Button>
	</Empty.Content>
</Empty.Root>
