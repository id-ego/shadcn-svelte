---
title: Empty
description: 빈 상태를 표시하는 Empty 컴포넌트입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/empty
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

<ComponentPreview name="empty-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="empty" />
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
  import * as Empty from "$lib/components/ui/empty/index.js";
  import FolderCodeIcon from "@tabler/icons-svelte/icons/folder-code";
</script>
```

```svelte
<Empty.Root>
  <Empty.Header>
    <Empty.Media variant="icon">
      <FolderCodeIcon />
    </Empty.Media>
    <Empty.Title>No data</Empty.Title>
    <Empty.Description>No data found</Empty.Description>
  </Empty.Header>
  <Empty.Content>
    <Button>Add data</Button>
  </Empty.Content>
</Empty.Root>
```

## 예제

### 외곽선

`border` 유틸리티 클래스를 사용하여 외곽선이 있는 빈 상태를 만들 수 있습니다.

<ComponentPreview name="empty-outline-demo">

<div></div>

</ComponentPreview>

### 배경

`bg-*` 및 `bg-gradient-*` 유틸리티를 사용하여 빈 상태에 배경을 추가할 수 있습니다.

<ComponentPreview name="empty-background-demo">

<div></div>

</ComponentPreview>

### 아바타

`EmptyMedia` 컴포넌트를 사용하여 빈 상태에 아바타를 표시할 수 있습니다.

<ComponentPreview name="empty-avatar-demo">

<div></div>

</ComponentPreview>

### 아바타 그룹

`EmptyMedia` 컴포넌트를 사용하여 빈 상태에 아바타 그룹을 표시할 수 있습니다.

<ComponentPreview name="empty-avatar-group-demo">

<div></div>

</ComponentPreview>

### InputGroup

`EmptyContent` 컴포넌트에 `InputGroup` 컴포넌트를 추가할 수 있습니다.

<ComponentPreview name="empty-input-group-demo">

<div></div>

</ComponentPreview>
