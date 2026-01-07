<script lang="ts">
	import AudioLines from "@lucide/svelte/icons/audio-lines";
	import Plus from "@lucide/svelte/icons/plus";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as ButtonGroup from "$lib/registry/ui/button-group/index.js";
	import * as InputGroup from "$lib/registry/ui/input-group/index.js";
	import * as Tooltip from "$lib/registry/ui/tooltip/index.js";

	let voiceEnabled = $state(false);
</script>

<ButtonGroup.Root class="[--radius:9999rem]">
	<ButtonGroup.Root>
		<Button variant="outline" size="icon">
			<Plus />
		</Button>
	</ButtonGroup.Root>
	<ButtonGroup.Root>
		<InputGroup.Root>
			<InputGroup.Input
				placeholder={voiceEnabled ? "오디오 녹음 및 전송..." : "메시지 보내기..."}
				disabled={voiceEnabled}
			/>
			<InputGroup.Addon align="inline-end">
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<InputGroup.Button
								{...props}
								onclick={() => (voiceEnabled = !voiceEnabled)}
								size="icon-xs"
								data-active={voiceEnabled}
								class="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
								aria-pressed={voiceEnabled}
							>
								<AudioLines />
							</InputGroup.Button>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content>음성 모드</Tooltip.Content>
				</Tooltip.Root>
			</InputGroup.Addon>
		</InputGroup.Root>
	</ButtonGroup.Root>
</ButtonGroup.Root>
