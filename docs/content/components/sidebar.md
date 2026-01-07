---
title: 사이드바
description: 조합 가능하고 테마를 적용할 수 있으며 커스터마이징 가능한 사이드바 컴포넌트입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/sidebar
---

<script>
	import ComponentPreview from '$lib/components/component-preview.svelte';
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import Step from "$lib/components/step.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";
	import ComponentSource from "$lib/components/component-source.svelte";
	let { viewerData } = $props();
	import DocsFigure from "$lib/components/docs-figure.svelte";
	import Callout from "$lib/components/callout.svelte";
</script>

<DocsFigure caption="아이콘으로 축소되는 사이드바입니다.">
<ComponentPreview type="block" name="sidebar-07" title="Sidebar" class="w-full">

<div></div>

</ComponentPreview>
</DocsFigure>

사이드바는 구축하기 가장 복잡한 컴포넌트 중 하나입니다. 애플리케이션의 중심이 되며 많은 움직이는 부분을 포함합니다.

Shad는 사이드바 구축을 좋아하지 않기 때문에, 다양한 구성으로 30개 이상을 만들었습니다. 핵심 컴포넌트들은 `sidebar-*.svelte` 파일로 추출되었으며, 여러분의 프로젝트에서 사용할 수 있습니다.

이제 탄탄한 기반을 구축했습니다. 조합 가능하고, 테마를 적용할 수 있으며, 커스터마이징 가능합니다.

[블록 라이브러리 둘러보기](/blocks).

## 설치

<InstallTabs>
{#snippet cli()}

<Steps>

<Step>`sidebar` 컴포넌트를 설치하려면 다음 명령을 실행하세요:</Step>

<PMAddComp name="sidebar" />

<Step>다음 색상을 CSS 파일에 추가하세요</Step>

색상에 대해서는 나중에 [테마 설정 섹션](/docs/components/sidebar#theming)에서 다루겠습니다.

```css title="src/routes/layout.css"
:root {
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.439 0 0);
}
```

</Steps>
{/snippet}

{#snippet manual()}

<Steps>

<Step>

다음 코드를 복사하여 프로젝트에 붙여넣으세요.

</Step>
{#if viewerData}
	<ComponentSource item={viewerData} data-llm-ignore/>
{/if}

<Step>다음 색상을 CSS 파일에 추가하세요</Step>

색상에 대해서는 나중에 [테마 설정 섹션](/docs/components/sidebar#theming)에서 다루겠습니다.

```css title="src/routes/layout.css"
:root {
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.439 0 0);
}
```

</Steps>
{/snippet}

</InstallTabs>

## 구조

`Sidebar` 컴포넌트는 다음 부분들로 구성됩니다:

- `Sidebar.Provider` - 접을 수 있는 상태를 처리합니다.
- `Sidebar.Root` - 사이드바 컨테이너입니다.
- `Sidebar.Header`와 `Sidebar.Footer` - 사이드바 상단과 하단에 고정됩니다.
- `Sidebar.Content` - 스크롤 가능한 콘텐츠입니다.
- `Sidebar.Group` - `Sidebar.Content` 내의 섹션입니다.
- `Sidebar.Trigger` - `Sidebar`를 위한 트리거입니다.

<img src="/img/sidebar/sidebar-structure.png" width="716" height="420" alt="Sidebar structure" class="border dark:hidden rounded-lg overflow-hidden mt-6 w-full" />

<img src="/img/sidebar/sidebar-structure-dark.png" width="716" height="420" alt="Sidebar structure" class="border hidden dark:block rounded-lg overflow-hidden mt-6 w-full" />

## 사용법

```svelte showLineNumbers title="src/routes/+layout.svelte"
<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import AppSidebar from "$lib/components/app-sidebar.svelte";

  let { children } = $props();
</script>

<Sidebar.Provider>
  <AppSidebar />
  <main>
    <Sidebar.Trigger />
    {@render children?.()}
  </main>
</Sidebar.Provider>
```

```svelte showLineNumbers title="src/lib/components/app-sidebar.svelte"
<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
</script>

<Sidebar.Root>
  <Sidebar.Header />
  <Sidebar.Content>
    <Sidebar.Group />
    <Sidebar.Group />
  </Sidebar.Content>
  <Sidebar.Footer />
</Sidebar.Root>
```

## 첫 번째 사이드바

가장 기본적인 사이드바부터 시작해봅시다. 메뉴가 있는 접을 수 있는 사이드바입니다.

<Steps>

<Step>

애플리케이션의 루트에 `Sidebar.Provider`와 `Sidebar.Trigger`를 추가하세요.

</Step>

```svelte showLineNumbers title="src/routes/+layout.svelte"
<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import AppSidebar from "$lib/components/app-sidebar.svelte";

  let { children } = $props();
</script>

<Sidebar.Provider>
  <AppSidebar />
  <main>
    <Sidebar.Trigger />
    {@render children?.()}
  </main>
</Sidebar.Provider>
```

<Step>

`src/lib/components/app-sidebar.svelte`에 새로운 사이드바 컴포넌트를 생성하세요.

</Step>

```svelte showLineNumbers title="src/lib/components/app-sidebar.svelte"
<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
</script>

<Sidebar.Root>
  <Sidebar.Content />
</Sidebar.Root>
```

<Step>

이제 사이드바에 `Sidebar.Menu`를 추가해봅시다.

</Step>

`Sidebar.Group` 안에 `Sidebar.Menu` 컴포넌트를 사용하겠습니다.

```svelte showLineNumbers title="src/lib/components/app-sidebar.svelte"
<script lang="ts">
  import CalendarIcon from "@lucide/svelte/icons/calendar";
  import HouseIcon from "@lucide/svelte/icons/house";
  import InboxIcon from "@lucide/svelte/icons/inbox";
  import SearchIcon from "@lucide/svelte/icons/search";
  import SettingsIcon from "@lucide/svelte/icons/settings";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";

  // Menu items.
  const items = [
    {
      title: "Home",
      url: "#",
      icon: HouseIcon,
    },
    {
      title: "Inbox",
      url: "#",
      icon: InboxIcon,
    },
    {
      title: "Calendar",
      url: "#",
      icon: CalendarIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
    },
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
    },
  ];
</script>

<Sidebar.Root>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each items as item (item.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <a href={item.url} {...props}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
</Sidebar.Root>
```

<Step>첫 번째 사이드바를 만들었습니다.</Step>

<DocsFigure caption="첫 번째 사이드바입니다.">
<ComponentPreview type="block" name="demo-sidebar" title="Sidebar" description="Your first sidebar." class="w-full">

<div></div>

</ComponentPreview>
</DocsFigure>

</Steps>

## 컴포넌트

`sidebar-*.svelte` 파일의 컴포넌트들은 조합 가능하도록 구축되었습니다. 즉, 제공된 컴포넌트들을 조합하여 사이드바를 구축합니다. `DropdownMenu`, `Collapsible`, `Dialog` 등과 같은 다른 shadcn-svelte 컴포넌트들과도 잘 조합됩니다.

**`sidebar-*.svelte` 파일의 코드를 변경해야 한다면, 그렇게 하는 것이 권장됩니다. 코드는 여러분의 것입니다. 제공된 컴포넌트들을 시작점으로 사용하여 여러분만의 것을 구축하세요**

다음 섹션에서는 각 컴포넌트와 사용 방법을 살펴보겠습니다.

## Sidebar.Provider

`Sidebar.Provider` 컴포넌트는 `Sidebar` 컴포넌트에 사이드바 컨텍스트를 제공하는 데 사용됩니다. 항상 애플리케이션을 `Sidebar.Provider` 컴포넌트로 감싸야 합니다.

### Props

| Name           | Type                      | Description                                                                                              |
| -------------- | ------------------------- | -------------------------------------------------------------------------------------------------------- |
| `open`         | `boolean`                 | 사이드바의 열림 상태입니다 (바인딩 가능).                                                                |
| `onOpenChange` | `(open: boolean) => void` | 비제어 상태일 때 사이드바의 열림 상태가 변경된 _후_에, 제어 상태일 때 사이드바가 열리거나 닫히기 _전_에 실행되는 콜백입니다. |

### 너비

애플리케이션에 단일 사이드바가 있는 경우, `src/lib/components/ui/sidebar/constants.ts`의 `SIDEBAR_WIDTH`와 `SIDEBAR_WIDTH_MOBILE` 상수를 사용하여 사이드바의 너비를 설정할 수 있습니다.

```ts showLineNumbers title="src/lib/components/ui/sidebar/constants.ts"
export const SIDEBAR_WIDTH = "16rem";
export const SIDEBAR_WIDTH_MOBILE = "18rem";
```

애플리케이션에 여러 사이드바가 있는 경우, `style` prop을 사용하여 사이드바의 너비를 설정할 수 있습니다.

사이드바의 너비를 설정하려면 `style` prop에서 `--sidebar-width`와 `--sidebar-width-mobile` CSS 변수를 사용할 수 있습니다.

```svelte showLineNumbers
<Sidebar.Provider
  style="--sidebar-width: 20rem; --sidebar-width-mobile: 20rem;"
>
  <Sidebar.Root />
</Sidebar.Provider>
```

이것은 사이드바의 너비뿐만 아니라 레이아웃 간격도 처리합니다.

### 키보드 단축키

`src/lib/components/ui/sidebar/constants.ts`의 `SIDEBAR_KEYBOARD_SHORTCUT` 변수는 사이드바를 열고 닫는 데 사용되는 키보드 단축키를 설정하는 데 사용됩니다.

사이드바를 트리거하려면 Mac에서는 `cmd+b`, Windows에서는 `ctrl+b` 키보드 단축키를 사용합니다.

`SIDEBAR_KEYBOARD_SHORTCUT` 변수의 값을 변경하여 키보드 단축키를 변경할 수 있습니다.

```ts showLineNumbers title="src/lib/components/ui/sidebar/constants.ts"
export const SIDEBAR_KEYBOARD_SHORTCUT = "b";
```

## Sidebar.Root

접을 수 있는 사이드바를 렌더링하는 데 사용되는 메인 `Sidebar` 컴포넌트입니다.

```svelte showLineNumbers
<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
</script>

<Sidebar.Root />
```

### Props

| Property      | Type                              | Description                  |
| ------------- | --------------------------------- | ---------------------------- |
| `side`        | `left` or `right`                 | 사이드바의 위치입니다.       |
| `variant`     | `sidebar`, `floating`, or `inset` | 사이드바의 변형입니다.       |
| `collapsible` | `offcanvas`, `icon`, or `none`    | 사이드바의 접기 상태입니다.  |

### side

`side` prop을 사용하여 사이드바의 위치를 변경합니다.

사용 가능한 옵션은 `left`와 `right`입니다.

```svelte showLineNumbers
<Sidebar.Root side="left | right" />
```

### variant

`variant` prop을 사용하여 사이드바의 변형을 변경합니다.

사용 가능한 옵션은 `sidebar`, `floating`, `inset`입니다.

```svelte showLineNumbers
<Sidebar.Root variant="sidebar | floating | inset" />
```

<Callout>

**참고:** `inset` 변형을 사용하는 경우, 메인 콘텐츠를 `SidebarInset` 컴포넌트로 감싸는 것을 잊지 마세요.

</Callout>

```svelte showLineNumbers
<Sidebar.Provider>
  <Sidebar.Root variant="inset">
    <Sidebar.Inset>
      <main>
        <!-- Your main content -->
      </main>
    </Sidebar.Inset>
  </Sidebar.Root>
</Sidebar.Provider>
```

### collapsible

`collapsible` prop을 사용하여 사이드바를 접을 수 있게 만듭니다.

사용 가능한 옵션은 `offcanvas`, `icon`, `none`입니다.

```svelte showLineNumbers
<Sidebar.Root collapsible="offcanvas | icon | none" />
```

| Prop        | Description                                    |
| ----------- | ---------------------------------------------- |
| `offcanvas` | 왼쪽 또는 오른쪽에서 슬라이드되는 접을 수 있는 사이드바입니다. |
| `icon`      | 아이콘으로 축소되는 사이드바입니다.             |
| `none`      | 접을 수 없는 사이드바입니다.                   |

## useSidebar

`useSidebar` 함수는 사이드바 컨텍스트에 연결하는 데 사용됩니다. 반응형 클래스 인스턴스를 반환하므로 _구조 분해할 수 없습니다_. 또한 컴포넌트의 라이프사이클 동안 호출되어야 합니다.

```svelte showLineNumbers
<script lang="ts">
  import { useSidebar } from "$lib/components/ui/sidebar/index.js";

  sidebar.state;
  sidebar.isMobile;
  sidebar.toggle();
</script>
```

| Property        | Type                      | Description                                |
| --------------- | ------------------------- | ------------------------------------------ |
| `state`         | `expanded` or `collapsed` | 사이드바의 현재 상태입니다.                |
| `open`          | `boolean`                 | 사이드바가 열려 있는지 여부입니다.         |
| `setOpen`       | `(open: boolean) => void` | 사이드바의 열림 상태를 설정합니다.         |
| `openMobile`    | `boolean`                 | 모바일에서 사이드바가 열려 있는지 여부입니다. |
| `setOpenMobile` | `(open: boolean) => void` | 모바일에서 사이드바의 열림 상태를 설정합니다. |
| `isMobile`      | `boolean`                 | 사이드바가 모바일에 있는지 여부입니다.     |
| `toggle`        | `() => void`              | 사이드바를 토글합니다. 데스크톱과 모바일.  |

## Sidebar.Header

`Sidebar.Header` 컴포넌트를 사용하여 사이드바에 고정 헤더를 추가합니다.

다음 예제는 `Sidebar.Header`에 `<DropdownMenu>`를 추가합니다.

<DocsFigure caption="드롭다운 메뉴가 있는 사이드바 헤더입니다.">
<ComponentPreview name="demo-sidebar-header" title="Sidebar" type="block" class="w-full">

<div></div>

</ComponentPreview>
</DocsFigure>

```svelte showLineNumbers title="src/lib/components/app-sidebar.svelte"
<Sidebar.Root>
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            {#snippet child({ props })}
              <Sidebar.MenuButton {...props}>
                Select Workspace
                <ChevronDown class="ms-auto" />
              </Sidebar.MenuButton>
            {/snippet}
          </DropdownMenu.Trigger>
          <DropdownMenu.Content class="w-(--bits-dropdown-menu-anchor-width)">
            <DropdownMenu.Item>
              <span>Acme Inc</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <span>Acme Corp.</span>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>
</Sidebar.Root>
```

## Sidebar.Footer

`Sidebar.Footer` 컴포넌트를 사용하여 사이드바에 고정 푸터를 추가합니다.

다음 예제는 `Sidebar.Footer`에 `<DropdownMenu>`를 추가합니다.

<DocsFigure caption="드롭다운 메뉴가 있는 사이드바 푸터입니다.">
<ComponentPreview name="demo-sidebar-footer" title="Sidebar" type="block" class="w-full">

<div></div>

</ComponentPreview>
</DocsFigure>

```svelte showLineNumbers title="src/lib/components/app-sidebar.svelte"
<Sidebar.Provider>
  <Sidebar.Root>
    <Sidebar.Header />
    <Sidebar.Content />
    <Sidebar.Footer>
      <Sidebar.Menu>
        <Sidebar.MenuItem>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              {#snippet child({ props })}
                <Sidebar.MenuButton
                  {...props}
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  Username
                  <ChevronUp class="ms-auto" />
                </Sidebar.MenuButton>
              {/snippet}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              side="top"
              class="w-(--bits-dropdown-menu-anchor-width)"
            >
              <DropdownMenu.Item>
                <span>Account</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <span>Billing</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <span>Sign out</span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Footer>
  </Sidebar.Root>
  <Sidebar.Inset>
    <header class="flex h-12 items-center justify-between px-4">
      <Sidebar.Trigger />
    </header>
  </Sidebar.Inset>
</Sidebar.Provider>
```

## Sidebar.Content

`Sidebar.Content` 컴포넌트는 사이드바의 콘텐츠를 감싸는 데 사용됩니다. 여기에 `Sidebar.Group` 컴포넌트를 추가합니다. 스크롤 가능합니다.

```svelte showLineNumbers
<Sidebar.Root>
  <Sidebar.Content>
    <Sidebar.Group />
    <Sidebar.Group />
  </Sidebar.Content>
</Sidebar.Root>
```

## Sidebar.Group

`Sidebar.Group` 컴포넌트를 사용하여 사이드바 내에 섹션을 생성합니다.

`Sidebar.Group`에는 `Sidebar.GroupLabel`, `Sidebar.GroupContent`, 그리고 선택적으로 `Sidebar.GroupAction`이 있습니다.

<DocsFigure caption="사이드바 그룹입니다.">
<ComponentPreview name="demo-sidebar-group" title="Sidebar" type="block" class="w-full">

<div></div>

</ComponentPreview>
</DocsFigure>

```svelte showLineNumbers
<Sidebar.Root>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
      <Sidebar.GroupAction>
        <Plus /> <span class="sr-only">Add Project</span>
      </Sidebar.GroupAction>
      <Sidebar.GroupContent></Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
</Sidebar.Root>
```

## 접을 수 있는 Sidebar.Group

`Sidebar.Group`을 접을 수 있게 만들려면 `Collapsible`로 감쌉니다.

<DocsFigure caption="접을 수 있는 사이드바 그룹입니다.">
<ComponentPreview name="demo-sidebar-group-collapsible" title="Sidebar" type="block" class="w-full">

<div></div>

</ComponentPreview>
</DocsFigure>

```svelte showLineNumbers
<Collapsible.Root open class="group/collapsible">
  <Sidebar.Group>
    <Sidebar.GroupLabel>
      {#snippet child({ props })}
        <Collapsible.Trigger {...props}>
          Help
          <ChevronDown
            class="ms-auto transition-transform group-data-[state=open]/collapsible:rotate-180"
          />
        </Collapsible.Trigger>
      {/snippet}
    </Sidebar.GroupLabel>
    <Collapsible.Content>
      <Sidebar.GroupContent />
    </Collapsible.Content>
  </Sidebar.Group>
</Collapsible.Root>
```

<Callout>

**참고:** 버튼을 렌더링하기 위해 `Collapsible.Trigger`를 `Sidebar.GroupLabel`로 감쌉니다.

</Callout>

## Sidebar.GroupAction

`Sidebar.GroupAction` 컴포넌트를 사용하여 `Sidebar.Group`에 액션을 추가합니다.

```svelte showLineNumbers {3-5}
<Sidebar.Group>
  <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
  <Sidebar.GroupAction title="Add Project">
    <Plus /> <span class="sr-only">Add Project</span>
  </Sidebar.GroupAction>
  <Sidebar.GroupContent />
</Sidebar.Group>
```

<DocsFigure caption="액션 버튼이 있는 사이드바 그룹입니다.">
<ComponentPreview name="demo-sidebar-group-action" title="Sidebar" type="block" class="w-full">

<div></div>

</ComponentPreview>
</DocsFigure>

## Sidebar.Menu

`Sidebar.Menu` 컴포넌트는 `Sidebar.Group` 내에 메뉴를 구축하는 데 사용됩니다.

`Sidebar.Menu`는 `Sidebar.MenuItem`, `Sidebar.MenuButton`, `Sidebar.MenuAction`, `Sidebar.MenuSub` 컴포넌트로 구성됩니다.

<img src="/img/sidebar/sidebar-menu.png" width="716" height="420" alt="Sidebar menu" class="border dark:hidden rounded-lg overflow-hidden mt-6 w-full" />

<img src="/img/sidebar/sidebar-menu-dark.png" width="716" height="420" alt="Sidebar menu" class="border hidden dark:block rounded-lg overflow-hidden mt-6 w-full" />

다음은 프로젝트 목록을 렌더링하는 `Sidebar.Menu` 컴포넌트의 예입니다.

<DocsFigure caption="프로젝트 목록이 있는 사이드바 메뉴입니다.">
<ComponentPreview name="demo-sidebar-menu" title="Sidebar" type="block" class="w-full">

<div></div>

</ComponentPreview>
</DocsFigure>

```svelte showLineNumbers
<Sidebar.Root>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each projects as project}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <a href={project.url} {...props}>
                    <project.icon />
                    <span>{project.name}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
</Sidebar.Root>
```

## Sidebar.MenuButton

`Sidebar.MenuButton` 컴포넌트는 `Sidebar.Menu` 내에 메뉴 버튼을 렌더링하는 데 사용됩니다.

### 링크 또는 앵커

기본적으로 `Sidebar.MenuButton`은 버튼을 렌더링하지만, `child` 스니펫을 사용하여 `<a>` 태그와 같은 다른 컴포넌트를 렌더링할 수 있습니다.

```svelte showLineNumbers
<Sidebar.MenuButton>
  {#snippet child({ props })}
    <a href="/home" {...props}> Home </a>
  {/snippet}
</Sidebar.MenuButton>
```

### 아이콘과 라벨

버튼 내부에 아이콘과 잘린 라벨을 렌더링할 수 있습니다. 라벨을 `<span>` 태그로 감싸는 것을 잊지 마세요.

```svelte showLineNumbers
<Sidebar.MenuButton>
  {#snippet child({ props })}
    <a href="/home" {...props}>
      <House />
      <span>Home</span>
    </a>
  {/snippet}
</Sidebar.MenuButton>
```

### isActive

`isActive` prop을 사용하여 메뉴 항목을 활성 상태로 표시합니다.

```svelte showLineNumbers
<Sidebar.MenuButton isActive>
  {#snippet child({ props })}
    <a href="/home" {...props}>
      <House />
      <span>Home</span>
    </a>
  {/snippet}
</Sidebar.MenuButton>
```

## Sidebar.MenuAction

`Sidebar.MenuAction` 컴포넌트는 `Sidebar.Menu` 내에 메뉴 액션을 렌더링하는 데 사용됩니다.

이 버튼은 `Sidebar.MenuButton`과 독립적으로 작동합니다. 즉, `Sidebar.MenuButton`을 클릭 가능한 링크로, `Sidebar.MenuAction`을 버튼으로 가질 수 있습니다.

```svelte showLineNumbers
<Sidebar.MenuItem>
  <Sidebar.MenuButton>
    {#snippet child({ props })}
      <a href="/home" {...props}>
        <House />
        <span>Home</span>
      </a>
    {/snippet}
  </Sidebar.MenuButton>
  <Sidebar.MenuAction>
    <Plus /> <span class="sr-only">Add Project</span>
  </Sidebar.MenuAction>
</Sidebar.MenuItem>
```

### DropdownMenu

다음은 `DropdownMenu`를 렌더링하는 `Sidebar.MenuAction`의 예입니다.

<DocsFigure caption="드롭다운 메뉴가 있는 사이드바 메뉴 액션입니다.">
<ComponentPreview name="demo-sidebar-menu-action" title="Sidebar" type="block" class="w-full">

<div></div>

</ComponentPreview>
</DocsFigure>

```svelte showLineNumbers
<Sidebar.MenuItem>
  <Sidebar.MenuButton>
    {#snippet child({ props })}
      <a href="##" {...props}>
        <House />
        <span>Home</span>
      </a>
    {/snippet}
  </Sidebar.MenuButton>
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      {#snippet child({ props })}
        <Sidebar.MenuAction {...props}>
          <Ellipsis />
        </Sidebar.MenuAction>
      {/snippet}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content side="right" align="start">
      <DropdownMenu.Item>
        <span>Edit Project</span>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <span>Delete Project</span>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</Sidebar.MenuItem>
```

## Sidebar.MenuSub

`Sidebar.MenuSub` 컴포넌트는 `Sidebar.Menu` 내에 서브메뉴를 렌더링하는 데 사용됩니다.

서브메뉴 항목을 렌더링하려면 `Sidebar.MenuSubItem`과 `Sidebar.MenuSubButton`을 사용합니다.

<DocsFigure caption="사이드바 메뉴 서브입니다.">
<ComponentPreview name="demo-sidebar-menu-sub" title="Sidebar" type="block" class="w-full">

<div></div>

</ComponentPreview>
</DocsFigure>

```svelte showLineNumbers
<Sidebar.MenuItem>
  <Sidebar.MenuButton />
  <Sidebar.MenuSub>
    <Sidebar.MenuSubItem>
      <Sidebar.MenuSubButton />
    </Sidebar.MenuSubItem>
    <Sidebar.MenuSubItem>
      <Sidebar.MenuSubButton />
    </Sidebar.MenuSubItem>
  </Sidebar.MenuSub>
</Sidebar.MenuItem>
```

## 접을 수 있는 Sidebar.Menu

`Sidebar.Menu`를 접을 수 있게 만들려면 `Sidebar.Menu`와 `Sidebar.MenuSub` 컴포넌트를 `Collapsible`로 감쌉니다.

<DocsFigure caption="접을 수 있는 사이드바 메뉴입니다.">
<ComponentPreview name="demo-sidebar-menu-collapsible" title="Sidebar" type="block" class="w-full">

<div></div>

</ComponentPreview>
</DocsFigure>

```svelte showLineNumbers
<Sidebar.Menu>
  <Collapsible.Root open class="group/collapsible">
    <Sidebar.MenuItem>
      <Collapsible.Trigger>
        {#snippet child({ props })}
          <Sidebar.MenuButton {...props} />
        {/snippet}
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Sidebar.MenuSub>
          <Sidebar.MenuSubItem />
        </Sidebar.MenuSub>
      </Collapsible.Content>
    </Sidebar.MenuItem>
  </Collapsible.Root>
</Sidebar.Menu>
```

## Sidebar.MenuBadge

`Sidebar.MenuBadge` 컴포넌트는 `Sidebar.MenuItem` 내에 배지를 렌더링하는 데 사용됩니다.

<DocsFigure caption="사이드바 메뉴 배지입니다.">
<ComponentPreview name="demo-sidebar-menu-badge" title="Sidebar" type="block" class="w-full">

<div></div>

</ComponentPreview>
</DocsFigure>

```svelte showLineNumbers
<Sidebar.MenuItem>
  <Sidebar.MenuButton />
  <Sidebar.MenuBadge>24</Sidebar.MenuBadge>
</Sidebar.MenuItem>
```

## Sidebar.MenuSkeleton

`Sidebar.MenuSkeleton` 컴포넌트는 `Sidebar.MenuItem` 내에 스켈레톤을 렌더링하는 데 사용됩니다. 데이터가 로드되는 동안 로딩 상태를 표시하는 데 사용할 수 있습니다.

```svelte showLineNumbers
<Sidebar.Menu>
  {#each Array.from({ length: 5 }) as _, index (index)}
    <Sidebar.MenuItem>
      <Sidebar.MenuSkeleton />
    </Sidebar.MenuItem>
  {/each}
</Sidebar.Menu>
```

## Sidebar.Separator

`Sidebar.Separator` 컴포넌트는 `Sidebar` 내에 구분선을 렌더링하는 데 사용됩니다.

```svelte showLineNumbers
<Sidebar.Root>
  <Sidebar.Header />
  <Sidebar.Separator />
  <Sidebar.Content>
    <Sidebar.Group />
    <Sidebar.Separator />
    <Sidebar.Group />
  </Sidebar.Content>
</Sidebar.Root>
```

## Sidebar.Trigger

`Sidebar.Trigger` 컴포넌트를 사용하여 사이드바를 토글하는 버튼을 렌더링합니다.

`Sidebar.Trigger` 컴포넌트는 `Sidebar.Provider` 내에서 사용되어야 합니다.

```svelte showLineNumbers
<Sidebar.Provider>
  <Sidebar.Root />
  <main>
    <Sidebar.Trigger />
  </main>
</Sidebar.Provider>
```

## 커스텀 트리거

커스텀 트리거를 만들려면 `useSidebar` 훅을 사용할 수 있습니다.

```svelte showLineNumbers
<script lang="ts">
  import { useSidebar } from "$lib/components/ui/sidebar/index.js";
  const sidebar = useSidebar();
</script>

<button onclick={() => sidebar.toggle()}>Toggle Sidebar</button>
```

## Sidebar.Rail

`Sidebar.Rail` 컴포넌트는 `Sidebar.Root` 내에 레일을 렌더링하는 데 사용됩니다. 이 레일은 사이드바를 토글하는 데 사용할 수 있습니다.

```svelte showLineNumbers
<Sidebar.Root>
  <Sidebar.Header />
  <Sidebar.Content>
    <Sidebar.Group />
  </Sidebar.Content>
  <Sidebar.Footer />
  <Sidebar.Rail />
</Sidebar.Root>
```

## 제어되는 사이드바

Svelte의 [Function Binding](https://svelte.dev/docs/svelte/bind#Function-bindings)을 사용하여 사이드바 상태를 제어합니다.

<DocsFigure caption="제어되는 사이드바입니다.">
<ComponentPreview name="demo-sidebar-controlled" title="Sidebar" type="block" class="w-full">

<div></div>

</ComponentPreview>
</DocsFigure>

```svelte showLineNumbers
<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";

  let myOpen = $state(true);
</script>

<Sidebar.Provider bind:open={() => myOpen, (newOpen) => (myOpen = newOpen)}>
  <Sidebar.Root />
</Sidebar.Provider>

<!-- or -->

<Sidebar.Provider bind:open>
  <Sidebar.Root />
</Sidebar.Provider>
```

## 테마 설정

사이드바의 테마를 설정하기 위해 다음 CSS 변수를 사용합니다.

```css
:root {
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.439 0 0);
}
```

**사이드바와 애플리케이션의 나머지 부분에 의도적으로 다른 변수를 사용합니다** 애플리케이션의 나머지 부분과 다르게 스타일링된 사이드바를 쉽게 만들기 위해서입니다. 메인 애플리케이션보다 어두운 음영의 사이드바를 생각해보세요.

## 스타일링

다양한 상태에 따라 사이드바를 스타일링하는 몇 가지 팁입니다.

- **사이드바 접기 상태에 따른 요소 스타일링.** 다음은 사이드바가 `icon` 모드일 때 `Sidebar.Group`을 숨깁니다.

```svelte
<Sidebar.Root collapsible="icon">
  <Sidebar.Content>
    <Sidebar.Group class="group-data-[collapsible=icon]:hidden" />
  </Sidebar.Content>
</Sidebar.Root>
```

- **메뉴 버튼 활성 상태에 따른 메뉴 액션 스타일링.** 다음은 메뉴 버튼이 활성 상태일 때 메뉴 액션을 강제로 표시합니다.

```svelte
<Sidebar.MenuItem>
  <Sidebar.MenuButton />
  <Sidebar.MenuAction
    class="peer-data-[active=true]/menu-button:opacity-100"
  />
</Sidebar.MenuItem>
```

스타일링을 위한 상태 사용에 대한 더 많은 팁은 이 [Twitter thread](https://x.com/shadcn/status/1842329158879420864)에서 찾을 수 있습니다.
