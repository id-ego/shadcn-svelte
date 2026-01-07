<script lang="ts">
	import CalculatorIcon from "@lucide/svelte/icons/calculator";
	import CalendarIcon from "@lucide/svelte/icons/calendar";
	import CreditCardIcon from "@lucide/svelte/icons/credit-card";
	import SettingsIcon from "@lucide/svelte/icons/settings";
	import SmileIcon from "@lucide/svelte/icons/smile";
	import UserIcon from "@lucide/svelte/icons/user";
	import * as Command from "$lib/registry/ui/command/index.js";
</script>

<Command.Root class="rounded-lg border shadow-md md:min-w-[450px]">
	<Command.Input placeholder="명령어 입력 또는 검색..." />
	<Command.List>
		<Command.Empty>결과를 찾을 수 없습니다.</Command.Empty>
		<Command.Group heading="제안">
			<Command.Item>
				<CalendarIcon />
				<span>캘린더</span>
			</Command.Item>
			<Command.Item>
				<SmileIcon />
				<span>이모지 검색</span>
			</Command.Item>
			<Command.Item disabled>
				<CalculatorIcon />
				<span>계산기</span>
			</Command.Item>
		</Command.Group>
		<Command.Separator />
		<Command.Group heading="설정">
			<Command.Item>
				<UserIcon />
				<span>프로필</span>
				<Command.Shortcut>⌘P</Command.Shortcut>
			</Command.Item>
			<Command.Item>
				<CreditCardIcon />
				<span>결제</span>
				<Command.Shortcut>⌘B</Command.Shortcut>
			</Command.Item>
			<Command.Item>
				<SettingsIcon />
				<span>설정</span>
				<Command.Shortcut>⌘S</Command.Shortcut>
			</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Root>
