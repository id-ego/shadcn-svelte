---
title: Dropdown Menu
description: 버튼을 통해 트리거되는 액션 또는 기능 집합과 같은 메뉴를 사용자에게 표시합니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/dropdown-menu
  doc: https://bits-ui.com/docs/components/dropdown-menu
  api: https://bits-ui.com/docs/components/dropdown-menu#api-reference
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

<ComponentPreview name="dropdown-menu-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="dropdown-menu" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

Install `bits-ui`:

</Step>

<PMInstall command="bits-ui -D" />

<Step>

Copy and paste the following code into your project.

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
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
</script>
```

```svelte showLineNumbers
<DropdownMenu.Root>
  <DropdownMenu.Trigger>열기</DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.Label>내 계정</DropdownMenu.Label>
      <DropdownMenu.Separator />
      <DropdownMenu.Item>프로필</DropdownMenu.Item>
      <DropdownMenu.Item>결제</DropdownMenu.Item>
      <DropdownMenu.Item>팀</DropdownMenu.Item>
      <DropdownMenu.Item>구독</DropdownMenu.Item>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

## 예제

### 체크박스

<ComponentPreview name="dropdown-menu-checkboxes">

<div></div>

</ComponentPreview>

### 라디오 그룹

<ComponentPreview name="dropdown-menu-radio-group">

<div></div>

</ComponentPreview>

### 대화상자

드롭다운 메뉴에서 대화상자를 여는 방법을 보여주는 예제입니다.

```svelte showLineNumbers
<DropdownMenu.Root>
  <DropdownMenu.Trigger class={buttonVariants({ variant: "outline" })}>
    액션
  </DropdownMenu.Trigger>
</DropdownMenu.Root>
```

<ComponentPreview name="dropdown-menu-dialog" >

<div></div>

</ComponentPreview>

## 변경 기록

### 2024-10-30 DropdownMenu.SubTrigger 클래스

- `<DropdownMenu.SubTrigger>`에 `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`를 추가하여 드롭다운 메뉴 서브 트리거 내부의 아이콘을 자동으로 스타일링하도록 했습니다.
- `<DropdownMenu.SubTrigger>` 내부의 아이콘에서 `size-4`를 제거했습니다. 이제 부모 `<DropdownMenu.SubTrigger>`에서 처리합니다.
