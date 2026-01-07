---
title: Navigation Menu
description: 웹사이트를 탐색하기 위한 링크 모음입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/navigation-menu
  doc: https://bits-ui.com/docs/components/navigation-menu
  api: https://bits-ui.com/docs/components/navigation-menu#api-reference
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

<ComponentPreview name="navigation-menu-demo" align="start">

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="navigation-menu" />
{/snippet}

{#snippet manual()}
<Steps>
<Step>

`bits-ui`를 설치하세요:

</Step>
<PMInstall command="bits-ui -D" />
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

```svelte showLineNumbers
<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
</script>
```

```svelte showLineNumbers
<NavigationMenu.Root>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Item One</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <NavigationMenu.Link>Link</NavigationMenu.Link>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>
```
