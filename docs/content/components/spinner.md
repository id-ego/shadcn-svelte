---
title: Spinner
description: 로딩 상태를 표시하는 데 사용할 수 있는 인디케이터입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/spinner
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

<ComponentPreview name="spinner-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="spinner" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

Install `@lucide/svelte`:

</Step>

<PMInstall command="@lucide/svelte -D" />

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
  import { Spinner } from "$lib/components/ui/spinner/index.js";
</script>
```

```svelte
<Spinner />
```

## 커스터마이징

`Spinner` 컴포넌트를 편집하여 기본 스피너 아이콘을 다른 아이콘으로 교체할 수 있습니다.

<ComponentPreview name="spinner-custom-demo">

<div></div>

</ComponentPreview>

## 예제

### 크기

`size-*` 유틸리티 클래스를 사용하여 스피너의 크기를 변경할 수 있습니다.

<ComponentPreview name="spinner-size-demo">

<div></div>

</ComponentPreview>

### 색상

`text-*` 유틸리티 클래스를 사용하여 스피너의 색상을 변경할 수 있습니다.

<ComponentPreview name="spinner-color-demo">

<div></div>

</ComponentPreview>

### 버튼

버튼에 스피너를 추가하여 로딩 상태를 표시할 수 있습니다. `<Button />` 컴포넌트가 스피너와 텍스트 사이의 간격을 처리합니다.

<ComponentPreview name="spinner-button-demo">

<div></div>

</ComponentPreview>

### 배지

배지 안에도 스피너를 사용할 수 있습니다.

<ComponentPreview name="spinner-badge-demo">

<div></div>

</ComponentPreview>

### 입력 그룹

입력 그룹의 `<InputGroup.Addon>` 안에 스피너를 넣을 수 있습니다.

<ComponentPreview name="spinner-input-group-demo">

<div></div>

</ComponentPreview>

### 비어있음

<ComponentPreview name="spinner-empty-demo">

<div></div>

</ComponentPreview>

### 아이템

`<Item.Media>` 안에 스피너를 사용하여 로딩 상태를 표시할 수 있습니다.

<ComponentPreview name="spinner-item-demo">

<div></div>

</ComponentPreview>
