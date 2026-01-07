<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import { Spinner } from "$lib/registry/ui/spinner/index.js";
</script>

<div class="flex flex-col items-center gap-4">
	<Button disabled size="sm">
		<Spinner />
		로딩 중...
	</Button>
	<Button variant="outline" disabled size="sm">
		<Spinner />
		잠시만 기다려주세요
	</Button>
	<Button variant="secondary" disabled size="sm">
		<Spinner />
		처리 중
	</Button>
</div>
