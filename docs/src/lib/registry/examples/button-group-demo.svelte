<script lang="ts">
	import Archive from "@lucide/svelte/icons/archive";
	import ArrowLeft from "@lucide/svelte/icons/arrow-left";
	import CalendarPlus from "@lucide/svelte/icons/calendar-plus";
	import Clock from "@lucide/svelte/icons/clock";
	import ListFilter from "@lucide/svelte/icons/list-filter";
	import MailCheck from "@lucide/svelte/icons/mail-check";
	import MoreHorizontal from "@lucide/svelte/icons/more-horizontal";
	import Tag from "@lucide/svelte/icons/tag";
	import Trash2 from "@lucide/svelte/icons/trash-2";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as ButtonGroup from "$lib/registry/ui/button-group/index.js";
	import * as DropdownMenu from "$lib/registry/ui/dropdown-menu/index.js";

	let label = $state("personal");
</script>

<ButtonGroup.Root>
	<ButtonGroup.Root class="hidden sm:flex">
		<Button variant="outline" size="icon-sm" aria-label="뒤로 가기">
			<ArrowLeft />
		</Button>
	</ButtonGroup.Root>
	<ButtonGroup.Root>
		<Button size="sm" variant="outline">보관</Button>
		<Button size="sm" variant="outline">신고</Button>
	</ButtonGroup.Root>
	<ButtonGroup.Root>
		<Button size="sm" variant="outline">일시중지</Button>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="outline" size="icon-sm" aria-label="더 많은 옵션">
						<MoreHorizontal />
					</Button>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align="end" class="w-52">
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						<MailCheck />
						읽음으로 표시
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Archive />
						보관
					</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						<Clock />
						일시중지
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<CalendarPlus />
						캘린더에 추가
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<ListFilter />
						목록에 추가
					</DropdownMenu.Item>
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger>
							<Tag />
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
					<DropdownMenu.Item class="text-destructive focus:text-destructive">
						<Trash2 />
						휴지통
					</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</ButtonGroup.Root>
</ButtonGroup.Root>
