---
title: Astro
description: Astro 사이트에 다크 모드 추가하기.
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";
</script>

일반 Svelte와 마찬가지로, 다크 모드 전환을 지원하기 위해 Tailwind CSS의 `class` 전략을 사용합니다. 자세한 내용은 [Tailwind CSS 문서](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually)를 참조하세요.

`html` 엘리먼트에 `dark` 클래스를 추가하는 방법은 자유롭게 선택할 수 있습니다. 이 가이드에서는 [mode-watcher](https://github.com/svecosystem/mode-watcher)를 사용하여 다크 모드 전환을 활성화하는 방법을 살펴보겠습니다.

## 사용법

<Steps>

### 인라인 테마 스크립트 생성

이 스크립트는 `localStorage`에 다크 모드 값을 저장하고 추적하며, [FUOC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)를 방지하는 역할을 합니다.

```astro title="src/pages/index.astro" {5-27} showLineNumbers
---
import "../styles/global.css";
---

<script is:inline>
  const isBrowser = typeof localStorage !== 'undefined';
  const getThemePreference = () => {
    if (isBrowser && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark' : 'light';
  };
  const isDark = getThemePreference() === 'dark';
  document.documentElement.classList[isDark ? 'add' : 'remove']('dark');

  if (isBrowser) {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
</script>

<html lang="en">
	<body>
      <h1>Astro</h1>
	</body>
</html>
</script>
```

### mode-watcher 설치

<PMInstall command="mode-watcher@0.5.1" />

### ModeWatcher 컴포넌트 추가

`ModeWatcher` 컴포넌트를 import하고 `client:load` 디렉티브와 함께 페이지에서 사용하세요:

```astro title="src/pages/index.astro" {3,9} showLineNumbers
---
import "../styles/global.css";
import { ModeWatcher } from "mode-watcher";
---

<!-- inline-script -->
<html lang="en">
	<body>
      <h1>Astro</h1>
      <ModeWatcher client:load />
	</body>
</html>
```

### 모드 토글 생성

사이트에서 라이트 모드와 다크 모드를 전환할 수 있는 모드 토글을 생성하세요:

#### 라이트 스위치

<ComponentPreview name="dark-mode-light-switch">

<div></div>

</ComponentPreview>

#### 드롭다운 메뉴

<ComponentPreview name="dark-mode-dropdown-menu">

<div></div>

</ComponentPreview>

### 페이지에 모드 토글 추가

모드 토글을 페이지에 추가하세요 (`client:load` 디렉티브와 함께):

```astro title="src/pages/index.astro" {4,12} showLineNumbers
---
import "../styles/global.css";
import { ModeWatcher } from "mode-watcher";
import ModeToggle from "$lib/components/mode-toggle.svelte";
---

<!-- inline-script -->
<html lang="en">
	<body>
      <h1>Astro</h1>
      <ModeWatcher client:load />
      <ModeToggle client:load />
	</body>
</html>
```

</Steps>
