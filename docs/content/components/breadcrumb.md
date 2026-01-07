---
title: Breadcrumb
description: 링크의 계층 구조를 사용하여 현재 리소스로의 경로를 표시합니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/breadcrumb
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

<ComponentPreview name="breadcrumb-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="breadcrumb" />
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
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
</script>
```

```svelte showLineNumbers
<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">홈</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/components">컴포넌트</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Page>브레드크럼</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>
```

## 예제

### 커스텀 구분자

`<Breadcrumb.Separator />`의 `<slot>`에 커스텀 컴포넌트를 사용하여 커스텀 구분자를 만들 수 있습니다.

<ComponentPreview name="breadcrumb-separator">

<div></div>

</ComponentPreview>

```svelte showLineNumbers {2,11-13}
<script lang="ts">
  import SlashIcon from "@lucide/svelte/icons/slash";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">홈</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator>
      <SlashIcon />
    </Breadcrumb.Separator>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/components">컴포넌트</Breadcrumb.Link>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>
```

---

### 드롭다운

`<Breadcrumb.Item />`을 `<DropdownMenu />`와 결합하여 브레드크럼에 드롭다운을 만들 수 있습니다.

<ComponentPreview name="breadcrumb-dropdown">

<div></div>

</ComponentPreview>

```svelte showLineNumbers {2-5,11-22}
<script lang="ts">
  import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
  import SlashIcon from "@lucide/svelte/icons/slash";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
</script>

<!-- ... -->

<Breadcrumb.Item>
  <DropdownMenu.Root>
    <DropdownMenu.Trigger class="flex items-center gap-1">
      컴포넌트
      <ChevronDownIcon class="size-4" />
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="start">
      <DropdownMenu.Item>문서</DropdownMenu.Item>
      <DropdownMenu.Item>테마</DropdownMenu.Item>
      <DropdownMenu.Item>GitHub</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</Breadcrumb.Item>
```

---

### 축약

브레드크럼이 너무 길 때 축약된 상태를 표시하기 위한 `<Breadcrumb.Ellipsis />` 컴포넌트를 제공합니다.

<ComponentPreview name="breadcrumb-ellipsis">

<div></div>

</ComponentPreview>

```svelte showLineNumbers {2,9}
<script lang="ts">
 import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
</script>

<Breadcrumb.Root>
 <Breadcrumb.List>
     {/* ... */}
  <Breadcrumb.Item>
   <Breadcrumb.Ellipsis />
  </Breadcrumb.Item>
    {/* ... */}
 </Breadcrumb.List>
</Breadcrumb.Root>
```

---

### 링크 컴포넌트

라우팅 라이브러리의 커스텀 링크 컴포넌트를 사용하려면 `<Breadcrumb.Link />`에 `asChild` prop을 사용할 수 있습니다.

<ComponentPreview name="breadcrumb-link">

<div></div>

</ComponentPreview>

```svelte showLineNumbers {2,7-9}
<script lang="ts">
 import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
</script>

<Breadcrumb.Root>
 <Breadcrumb.List>
  <Breadcrumb.Item>
   <Breadcrumb.Link href="/">홈</Breadcrumb.Link>
  </Breadcrumb.Item>
    {/* ... */}
 </Breadcrumb.List>
</Breadcrumb.Root>
```

---

### 반응형

`<Breadcrumb.Item />`을 `<Breadcrumb.Ellipsis />`, `<DropdownMenu />`, `<Drawer />`와 결합한 반응형 브레드크럼의 예제입니다.

데스크톱에서는 드롭다운을 표시하고 모바일에서는 드로어를 표시합니다.

<ComponentPreview name="breadcrumb-responsive">

<div></div>

</ComponentPreview>
