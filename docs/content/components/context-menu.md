---
title: Context Menu
description: 우클릭으로 트리거되는 메뉴를 표시합니다. 작업이나 기능 모음을 사용자에게 제공합니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/context-menu
  doc: https://bits-ui.com/docs/components/context-menu
  api: https://bits-ui.com/docs/components/context-menu#api-reference
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

<ComponentPreview name="context-menu-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="context-menu" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

Install `bits-ui`:

</Step>

<PMInstall command="bits-ui -D" />

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
  import * as ContextMenu from "$lib/components/ui/context-menu/index.js";
</script>
```

```svelte showLineNumbers
<ContextMenu.Root>
  <ContextMenu.Trigger>우클릭</ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item>프로필</ContextMenu.Item>
    <ContextMenu.Item>결제</ContextMenu.Item>
    <ContextMenu.Item>팀</ContextMenu.Item>
    <ContextMenu.Item>구독</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>
```
