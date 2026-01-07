---
title: Native Select
description: 일관된 디자인 시스템과 통합된 스타일이 적용된 네이티브 HTML select 요소입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/native-select
---

<script>
    import ComponentPreview from "$lib/components/component-preview.svelte";
	import ComponentSource from "$lib/components/component-source.svelte";
    import PMAddComp from "$lib/components/pm-add-comp.svelte";
    import InstallTabs from "$lib/components/install-tabs.svelte";

	let { viewerData } = $props();
    import Step from "$lib/components/step.svelte";
    import Steps from "$lib/components/steps.svelte";
    import Callout from "$lib/components/callout.svelte";
    import InfoIcon from "@lucide/svelte/icons/info";
</script>

<Callout variant="info" icon={InfoIcon} class="!translate-y-[3px]" >

스타일이 적용된 셀렉트 컴포넌트는 [Select](/docs/components/select) 컴포넌트를 참고하세요.

</Callout>

<ComponentPreview name="native-select-demo" />

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="native-select" />
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

```svelte showLineNumbers
<script lang="ts">
  import * as NativeSelect from "$lib/components/ui/native-select/index.js";
</script>
```

```svelte showLineNumbers
<NativeSelect.Root>
  <NativeSelect.Option value="">Select a fruit</NativeSelect.Option>
  <NativeSelect.Option value="apple">Apple</NativeSelect.Option>
  <NativeSelect.Option value="banana">Banana</NativeSelect.Option>
  <NativeSelect.Option value="blueberry">Blueberry</NativeSelect.Option>
  <NativeSelect.Option value="grapes" disabled>Grapes</NativeSelect.Option>
  <NativeSelect.Option value="pineapple">Pineapple</NativeSelect.Option>
</NativeSelect.Root>
```

## 예제

### 그룹 사용

`NativeSelect.OptGroup`을 사용하여 옵션을 더 나은 분류로 구성합니다.

<ComponentPreview name="native-select-groups" >

<div></div>

</ComponentPreview>

```svelte showLineNumbers
<NativeSelect.Root>
  <NativeSelect.Option value="">Select a food</NativeSelect.Option>
  <NativeSelect.OptGroup label="Fruits">
    <NativeSelect.Option value="apple">Apple</NativeSelect.Option>
    <NativeSelect.Option value="banana">Banana</NativeSelect.Option>
    <NativeSelect.Option value="blueberry">Blueberry</NativeSelect.Option>
  </NativeSelect.OptGroup>
  <NativeSelect.OptGroup label="Vegetables">
    <NativeSelect.Option value="carrot">Carrot</NativeSelect.Option>
    <NativeSelect.Option value="broccoli">Broccoli</NativeSelect.Option>
    <NativeSelect.Option value="spinach">Spinach</NativeSelect.Option>
  </NativeSelect.OptGroup>
</NativeSelect.Root>
```

### 비활성화 상태

개별 옵션이나 전체 셀렉트 컴포넌트를 비활성화합니다.

<ComponentPreview name="native-select-disabled" >

<div></div>

</ComponentPreview>

### 유효하지 않은 상태

`aria-invalid` 속성과 오류 스타일로 유효성 검사 오류를 표시합니다.

<ComponentPreview name="native-select-invalid" >

<div></div>

</ComponentPreview>

```svelte showLineNumbers
<NativeSelect.Root aria-invalid="true">
  <NativeSelect.Option value="">Select a country</NativeSelect.Option>
  <NativeSelect.Option value="us">United States</NativeSelect.Option>
  <NativeSelect.Option value="uk">United Kingdom</NativeSelect.Option>
  <NativeSelect.Option value="ca">Canada</NativeSelect.Option>
</NativeSelect.Root>
```

## 네이티브 셀렉트 vs 셀렉트

- 네이티브 브라우저 동작, 더 나은 성능 또는 모바일에 최적화된 드롭다운이 필요한 경우 `NativeSelect`를 사용하세요.
- 커스텀 스타일링, 애니메이션 또는 복잡한 상호작용이 필요한 경우 `Select`를 사용하세요.

`NativeSelect` 컴포넌트는 디자인 시스템과 일치하는 일관된 스타일로 네이티브 HTML select 기능을 제공합니다.

## 접근성

- 컴포넌트는 모든 네이티브 HTML select 접근성 기능을 유지합니다.
- 스크린 리더는 화살표 키를 사용하여 옵션을 탐색할 수 있습니다.
- 셰브론 아이콘은 중복을 피하기 위해 `aria-hidden="true"`로 표시됩니다.
- 필요한 경우 추가 컨텍스트를 위해 `aria-label` 또는 `aria-labelledby`를 사용하세요.

```tsx showLineNumbers
<NativeSelect.Root aria-label="Choose your preferred language">
  <NativeSelect.Option value="en">English</NativeSelect.Option>
  <NativeSelect.Option value="es">Spanish</NativeSelect.Option>
  <NativeSelect.Option value="fr">French</NativeSelect.Option>
</NativeSelect.Root>
```

## API 레퍼런스

### NativeSelect.Root

네이티브 HTML select 요소를 감싸는 메인 셀렉트 컴포넌트입니다.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

다른 모든 props는 기본 `<select>` 요소로 전달됩니다.

```svelte
<NativeSelect.Root>
  <NativeSelect.Option value="option1">Option 1</NativeSelect.Option>
  <NativeSelect.Option value="option2">Option 2</NativeSelect.Option>
</NativeSelect.Root>
```

### NativeSelect.Option

셀렉트 내의 개별 옵션을 나타냅니다.

| Prop       | Type      | Default |
| ---------- | --------- | ------- |
| `value`    | `string`  |         |
| `disabled` | `boolean` | `false` |
| `class`    | `string`  |         |

다른 모든 props는 기본 `<option>` 요소로 전달됩니다.

```svelte
<NativeSelect.Option value="apple">Apple</NativeSelect.Option>
<NativeSelect.Option value="banana" disabled>Banana</NativeSelect.Option>
```

### NativeSelect.OptGroup

더 나은 구성을 위해 관련된 옵션을 그룹화합니다.

| Prop       | Type      | Default |
| ---------- | --------- | ------- |
| `label`    | `string`  |         |
| `disabled` | `boolean` | `false` |
| `class`    | `string`  |         |

다른 모든 props는 기본 `<optgroup>` 요소로 전달됩니다.

```svelte
<NativeSelect.OptGroup label="Fruits">
  <NativeSelect.Option value="apple">Apple</NativeSelect.Option>
  <NativeSelect.Option value="banana">Banana</NativeSelect.Option>
</NativeSelect.OptGroup>
```
