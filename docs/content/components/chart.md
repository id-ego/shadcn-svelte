---
title: Chart
description: 아름다운 차트. LayerChart로 만들어졌습니다. 앱에 복사하여 붙여넣으세요.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/chart
---

<script>
	import * as Alert from "$lib/registry/ui/alert/index.js";
	import TriangleAlertIcon from "@lucide/svelte/icons/triangle-alert";
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import ComponentSource from "$lib/components/component-source.svelte";
	import Callout from "$lib/components/callout.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";
	import Step from "$lib/components/step.svelte";

	let { viewerData } = $props();
</script>

<Callout class="mt-0 mb-6">

**중요:** LayerChart v2는 아직 프리릴리스 단계이며 활발하게 개발 중입니다. 안정 버전 v2 이전의 잠재적인 변경 사항이 괜찮다면 사용하세요.

여러분의 피드백은 릴리스와 기능을 형성하는 데 매우 중요합니다. 현재 개발 상황은 [여기](https://github.com/techniq/layerchart/pull/449)에서 확인할 수 있습니다.

</Callout>

<ComponentPreview name="chart-bar-interactive" class="-mt-2 [&_.preview]:p-0 [&_.preview]:border-t [&_.preview>div]:shadow-none [&_.preview]:border-none [&_.preview>div]:w-full [&_.preview]:lg:min-h-[404px] [&_[data-slot='card-footer']]:hidden [&_[data-slot='card']]:py-0 [&_[data-slot='card-header'].border-b]:pb-0 [&_[data-slot='card']]:bg-background [&_[data-slot='card']]:border-none" hideCode>

<div></div>

</ComponentPreview>

**차트**를 소개합니다. 앱에 복사하여 붙여넣을 수 있는 차트 컴포넌트 모음입니다.

차트는 기본적으로 멋지게 보이도록 설계되었습니다. 다른 컴포넌트와 잘 작동하며 프로젝트에 맞게 완전히 커스터마이징할 수 있습니다.

[차트 라이브러리 둘러보기](/charts)

## 컴포넌트

내부적으로 [LayerChart](https://next.layerchart.com)를 사용합니다.

`Chart` 컴포넌트는 조합을 염두에 두고 설계되었습니다. **LayerChart 컴포넌트를 사용하여 차트를 구축하고, `ChartTooltip`과 같은 커스텀 컴포넌트는 필요할 때만 가져옵니다**

```svelte showLineNumbers /Chart.Container/ /Chart.Tooltip/
<script lang="ts">
  import * as Chart from "$lib/components/ui/chart/index.js";
  import { BarChart } from "layerchart";

  const data = [
    // ...
  ];
</script>

<Chart.Container>
  <BarChart {data} x="date" y="value">
    {#snippet tooltip()}
      <Chart.Tooltip />
    {/snippet}
  </BarChart>
</Chart.Container>
```

LayerChart를 래핑하지 않습니다. 이는 추상화에 갇히지 않는다는 의미입니다. 새로운 LayerChart 버전이 릴리스되면 공식 업그레이드 경로를 따라 차트를 업그레이드할 수 있습니다.

**컴포넌트는 여러분의 것입니다**.

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="chart" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

`layerchart` 설치:

</Step>

<PMInstall command="layerchart@next -D" />

<Step>

CSS 파일에 다음 색상을 추가하세요

</Step>

```css title="src/app.css" showLineNumbers
:root {
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
}

.dark {
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
}

@theme inline {
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
}
```

<Step>

다음 코드를 프로젝트에 복사하여 붙여넣으세요.

</Step>

</Steps>
{/snippet}
</InstallTabs>

## 첫 번째 차트

첫 번째 차트를 만들어 봅시다. 축, 그리드, 툴팁, 범례가 있는 막대 차트를 만들 것입니다.

<Steps>

### 데이터 정의부터 시작하기

다음 데이터는 각 월의 데스크톱 및 모바일 사용자 수를 나타냅니다.

<Callout class="mt-4">

**참고:** 데이터는 어떤 형태든 가능합니다. 아래 데이터의 형태에 제한되지 않습니다. `dataKey` prop을 사용하여 데이터를 차트에 매핑하세요.

</Callout>

```svelte title="lib/components/example-chart.svelte" showLineNumbers
<script lang="ts">
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];
</script>
```

### 차트 설정 정의하기

차트 설정은 차트의 구성을 담고 있습니다. 라벨, 아이콘, 테마용 색상 토큰과 같은 사람이 읽을 수 있는 문자열을 여기에 배치합니다.

```svelte title="lib/components/example-chart.svelte" showLineNumbers
<script lang="ts">
  import * as Chart from "$lib/components/ui/chart/index.js";

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies Chart.ChartConfig;
</script>
```

### 차트 구축하기

이제 LayerChart 컴포넌트를 사용하여 차트를 구축할 수 있습니다. 이 예제에서는 LayerChart의 "간소화된 차트" 중 하나인 `BarChart` 컴포넌트를 사용합니다.

이러한 컴포넌트는 많은 공통 차트 구조를 처리하면서도 원하는 대로 커스터마이징할 수 있습니다.

{#if viewerData}
<ComponentSource item={viewerData} data-llm-ignore/>
{/if}

<ComponentPreview name="chart-bar-demo" class="[&_.preview]:p-4">

<div></div>

</ComponentPreview>

</Steps>

이제 x축과 그리드가 있는 그룹 누적 막대 차트가 완성되었습니다.

### 축 눈금 조정하기

현재 막대 차트는 x축의 각 눈금에 전체 월 이름을 표시하고 있습니다. 처음 세 글자로 줄여봅시다.

<Steps>

### x축에 커스텀 포매터 추가하기

`props` prop은 차트를 구성하는 다양한 컴포넌트에 커스텀 props를 전달하는 방법입니다. 여기서는 x축에 커스텀 포매터를 전달하고 있습니다.

```svelte showLineNumbers {21-25}
<Chart.Container config={chartConfig} class="min-h-[200px] w-full">
  <BarChart
    data={chartData}
    xScale={scaleBand().padding(0.25)}
    x="month"
    axis="x"
    tooltip={false}
    seriesLayout="group"
    series={[
      {
        key: "desktop",
        label: chartConfig.desktop.label,
        color: chartConfig.desktop.color,
      },
      {
        key: "mobile",
        label: chartConfig.mobile.label,
        color: chartConfig.mobile.color,
      },
    ]}
    props={{
      xAxis: {
        format: (d) => d.slice(0, 3),
      },
    }}
  />
</Chart.Container>
```

<ComponentPreview name="chart-bar-axis-tick-demo" class="[&_.preview]:p-4">

<div></div>

</ComponentPreview>

</Steps>

### 툴팁 추가하기

지금까지 LayerChart의 `BarChart` 컴포넌트만 사용했습니다. `chart` 컴포넌트의 일부 커스터마이징 덕분에 기본적으로 멋지게 보입니다.

툴팁을 추가하기 위해 `chart`의 커스텀 `Chart.Tooltip` 컴포넌트를 사용하겠습니다.

<Steps>

### 차트에 `Chart.Tooltip` 컴포넌트 추가하기

`tooltip={false}` prop을 `Chart.Tooltip` 컴포넌트를 배치할 `tooltip` snippet으로 교체하겠습니다.

```svelte showLineNumbers {26-28}
<Chart.Container config={chartConfig} class="min-h-[200px] w-full">
  <BarChart
    data={chartData}
    xScale={scaleBand().padding(0.25)}
    x="month"
    axis="x"
    seriesLayout="group"
    series={[
      {
        key: "desktop",
        label: chartConfig.desktop.label,
        color: chartConfig.desktop.color,
      },
      {
        key: "mobile",
        label: chartConfig.mobile.label,
        color: chartConfig.mobile.color,
      },
    ]}
    props={{
      xAxis: {
        format: (d) => d.slice(0, 3),
      },
    }}
  >
    {#snippet tooltip()}
      <Chart.Tooltip />
    {/snippet}
  </BarChart>
</Chart.Container>
```

<ComponentPreview name="chart-bar-tooltip-demo" class="[&_.preview]:p-4">

<div></div>

</ComponentPreview>

</Steps>

### 범례 추가하기

<Steps>

### `legend` prop을 `true`로 설정하기

`legend` prop은 차트의 범례를 표시하는 데 사용됩니다. 커스텀 범례를 더 쉽게 만들 수 있도록 툴팁과 유사한 페이로드를 추가하기 위해 LayerChart와 협력하고 있습니다.

```svelte showLineNumbers {8}
<Chart.Container config={chartConfig} class="min-h-[200px] w-full">
  <BarChart
    data={chartData}
    xScale={scaleBand().padding(0.25)}
    x="month"
    axis="x"
    seriesLayout="group"
    legend
    series={[
      {
        key: "desktop",
        label: chartConfig.desktop.label,
        color: chartConfig.desktop.color,
      },
      {
        key: "mobile",
        label: chartConfig.mobile.label,
        color: chartConfig.mobile.color,
      },
    ]}
    props={{
      xAxis: {
        format: (d) => d.slice(0, 3),
      },
    }}
  >
    {#snippet tooltip()}
      <Chart.Tooltip />
    {/snippet}
  </BarChart>
</Chart.Container>
```

<ComponentPreview name="chart-bar-legend-demo" class="[&_.preview]:p-4">

<div></div>

</ComponentPreview>

</Steps>

완료되었습니다. 첫 번째 차트를 만들었습니다! 다음은 무엇일까요?

- [테마와 색상](/docs/components/chart#theming)
- [툴팁](/docs/components/chart#tooltip)

## 차트 설정

차트 설정은 차트의 라벨, 아이콘, 색상을 정의하는 곳입니다.

의도적으로 차트 데이터와 분리되어 있습니다.

이를 통해 차트 간에 설정과 색상 토큰을 공유할 수 있습니다. 데이터나 색상 토큰이 원격으로 존재하거나 다른 형식인 경우에도 독립적으로 작동할 수 있습니다.

```svelte
<script lang="ts">
  import MonitorIcon from "@lucide/svelte/icons/monitor";
  import * as Chart from "$lib/components/ui/chart/index.js";

  const chartConfig = {
    desktop: {
      label: "Desktop",
      icon: MonitorIcon,
      // A color like 'hsl(220, 98%, 61%)' or 'var(--color-name)'
      color: "#2563eb",
      // OR a theme object with 'light' and 'dark' keys
      theme: {
        light: "#2563eb",
        dark: "#dc2626",
      },
    },
  } satisfies Chart.ChartConfig;
</script>
```

## 테마 설정

차트는 테마 설정을 기본적으로 지원합니다. CSS 변수(권장) 또는 hex, hsl, oklch와 같은 모든 색상 형식의 색상 값을 사용할 수 있습니다.

### CSS 변수

<Steps>

### CSS 파일에 색상 정의하기

```css {5-6,13-14} title="src/routes/layout.css" showLineNumbers
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... */
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... */
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
}
```

### `chartConfig`에 색상 추가하기

```svelte {5,9} showLineNumbers
<script lang="ts">
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--chart-1)",
    },
    mobile: {
      label: "Mobile",
      color: "var(--chart-2)",
    },
  } satisfies Chart.ChartConfig;
</script>
```

</Steps>

### hex, hsl 또는 oklch

차트 설정에서 직접 색상을 정의할 수도 있습니다. 선호하는 색상 형식을 사용하세요.

```svelte showLineNumbers
<script lang="ts">
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
  } satisfies Chart.ChartConfig;
</script>
```

### 색상 사용하기

차트에서 테마 색상을 사용하려면 `var(--color-KEY)` 형식으로 색상을 참조하세요.

#### 컴포넌트

```svelte
<Bar fill="var(--color-desktop)" />
```

#### 차트 데이터

```ts showLineNumbers
const chartData = [
  { browser: "chrome", visitors: 275, color: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, color: "var(--color-safari)" },
];
```

#### Tailwind

```svelte
<Label class="fill-(--color-desktop)" />
```

## 툴팁

차트 툴팁은 라벨, 이름, 인디케이터, 값을 포함합니다. 이들을 조합하여 툴팁을 커스터마이징할 수 있습니다.

<ComponentPreview name="chart-tooltip-demo" class="[&_.preview]:p-0" hideCode>

<div></div>

</ComponentPreview>

`hideLabel`, `hideIndicator` props를 사용하여 이들을 켜거나 끌 수 있으며, `indicator` prop을 사용하여 인디케이터 스타일을 커스터마이징할 수 있습니다.

툴팁 라벨과 이름에 커스텀 키를 사용하려면 `labelKey`와 `nameKey`를 사용하세요.

차트는 `<Chart.Tooltip>` 컴포넌트와 함께 제공됩니다. 이 컴포넌트를 사용하여 차트에 커스텀 툴팁을 추가할 수 있습니다.

### Props

다음 props를 사용하여 툴팁을 커스터마이징하세요.

| Prop             | Type                     | Description                                     |
| :--------------- | :----------------------- | :---------------------------------------------- |
| `labelKey`       | string                   | 라벨에 사용할 설정 또는 데이터 키.              |
| `nameKey`        | string                   | 이름에 사용할 설정 또는 데이터 키.              |
| `indicator`      | `dot` `line` or `dashed` | 툴팁의 인디케이터 스타일.                       |
| `hideLabel`      | boolean                  | 라벨을 숨길지 여부.                             |
| `hideIndicator`  | boolean                  | 인디케이터를 숨길지 여부.                       |
| `label`          | string                   | 툴팁의 커스텀 라벨                              |
| `labelFormatter` | function                 | 라벨을 포맷하는 함수.                           |
| `formatter`      | Snippet                  | 툴팁의 유연한 렌더링을 제공하는 snippet. |

### 색상

색상은 차트 설정에서 자동으로 참조됩니다.

### 커스텀

툴팁 라벨과 이름에 커스텀 키를 사용하려면 `labelKey`와 `nameKey` props를 사용하세요.

```svelte showLineNumbers /browser/
<script lang="ts">
  const chartData = [
    { browser: "chrome", visitors: 187, color: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, color: "var(--color-safari)" },
  ];

  const chartConfig = {
    visitors: {
      label: "Total Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "var(--chart-1)",
    },
    safari: {
      label: "Safari",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;
</script>

<Chart.Tooltip labelKey="visitors" nameKey="browser" />
```

이렇게 하면 라벨에는 `Total Visitors`를, 툴팁 이름에는 `Chrome`과 `Safari`를 사용합니다.
