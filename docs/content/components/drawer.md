---
title: Drawer
description: Svelte용 드로어 컴포넌트입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/drawer
  doc: https://github.com/huntabyte/vaul-svelte
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

<ComponentPreview name="drawer-demo">

<div></div>

</ComponentPreview>

## 소개

Drawer는 [Emil Kowalski](https://twitter.com/emilkowalski_)의 [Vaul](https://vaul.emilkowal.ski)을 Svelte로 포팅한 [Vaul Svelte](https://vaul-svelte.com) 기반으로 만들어졌습니다.

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="drawer" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

`vaul-svelte`를 설치합니다:

</Step>

<PMInstall command="vaul-svelte@next -D" />

<Step>

다음 코드를 프로젝트에 복사하여 붙여넣습니다.

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
  import * as Drawer from "$lib/components/ui/drawer/index.js";
</script>
```

```svelte showLineNumbers
<Drawer.Root>
  <Drawer.Trigger>Open</Drawer.Trigger>
  <Drawer.Content>
    <Drawer.Header>
      <Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
      <Drawer.Description>This action cannot be undone.</Drawer.Description>
    </Drawer.Header>
    <Drawer.Footer>
      <Button>Submit</Button>
      <Drawer.Close>Cancel</Drawer.Close>
    </Drawer.Footer>
  </Drawer.Content>
</Drawer.Root>
```

## 예제

### 반응형 대화상자

`Dialog`와 `Drawer` 컴포넌트를 결합하여 반응형 대화상자를 만들 수 있습니다. 데스크톱에서는 `Dialog`로, 모바일에서는 `Drawer`로 렌더링됩니다.

<ComponentPreview name="drawer-dialog">

<div></div>

</ComponentPreview>
