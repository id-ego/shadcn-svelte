<script lang="ts">
	import * as Card from "$lib/registry/ui/card/index.js";
	import * as Chart from "$lib/registry/ui/chart/index.js";
	import { ArcChart, Text } from "layerchart";
	import TrendingUpIcon from "@lucide/svelte/icons/trending-up";

	const chartData = [{ browser: "safari", visitors: 1260, color: "var(--color-safari)" }];

	const chartConfig = {
		visitors: { label: "방문자" },
		safari: { label: "Safari", color: "var(--chart-2)" },
	} satisfies Chart.ChartConfig;
</script>

<Card.Root>
	<Card.Header class="items-center">
		<Card.Title>방사형 차트 - 모양</Card.Title>
		<Card.Description>최근 6개월간 총 방문자 수 표시</Card.Description>
	</Card.Header>
	<Card.Content class="flex-1">
		<Chart.Container config={chartConfig} class="mx-auto aspect-square max-h-[250px]">
			<ArcChart
				label="browser"
				value="visitors"
				outerRadius={88}
				innerRadius={66}
				trackOuterRadius={83}
				trackInnerRadius={72}
				padding={40}
				range={[90, -270]}
				maxValue={chartData[0].visitors * 4}
				series={chartData.map((d) => ({
					key: d.browser,
					color: d.color,
					data: [d],
				}))}
				props={{
					arc: { track: { fill: "var(--muted)" }, motion: "tween" },
					tooltip: { context: { hideDelay: 350 } },
				}}
				tooltip={false}
			>
				{#snippet belowMarks()}
					<circle cx="0" cy="0" r="80" class="fill-background" />
				{/snippet}
				{#snippet aboveMarks()}
					<Text
						value={String(chartData[0].visitors)}
						textAnchor="middle"
						verticalAnchor="middle"
						class="fill-foreground text-4xl! font-bold"
						dy={3}
					/>
					<Text
						value="방문자"
						textAnchor="middle"
						verticalAnchor="middle"
						class="fill-muted-foreground!"
						dy={22}
					/>
				{/snippet}
			</ArcChart>
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
