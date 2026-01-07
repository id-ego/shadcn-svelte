---
title: Select
description: 버튼으로 트리거되는 옵션 목록을 표시합니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/select
  doc: https://bits-ui.com/docs/components/select
  api: https://bits-ui.com/docs/components/select#api-reference
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

<ComponentPreview name="select-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="select" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

`bits-ui`를 설치합니다:

</Step>

<PMInstall command="bits-ui -D" />

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
  import * as Select from "$lib/components/ui/select/index.js";
</script>
```

```svelte showLineNumbers
<Select.Root type="single">
  <Select.Trigger class="w-[180px]"></Select.Trigger>
  <Select.Content>
    <Select.Item value="light">라이트</Select.Item>
    <Select.Item value="dark">다크</Select.Item>
    <Select.Item value="system">시스템</Select.Item>
  </Select.Content>
</Select.Root>
```

## 예제

### 스크롤 가능

<ComponentPreview name="select-scrollable">

<div></div>

</ComponentPreview>
