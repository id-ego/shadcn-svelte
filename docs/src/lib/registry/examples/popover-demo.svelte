<script lang="ts">
	import { buttonVariants } from "$lib/registry/ui/button/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
	import * as Popover from "$lib/registry/ui/popover/index.js";
</script>

<Popover.Root>
	<Popover.Trigger class={buttonVariants({ variant: "outline" })}>팝오버 열기</Popover.Trigger>
	<Popover.Content class="w-80">
		<div class="grid gap-4">
			<div class="space-y-2">
				<h4 class="leading-none font-medium">크기</h4>
				<p class="text-muted-foreground text-sm">레이어의 크기를 설정합니다.</p>
			</div>
			<div class="grid gap-2">
				<div class="grid grid-cols-3 items-center gap-4">
					<Label for="width">너비</Label>
					<Input id="width" value="100%" class="col-span-2 h-8" />
				</div>
				<div class="grid grid-cols-3 items-center gap-4">
					<Label for="maxWidth">최대 너비</Label>
					<Input id="maxWidth" value="300px" class="col-span-2 h-8" />
				</div>
				<div class="grid grid-cols-3 items-center gap-4">
					<Label for="height">높이</Label>
					<Input id="height" value="25px" class="col-span-2 h-8" />
				</div>
				<div class="grid grid-cols-3 items-center gap-4">
					<Label for="maxHeight">최대 높이</Label>
					<Input id="maxHeight" value="none" class="col-span-2 h-8" />
				</div>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
