<script lang="ts">
	import AlertTriangle from "@lucide/svelte/icons/alert-triangle";
	import ChevronDown from "@lucide/svelte/icons/chevron-down";
	import CopyIcon from "@tabler/icons-svelte/icons/copy";
	import CheckIcon from "@tabler/icons-svelte/icons/check";
	import Share from "@lucide/svelte/icons/share";
	import Trash from "@lucide/svelte/icons/trash";
	import UserRoundX from "@lucide/svelte/icons/user-round-x";
	import VolumeOff from "@lucide/svelte/icons/volume-off";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as ButtonGroup from "$lib/registry/ui/button-group/index.js";
	import * as DropdownMenu from "$lib/registry/ui/dropdown-menu/index.js";
</script>

<ButtonGroup.Root>
	<Button variant="outline">팔로우</Button>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline" class="!ps-2">
					<ChevronDown />
				</Button>
			{/snippet}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="end" class="[--radius:1rem]">
			<DropdownMenu.Group>
				<DropdownMenu.Item>
					<VolumeOff />
					대화 음소거
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					<CheckIcon />
					읽음으로 표시
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					<AlertTriangle />
					대화 신고
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					<UserRoundX />
					사용자 차단
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					<Share />
					대화 공유
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					<CopyIcon />
					대화 복사
				</DropdownMenu.Item>
			</DropdownMenu.Group>
			<DropdownMenu.Separator />
			<DropdownMenu.Group>
				<DropdownMenu.Item variant="destructive">
					<Trash />
					대화 삭제
				</DropdownMenu.Item>
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</ButtonGroup.Root>
