---
title: Resizable
description: 키보드 지원이 포함된 접근 가능한 크기 조절 패널 그룹 및 레이아웃입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/resizable
  doc: https://www.paneforge.com
  api: https://www.paneforge.com/docs/components/pane-group
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

<ComponentPreview name="resizable-demo">

<div></div>

</ComponentPreview>

## 소개

`Resizable` 컴포넌트는 [Huntabyte](https://github.com/huntabyte)의 [PaneForge](https://github.com/svecosystem/paneforge)를 기반으로 구축되었습니다. `Resizable` 컴포넌트의 사용 가능한 모든 props와 기능은 [PaneForge 문서](https://paneforge.com)를 참조하세요.

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="resizable" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

`paneforge`를 설치합니다:

</Step>

<PMInstall command="paneforge@next -D" />

<Step>

다음 코드를 복사하여 프로젝트에 붙여넣습니다.

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
  import * as Resizable from "$lib/components/ui/resizable/index.js";
</script>
```

```svelte showLineNumbers
<Resizable.PaneGroup direction="horizontal">
  <Resizable.Pane>One</Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane>Two</Resizable.Pane>
</Resizable.PaneGroup>
```

## 예제

### 수직

`direction` prop을 사용하여 크기 조절 패널의 방향을 설정합니다.

<ComponentPreview name="resizable-vertical">

<div></div>

</ComponentPreview>

```svelte showLineNumbers {5}
<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable/index.js";
</script>

<Resizable.PaneGroup direction="vertical">
  <Resizable.Pane>One</Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane>Two</Resizable.Pane>
</Resizable.PaneGroup>
```

### 핸들

`ResizableHandle` 컴포넌트의 `withHandle` prop을 사용하여 핸들을 설정하거나 숨길 수 있습니다.

<ComponentPreview name="resizable-handle">

<div></div>

</ComponentPreview>

```svelte showLineNumbers {7}
<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable/index.js";
</script>

<Resizable.PaneGroup direction="vertical">
  <Resizable.Pane>One</Resizable.Pane>
  <Resizable.Handle withHandle />
  <Resizable.Pane>Two</Resizable.Pane>
</Resizable.PaneGroup>
```
