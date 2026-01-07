---
title: Scroll Area
description: 커스텀 크로스 브라우저 스타일링을 위해 기본 스크롤 기능을 강화합니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/scroll-area
  doc: https://bits-ui.com/docs/components/scroll-area
  api: https://bits-ui.com/docs/components/scroll-area#api-reference
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import ComponentSource from "$lib/components/component-source.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";

	let { viewerData } = $props();
	import Step from "$lib/components/step.svelte";
</script>

<ComponentPreview name="scroll-area-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="scroll-area" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

`bits-ui`를 설치합니다:

</Step>

<PMInstall command="bits-ui -D" />

<Step>

다음 코드를 프로젝트에 복사하여 붙여넣으세요.

</Step>
{#if viewerData}
	<ComponentSource item={viewerData} data-llm-ignore/>
{/if}

</Steps>
{/snippet}
</InstallTabs>

## 사용법

```svelte showLineNumbers
<script lang="ts">
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
</script>
```

```svelte showLineNumbers
<ScrollArea class="h-[200px] w-[350px] rounded-md border p-4">
  광대는 한밤중에 성으로 몰래 들어와서 왕의 베개 밑, 수프 안, 심지어 왕실 화장실에까지
  농담을 남기기 시작했습니다. 왕은 분노했지만, 광대를 막을 수가 없었습니다.
  그러던 어느 날, 왕국의 사람들은 광대가 남긴 농담이 너무 재미있어서
  웃지 않을 수가 없다는 것을 발견했습니다. 그리고 일단 웃기 시작하자,
  멈출 수가 없었습니다.
</ScrollArea>
```

## 예제

### 가로 스크롤

가로 스크롤을 활성화하려면 `orientation` prop을 `"horizontal"`로 설정하세요.

<ComponentPreview name="scroll-area-horizontal">

<div></div>

</ComponentPreview>
