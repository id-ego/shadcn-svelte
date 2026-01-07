<script lang="ts">
	import { AreaChart, LineChart } from "layerchart";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import * as Chart from "$lib/registry/ui/chart/index.js";
	import { curveNatural } from "d3-shape";

	const data = [
		{
			revenue: 10400,
			subscription: 40,
		},
		{
			revenue: 14405,
			subscription: 90,
		},
		{
			revenue: 9400,
			subscription: 200,
		},
		{
			revenue: 8200,
			subscription: 278,
		},
		{
			revenue: 7000,
			subscription: 89,
		},
		{
			revenue: 9600,
			subscription: 239,
		},
		{
			revenue: 11244,
			subscription: 78,
		},
		{
			revenue: 26475,
			subscription: 89,
		},
	];

	const chartConfig = {
		revenue: {
			label: "수익",
			color: "var(--primary)",
		},
		subscription: {
			label: "구독",
			color: "var(--primary)",
		},
	} satisfies Chart.ChartConfig;
</script>

<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
	<Card.Root>
		<Card.Header>
			<Card.Description>총 수익</Card.Description>
			<Card.Title class="text-3xl">$15,231.89</Card.Title>
			<Card.Description>지난달 대비 +20.1%</Card.Description>
		</Card.Header>
		<Card.Content class="pb-0">
			<Chart.Container config={chartConfig} class="h-[80px] w-full">
				<LineChart
					axis={false}
					data={data.map((d, i) => ({ ...d, index: i }))}
					x="index"
					y="revenue"
					points={true}
					grid={false}
					tooltip={false}
					highlight={false}
					props={{
						spline: {
							curve: curveNatural,
							strokeWidth: 2,
							stroke: "var(--color-revenue)",
						},

						points: {
							r: 3,
							stroke: "var(--color-revenue)",
							strokeWidth: 2,
						},
					}}
				/>
			</Chart.Container>
		</Card.Content>
	</Card.Root>
	<Card.Root class="pb-0 lg:hidden xl:flex">
		<Card.Header>
			<Card.Description>구독</Card.Description>
			<Card.Title class="text-3xl">+2,350</Card.Title>
			<Card.Description>지난달 대비 +180.1%</Card.Description>
			<Card.Action>
				<Button variant="ghost" size="sm">더보기</Button>
			</Card.Action>
		</Card.Header>
		<Card.Content class="mt-auto max-h-[124px] flex-1 overflow-hidden p-0">
			<Chart.Container config={chartConfig} class="-mb-4 h-full w-full overflow-hidden">
				<AreaChart
					data={data.map((d, i) => ({ ...d, index: i }))}
					x="index"
					y="subscription"
					axis={false}
					grid={false}
					tooltip={false}
					yPadding={[0, 8]}
					props={{
						area: {
							curve: curveNatural,
							fill: "var(--color-subscription)",
							fillOpacity: 0.05,
						},
						line: {
							stroke: "var(--color-subscription)",
							strokeWidth: 2,
						},
					}}
				/>
			</Chart.Container>
		</Card.Content>
	</Card.Root>
</div>
