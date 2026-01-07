<script lang="ts">
	import ArchiveIcon from "@lucide/svelte/icons/archive";
	import ArrowLeftIcon from "@lucide/svelte/icons/arrow-left";
	import CalendarPlusIcon from "@lucide/svelte/icons/calendar-plus";
	import ClockIcon from "@lucide/svelte/icons/clock";
	import ListFilterIcon from "@lucide/svelte/icons/list-filter";
	import MailCheckIcon from "@lucide/svelte/icons/mail-check";
	import MoreHorizontalIcon from "@lucide/svelte/icons/more-horizontal";
	import TagIcon from "@lucide/svelte/icons/tag";
	import Trash2Icon from "@lucide/svelte/icons/trash-2";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as ButtonGroup from "$lib/registry/ui/button-group/index.js";
	import * as DropdownMenu from "$lib/registry/ui/dropdown-menu/index.js";

	let label = $state("personal");
</script>

<ButtonGroup.Root>
	<ButtonGroup.Root class="hidden sm:flex">
		<Button variant="outline" size="icon" aria-label="뒤로 가기">
			<ArrowLeftIcon />
		</Button>
	</ButtonGroup.Root>
	<ButtonGroup.Root>
		<Button variant="outline">보관</Button>
	</ButtonGroup.Root>
	<ButtonGroup.Root>
		<Button variant="outline">다시 알림</Button>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Button variant="outline" size="icon" aria-label="더 많은 옵션" {...props}>
						<MoreHorizontalIcon />
					</Button>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align="end" class="w-52">
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						<MailCheckIcon />
						읽음으로 표시
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<ArchiveIcon />
						보관
					</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						<ClockIcon />
						다시 알림
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<CalendarPlusIcon />
						캘린더에 추가
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<ListFilterIcon />
						목록에 추가
					</DropdownMenu.Item>
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger>
							<TagIcon />
							라벨 지정...
						</DropdownMenu.SubTrigger>
						<DropdownMenu.SubContent>
							<DropdownMenu.RadioGroup bind:value={label}>
								<DropdownMenu.RadioItem value="personal">
									개인
								</DropdownMenu.RadioItem>
								<DropdownMenu.RadioItem value="work">업무</DropdownMenu.RadioItem>
								<DropdownMenu.RadioItem value="other">기타</DropdownMenu.RadioItem>
							</DropdownMenu.RadioGroup>
						</DropdownMenu.SubContent>
					</DropdownMenu.Sub>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.Item variant="destructive">
						<Trash2Icon />
						휴지통
					</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</ButtonGroup.Root>
</ButtonGroup.Root>
