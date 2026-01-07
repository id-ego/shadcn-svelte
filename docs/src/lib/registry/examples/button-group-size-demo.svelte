<script lang="ts">
	import Plus from "@lucide/svelte/icons/plus";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as ButtonGroup from "$lib/registry/ui/button-group/index.js";
</script>

<div class="flex flex-col items-start gap-8">
	<ButtonGroup.Root>
		<Button variant="outline" size="sm">작은</Button>
		<Button variant="outline" size="sm">버튼</Button>
		<Button variant="outline" size="sm">그룹</Button>
		<Button variant="outline" size="icon-sm">
			<Plus />
		</Button>
	</ButtonGroup.Root>
	<ButtonGroup.Root>
		<Button variant="outline">기본</Button>
		<Button variant="outline">버튼</Button>
		<Button variant="outline">그룹</Button>
		<Button variant="outline" size="icon">
			<Plus />
		</Button>
	</ButtonGroup.Root>
	<ButtonGroup.Root>
		<Button variant="outline" size="lg">큰</Button>
		<Button variant="outline" size="lg">버튼</Button>
		<Button variant="outline" size="lg">그룹</Button>
		<Button variant="outline" size="icon-lg">
			<Plus />
		</Button>
	</ButtonGroup.Root>
</div>
