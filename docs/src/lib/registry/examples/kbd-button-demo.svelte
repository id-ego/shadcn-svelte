<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Kbd from "$lib/registry/ui/kbd/index.js";
</script>

<div class="flex flex-wrap items-center gap-4">
	<Button variant="outline" size="sm" class="pe-2">
		수락 <Kbd.Root>⏎</Kbd.Root>
	</Button>
	<Button variant="outline" size="sm" class="pe-2">
		취소 <Kbd.Root>Esc</Kbd.Root>
	</Button>
</div>
