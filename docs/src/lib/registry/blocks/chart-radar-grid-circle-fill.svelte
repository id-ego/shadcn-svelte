<script lang="ts">
	import { LineChart } from "layerchart";
	import TrendingUpIcon from "@lucide/svelte/icons/trending-up";
	import { curveLinearClosed } from "d3-shape";
	import { scaleBand } from "d3-scale";
	import * as Chart from "$lib/registry/ui/chart/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";

	const chartData = [
		{ month: "January", desktop: 186 },
		{ month: "February", desktop: 285 },
		{ month: "March", desktop: 237 },
		{ month: "April", desktop: 203 },
		{ month: "May", desktop: 209 },
		{ month: "June", desktop: 264 },
	];

	const chartConfig = {
		desktop: { label: "데스크톱", color: "var(--chart-1)" },
	} satisfies Chart.ChartConfig;
</script>

<Card.Root>
	<Card.Header class="items-center">
		<Card.Title>레이더 차트 - 원형 그리드 채우기</Card.Title>
		<Card.Description>최근 6개월간 총 방문자 수</Card.Description>
	</Card.Header>
	<Card.Content class="flex-1">
		<Chart.Container config={chartConfig} class="mx-auto aspect-square max-h-[250px]">
			<LineChart
				data={chartData}
				series={[
					{
						key: "desktop",
						label: "데스크톱",
						color: chartConfig.desktop.color,
					},
				]}
				radial
				x="month"
				xScale={scaleBand()}
				padding={12}
				yPadding={[0, 8]}
				props={{
					spline: {
						curve: curveLinearClosed,
						fill: "var(--color-desktop)",
						fillOpacity: 0.5,
						stroke: "0",
						motion: "tween",
					},
					xAxis: {
						tickLength: 0,
					},
					yAxis: {
						format: () => "",
					},
					grid: {
						radialY: "circle",
						class: "fill-(--color-desktop)",
						classes: {
							line: "fill-(--color-desktop) opacity-20!",
						},
					},
					tooltip: {
						context: {
							mode: "voronoi",
						},
					},
					highlight: {
						lines: false,
					},
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip />
				{/snippet}
			</LineChart>
		</Chart.Container>
	</Card.Content>
	<Card.Footer class="flex-col gap-2 text-sm">
		<div class="flex items-center gap-2 leading-none font-medium">
			이번 달 5.2% 상승 <TrendingUpIcon class="size-4" />
		</div>
		<div class="text-muted-foreground flex items-center gap-2 leading-none">
			2024년 1월 - 6월
		</div>
	</Card.Footer>
</Card.Root>
