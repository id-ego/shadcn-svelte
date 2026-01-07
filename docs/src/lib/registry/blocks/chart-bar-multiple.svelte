<script lang="ts">
	import { scaleBand } from "d3-scale";
	import { BarChart, type ChartContextValue } from "layerchart";
	import TrendingUpIcon from "@lucide/svelte/icons/trending-up";
	import * as Chart from "$lib/registry/ui/chart/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
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
	} satisfies Chart.ChartConfig;

	let context = $state<ChartContextValue>();
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>막대 차트 - Multiple</Card.Title>
		<Card.Description>2024년 1월 - 6월</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig}>
			<BarChart
				bind:context
				data={chartData}
				xScale={scaleBand().padding(0.25)}
				x="month"
				axis="x"
				series={[
					{ key: "desktop", label: "데스크톱", color: chartConfig.desktop.color },
					{ key: "mobile", label: "모바일", color: chartConfig.mobile.color },
				]}
				x1Scale={scaleBand().paddingInner(0.2)}
				seriesLayout="group"
				rule={false}
				props={{
					bars: {
						stroke: "none",
						strokeWidth: 0,
						rounded: "all",
						// use the height of the chart to animate the bars
						initialY: context?.height,
						initialHeight: 0,
						motion: {
							y: { type: "tween", duration: 500, easing: cubicInOut },
							height: { type: "tween", duration: 500, easing: cubicInOut },
						},
					},
					highlight: { area: { fill: "none" } },
					xAxis: { format: (d) => d.slice(0, 3) },
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip indicator="dashed" />
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
