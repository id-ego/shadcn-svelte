---
title: Accordion
description: 각각 콘텐츠 섹션을 표시하는 상호작용 가능한 제목들의 수직 스택입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/accordion
  doc: https://bits-ui.com/docs/components/accordion
  api: https://bits-ui.com/docs/components/accordion#api-reference
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import ComponentSource from "$lib/components/component-source.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";
	import Step from "$lib/components/step.svelte";

	let { viewerData } = $props();

</script>

<ComponentPreview name="accordion-demo" class="[&_.preview>[data-orientation=vertical]]:sm:max-w-[80%] **:[.preview]:min-h-[400px]" description="세 개의 아이템을 가진 아코디언" align="start">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>

{#snippet cli()}

<PMAddComp name="accordion" />

{/snippet}

{#snippet manual()}

<Steps>

<Step>

`bits-ui` 설치

</Step>

<PMInstall command="bits-ui" />

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
  import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>
```

```svelte showLineNumbers
<Accordion.Root type="single">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```
