---
title: Button
description: 버튼 또는 버튼처럼 보이는 컴포넌트를 표시합니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/button
  api: https://bits-ui.com/docs/components/button#api-reference
---

<script>
  import Callout from "$lib/components/callout.svelte";
  import InfoIcon from "@lucide/svelte/icons/info";
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import ComponentSource from "$lib/components/component-source.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";
	import Step from "$lib/components/step.svelte";

	let { viewerData, links } = $props();
</script>

<Callout variant="info" icon={InfoIcon}>

**업데이트:** 버튼 컴포넌트에 새로운 크기인 `icon-sm`과 `icon-lg`를 추가했습니다. 자세한 내용은
[변경 이력](/docs/components/button#changelog)을 참고하세요. 프로젝트를 업데이트하려면
안내에 따라 진행하세요.

</Callout>

<ComponentPreview name="button-demo" class="mb-4">

<div></div>

</ComponentPreview>

```svelte showLineNumbers
<Button variant="outline">Button</Button>
<Button variant="outline" size="icon" aria-label="Submit">
  <ArrowUpIcon />
</Button>
```

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="button" />
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

```svelte
<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button variant="outline">Button</Button>
```

## 예제

### Size

<ComponentPreview name="button-size" class="mb-4" >

<div></div>

</ComponentPreview>

```svelte
<!-- Small -->
<Button size="sm" variant="outline">Small</Button>
<Button size="icon-sm" aria-label="Submit" variant="outline">
  <ArrowUpRightIcon />
</Button>

<!-- Medium -->
<Button variant="outline">Default</Button>
<Button size="icon" aria-label="Submit" variant="outline">
  <ArrowUpRightIcon />
</Button>

<!-- Large -->
<Button size="lg" variant="outline">Large</Button>
<Button size="icon-lg" aria-label="Submit" variant="outline">
  <ArrowUpRightIcon />
</Button>
```

### Default

<ComponentPreview name="button-default" description="A primary button" class="mb-4">

<div></div>

</ComponentPreview>

```svelte
<Button>Button</Button>
```

### Outline

<ComponentPreview name="button-outline" description="A button using the outline variant." class="mb-4">
  
<div></div>

</ComponentPreview>

```svelte
<Button variant="outline">Outline</Button>
```

### Secondary

<ComponentPreview name="button-secondary" description="A secondary button" class="mb-4">
  
<div></div>
  
</ComponentPreview>

```svelte
<Button variant="secondary">Secondary</Button>
```

### Ghost

<ComponentPreview name="button-ghost" description="A button using the ghost variant" class="mb-4">
  
<div></div>

</ComponentPreview>

```svelte
<Button variant="ghost">Ghost</Button>
```

### Destructive

<ComponentPreview name="button-destructive" description="A destructive button" class="mb-4">

<div></div>

</ComponentPreview>

```svelte
<Button variant="destructive">Destructive</Button>
```

### Link

<ComponentPreview name="button-link" description="A button using the link variant." class="mb-4">

<div></div>

</ComponentPreview>

```svelte
<Button variant="link">Link</Button>
```

### Icon

<ComponentPreview name="button-icon" description="An icon button" class="mb-4">

<div></div>

</ComponentPreview>

```svelte
<Button variant="outline" size="icon" aria-label="Submit">
  <CircleFadingArrowUpIcon />
</Button>
```

### 아이콘과 함께

아이콘과 텍스트 사이의 간격은 버튼 크기에 따라 자동으로 조정됩니다. 아이콘에 별도의 여백을 설정할 필요가 없습니다.

<ComponentPreview name="button-with-icon" description="A button with an icon" class="mb-4">

<div></div>

</ComponentPreview>

```svelte
<Button variant="outline" size="sm">
  <IconGitBranch /> New Branch
</Button>
```

### 둥근 버튼

`rounded-full` 클래스를 사용하여 버튼을 둥글게 만들 수 있습니다.

<ComponentPreview name="button-rounded" class="mb-4" >

<div></div>

</ComponentPreview>

```svelte
<Button variant="outline" size="icon" className="rounded-full">
  <ArrowUpRightIcon />
</Button>
```

### Spinner

<ComponentPreview name="button-loading" description="A button with a loading state." class="mb-4">

<div></div>

</ComponentPreview>

```svelte showLineNumbers
<Button size="sm" variant="outline" disabled>
  <Spinner />
  Submit
</Button>
```

### 버튼 그룹

버튼 그룹을 만들려면 `ButtonGroup` 컴포넌트를 사용하세요. 자세한 내용은 [버튼 그룹](/docs/components/button-group) 문서를 참고하세요.

<ComponentPreview name="button-group-demo" class="mb-4" >

<div></div>

</ComponentPreview>

```svelte showLineNumbers
<ButtonGroup.Root>
  <ButtonGroup.Root class="hidden sm:flex">
    <Button variant="outline" size="icon" aria-label="Go Back">
      <ArrowLeft />
    </Button>
  </ButtonGroup.Root>
  <ButtonGroup.Root>
    <Button variant="outline">Archive</Button>
    <Button variant="outline">Report</Button>
  </ButtonGroup.Root>
  <ButtonGroup.Root>
    <Button variant="outline">Snooze</Button>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {#snippet child({ props })}
          <Button
            {...props}
            variant="outline"
            size="icon"
            aria-label="More Options"
          >
            <MoreHorizontal />
          </Button>
        {/snippet}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" class="w-52">
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <MailCheck />
            Mark as Read
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Archive />
            Archive
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <Clock />
            Snooze
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <CalendarPlus />
            Add to Calendar
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <ListFilter />
            Add to List
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              <Tag />
              Label As...
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.RadioGroup bind:value={label}>
                <DropdownMenu.RadioItem value="personal">
                  Personal
                </DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem value="work"
                  >Work</DropdownMenu.RadioItem
                >
                <DropdownMenu.RadioItem value="other"
                  >Other</DropdownMenu.RadioItem
                >
              </DropdownMenu.RadioGroup>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item class="text-destructive focus:text-destructive">
            <Trash2 />
            Trash
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </ButtonGroup.Root>
</ButtonGroup.Root>
```

### 링크

`href`를 prop으로 전달하여 `<button>`을 `<a>` 요소로 변환할 수 있습니다.

```svelte
<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button href="/dashboard">Dashboard</Button>
```

또는 `buttonVariants` 헬퍼를 사용하여 버튼처럼 보이는 링크를 만들 수 있습니다.

```svelte
<script lang="ts">
  import { buttonVariants } from "$lib/components/ui/button";
</script>

<a href="/dashboard" class={buttonVariants({ variant: "outline" })}>
  Dashboard
</a>
```

## 변경 이력

### 2025-09-24 새로운 크기

버튼 컴포넌트에 `icon-sm`과 `icon-lg` 두 가지 새로운 크기를 추가했습니다. 이 크기들은 아이콘 버튼을 만들 때 사용됩니다. 추가하려면 `button.tsx`를 편집하고 `buttonVariants`의 `size` 아래에 다음 코드를 추가하세요:

```ts showLineNumbers title="components/ui/button.svelte"
export const buttonVariants = tv({
  // ...
  variants: {
    // ...
    size: {
      // ...
      icon: "size-9",
      "icon-sm": "size-8",
      "icon-lg": "size-10",
    },
  },
});
```
