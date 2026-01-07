---
title: Switch
description: 사용자가 체크됨과 체크 안 됨 사이를 토글할 수 있는 컨트롤입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/switch
  doc: https://bits-ui.com/docs/components/switch
  api: https://bits-ui.com/docs/components/switch#api-reference
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

<ComponentPreview name="switch-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="switch" />
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

```svelte
<script lang="ts">
  import { Switch } from "$lib/components/ui/switch/index.js";
</script>
```

```svelte
<Switch />
```
