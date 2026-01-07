---
title: Svelte
description: Svelte 사이트에 다크 모드 추가하기
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";
</script>

<Steps>

## mode-watcher 설치

먼저 `mode-watcher`를 설치합니다:

<PMInstall command="mode-watcher" />

## ModeWatcher 컴포넌트 추가

`ModeWatcher` 컴포넌트를 import하고 루트 레이아웃에서 사용합니다:

```svelte title="src/routes/+layout.svelte" showLineNumbers {3,7}
<script lang="ts">
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";
  let { children } = $props();
</script>

<ModeWatcher />
{@render children?.()}
```

## 모드 토글 추가

라이트 모드와 다크 모드를 전환할 수 있는 모드 토글을 사이트에 배치합니다.

<ComponentPreview name="dark-mode-light-switch">

<div></div>

</ComponentPreview>

<ComponentPreview name="dark-mode-dropdown-menu">

<div></div>

</ComponentPreview>

</Steps>
