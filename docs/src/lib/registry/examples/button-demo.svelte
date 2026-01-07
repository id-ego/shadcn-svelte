<script lang="ts">
	import ArrowUpIcon from "@lucide/svelte/icons/arrow-up";
	import { Button } from "$lib/registry/ui/button/index.js";
</script>

<div class="flex flex-wrap items-center gap-2 md:flex-row">
	<Button variant="outline">버튼</Button>
	<Button variant="outline" size="icon" aria-label="제출">
		<ArrowUpIcon />
	</Button>
</div>
