<script lang="ts">
	import TrendingUpIcon from "@lucide/svelte/icons/trending-up";
	import * as Chart from "$lib/registry/ui/chart/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import { BarChart } from "layerchart";
	import { scaleBand } from "d3-scale";
	import { cubicInOut } from "svelte/easing";

	const chartData = [
		{ month: "January", desktop: 186, mobile: 80 },
		{ month: "February", desktop: 305, mobile: 200 },
		{ month: "March", desktop: 237, mobile: 120 },
		{ month: "April", desktop: 73, mobile: 190 },
		{ month: "May", desktop: 209, mobile: 130 },
		{ month: "June", desktop: 214, mobile: 140 },
	];

	const chartConfig = {
		desktop: { label: "데스크톱", color: "var(--chart-1)" },
		mobile: { label: "모바일", color: "var(--chart-2)" },
		label: { color: "var(--background)" },
	} satisfies Chart.ChartConfig;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>막대 차트 - Custom Label</Card.Title>
		<Card.Description>2024년 1월 - 6월</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig}>
			<BarChart
				labels={{ offset: 12 }}
				data={chartData}
				orientation="horizontal"
				yScale={scaleBand().padding(0.25)}
				y="month"
				axis="y"
				rule={false}
				series={[{ key: "desktop", label: "데스크톱", color: chartConfig.desktop.color }]}
				padding={{ right: 16 }}
				props={{
					bars: {
						stroke: "none",
						radius: 5,
						rounded: "all",
						initialWidth: 0,
						initialX: 0,
						motion: {
							x: { type: "tween", duration: 500, easing: cubicInOut },
							width: { type: "tween", duration: 500, easing: cubicInOut },
						},
					},
					highlight: { area: { fill: "none" } },
					yAxis: {
						tickLabelProps: {
							textAnchor: "start",
							dx: 6,
							class: "stroke-none fill-background!",
						},
						tickLength: 0,
					},
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip hideLabel />
				{/snippet}
			</BarChart>
		</Chart.Container>
	</Card.Content>
	<Card.Footer>
		<div class="flex w-full items-start gap-2 text-sm">
			<div class="grid gap-2">
				<div class="flex items-center gap-2 leading-none font-medium">
					이번 달 5.2% 상승 <TrendingUpIcon class="size-4" />
				</div>
				<div class="text-muted-foreground flex items-center gap-2 leading-none">
					최근 6개월간 총 방문자 수
				</div>
			</div>
		</div>
	</Card.Footer>
</Card.Root>
