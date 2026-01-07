<script lang="ts" module>
	// This is sample data.
	const data = {
		user: {
			name: "shadcn",
			email: "m@example.com",
			avatar: "/avatars/shadcn.jpg",
		},
		calendars: [
			{
				name: "내 캘린더",
				items: ["개인", "업무", "가족"],
			},
			{
				name: "즐겨찾기",
				items: ["휴일", "생일"],
			},
			{
				name: "기타",
				items: ["여행", "알림", "마감일"],
			},
		],
	};
</script>

<script lang="ts">
	import Calendars from "./calendars.svelte";
	import DatePicker from "./date-picker.svelte";
	import NavUser from "./nav-user.svelte";
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
	import PlusIcon from "@lucide/svelte/icons/plus";
	import type { ComponentProps } from "svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref {...restProps}>
	<Sidebar.Header class="border-sidebar-border h-16 border-b">
		<NavUser user={data.user} />
	</Sidebar.Header>
	<Sidebar.Content>
		<DatePicker />
		<Sidebar.Separator class="mx-0" />
		<Calendars calendars={data.calendars} />
	</Sidebar.Content>
	<Sidebar.Footer>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton>
					<PlusIcon />
					<span>새 캘린더</span>
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
