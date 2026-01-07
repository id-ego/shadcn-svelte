---
title: Tooltip
description: 요소가 키보드 포커스를 받거나 마우스를 올렸을 때 관련 정보를 표시하는 팝업입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/tooltip
  doc: https://bits-ui.com/docs/components/tooltip
  api: https://bits-ui.com/docs/components/tooltip#api-reference
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

<ComponentPreview name="tooltip-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="tooltip" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

`bits-ui`를 설치합니다:

</Step>

<PMInstall command="bits-ui -D" />

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

`Tooltip.Provider` 컴포넌트는 루트 레이아웃에 한 번 배치하여 툴팁을 포함할 모든 콘텐츠를 감싸야 합니다. 이렇게 하면 프로바이더 내에서 한 번에 하나의 툴팁만 열리도록 보장합니다.

```svelte title="src/routes/+layout.svelte" showLineNumbers
<script lang="ts">
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";

  let { children } = $props();
</script>
```

```svelte showLineNumbers
<Tooltip.Provider>
  {@render children()}
</Tooltip.Provider>
```

그런 다음 앱의 어디에서나 툴팁을 사용할 수 있습니다:

```svelte
<script lang="ts">
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
</script>

<Tooltip.Root>
  <Tooltip.Trigger>마우스를 올리세요</Tooltip.Trigger>
  <Tooltip.Content>
    <p>라이브러리에 추가</p>
  </Tooltip.Content>
</Tooltip.Root>
```

### 중첩된 프로바이더

프로바이더를 중첩하여 서로 다른 설정을 가진 그룹을 만들 수 있습니다. 툴팁은 가장 가까운 조상 프로바이더를 사용합니다. 특정 영역에서 즉시 표시되는 툴팁을 원할 때 유용합니다:

```svelte
<Tooltip.Provider delayDuration={0}>
  <!-- 여기의 툴팁은 즉시 열립니다 -->
</Tooltip.Provider>
```

---

## 변경 이력

### 2025-12 툴팁 색상 업데이트

툴팁 색상을 업데이트하여 배경에는 전경색을, 전경에는 배경색을 사용하도록 했습니다.

`<Tooltip.Content />`에서 `bg-primary text-primary-foreground`를 `bg-foreground text-background`로 교체하세요.
