---
title: Tabs
description: 한 번에 하나씩 표시되는 계층화된 콘텐츠 섹션(탭 패널)의 집합입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/tabs
  doc: https://bits-ui.com/docs/components/tabs
  api: https://bits-ui.com/docs/components/tabs#api-reference
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

<ComponentPreview name="tabs-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="tabs" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

`bits-ui`를 설치합니다:

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
  import * as Tabs from "$lib/components/ui/tabs/index.js";
</script>
```

```svelte showLineNumbers
<Tabs.Root value="account" class="w-[400px]">
  <Tabs.List>
    <Tabs.Trigger value="account">계정</Tabs.Trigger>
    <Tabs.Trigger value="password">비밀번호</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">
    여기에서 계정을 변경하세요.
  </Tabs.Content>
  <Tabs.Content value="password">여기에서 비밀번호를 변경하세요.</Tabs.Content>
</Tabs.Root>
```
