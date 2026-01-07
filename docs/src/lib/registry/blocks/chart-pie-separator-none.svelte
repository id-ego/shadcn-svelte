<script lang="ts">
	import TrendingUpIcon from "@lucide/svelte/icons/trending-up";
	// import * as Chart from "$lib/registry/ui/chart/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
</script>

<Card.Root class="flex flex-col">
	<Card.Header class="items-center">
		<Card.Title>파이 차트 - Separator None</Card.Title>
		<Card.Description>2024년 1월 - 6월</Card.Description>
	</Card.Header>
	<Card.Content class="flex-1">
		<!-- <Chart.Container class="mx-auto aspect-square max-h-[250px]"></Chart.Container> -->
	</Card.Content>
	<Card.Footer class="flex-col gap-2 text-sm">
		<div class="flex items-center gap-2 leading-none font-medium">
			이번 달 5.2% 상승 <TrendingUpIcon class="size-4" />
		</div>
		<div class="text-muted-foreground leading-none">
			지난 6개월간 총 방문자 수 표시
		</div>
	</Card.Footer>
</Card.Root>
