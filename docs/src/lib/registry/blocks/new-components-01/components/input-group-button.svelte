<script lang="ts">
	import * as InputGroup from "$lib/registry/ui/input-group/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
	import * as Popover from "$lib/registry/ui/popover/index.js";
	import InfoIcon from "@lucide/svelte/icons/info";
	import StarIcon from "@lucide/svelte/icons/star";

	let isFavorite = $state(false);
</script>

<div class="grid w-full max-w-sm gap-6">
	<Label for="input-secure-19" class="sr-only">Input Secure</Label>
	<InputGroup.Root class="[--radius:9999px]">
		<InputGroup.Input id="input-secure-19" class="!ps-0.5" />
		<Popover.Root>
			<Popover.Trigger>
				{#snippet child({ props })}
					<InputGroup.Addon>
						<InputGroup.Button
							{...props}
							variant="secondary"
							size="icon-xs"
							aria-label="Info"
						>
							<InfoIcon />
						</InputGroup.Button>
					</InputGroup.Addon>
				{/snippet}
			</Popover.Trigger>
			<Popover.Content
				align="start"
				alignOffset={10}
				class="flex flex-col gap-1 rounded-xl text-sm"
			>
				<p class="font-medium">연결이 안전하지 않습니다.</p>
				<p>이 사이트에 민감한 정보를 입력하지 마세요.</p>
			</Popover.Content>
		</Popover.Root>
		<InputGroup.Addon class="text-muted-foreground !ps-1">https://</InputGroup.Addon>
		<InputGroup.Addon align="inline-end">
			<InputGroup.Button
				onclick={() => (isFavorite = !isFavorite)}
				size="icon-xs"
				aria-label="Favorite"
			>
				<StarIcon
					data-favorite={isFavorite}
					class="data-[favorite=true]:fill-primary data-[favorite=true]:stroke-primary"
				/>
			</InputGroup.Button>
		</InputGroup.Addon>
	</InputGroup.Root>
</div>
