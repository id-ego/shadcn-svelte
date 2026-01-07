---
title: Calendar
description: 사용자가 날짜를 선택할 수 있는 캘린더 컴포넌트입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/calendar
  doc: https://bits-ui.com/docs/components/calendar
  api: https://bits-ui.com/docs/components/calendar#api-reference
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

<ComponentPreview name="calendar-demo">

<div></div>

</ComponentPreview>

## 블록

캘린더 컴포넌트를 구축하는 데 사용할 수 있는 30개 이상의 캘린더 블록 컬렉션을 제공합니다.

모든 캘린더 블록은 [블록 라이브러리](/blocks/calendar) 페이지에서 확인하세요.

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="calendar" />
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

## 소개

`<Calendar />` 컴포넌트는 [Bits UI Calendar](https://www.bits-ui.com/docs/components/calendar) 컴포넌트를 기반으로 구축되었으며, [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) 패키지를 사용하여 날짜를 처리합니다.

범위 캘린더를 찾고 있다면 [Range Calendar](/docs/components/range-calendar) 컴포넌트를 확인하세요.

## 날짜 선택기

`<Calendar />` 컴포넌트를 사용하여 날짜 선택기를 만들 수 있습니다. 자세한 내용은 [Date Picker](/docs/components/date-picker) 페이지를 참조하세요.

## 예제

### 범위 캘린더

<ComponentPreview name="calendar-02" class="**:[.preview]:h-auto lg:**:[.preview]:h-[450px]">

<div></div>

</ComponentPreview>

### 월 및 연도 선택기

<ComponentPreview name="calendar-13">

<div></div>

</ComponentPreview>

### 생년월일 선택기

<ComponentPreview name="calendar-22">

<div></div>

</ComponentPreview>

### 날짜 및 시간 선택기

<ComponentPreview name="calendar-24">

<div></div>

</ComponentPreview>

### 자연어 선택기

이 컴포넌트는 `chrono-node` 라이브러리를 사용하여 자연어 날짜를 파싱합니다.

<ComponentPreview name="calendar-29">

<div></div>

</ComponentPreview>

## 업그레이드 가이드

다음 명령을 실행하여 최신 버전의 `<Calendar />` 컴포넌트로 업그레이드할 수 있습니다:

<PMAddComp name="calendar" />

기존 파일을 덮어쓸 것인지 묻는 메시지가 표시되면 `Yes`를 선택하세요. **`Calendar` 컴포넌트를 변경한 경우 새 버전과 변경 사항을 병합해야 합니다.**

#### 블록 설치

`Calendar` 컴포넌트를 업그레이드한 후 다음과 같이 새 블록을 추가할 수 있습니다:

<PMAddComp name="calendar-02" />

이렇게 하면 최신 버전의 캘린더 블록이 추가됩니다.
