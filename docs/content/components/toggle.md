---
title: Toggle
description: 켜짐 또는 꺼짐 상태를 가질 수 있는 두 가지 상태 버튼입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/toggle
  doc: https://bits-ui.com/docs/components/toggle
  api: https://bits-ui.com/docs/components/toggle#api-reference
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

<ComponentPreview name="toggle-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="toggle" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

Install `bits-ui`:

</Step>

<PMInstall command="bits-ui -D" />

<Step>

Copy and paste the following code into your project.

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
  import { Toggle } from "$lib/components/ui/toggle/index.js";
</script>
```

```svelte
<Toggle>Toggle</Toggle>
```

## 예제

### 기본

<ComponentPreview name="toggle-demo">

<div></div>

</ComponentPreview>

### 아웃라인

<ComponentPreview name="toggle-outline">

<div></div>

</ComponentPreview>

### 텍스트 포함

<ComponentPreview name="toggle-with-text">

<div></div>

</ComponentPreview>

### 작은 크기

<ComponentPreview name="toggle-sm">

<div></div>

</ComponentPreview>

### 큰 크기

<ComponentPreview name="toggle-lg">

<div></div>

</ComponentPreview>

### 비활성화

<ComponentPreview name="toggle-disabled">

<div></div>

</ComponentPreview>
