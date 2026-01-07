<script lang="ts">
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
	import { Button } from "$lib/registry/ui/button/index.js";
</script>

<div class="flex flex-col items-start gap-8 sm:flex-row">
	<div class="flex items-start gap-2">
		<Button size="sm" variant="outline">작게</Button>
		<Button size="icon-sm" aria-label="제출" variant="outline">
			<ArrowUpRightIcon />
		</Button>
	</div>
	<div class="flex items-start gap-2">
		<Button variant="outline">기본</Button>
		<Button size="icon" aria-label="제출" variant="outline">
			<ArrowUpRightIcon />
		</Button>
	</div>
	<div class="flex items-start gap-2">
		<Button variant="outline" size="lg">크게</Button>
		<Button size="icon-lg" aria-label="제출" variant="outline">
			<ArrowUpRightIcon />
		</Button>
	</div>
</div>
