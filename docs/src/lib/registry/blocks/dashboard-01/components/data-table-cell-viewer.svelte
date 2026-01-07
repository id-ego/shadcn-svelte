<script lang="ts">
	import TrendingUpIcon from "@tabler/icons-svelte/icons/trending-up";
	import { AreaChart } from "layerchart";
	import { scaleUtc } from "d3-scale";
	import { curveNatural } from "d3-shape";

	import * as Drawer from "$lib/registry/ui/drawer/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Chart from "$lib/registry/ui/chart/index.js";
	import { IsMobile } from "$lib/registry/hooks/is-mobile.svelte.js";
	import { Label } from "$lib/registry/ui/label/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import * as Select from "$lib/registry/ui/select/index.js";
	import { Separator } from "$lib/registry/ui/separator/index.js";
	import type { Schema } from "./schemas.js";

	const chartData = [
		{ date: new Date("2024-01-01"), desktop: 186, mobile: 80 },
		{ date: new Date("2024-02-01"), desktop: 305, mobile: 200 },
		{ date: new Date("2024-03-01"), desktop: 237, mobile: 120 },
		{ date: new Date("2024-04-01"), desktop: 73, mobile: 190 },
		{ date: new Date("2024-05-01"), desktop: 209, mobile: 130 },
		{ date: new Date("2024-06-01"), desktop: 214, mobile: 140 },
	];

	const chartConfig = {
		desktop: {
			label: "Desktop",
			color: "var(--primary)",
		},
		mobile: {
			label: "Mobile",
			color: "var(--primary)",
		},
	} satisfies Chart.ChartConfig;

	const isMobile = new IsMobile();

	let { item }: { item: Schema } = $props();

	let type = $state(item.type);
	let status = $state(item.status);
	let reviewer = $state(item.reviewer);
</script>

<Drawer.Root direction={isMobile.current ? "bottom" : "right"}>
	<Drawer.Trigger>
		{#snippet child({ props })}
			<Button variant="link" class="text-foreground w-fit px-0 text-start" {...props}>
				{item.header}
			</Button>
		{/snippet}
	</Drawer.Trigger>
	<Drawer.Content>
		<Drawer.Header class="gap-1">
			<Drawer.Title>{item.header}</Drawer.Title>
			<Drawer.Description>최근 6개월간 총 방문자 수 표시</Drawer.Description>
		</Drawer.Header>
		<div class="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
			{#if !isMobile.current}
				<Chart.Container config={chartConfig}>
					<AreaChart
						data={chartData}
						x="date"
						xScale={scaleUtc()}
						yDomain={[0, 600]}
						series={[
							{
								key: "mobile",
								label: "Mobile",
								color: chartConfig.mobile.color,
							},
							{
								key: "desktop",
								label: "Desktop",
								color: chartConfig.desktop.color,
							},
						]}
						seriesLayout="stack"
						props={{
							area: {
								curve: curveNatural,
								"fill-opacity": 0.4,
								line: { class: "stroke-1" },
								motion: "tween",
							},
							xAxis: {
								format: (v) => v.toLocaleDateString("en-US", { month: "short" }),
							},
							yAxis: { ticks: [0, 300, 600] },
						}}
					>
						{#snippet tooltip()}
							<Chart.Tooltip
								labelFormatter={(v: Date) => {
									return v.toLocaleDateString("en-US", {
										month: "long",
									});
								}}
								indicator="dot"
							/>
						{/snippet}
					</AreaChart>
				</Chart.Container>
				<Separator />
				<div class="grid gap-2">
					<div class="flex gap-2 leading-none font-medium">
						이번 달 5.2% 상승 추세
						<TrendingUpIcon class="size-4" />
					</div>
					<div class="text-muted-foreground">
						최근 6개월간 총 방문자 수를 표시합니다. 이것은 레이아웃을 테스트하기 위한
						임의의 텍스트입니다. 여러 줄에 걸쳐 있으며 자동으로 줄바꿈되어야 합니다.
					</div>
				</div>
				<Separator />
			{/if}
			<form class="flex flex-col gap-4">
				<div class="flex flex-col gap-3">
					<Label for="header">헤더</Label>
					<Input id="header" value={item.header} />
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="flex flex-col gap-3">
						<Label for="type">유형</Label>
						<Select.Root type="single" bind:value={type}>
							<Select.Trigger id="type" class="w-full">
								{type ?? "유형 선택"}
							</Select.Trigger>
							<Select.Content>
								<Select.Item value="목차"
									>목차</Select.Item
								>
								<Select.Item value="요약"
									>요약</Select.Item
								>
								<Select.Item value="기술 접근법">
									기술 접근법
								</Select.Item>
								<Select.Item value="디자인">디자인</Select.Item>
								<Select.Item value="기능">기능</Select.Item>
								<Select.Item value="중점 문서">중점 문서</Select.Item>
								<Select.Item value="설명">설명</Select.Item>
								<Select.Item value="표지">표지</Select.Item>
							</Select.Content>
						</Select.Root>
					</div>
					<div class="flex flex-col gap-3">
						<Label for="status">상태</Label>
						<Select.Root type="single" bind:value={status}>
							<Select.Trigger id="status" class="w-full">
								{status ?? "상태 선택"}
							</Select.Trigger>
							<Select.Content>
								<Select.Item value="완료">완료</Select.Item>
								<Select.Item value="진행 중">진행 중</Select.Item>
								<Select.Item value="시작 안 됨">시작 안 됨</Select.Item>
							</Select.Content>
						</Select.Root>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="flex flex-col gap-3">
						<Label for="target">목표</Label>
						<Input id="target" value={item.target} />
					</div>
					<div class="flex flex-col gap-3">
						<Label for="limit">한계</Label>
						<Input id="limit" value={item.limit} />
					</div>
				</div>
				<div class="flex flex-col gap-3">
					<Label for="reviewer">검토자</Label>
					<Select.Root type="single" bind:value={reviewer}>
						<Select.Trigger id="reviewer" class="w-full">
							{reviewer ?? "검토자 선택"}
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="Eddie Lake">Eddie Lake</Select.Item>
							<Select.Item value="Jamik Tashpulatov">Jamik Tashpulatov</Select.Item>
							<Select.Item value="Emily Whalen">Emily Whalen</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
			</form>
		</div>
		<Drawer.Footer>
			<Button>제출</Button>
			<Drawer.Close>
				{#snippet child({ props })}
					<Button variant="outline" {...props}>완료</Button>
				{/snippet}
			</Drawer.Close>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>
