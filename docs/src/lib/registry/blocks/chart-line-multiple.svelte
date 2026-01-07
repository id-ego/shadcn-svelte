<script lang="ts">
	import { LineChart } from "layerchart";
	import TrendingUpIcon from "@lucide/svelte/icons/trending-up";
	import { scaleUtc } from "d3-scale";
	import { curveNatural } from "d3-shape";
	import * as Chart from "$lib/registry/ui/chart/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";

	const chartData = [
		{ date: new Date("2024-01-01"), desktop: 186, mobile: 80 },
		{ date: new Date("2024-02-01"), desktop: 305, mobile: 200 },
		{ date: new Date("2024-03-01"), desktop: 237, mobile: 120 },
		{ date: new Date("2024-04-01"), desktop: 73, mobile: 190 },
		{ date: new Date("2024-05-01"), desktop: 209, mobile: 130 },
		{ date: new Date("2024-06-01"), desktop: 214, mobile: 140 },
	];

	const chartConfig = {
		desktop: { label: "데스크톱", color: "var(--chart-1)" },
		mobile: { label: "모바일", color: "var(--chart-2)" },
	} satisfies Chart.ChartConfig;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>선 차트 - 다중</Card.Title>
		<Card.Description>최근 6개월간 총 방문자 수</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig}>
			<LineChart
				data={chartData}
				x="date"
				xScale={scaleUtc()}
				axis="x"
				series={[
					{
						key: "desktop",
						label: "데스크톱",
						color: chartConfig.desktop.color,
					},
					{
						key: "mobile",
						label: "모바일",
						color: chartConfig.mobile.color,
					},
				]}
				props={{
					spline: { curve: curveNatural, motion: "tween", strokeWidth: 2 },
					xAxis: {
						format: (v: Date) => v.toLocaleDateString("ko-KR", { month: "short" }),
					},
					highlight: { points: { r: 4 } },
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip hideLabel />
				{/snippet}
			</LineChart>
		</Chart.Container>
	</Card.Content>
	<Card.Footer>
		<div class="flex w-full items-start gap-2 text-sm">
			<div class="grid gap-2">
				<div class="flex items-center gap-2 leading-none font-medium">
					이번 달 5.2% 상승 <TrendingUpIcon class="size-4" />
				</div>
				<div class="text-muted-foreground flex items-center gap-2 leading-none">
					2024년 1월 - 6월
				</div>
			</div>
		</div>
	</Card.Footer>
</Card.Root>
