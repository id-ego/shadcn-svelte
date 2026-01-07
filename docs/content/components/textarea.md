---
title: Textarea
description: 폼 텍스트영역 또는 텍스트영역처럼 보이는 컴포넌트를 표시합니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/textarea
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

<ComponentPreview name="textarea-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="textarea" />
{/snippet}
{#snippet manual()}
<Steps>

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

```svelte
<script lang="ts">
  import { Textarea } from "$lib/components/ui/textarea/index.js";
</script>
```

```svelte
<Textarea />
```

## 예제

### 기본

<ComponentPreview name="textarea-demo">

<div></div>

</ComponentPreview>

### 비활성화

<ComponentPreview name="textarea-disabled">

<div></div>

</ComponentPreview>

### 라벨 포함

<ComponentPreview name="textarea-with-label">

<div></div>

</ComponentPreview>

### 텍스트 포함

<ComponentPreview name="textarea-with-text">

<div></div>

</ComponentPreview>

### 버튼 포함

<ComponentPreview name="textarea-with-button">

<div></div>

</ComponentPreview>
