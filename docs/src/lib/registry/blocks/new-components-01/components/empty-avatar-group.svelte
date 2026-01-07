<script lang="ts">
	import * as Empty from "$lib/registry/ui/empty/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Avatar from "$lib/registry/ui/avatar/index.js";
	import PlusIcon from "@lucide/svelte/icons/plus";
</script>

<Empty.Root>
	<Empty.Header>
		<Empty.Media>
			<div class="*:ring-background flex -space-x-2 *:size-12 *:ring-2 *:grayscale">
				<Avatar.Root>
					<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>
				<Avatar.Root>
					<Avatar.Image src="https://github.com/maxleiter.png" alt="@maxleiter" />
					<Avatar.Fallback>LR</Avatar.Fallback>
				</Avatar.Root>
				<Avatar.Root>
					<Avatar.Image src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
					<Avatar.Fallback>ER</Avatar.Fallback>
				</Avatar.Root>
			</div>
		</Empty.Media>
		<Empty.Title>팀 멤버가 없습니다</Empty.Title>
		<Empty.Description>이 프로젝트에 함께 작업할 팀을 초대하세요.</Empty.Description>
	</Empty.Header>
	<Empty.Content>
		<Button size="sm">
			<PlusIcon />
			멤버 초대
		</Button>
	</Empty.Content>
</Empty.Root>
