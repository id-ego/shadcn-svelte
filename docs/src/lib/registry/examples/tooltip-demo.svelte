<script lang="ts">
	import { buttonVariants } from "../ui/button/index.js";
	import * as Tooltip from "$lib/registry/ui/tooltip/index.js";
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger class={buttonVariants({ variant: "outline" })}>호버</Tooltip.Trigger>
		<Tooltip.Content>
			<p>라이브러리에 추가</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
