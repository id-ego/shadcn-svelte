---
title: Aspect Ratio
description: 원하는 비율로 콘텐츠를 표시합니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/aspect-ratio
  doc: https://bits-ui.com/docs/components/aspect-ratio
  api: https://bits-ui.com/docs/components/aspect-ratio#api-reference
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

<ComponentPreview name="aspect-ratio-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="aspect-ratio" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

`bits-ui`를 설치합니다:

</Step>

<PMInstall command="bits-ui -D" />

<Step>

다음 코드를 프로젝트에 복사하여 붙여넣습니다.

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
  import { AspectRatio } from "$lib/components/ui/aspect-ratio/index.js";
</script>
```

```svelte showLineNumbers
<div class="w-[450px]">
  <AspectRatio ratio={16 / 9} class="bg-muted">
    <img src="..." alt="..." class="rounded-md object-cover" />
  </AspectRatio>
</div>
```
