---
title: Field
description: 라벨, 컨트롤, 도움말 텍스트를 결합하여 접근 가능한 폼 필드와 그룹화된 입력을 구성합니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/field
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

<ComponentPreview name="field-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="field" />
{/snippet}
{#snippet manual()}
<Steps>

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
  import * as Field from "$lib/components/ui/field/index.js";
</script>
```

```svelte showLineNumbers
<Field.Set>
  <Field.Legend>프로필</Field.Legend>
  <Field.Description>인보이스 및 이메일에 표시됩니다.</Field.Description>
  <Field.Group>
    <Field.Field>
      <Field.Label for="name">전체 이름</Field.Label>
      <Input id="name" autoComplete="off" placeholder="홍길동" />
      <Field.Description
        >인보이스 및 이메일에 표시됩니다.</Field.Description
      >
    </Field.Field>
    <Field.Field>
      <Field.Label for="username">사용자 이름</Field.Label>
      <Input id="username" autoComplete="off" aria-invalid />
      <Field.Error>다른 사용자 이름을 선택하세요.</Field.Error>
    </Field.Field>
    <Field.Field orientation="horizontal">
      <Switch id="newsletter" />
      <Field.Label for="newsletter">뉴스레터 구독</Field.Label>
    </Field.Field>
  </Field.Group>
</Field.Set>
```

## 구조

`Field` 패밀리는 접근 가능한 폼을 구성하기 위해 설계되었습니다. 일반적인 필드 구조는 다음과 같습니다:

```svelte
<Field.Field>
  <Field.Label for="input-id">라벨</Field.Label>
  <!-- Input, Select, Switch, etc. -->
  <Field.Description>선택적 도움말 텍스트.</Field.Description>
  <Field.Error>유효성 검사 메시지.</Field.Error>
</Field.Field>
```

- `Field.Field`는 단일 필드의 핵심 래퍼입니다.
- `Field.Content`는 라벨과 설명을 그룹화하는 플렉스 컬럼입니다. 설명이 없으면 필수가 아닙니다.
- 관련 필드는 `Field.Group`으로 감싸고, 의미론적 그룹화를 위해 `Field.Set`과 `Field.Legend`를 사용하세요.

## 예제

### Input

<ComponentPreview name="field-input">

<div></div>

</ComponentPreview>

### Textarea

<ComponentPreview name="field-textarea">

<div></div>

</ComponentPreview>

### Select

<ComponentPreview name="field-select">

<div></div>

</ComponentPreview>

### Slider

<ComponentPreview name="field-slider">

<div></div>

</ComponentPreview>

### Fieldset

<ComponentPreview name="field-field-set-demo">

<div></div>

</ComponentPreview>

### Checkbox

<ComponentPreview name="field-checkbox">

<div></div>

</ComponentPreview>

### Radio

<ComponentPreview name="field-radio">

<div></div>

</ComponentPreview>

### Switch

<ComponentPreview name="field-switch">

<div></div>

</ComponentPreview>

### Choice Card

선택 가능한 필드 그룹을 만들려면 `Field` 컴포넌트를 `FieldLabel` 안에 감싸세요. 이는 `RadioItem`, `Checkbox`, `Switch` 컴포넌트와 함께 작동합니다.

<ComponentPreview name="field-choice-card">

<div></div>

</ComponentPreview>

### Field Group

`Field.Group`으로 `Field` 컴포넌트를 쌓으세요. 분할하려면 `Field.Separator`를 추가하세요.

<ComponentPreview name="field-field-group-demo">

<div></div>

</ComponentPreview>

### Responsive Layout

- **수직 필드:** 기본 방향은 라벨, 컨트롤, 도움말 텍스트를 쌓습니다. 모바일 우선 레이아웃에 이상적입니다.
- **수평 필드:** `Field`에 `orientation="horizontal"`을 설정하여 라벨과 컨트롤을 나란히 정렬합니다. 설명을 정렬 상태로 유지하려면 `Field.Content`와 함께 사용하세요.
- **반응형 필드:** 컨테이너 인식 부모 내에서 자동 컬럼 레이아웃을 위해 `orientation="responsive"`를 설정합니다. 특정 중단점에서 방향을 전환하려면 `Field.Group`에 `@container/field-group` 클래스를 적용하세요.

<ComponentPreview name="field-responsive-layout-demo">

<div></div>

</ComponentPreview>

## 유효성 검사 및 오류

- 전체 블록을 오류 상태로 전환하려면 `Field`에 `data-invalid`를 추가하세요.
- 보조 기술을 위해 입력 자체에 `aria-invalid`를 추가하세요.
- 오류 메시지를 필드와 정렬 상태로 유지하려면 컨트롤 바로 다음 또는 `FieldContent` 내부에 `FieldError`를 렌더링하세요.

```svelte
<Field.Field data-invalid>
  <Field.Label for="email">이메일</Field.Label>
  <Input id="email" type="email" aria-invalid />
  <Field.Error>유효한 이메일 주소를 입력하세요.</Field.Error>
</Field.Field>
```

## 접근성

- `Field.Set`과 `Field.Legend`는 키보드 및 보조 기술 사용자를 위해 관련 컨트롤을 그룹화합니다.
- `Field`는 `role="group"`을 출력하므로 중첩된 컨트롤이 결합될 때 `Field.Label` 및 `Field.Legend`에서 라벨링을 상속합니다.
- 스크린 리더가 명확한 섹션 경계를 만나도록 `Field.Separator`를 절제하여 적용하세요.
