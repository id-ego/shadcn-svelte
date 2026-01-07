<script lang="ts">
	import { BarChart } from "layerchart";
	import TrendingUpIcon from "@lucide/svelte/icons/trending-up";
	import { scaleBand } from "d3-scale";
	import * as Chart from "$lib/registry/ui/chart/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import { cubicInOut } from "svelte/easing";

	const chartData = [
		{ browser: "chrome", visitors: 275, color: "var(--color-chrome)" },
		{ browser: "safari", visitors: 200, color: "var(--color-safari)" },
		{ browser: "firefox", visitors: 187, color: "var(--color-firefox)" },
		{ browser: "edge", visitors: 173, color: "var(--color-edge)" },
		{ browser: "other", visitors: 90, color: "var(--color-other)" },
	];

	const chartConfig = {
		visitors: { label: "방문자" },
		chrome: { label: "Chrome", color: "var(--chart-1)" },
		safari: { label: "Safari", color: "var(--chart-2)" },
		firefox: { label: "Firefox", color: "var(--chart-3)" },
		edge: { label: "Edge", color: "var(--chart-4)" },
		other: { label: "기타", color: "var(--chart-5)" },
	} satisfies Chart.ChartConfig;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>막대 차트 - Mixed</Card.Title>
		<Card.Description>2024년 1월 - 6월</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig}>
			<BarChart
				data={chartData}
				orientation="horizontal"
				yScale={scaleBand().padding(0.25)}
				y="browser"
				x="visitors"
				cRange={chartData.map((c) => c.color)}
				c="color"
				padding={{ left: 48 }}
				grid={false}
				rule={false}
				axis="y"
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
						format: (d) => chartConfig[d as keyof typeof chartConfig].label,
						tickLabelProps: {
							svgProps: {
								x: -16,
							},
						},
					},
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip hideLabel nameKey="visitors" />
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
