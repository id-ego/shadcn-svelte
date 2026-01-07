<script lang="ts">
	import { Badge } from "$lib/registry/ui/badge/index.js";
	import { Spinner } from "$lib/registry/ui/spinner/index.js";
</script>

<div class="flex items-center gap-4 [--radius:1.2rem]">
	<Badge>
		<Spinner />
		동기화 중
	</Badge>
	<Badge variant="secondary">
		<Spinner />
		업데이트 중
	</Badge>
	<Badge variant="outline">
		<Spinner />
		처리 중
	</Badge>
</div>
