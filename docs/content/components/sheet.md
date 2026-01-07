---
title: Sheet
description: 화면의 주요 콘텐츠를 보완하는 콘텐츠를 표시하기 위해 Dialog 컴포넌트를 확장합니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/sheet
  doc: https://bits-ui.com/docs/components/dialog
  api: https://bits-ui.com/docs/components/dialog#api-reference
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

<ComponentPreview name="sheet-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="sheet" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

`bits-ui` 설치:

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
  import * as Sheet from "$lib/components/ui/sheet/index.js";
</script>
```

```svelte showLineNumbers
<Sheet.Root>
  <Sheet.Trigger>Open</Sheet.Trigger>
  <Sheet.Content>
    <Sheet.Header>
      <Sheet.Title>Are you sure absolutely sure?</Sheet.Title>
      <Sheet.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </Sheet.Description>
    </Sheet.Header>
  </Sheet.Content>
</Sheet.Root>
```

## 예제

### Side

`<Sheet.Content />`에 `side` 속성을 전달하여 컴포넌트가 나타날 화면의 가장자리를 지정합니다. 값은 `top`, `right`, `bottom` 또는 `left`가 될 수 있습니다.

### Size

CSS 클래스를 사용하여 시트의 크기를 조정할 수 있습니다:

```svelte showLineNumbers {3}
<Sheet.Root>
  <Sheet.Trigger>Open</Sheet.Trigger>
  <Sheet.Content class="w-[400px] sm:w-[540px]">
    <Sheet.Header>
      <Sheet.Title>Are you absolutely sure?</Sheet.Title>
      <Sheet.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </Sheet.Description>
    </Sheet.Header>
  </Sheet.Content>
</Sheet.Root>
```
