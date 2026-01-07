<script lang="ts" module>
	import ArrowDownIcon from "@lucide/svelte/icons/arrow-down";
	import ArrowUpIcon from "@lucide/svelte/icons/arrow-up";
	import BellIcon from "@lucide/svelte/icons/bell";
	import ChartLineIcon from "@lucide/svelte/icons/chart-line";
	import CopyIcon from "@lucide/svelte/icons/copy";
	import CornerUpLeftIcon from "@lucide/svelte/icons/corner-up-left";
	import CornerUpRightIcon from "@lucide/svelte/icons/corner-up-right";
	import FileTextIcon from "@lucide/svelte/icons/file-text";
	import GalleryVerticalEndIcon from "@lucide/svelte/icons/gallery-vertical-end";
	import LinkIcon from "@lucide/svelte/icons/link";
	import Settings2Icon from "@lucide/svelte/icons/settings-2";
	import TrashIcon from "@lucide/svelte/icons/trash";
	import Trash2Icon from "@lucide/svelte/icons/trash-2";

	const data = [
		[
			{
				label: "페이지 사용자 지정",
				icon: Settings2Icon,
			},
			{
				label: "위키로 전환",
				icon: FileTextIcon,
			},
		],
		[
			{
				label: "링크 복사",
				icon: LinkIcon,
			},
			{
				label: "복제",
				icon: CopyIcon,
			},
			{
				label: "이동",
				icon: CornerUpRightIcon,
			},
			{
				label: "휴지통으로 이동",
				icon: Trash2Icon,
			},
		],
		[
			{
				label: "실행 취소",
				icon: CornerUpLeftIcon,
			},
			{
				label: "분석 보기",
				icon: ChartLineIcon,
			},
			{
				label: "버전 기록",
				icon: GalleryVerticalEndIcon,
			},
			{
				label: "삭제된 페이지 표시",
				icon: TrashIcon,
			},
			{
				label: "알림",
				icon: BellIcon,
			},
		],
		[
			{
				label: "가져오기",
				icon: ArrowUpIcon,
			},
			{
				label: "내보내기",
				icon: ArrowDownIcon,
			},
		],
	];
</script>

<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Popover from "$lib/registry/ui/popover/index.js";
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
	import EllipsisIcon from "@lucide/svelte/icons/ellipsis";
	import StarIcon from "@lucide/svelte/icons/star";
	import { untrack } from "svelte";

	let open = $state(false);

	$effect(() => {
		untrack(() => {
			open = true;
		});
	});
</script>

<div class="flex items-center gap-2 text-sm">
	<div class="text-muted-foreground hidden font-medium md:inline-block">10월 08일 편집</div>
	<Button variant="ghost" size="icon" class="size-7">
		<StarIcon />
	</Button>
	<Popover.Root bind:open>
		<Popover.Trigger>
			{#snippet child({ props })}
				<Button
					{...props}
					variant="ghost"
					size="icon"
					class="data-[state=open]:bg-accent size-7"
				>
					<EllipsisIcon />
				</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content class="w-56 overflow-hidden rounded-lg p-0" align="end">
			<Sidebar.Root collapsible="none" class="bg-transparent">
				<Sidebar.Content>
					{#each data as group, index (index)}
						<Sidebar.Group class="border-b last:border-none">
							<Sidebar.GroupContent class="gap-0">
								<Sidebar.Menu>
									{#each group as item, index (index)}
										<Sidebar.MenuItem>
											<Sidebar.MenuButton
												class="hover:bg-accent hover:text-accent-foreground"
											>
												<item.icon /> <span>{item.label}</span>
											</Sidebar.MenuButton>
										</Sidebar.MenuItem>
									{/each}
								</Sidebar.Menu>
							</Sidebar.GroupContent>
						</Sidebar.Group>
					{/each}
				</Sidebar.Content>
			</Sidebar.Root>
		</Popover.Content>
	</Popover.Root>
</div>
