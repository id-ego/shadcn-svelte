---
title: Input
description: 폼 입력 필드 또는 입력 필드처럼 보이는 컴포넌트를 표시합니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/input
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

<ComponentPreview name="input-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="input" />
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
  import { Input } from "$lib/components/ui/input/index.js";
</script>
```

```svelte
<Input />
```

## 예제

### 기본

<ComponentPreview name="input-demo">

<div></div>

</ComponentPreview>

### 파일

<ComponentPreview name="input-file">

<div></div>

</ComponentPreview>

### 비활성화

<ComponentPreview name="input-disabled">

<div></div>

</ComponentPreview>

### 라벨과 함께

<ComponentPreview name="input-with-label">

<div></div>

</ComponentPreview>

### 버튼과 함께

<ComponentPreview name="input-with-button">

<div></div>

</ComponentPreview>
