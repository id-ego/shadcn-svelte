---
title: Toggle Group
description: 켜거나 끌 수 있는 두 가지 상태 버튼 세트입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/toggle-group
  doc: https://bits-ui.com/docs/components/toggle-group
  api: https://bits-ui.com/docs/components/toggle-group#api-reference
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import ComponentSource from "$lib/components/component-source.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import Step from "$lib/components/step.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";

	let { viewerData } = $props();
</script>

<ComponentPreview name="toggle-group-spacing">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="toggle-group" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

Install `bits-ui`:

</Step>

<PMInstall command="bits-ui -D" />

<Step>

다음 코드를 복사하여 프로젝트에 붙여넣으세요.

</Step>
{#if viewerData}
	<ComponentSource item={viewerData} data-llm-ignore/>
{/if}

</Steps>
{/snippet}
</InstallTabs>

## 사용법

```svelte
<script lang="ts">
  import * as ToggleGroup from "$lib/components/ui/toggle-group/index.js";
</script>
```

```svelte
<ToggleGroup.Root type="single">
  <ToggleGroup.Item value="a">A</ToggleGroup.Item>
  <ToggleGroup.Item value="b">B</ToggleGroup.Item>
  <ToggleGroup.Item value="c">C</ToggleGroup.Item>
</ToggleGroup.Root>
```

## 예제

### Outline

<ComponentPreview name="toggle-group-outline">

<div></div>

</ComponentPreview>

### Single

<ComponentPreview name="toggle-group-single">

<div></div>

</ComponentPreview>

### Small

<ComponentPreview name="toggle-group-sm">

<div></div>

</ComponentPreview>

### Large

<ComponentPreview name="toggle-group-lg">

<div></div>

</ComponentPreview>

### Disabled

<ComponentPreview name="toggle-group-disabled">

<div></div>

</ComponentPreview>

### 간격

토글 그룹 아이템 사이에 간격을 추가하려면 `spacing={2}`를 사용하세요.

<ComponentPreview name="toggle-group-spacing">

<div></div>

</ComponentPreview>
