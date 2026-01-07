---
title: 범위 캘린더
description: 사용자가 날짜 범위를 선택할 수 있는 캘린더 컴포넌트입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/range-calendar
  doc: https://bits-ui.com/docs/components/range-calendar
  api: https://bits-ui.com/docs/components/range-calendar#api-reference
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

<ComponentPreview name="range-calendar-demo">

<div></div>

</ComponentPreview>

## 소개

`<RangeCalendar />` 컴포넌트는 [Bits Range Calendar](https://www.bits-ui.com/docs/components/range-calendar) 컴포넌트를 기반으로 구축되었으며, 날짜 처리를 위해 [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) 패키지를 사용합니다.

## 블록

30개 이상의 [캘린더 블록](/blocks/calendar)에서 `RangeCalendar` 컴포넌트가 실제로 사용되는 것을 확인할 수 있습니다.

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="range-calendar" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

`bits-ui`와 `@internationalized/date`를 설치하세요:

</Step>

<PMInstall command="bits-ui @internationalized/date -D" />

<Step>

다음 코드를 프로젝트에 복사하여 붙여넣으세요.

</Step>
{#if viewerData}
	<ComponentSource item={viewerData} data-llm-ignore/>
{/if}

</Steps>
{/snippet}
</InstallTabs>
