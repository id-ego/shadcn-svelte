---
title: Collapsible
description: 패널을 확장하거나 접을 수 있는 인터랙티브 컴포넌트입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/collapsible
  doc: https://bits-ui.com/docs/components/collapsible
  api: https://bits-ui.com/docs/components/collapsible#api-reference
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

<ComponentPreview name="collapsible-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="collapsible" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

Install `bits-ui`:

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
  import * as Collapsible from "$lib/components/ui/collapsible/index.js";
</script>
```

```svelte showLineNumbers
<Collapsible.Root>
  <Collapsible.Trigger>내 프로젝트에서 사용할 수 있나요?</Collapsible.Trigger>
  <Collapsible.Content>
    네. 개인 및 상업용 프로젝트에 무료로 사용할 수 있습니다. 출처 표시가 필요하지 않습니다.
  </Collapsible.Content>
</Collapsible.Root>
```
