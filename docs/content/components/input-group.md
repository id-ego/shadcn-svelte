---
title: Input Group
description: 입력 또는 텍스트영역에 추가 정보나 액션을 표시합니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/input-group
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

<ComponentPreview name="input-group-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="input-group" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

`@lucide/svelte` 설치:

</Step>

<PMInstall command="@lucide/svelte -D" />

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
  import * as InputGroup from "$lib/components/ui/input-group/index.js";
  import SearchIcon from "@lucide/svelte/icons/search";
</script>
```

```svelte showLineNumbers
<InputGroup.Root>
  <InputGroup.Input placeholder="Search..." />
  <InputGroup.Addon>
    <SearchIcon />
  </InputGroup.Addon>
  <InputGroup.Addon align="inline-end">
    <InputGroup.Button>Search</InputGroup.Button>
  </InputGroup.Addon>
</InputGroup.Root>
```

## 예제

### 아이콘

<ComponentPreview name="input-group-icon-demo">

<div></div>

</ComponentPreview>

### 텍스트

입력과 함께 추가 텍스트 정보를 표시합니다.

<ComponentPreview name="input-group-text-demo">

<div></div>

</ComponentPreview>

### 버튼

입력 그룹 내에서 액션을 수행하기 위한 버튼을 추가합니다.

<ComponentPreview name="input-group-button-demo">

<div></div>

</ComponentPreview>

### 툴팁

추가 컨텍스트나 도움말을 제공하기 위해 툴팁을 추가합니다.

<ComponentPreview name="input-group-tooltip-demo">

<div></div>

</ComponentPreview>

### 텍스트영역

입력 그룹은 텍스트영역 컴포넌트와도 작동합니다. 정렬을 위해 `block-start` 또는 `block-end`를 사용하세요.

<ComponentPreview name="input-group-textarea-demo">

<div></div>

</ComponentPreview>

### 스피너

입력을 처리하는 동안 로딩 인디케이터를 표시합니다.

<ComponentPreview name="input-group-spinner-demo">

<div></div>

</ComponentPreview>

### 라벨

접근성을 향상시키기 위해 입력 그룹 내에 라벨을 추가합니다.

<ComponentPreview name="input-group-label-demo">

<div></div>

</ComponentPreview>

### 드롭다운

복잡한 상호작용을 위해 입력 그룹과 드롭다운 메뉴를 함께 사용합니다.

<ComponentPreview name="input-group-dropdown-demo">

<div></div>

</ComponentPreview>

### 버튼 그룹

프리픽스와 서픽스를 만들기 위해 입력 그룹을 버튼 그룹으로 감쌉니다.

<ComponentPreview name="input-group-button-group-demo">

<div></div>

</ComponentPreview>

### 커스텀 입력

자동 동작과 포커스 상태 처리를 위해 커스텀 입력에 `data-slot="input-group-control"` 속성을 추가하세요.

커스텀 입력에는 스타일이 적용되지 않습니다. `class` prop을 사용하여 직접 스타일을 적용하세요.

<ComponentPreview name="input-group-custom-input-demo">

<div></div>

</ComponentPreview>
