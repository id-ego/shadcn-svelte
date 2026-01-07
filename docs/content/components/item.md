---
title: 아이템
description: 모든 콘텐츠를 표시하는 데 사용할 수 있는 다용도 컴포넌트입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/item
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

`Item` 컴포넌트는 거의 모든 유형의 콘텐츠를 담을 수 있는 간단한 플렉스 컨테이너입니다. 제목, 설명 및 액션을 표시하는 데 사용하세요. `ItemGroup` 컴포넌트와 함께 사용하여 아이템 목록을 만들 수 있습니다.

`div` 요소와 몇 가지 클래스로 동일한 결과를 얻을 수 있지만, **너무 많이 만들어서** 컴포넌트로 만들기로 했습니다. 이제 항상 사용합니다.

<ComponentPreview name="item-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="item" />
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

```svelte showLineNumbers
<script lang="ts">
  import * as Item from "$lib/components/ui/item/index.js";
</script>
```

```svelte showLineNumbers
<Item.Root>
  <Item.Header>Item Header</Item.Header>
  <Item.Media />
  <Item.Content>
    <Item.Title>Item</Item.Title>
    <Item.Description>Item</Item.Description>
  </Item.Content>
  <Item.Actions />
  <Item.Footer>Item Footer</Item.Footer>
</Item.Root>
```

## Item vs Field

체크박스, 입력, 라디오 또는 셀렉트와 같은 폼 입력을 표시해야 하는 경우 Field를 사용하세요.

제목, 설명 및 액션과 같은 콘텐츠만 표시하면 되는 경우 `Item`을 사용하세요.

## 예제

### 변형

<ComponentPreview name="item-variants-demo">

<div></div>

</ComponentPreview>

### 크기

`Item` 컴포넌트는 다양한 사용 사례에 맞는 여러 크기를 제공합니다. 예를 들어 컴팩트한 아이템에는 `sm` 크기를 사용하고 표준 아이템에는 기본 크기를 사용할 수 있습니다.

<ComponentPreview name="item-size-demo">

<div></div>

</ComponentPreview>

### 아이콘

<ComponentPreview name="item-icon-demo">

<div></div>

</ComponentPreview>

### 아바타

<ComponentPreview name="item-avatar-demo">

<div></div>

</ComponentPreview>

### 이미지

<ComponentPreview name="item-image-demo">

<div></div>

</ComponentPreview>

### 그룹

<ComponentPreview name="item-group-demo">

<div></div>

</ComponentPreview>

### 헤더

<ComponentPreview name="item-header-demo">

<div></div>

</ComponentPreview>

### 링크

아이템을 링크로 렌더링하려면 `child` 스니펫을 사용하세요. 호버 및 포커스 상태가 앵커 요소에 적용됩니다.

<ComponentPreview name="item-link-demo">

<div></div>

</ComponentPreview>

### 드롭다운

<ComponentPreview name="item-dropdown-demo">

<div></div>

</ComponentPreview>
