---
title: Sonner
description: Svelte를 위한 토스트 컴포넌트입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/sonner
  doc: https://svelte-sonner.vercel.app/
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

<ComponentPreview name="sonner-demo">

<div></div>

</ComponentPreview>

## 소개

Sonner 컴포넌트는 [svelte-sonner](https://svelte-sonner.vercel.app/)에서 제공하며, [Emil Kowalski](https://twitter.com/emilkowalski_)가 React용으로 만든 [Sonner](https://sonner.emilkowal.ski/)를 Svelte로 포팅한 것입니다.

## 설치

<Step>테마 지원 설정</Step>

기본적으로 Sonner는 사용자의 시스템 환경설정을 사용하여 라이트 또는 다크 테마를 표시합니다. 이를 우회하려면 컴포넌트에 커스텀 `theme` prop을 전달하거나, [mode-watcher](https://github.com/svecosystem/mode-watcher)를 사용하면 원하는 경우 `dark` 또는 `light` 모드로 하드코딩할 수 있습니다.

다크 모드 지원 설정에 대한 자세한 내용은 [여기](/docs/dark-mode)를 참조하세요.

다크 모드 지원을 원하지 않는 경우 CLI로 설치한 후 `mode-watcher`를 제거하고 컴포넌트에서 `theme` prop을 제거하거나, 컴포넌트를 수동으로 설치하고 `mode-watcher`를 포함하지 않으면 됩니다.

<InstallTabs>
{#snippet cli()}
<Steps>

<Step>다음 명령어를 실행하세요:</Step>
<PMAddComp name="sonner" />

<Step>Toaster 컴포넌트 추가</Step>

```svelte showLineNumbers title="+layout.svelte" {2,6}
<script lang="ts">
  import { Toaster } from "$lib/components/ui/sonner/index.js";
  let { children } = $props();
</script>

<Toaster />

{@render children?.()}
```

</Steps>
{/snippet}
{#snippet manual()}

<Steps>
<Step>

`svelte-sonner` 설치:

</Step>

<PMInstall command="svelte-sonner -D" />

<Step>

다음 코드를 프로젝트에 복사하여 붙여넣으세요.

</Step>
{#if viewerData}
	<ComponentSource item={viewerData} data-llm-ignore/>
{/if}

<Step>Toaster 컴포넌트 추가</Step>

```svelte showLineNumbers title="+layout.svelte" {2,6}
<script lang="ts">
  import { Toaster } from "$lib/components/ui/sonner/index.js";
  let { children } = $props();
</script>

<Toaster />

{@render children?.()}
```

</Steps>
{/snippet}
</InstallTabs>

## 사용법

```svelte
<script lang="ts">
  import { toast } from "svelte-sonner";
  import { Button } from "$lib/components/ui/button/index.js";
</script>
```

```svelte
<Button onclick={() => toast("안녕하세요")}>토스트 표시</Button>
```

## 예제

<ComponentPreview name="sonner-types">

<div></div>

</ComponentPreview>

## 변경 이력

### 2025-12 아이콘

Sonner 컴포넌트를 `lucide`의 아이콘을 사용하도록 업데이트했습니다. `sonner.svelte` 파일을 업데이트하여 새 아이콘을 사용하세요.

```svelte showLineNumbers title="components/ui/sonner.svelte" {2-6,22-36}
<script lang="ts">
  import CircleCheckIcon from "@lucide/svelte/icons/circle-check";
  import InfoIcon from "@lucide/svelte/icons/info";
  import Loader2Icon from "@lucide/svelte/icons/loader-2";
  import OctagonXIcon from "@lucide/svelte/icons/octagon-x";
  import TriangleAlertIcon from "@lucide/svelte/icons/triangle-alert";

  import {
    Toaster as Sonner,
    type ToasterProps as SonnerProps,
  } from "svelte-sonner";
  import { mode } from "mode-watcher";

  let { ...restProps }: SonnerProps = $props();
</script>

<Sonner
  theme={mode.current}
  class="toaster group"
  style="--normal-bg: var(--color-popover); --normal-text: var(--color-popover-foreground); --normal-border: var(--color-border);"
  {...restProps}
  >{#snippet loadingIcon()}
    <Loader2Icon class="size-4 animate-spin" />
  {/snippet}
  {#snippet successIcon()}
    <CircleCheckIcon class="size-4" />
  {/snippet}
  {#snippet errorIcon()}
    <OctagonXIcon class="size-4" />
  {/snippet}
  {#snippet infoIcon()}
    <InfoIcon class="size-4" />
  {/snippet}
  {#snippet warningIcon()}
    <TriangleAlertIcon class="size-4" />
  {/snippet}
</Sonner>
```
