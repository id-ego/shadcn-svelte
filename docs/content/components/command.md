---
title: Command
description: 빠르고 조합 가능한 비스타일 커맨드 메뉴 컴포넌트입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/command
  doc: https://bits-ui.com/docs/components/command
  api: https://bits-ui.com/docs/components/command#api-reference
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import ComponentSource from "$lib/components/component-source.svelte";
	import Callout from "$lib/components/callout.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import Step from "$lib/components/step.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";

	let { viewerData } = $props();
</script>

<ComponentPreview name="command-demo" align="start" class="[&_.preview>div]:max-w-[450px]">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="command" />
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
  import * as Command from "$lib/components/ui/command/index.js";
</script>
```

```svelte showLineNumbers
<Command.Root>
  <Command.Input placeholder="명령어를 입력하거나 검색하세요..." />
  <Command.List>
    <Command.Empty>결과를 찾을 수 없습니다.</Command.Empty>
    <Command.Group heading="제안">
      <Command.Item>캘린더</Command.Item>
      <Command.Item>이모지 검색</Command.Item>
      <Command.Item>계산기</Command.Item>
    </Command.Group>
    <Command.Separator />
    <Command.Group heading="설정">
      <Command.Item>프로필</Command.Item>
      <Command.Item>결제</Command.Item>
      <Command.Item>설정</Command.Item>
    </Command.Group>
  </Command.List>
</Command.Root>
```

## 예제

### Dialog

<ComponentPreview name="command-dialog">

<div></div>

</ComponentPreview>

대화상자에 커맨드 메뉴를 표시하려면 `<Command.Root />` 대신 `<Command.Dialog />` 컴포넌트를 사용하세요. `<Dialog.Root />`와 `<Command.Root />` 컴포넌트의 props를 모두 받습니다.

```svelte title="lib/components/example-command-menu.svelte" showLineNumbers
<script lang="ts">
  import * as Command from "$lib/components/ui/command/index.js";
  import { onMount } from "svelte";

  let open = $state(false);

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      open = !open;
    }
  }
</script>

<svelte:document onkeydown={handleKeydown} />

<Command.Dialog bind:open>
  <Command.Input placeholder="명령어를 입력하거나 검색하세요..." />
  <Command.List>
    <Command.Empty>결과를 찾을 수 없습니다.</Command.Empty>
    <Command.Group heading="제안">
      <Command.Item>캘린더</Command.Item>
      <Command.Item>이모지 검색</Command.Item>
      <Command.Item>계산기</Command.Item>
    </Command.Group>
  </Command.List>
</Command.Dialog>
```

### Combobox

`<Command />` 컴포넌트를 콤보박스로 사용할 수 있습니다. 자세한 내용은 [콤보박스](/docs/components/combobox) 페이지를 참고하세요.

## 변경 이력

### 2024-10-30 아이콘 클래스

- `<Command.Item>` 컴포넌트에 `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`를 추가하여 내부 아이콘이 자동으로 스타일링되도록 했습니다.
