<script lang="ts">
	import { Badge } from "$lib/registry/ui/badge/index.js";
	import BadgeCheckIcon from "@lucide/svelte/icons/badge-check";
</script>

<div class="flex flex-col items-center gap-2">
	<div class="flex w-full flex-wrap gap-2">
		<Badge>배지</Badge>
		<Badge variant="secondary">보조</Badge>
		<Badge variant="destructive">위험</Badge>
		<Badge variant="outline">외곽선</Badge>
	</div>
	<div class="flex w-full flex-wrap gap-2">
		<Badge variant="secondary" class="bg-blue-500 text-white dark:bg-blue-600">
			<BadgeCheckIcon />
			인증됨
		</Badge>
		<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">8</Badge>
		<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="destructive">
			99
		</Badge>
		<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="outline">
			20+
		</Badge>
	</div>
</div>
