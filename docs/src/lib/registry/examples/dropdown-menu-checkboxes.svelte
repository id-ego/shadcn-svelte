<script lang="ts">
	import * as DropdownMenu from "$lib/registry/ui/dropdown-menu/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";

	let showStatusBar = $state(true);
	let showActivityBar = $state(false);
	let showPanel = $state(false);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">열기</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenu.Group>
			<DropdownMenu.Label>외관</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.CheckboxItem bind:checked={showStatusBar}>
				상태 표시줄
			</DropdownMenu.CheckboxItem>
			<DropdownMenu.CheckboxItem bind:checked={showActivityBar} disabled>
				활동 표시줄
			</DropdownMenu.CheckboxItem>
			<DropdownMenu.CheckboxItem bind:checked={showPanel}>패널</DropdownMenu.CheckboxItem>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
