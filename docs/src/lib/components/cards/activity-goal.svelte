<script lang="ts">
	import MinusIcon from "@lucide/svelte/icons/minus";
	import PlusIcon from "@lucide/svelte/icons/plus";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import * as Chart from "$lib/registry/ui/chart/index.js";
	import { BarChart, type ChartContextValue } from "layerchart";
	import { cubicInOut } from "svelte/easing";
	import { scaleBand } from "d3-scale";

	const data = [
		{
			goal: 400,
		},
		{
			goal: 300,
		},
		{
			goal: 200,
		},
		{
			goal: 300,
		},
		{
			goal: 200,
		},
		{
			goal: 278,
		},
		{
			goal: 189,
		},
		{
			goal: 239,
		},
		{
			goal: 300,
		},
		{
			goal: 200,
		},
		{
			goal: 278,
		},
		{
			goal: 189,
		},
		{
			goal: 349,
		},
	];

	const chartConfig = {
		goal: {
			label: "목표",
			color: "var(--primary)",
		},
	} satisfies Chart.ChartConfig;

	let goal = $state(350);

	function onClick(adjustment: number) {
		goal = Math.max(200, Math.min(400, goal + adjustment));
	}

	let context = $state<ChartContextValue>();
</script>

<Card.Root class="w-full gap-5">
	<Card.Header>
		<Card.Title>활동 목표</Card.Title>
		<Card.Description>일일 활동 목표를 설정하세요.</Card.Description>
	</Card.Header>
	<Card.Content class="flex flex-1 flex-col">
		<div class="flex items-center justify-center gap-4">
			<Button
				variant="outline"
				size="icon"
				class="size-7 rounded-full"
				onclick={() => onClick(-10)}
				disabled={goal <= 200}
			>
				<MinusIcon />
				<span class="sr-only">감소</span>
			</Button>
			<div class="text-center">
				<div class="text-4xl font-bold tracking-tighter tabular-nums">
					{goal}
				</div>
				<div class="text-muted-foreground text-xs uppercase">칼로리/일</div>
			</div>
			<Button
				variant="outline"
				size="icon"
				class="size-7 rounded-full"
				onclick={() => onClick(10)}
				disabled={goal >= 400}
			>
				<PlusIcon />
				<span class="sr-only">증가</span>
			</Button>
		</div>
		<div class="flex-1">
			<Chart.Container config={chartConfig} class="aspect-auto h-14 w-full">
				<BarChart
					bind:context
					data={data.map((d, i) => ({ goal: d.goal, index: i }))}
					y="goal"
					x="index"
					xScale={scaleBand().padding(0.25)}
					axis={false}
					tooltip={false}
					props={{
						bars: {
							stroke: "none",
							rounded: "all",
							radius: 4,
							// use the height of the chart to animate the bars
							initialY: context?.height,
							initialHeight: 0,
							motion: {
								x: { type: "tween", duration: 500, easing: cubicInOut },
								width: { type: "tween", duration: 500, easing: cubicInOut },
								height: { type: "tween", duration: 500, easing: cubicInOut },
								y: { type: "tween", duration: 500, easing: cubicInOut },
							},
							fill: "var(--color-goal)",
						},
						highlight: { area: { fill: "none" } },
					}}
				/>
			</Chart.Container>
		</div>
	</Card.Content>
	<Card.Footer>
		<Button class="w-full" variant="secondary">목표 설정</Button>
	</Card.Footer>
</Card.Root>
