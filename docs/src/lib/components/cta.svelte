<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { Button } from "$lib/registry/ui/button/index.js";

	let { class: className }: { class?: string } = $props();
</script>

<div
	class={cn(
		"bg-surface text-surface-foreground group relative flex flex-col gap-2 rounded-lg p-6 text-sm",
		className
	)}
>
	<div class="text-base leading-tight font-semibold text-balance group-hover:underline">
		스페셜 스폰서
	</div>
	<div class="text-muted-foreground">이 자리에 함께할 파트너를 찾고 있습니다.</div>
	<div class="text-muted-foreground">프로젝트를 후원하고 수천 명의 개발자에게 도달하세요.</div>
	<Button size="sm" class="mt-2 w-fit" href="mailto:sponsorship@huntabyte.com">연락하기</Button>
</div>
