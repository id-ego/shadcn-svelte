<script lang="ts">
	import Bot from "@lucide/svelte/icons/bot";
	import ChevronDown from "@lucide/svelte/icons/chevron-down";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as ButtonGroup from "$lib/registry/ui/button-group/index.js";
	import * as Popover from "$lib/registry/ui/popover/index.js";
	import { Separator } from "$lib/registry/ui/separator/index.js";
	import { Textarea } from "$lib/registry/ui/textarea/index.js";
</script>

<ButtonGroup.Root>
	<Button variant="outline" size="sm">
		<Bot />
		Copilot
	</Button>
	<Popover.Root>
		<Popover.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline" size="icon-sm" aria-label="팝오버 열기">
					<ChevronDown />
				</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content align="end" class="rounded-xl p-0 text-sm">
			<div class="px-4 py-3">
				<div class="text-sm font-medium">에이전트 작업</div>
			</div>
			<Separator />
			<div class="p-4 text-sm *:[p:not(:last-child)]:mb-2">
				<Textarea
					placeholder="작업을 자연어로 설명하세요."
					class="mb-4 resize-none"
				/>
				<p class="font-medium">Copilot으로 새 작업 시작</p>
				<p class="text-muted-foreground">
					작업을 자연어로 설명하세요. Copilot이 백그라운드에서 작업하고
					검토를 위한 풀 리퀘스트를 열어줍니다.
				</p>
			</div>
		</Popover.Content>
	</Popover.Root>
</ButtonGroup.Root>
