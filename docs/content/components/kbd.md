---
title: Kbd
description: 키보드의 텍스트 사용자 입력을 표시하는 데 사용됩니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/kbd
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

<ComponentPreview name="kbd-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="kbd" />
{/snippet}
{#snippet manual()}
<Steps>

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
  import * as Kbd from "$lib/components/ui/kbd/index.js";
</script>
```

```svelte
<Kbd.Root>B</Kbd.Root>
```

## 예제

### Group

`Kbd.Group` 컴포넌트를 사용하여 키보드 키를 함께 그룹화합니다.

<ComponentPreview name="kbd-group-demo">

<div></div>

</ComponentPreview>

### Button

`Button` 컴포넌트 내부에 `Kbd.Root` 컴포넌트를 사용하여 버튼 안에 키보드 키를 표시합니다.

<ComponentPreview name="kbd-button-demo">

<div></div>

</ComponentPreview>

### Tooltip

`Tooltip` 컴포넌트 내부에 `Kbd.Root` 컴포넌트를 사용하여 키보드 키가 포함된 툴팁을 표시할 수 있습니다.

<ComponentPreview name="kbd-tooltip-demo">

<div></div>

</ComponentPreview>

### Input Group

`InputGroup.Addon` 컴포넌트 내부에 `Kbd.Root` 컴포넌트를 사용하여 입력 그룹 안에 키보드 키를 표시할 수 있습니다.

<ComponentPreview name="kbd-input-group-demo">

<div></div>

</ComponentPreview>
