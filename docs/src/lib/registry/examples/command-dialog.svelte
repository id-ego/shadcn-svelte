<script lang="ts">
	import CalculatorIcon from "@lucide/svelte/icons/calculator";
	import CalendarIcon from "@lucide/svelte/icons/calendar";
	import CreditCardIcon from "@lucide/svelte/icons/credit-card";
	import SettingsIcon from "@lucide/svelte/icons/settings";
	import SmileIcon from "@lucide/svelte/icons/smile";
	import UserIcon from "@lucide/svelte/icons/user";
	import * as Command from "$lib/registry/ui/command/index.js";

	let open = $state(false);

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			open = !open;
		}
	}
</script>

<svelte:document onkeydown={handleKeydown} />

<p class="text-muted-foreground text-sm">
	<kbd
		class="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none"
	>
		<span class="text-xs">⌘</span>J
	</kbd>
	키를 누르세요
</p>
<Command.Dialog bind:open>
	<Command.Input placeholder="명령어 입력 또는 검색..." />
	<Command.List>
		<Command.Empty>결과를 찾을 수 없습니다.</Command.Empty>
		<Command.Group heading="제안">
			<Command.Item>
				<CalendarIcon class="me-2 size-4" />
				<span>캘린더</span>
			</Command.Item>
			<Command.Item>
				<SmileIcon class="me-2 size-4" />
				<span>이모지 검색</span>
			</Command.Item>
			<Command.Item>
				<CalculatorIcon class="me-2 size-4" />
				<span>계산기</span>
			</Command.Item>
		</Command.Group>
		<Command.Separator />
		<Command.Group heading="설정">
			<Command.Item>
				<UserIcon class="me-2 size-4" />
				<span>프로필</span>
				<Command.Shortcut>⌘P</Command.Shortcut>
			</Command.Item>
			<Command.Item>
				<CreditCardIcon class="me-2 size-4" />
				<span>결제</span>
				<Command.Shortcut>⌘B</Command.Shortcut>
			</Command.Item>
			<Command.Item>
				<SettingsIcon class="me-2 size-4" />
				<span>설정</span>
				<Command.Shortcut>⌘S</Command.Shortcut>
			</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Dialog>
