<script lang="ts">
	import * as DropdownMenu from "$lib/registry/ui/dropdown-menu/index.js";
	import * as InputGroup from "$lib/registry/ui/input-group/index.js";
	import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
	import MoreHorizontalIcon from "@lucide/svelte/icons/more-horizontal";
</script>

<div class="grid w-full max-w-sm gap-4">
	<InputGroup.Root>
		<InputGroup.Input placeholder="파일명 입력" />
		<InputGroup.Addon align="inline-end">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<InputGroup.Button
							{...props}
							variant="ghost"
							aria-label="More"
							size="icon-xs"
						>
							<MoreHorizontalIcon />
						</InputGroup.Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Item>설정</DropdownMenu.Item>
					<DropdownMenu.Item>경로 복사</DropdownMenu.Item>
					<DropdownMenu.Item>위치 열기</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</InputGroup.Addon>
	</InputGroup.Root>
	<InputGroup.Root class="[--radius:1rem]">
		<InputGroup.Input placeholder="검색어 입력" />
		<InputGroup.Addon align="inline-end">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<InputGroup.Button {...props} variant="ghost" class="!pe-1.5 text-xs">
							검색 위치... <ChevronDownIcon class="size-3" />
						</InputGroup.Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end" class="[--radius:0.95rem]">
					<DropdownMenu.Item>문서</DropdownMenu.Item>
					<DropdownMenu.Item>블로그 포스트</DropdownMenu.Item>
					<DropdownMenu.Item>변경 로그</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</InputGroup.Addon>
	</InputGroup.Root>
</div>
