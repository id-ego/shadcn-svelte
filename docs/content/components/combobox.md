---
title: 콤보박스
description: 자동 완성 입력과 제안 목록이 있는 커맨드 팔레트입니다.
component: true
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import CodeCollapsibleWrapper from "$lib/components/code-collapsible-wrapper.svelte";
</script>

<ComponentPreview name="combobox-demo">

<div></div>

</ComponentPreview>

## 설치

콤보박스는 `<Popover />`와 `<Command />` 컴포넌트의 조합으로 구성됩니다.

[Popover](/docs/components/popover#installation) 및 [Command](/docs/components/command#installation) 컴포넌트의 설치 방법을 참고하세요.

## 사용법

<CodeCollapsibleWrapper >

```svelte title="lib/components/example-combobox.svelte"
<script lang="ts">
  import CheckIcon from "@lucide/svelte/icons/check";
  import ChevronsUpDownIcon from "@lucide/svelte/icons/chevrons-up-down";
  import { tick } from "svelte";
  import * as Command from "$lib/components/ui/command/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { cn } from "$lib/utils.js";

  const frameworks = [
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  let open = $state(false);
  let value = $state("");
  let triggerRef = $state<HTMLButtonElement>(null!);

  const selectedValue = $derived(
    frameworks.find((f) => f.value === value)?.label
  );

  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger() {
    open = false;
    tick().then(() => {
      triggerRef.focus();
    });
  }
</script>

<Popover.Root bind:open>
  <Popover.Trigger bind:ref={triggerRef}>
    {#snippet child({ props })}
      <Button
        variant="outline"
        class="w-[200px] justify-between"
        {...props}
        role="combobox"
        aria-expanded={open}
      >
        {selectedValue || "Select a framework..."}
        <ChevronsUpDownIcon class="ms-2 size-4 shrink-0 opacity-50" />
      </Button>
    {/snippet}
  </Popover.Trigger>
  <Popover.Content class="w-[200px] p-0">
    <Command.Root>
      <Command.Input placeholder="Search framework..." />
      <Command.List>
        <Command.Empty>No framework found.</Command.Empty>
        <Command.Group>
          {#each frameworks as framework}
            <Command.Item
              value={framework.value}
              onSelect={() => {
                value = framework.value;
                closeAndFocusTrigger();
              }}
            >
              <CheckIcon
                class={cn(
                  "me-2 size-4",
                  value !== framework.value && "text-transparent"
                )}
              />
              {framework.label}
            </Command.Item>
          {/each}
        </Command.Group>
      </Command.List>
    </Command.Root>
  </Popover.Content>
</Popover.Root>
```

</CodeCollapsibleWrapper>

## 예제

### 콤보박스

<ComponentPreview name="combobox-demo">

<div></div>

</ComponentPreview>

### 팝오버

<ComponentPreview name="combobox-popover">

<div></div>

</ComponentPreview>

### 드롭다운 메뉴

<ComponentPreview name="combobox-dropdown-menu">

<div></div>

</ComponentPreview>

### 반응형

데스크톱에서는 `<Popover />` 컴포넌트를, 모바일에서는 `<Drawer />` 컴포넌트를 사용하여 반응형 콤보박스를 만들 수 있습니다.

<ComponentPreview name="combobox-responsive" >

<div></div>

</ComponentPreview>
