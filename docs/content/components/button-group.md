---
title: Button Group
description: 일관된 스타일로 관련 버튼들을 그룹화하는 컨테이너입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/button-group
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

<ComponentPreview name="button-group-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="button-group" />
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
  import * as ButtonGroup from "$lib/components/ui/button-group/index.js";
</script>
```

```svelte
<ButtonGroup.Root>
  <Button>버튼 1</Button>
  <Button>버튼 2</Button>
</ButtonGroup.Root>
```

## 접근성

- `ButtonGroup` 컴포넌트는 `role` 속성이 `group`으로 설정되어 있습니다.
- `tabindex`를 사용하여 그룹 내 버튼 간 탐색할 수 있습니다.
- `aria-label` 또는 `aria-labelledby`를 사용하여 버튼 그룹에 레이블을 지정하세요.

```svelte showLineNumbers
<ButtonGroup aria-label="버튼 그룹">
  <Button>버튼 1</Button>
  <Button>버튼 2</Button>
</ButtonGroup>
```

## ButtonGroup vs ToggleGroup

- 동작을 수행하는 버튼을 그룹화할 때는 `ButtonGroup` 컴포넌트를 사용하세요.
- 상태를 토글하는 버튼을 그룹화할 때는 `ToggleGroup` 컴포넌트를 사용하세요.

## 예제

### 방향

`orientation` prop을 설정하여 버튼 그룹 레이아웃을 변경할 수 있습니다.

<ComponentPreview name="button-group-orientation-demo">

<div></div>

</ComponentPreview>

### 크기

개별 버튼의 `size` prop을 사용하여 버튼 크기를 제어할 수 있습니다.

<ComponentPreview name="button-group-size-demo">

<div></div>

</ComponentPreview>

### 중첩

`ButtonGroup` 컴포넌트를 중첩하여 간격이 있는 버튼 그룹을 만들 수 있습니다.

<ComponentPreview name="button-group-nested-demo">

<div></div>

</ComponentPreview>

### 구분선

`ButtonGroupSeparator` 컴포넌트는 그룹 내 버튼을 시각적으로 구분합니다.

`outline` variant를 가진 버튼은 테두리가 있어 구분선이 필요하지 않습니다. 다른 variant의 경우 시각적 계층을 개선하기 위해 구분선을 사용하는 것이 좋습니다.

<ComponentPreview name="button-group-separator-demo">

<div></div>

</ComponentPreview>

### 분할

`ButtonGroupSeparator`로 구분된 두 개의 버튼을 추가하여 분할 버튼 그룹을 만들 수 있습니다.

<ComponentPreview name="button-group-split-demo">

<div></div>

</ComponentPreview>

### 입력

`Input` 컴포넌트를 버튼으로 감쌀 수 있습니다.

<ComponentPreview name="button-group-input-demo">

<div></div>

</ComponentPreview>

### 입력 그룹

`InputGroup` 컴포넌트를 감싸서 복잡한 입력 레이아웃을 만들 수 있습니다.

<ComponentPreview name="button-group-input-group-demo">

<div></div>

</ComponentPreview>

### 드롭다운 메뉴

`DropdownMenu` 컴포넌트와 함께 분할 버튼 그룹을 만들 수 있습니다.

<ComponentPreview name="button-group-dropdown-menu-demo">

<div></div>

</ComponentPreview>

### 셀렉트

`Select` 컴포넌트와 함께 사용할 수 있습니다.

<ComponentPreview name="button-group-select-demo">

<div></div>

</ComponentPreview>

### 팝오버

`Popover` 컴포넌트와 함께 사용할 수 있습니다.

<ComponentPreview name="button-group-popover-demo">

<div></div>

</ComponentPreview>
