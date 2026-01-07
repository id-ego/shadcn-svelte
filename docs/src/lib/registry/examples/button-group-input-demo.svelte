<script lang="ts">
	import Search from "@lucide/svelte/icons/search";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as ButtonGroup from "$lib/registry/ui/button-group/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
</script>

<ButtonGroup.Root>
	<Input placeholder="검색..." />
	<Button variant="outline" size="icon" aria-label="검색">
		<Search />
	</Button>
</ButtonGroup.Root>
