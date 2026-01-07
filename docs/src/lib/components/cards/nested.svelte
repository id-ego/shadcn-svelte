<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as ButtonGroup from "$lib/registry/ui/button-group/index.js";
	import ArrowLeft from "@lucide/svelte/icons/arrow-left";
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
</script>

<ButtonGroup.Root>
	<ButtonGroup.Root>
		<Button variant="outline" size="sm">1</Button>
		<Button variant="outline" size="sm">2</Button>
		<Button variant="outline" size="sm">3</Button>
	</ButtonGroup.Root>
	<ButtonGroup.Root>
		<Button variant="outline" size="icon-sm" aria-label="이전">
			<ArrowLeft />
		</Button>
		<Button variant="outline" size="icon-sm" aria-label="다음">
			<ArrowRight />
		</Button>
	</ButtonGroup.Root>
</ButtonGroup.Root>
