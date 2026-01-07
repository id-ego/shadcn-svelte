<script lang="ts">
	import * as Empty from "$lib/registry/ui/empty/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import FolderCodeIcon from "@tabler/icons-svelte/icons/folder-code";
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
</script>

<Empty.Root>
	<Empty.Header>
		<Empty.Media variant="icon">
			<FolderCodeIcon />
		</Empty.Media>
		<Empty.Title>프로젝트가 없습니다</Empty.Title>
		<Empty.Description>
			아직 프로젝트를 만들지 않았습니다. 첫 번째 프로젝트를 만들어 시작하세요.
		</Empty.Description>
	</Empty.Header>
	<Empty.Content>
		<div class="flex gap-2">
			<Button>프로젝트 만들기</Button>
			<Button variant="outline">프로젝트 가져오기</Button>
		</div>
	</Empty.Content>
	<Button variant="link" class="text-muted-foreground" size="sm">
		<a href="#/">
			더 알아보기 <ArrowUpRightIcon class="inline" />
		</a>
	</Button>
</Empty.Root>
