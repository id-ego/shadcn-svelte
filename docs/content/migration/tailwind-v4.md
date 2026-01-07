---
title: Tailwind v4
description: Tailwind v4와 Svelte 5로 shadcn-svelte를 사용하는 방법.
---

<script>
	import { Button }from "$lib/registry/ui/button/index.js";
	import InstallCards from "$lib/components/install-cards.svelte";
	import Callout from "$lib/components/callout.svelte";
	import PMExecute from "$lib/components/pm-execute.svelte";
	import Step from "$lib/components/step.svelte";
	import Steps from "$lib/components/steps.svelte";
	import PMRemove from "$lib/components/pm-remove.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import PMRun from "$lib/components/pm-run.svelte";
</script>

이 문서 사이트는 이제 Tailwind v4로 운영되고 있습니다. 이전 Tailwind v3 문서를 찾고 계시다면 여기에서 확인할 수 있습니다: [https://tw3.shadcn-svelte.com](https://tw3.shadcn-svelte.com).

## 새로운 기능

- `@latest` CLI로 이제 Tailwind v4와 Svelte 5로 프로젝트를 초기화할 수 있습니다.
- 새로운 `@theme` 지시어와 `@theme inline` 옵션을 완전 지원합니다.
- 모든 컴포넌트가 Tailwind v4와 Svelte 5로 업데이트되었습니다.
- 요소를 렌더링하는 모든 프리미티브에 이제 스타일링을 위한 `data-slot` 속성이 있습니다.
- 컴포넌트의 스타일을 수정하고 정리했습니다.
- 버튼은 이제 기본 커서를 사용합니다.
- `default` 스타일은 더 이상 사용되지 않습니다. 새 프로젝트는 `new-york`을 사용합니다.
- HSL 색상이 이제 OKLCH로 변환됩니다.

**참고: 이는 호환성을 깨뜨리지 않습니다. Tailwind v3를 사용하는 기존 앱은 계속 작동합니다. 새 컴포넌트를 추가하면 업그레이드할 때까지 `components.json`에 구성된 스타일로 Tailwind v3에 그대로 유지됩니다. 새 프로젝트만 Tailwind v4로 시작합니다.**

## 실제 적용 사례

이 문서 사이트는 이제 Tailwind v4와 Svelte 5를 사용하고 있습니다. 더 완전한 예제를 보려면 여기의 데모 사이트를 확인하세요: [https://v4.shadcn-svelte.com](https://v4.shadcn-svelte.com).

버그를 발견하시면 [GitHub](https://github.com/huntabyte/shadcn-svelte/issues)에서 알려주세요.

## 사용해보기

`@latest` CLI를 사용하여 오늘부터 Tailwind v4와 Svelte 5를 사용할 수 있습니다. 자세한 설치 문서를 참조하세요

<InstallCards />

## 프로젝트 업그레이드

<Callout>

**참고**: 이 가이드는 Svelte 5와 Tailwind 3 프로젝트에서 업그레이드한다고 가정합니다. Svelte 4 프로젝트에서 업그레이드하는 경우, 먼저 [Svelte 4와 Tailwind 3에서 Svelte 5로](./svelte-5) 가이드를 따라야 합니다.

</Callout>

<Callout class="bg-blue-50 mt-6 border-blue-600 dark:border-blue-900 dark:bg-blue-950 mb-6 [&_code]:bg-blue-100 dark:[&_code]:bg-blue-900 text-foreground">

**중요:** 업그레이드하기 전에 [Tailwind v4 호환성 문서](https://tailwindcss.com/docs/compatibility)를 읽고 프로젝트가 업그레이드 준비가 되었는지 확인하세요. Tailwind v4는 최신 브라우저 기능을 사용하며 모던 브라우저를 위해 설계되었습니다.

</Callout>

`shadcn-svelte`를 사용하는 주요 장점 중 하나는 여러분이 직접 작성할 코드와 정확히 동일한 코드를 얻을 수 있다는 것입니다. 숨겨진 추상화가 없습니다.

즉, 의존성에 새 릴리스가 나오면 공식 업그레이드 경로만 따르면 됩니다.

기존 프로젝트를 업그레이드하는 방법은 다음과 같습니다:

### 1. Tailwind v4 업그레이드 가이드 따르기

- 공식 업그레이드 가이드를 따라 Tailwind v4로 업그레이드하세요: https://tailwindcss.com/docs/upgrade-guide
- `@tailwindcss/upgrade` 코드모드를 사용하여 더 이상 사용되지 않는 유틸리티 클래스를 제거하고 tailwind 설정을 업데이트하세요.

### 2. PostCSS를 Vite로 교체

업그레이드 스크립트는 자동으로 프로젝트를 Tailwind v4의 최신 PostCSS 구성으로 마이그레이션하지만, Tailwind 팀은 대신 Vite 사용을 권장하므로 우리도 Vite를 사용하겠습니다.

#### `postcss.config.js` 삭제

```diff title="postcss.config.js"
- export default {
- 	plugins: {
- 		'@tailwindcss/postcss': {},
- 	}
- };
```

#### `@tailwindcss/postcss` 제거

<PMRemove command="@tailwindcss/postcss" />

#### `@tailwindcss/vite` 설치

<PMInstall command="@tailwindcss/vite -D" />

#### `vite.config.ts` 업데이트

```diff title="vite.config.ts"
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
+ import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
-	plugins: [sveltekit()],
+   plugins: [tailwindcss(), sveltekit()],
});
```

#### 업그레이드 확인

개발 서버를 시작하고 모든 스타일이 예상대로 작동하는지 확인하세요.

<PMRun command="dev" />

### 2. `app.css` 파일 업데이트

코드모드는 `app.css` 파일을 다음과 같이 업데이트합니다. 여기서는 색상을 CSS 변수로 정의하고 기존 `tailwind.config.ts` 파일을 가져옵니다:

```css showLineNumbers
@import "tailwindcss";

@config "../tailwind.config.ts";

/*
  The default border color has changed to `currentcolor` in Tailwind CSS v4,
  so we've added these compatibility styles to make sure everything still
  looks the same as it did with Tailwind CSS v3.

  If we ever want to remove these styles, we need to add an explicit border
  color utility to any element that depends on these defaults.
*/
@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentcolor);
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 72.2% 50.6%;
    --destructive-foreground: 0 0% 98%;
    --ring: 240 10% 3.9%;
    --radius: 0.5rem;
    --sidebar: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --ring: 240 4.9% 83.9%;
    --sidebar: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

다음 단계에서는 `tailwind.config.ts`를 완전히 제거하고 CSS 기반 구성을 채택하도록 업데이트하겠습니다.

#### `tailwind-css-animate`를 `tw-animate-css`로 교체

Tailwind v4를 지원하는 `tw-animate-css`를 위해 `tailwindcss-animate`는 더 이상 사용되지 않습니다.

<PMRemove command="tailwindcss-animate" />

<PMInstall command="tw-animate-css -D" />

#### `tw-animate-css` 가져오기

```diff title="app.css"
  @import "tailwindcss";
+ @import "tw-animate-css";
/* ... */
```

#### 다크 모드를 위한 커스텀 variant 추가

```diff title="app.css"
@import "tailwindcss";
@import "tw-animate-css";

+@custom-variant dark (&:is(.dark *));
/* ... */
```

#### 호환성 스타일 제거

여기에 적용된 스타일을 재정의하므로 이것은 불필요한 코드입니다.

```diff title="app.css"
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

- /*
-   The default border color has changed to `currentcolor` in Tailwind CSS v4,
-   so we've added these compatibility styles to make sure everything still
-   looks the same as it did with Tailwind CSS v3.
-
-   If we ever want to remove these styles, we need to add an explicit border
-   color utility to any element that depends on these defaults.
- */
- @layer base {
-   *,
-   ::after,
-   ::before,
-   ::backdrop,
-   ::file-selector-button {
-     border-color: var(--color-gray-200, currentcolor);
-   }
- }
```

#### CSS 변수와 테마 설정

CSS 변수를 `:root`와 `.dark` 선택자로 이동하고, 색상 값을 `hsl()`로 감싸고, Tailwind v3 설정을 대체할 `@theme inline` 지시어를 설정하겠습니다.

완료되면 `app.css` 파일은 다음과 같아야 합니다 (색상 값은 테마에 따라 다릅니다):

```css title="app.css"
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: hsl(0 0% 100%) /* <- Wrap in HSL */;
  --foreground: hsl(240 10% 3.9%);
  --muted: hsl(240 4.8% 95.9%);
  --muted-foreground: hsl(240 3.8% 46.1%);
  --popover: hsl(0 0% 100%);
  --popover-foreground: hsl(240 10% 3.9%);
  --card: hsl(0 0% 100%);
  --card-foreground: hsl(240 10% 3.9%);
  --border: hsl(240 5.9% 90%);
  --input: hsl(240 5.9% 90%);
  --primary: hsl(240 5.9% 10%);
  --primary-foreground: hsl(0 0% 98%);
  --secondary: hsl(240 4.8% 95.9%);
  --secondary-foreground: hsl(240 5.9% 10%);
  --accent: hsl(240 4.8% 95.9%);
  --accent-foreground: hsl(240 5.9% 10%);
  --destructive: hsl(0 72.2% 50.6%);
  --destructive-foreground: hsl(0 0% 98%);
  --ring: hsl(240 10% 3.9%);
  --sidebar: hsl(0 0% 98%);
  --sidebar-foreground: hsl(240 5.3% 26.1%);
  --sidebar-primary: hsl(240 5.9% 10%);
  --sidebar-primary-foreground: hsl(0 0% 98%);
  --sidebar-accent: hsl(240 4.8% 95.9%);
  --sidebar-accent-foreground: hsl(240 5.9% 10%);
  --sidebar-border: hsl(220 13% 91%);
  --sidebar-ring: hsl(217.2 91.2% 59.8%);

  --radius: 0.5rem;
}

.dark {
  --background: hsl(240 10% 3.9%);
  --foreground: hsl(0 0% 98%);
  --muted: hsl(240 3.7% 15.9%);
  --muted-foreground: hsl(240 5% 64.9%);
  --popover: hsl(240 10% 3.9%);
  --popover-foreground: hsl(0 0% 98%);
  --card: hsl(240 10% 3.9%);
  --card-foreground: hsl(0 0% 98%);
  --border: hsl(240 3.7% 15.9%);
  --input: hsl(240 3.7% 15.9%);
  --primary: hsl(0 0% 98%);
  --primary-foreground: hsl(240 5.9% 10%);
  --secondary: hsl(240 3.7% 15.9%);
  --secondary-foreground: hsl(0 0% 98%);
  --accent: hsl(240 3.7% 15.9%);
  --accent-foreground: hsl(0 0% 98%);
  --destructive: hsl(0 62.8% 30.6%);
  --destructive-foreground: hsl(0 0% 98%);
  --ring: hsl(240 4.9% 83.9%);
  --sidebar: hsl(240 5.9% 10%);
  --sidebar-foreground: hsl(240 4.8% 95.9%);
  --sidebar-primary: hsl(224.3 76.3% 48%);
  --sidebar-primary-foreground: hsl(0 0% 100%);
  --sidebar-accent: hsl(240 3.7% 15.9%);
  --sidebar-accent-foreground: hsl(240 4.8% 95.9%);
  --sidebar-border: hsl(240 3.7% 15.9%);
  --sidebar-ring: hsl(217.2 91.2% 59.8%);
}

@theme inline {
  /* Radius (for rounded-*) */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  /* Colors */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-ring: var(--ring);
  --color-radius: var(--radius);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

#### 업데이트 확인

개발 서버를 재시작하고 모든 스타일이 예상대로 작동하는지 확인하세요.

<PMRun command="dev" />

#### `tailwind.config` 파일 제거

스타일이 예상대로 작동하는지 확인한 후 `tailwind.config.ts` 파일을 제거할 수 있습니다.

### 3. 새로운 `size-*` 유틸리티 사용

새로운 `size-*` 유틸리티(Tailwind v3.4에 추가됨)는 이제 `tailwind-merge`에서 완전히 지원됩니다. `w-* h-*`를 새로운 `size-*` 유틸리티로 교체할 수 있습니다:

```diff
- w-4 h-4
+ size-4
```

### 4. 의존성 업데이트

<PMInstall command="bits-ui@latest @lucide/svelte@latest tailwind-variants@latest tailwind-merge@latest clsx@latest svelte-sonner@latest paneforge@next vaul-svelte@next formsnap@latest" />

### 5. utils 업데이트 (선택 사항)

향후 추가 컴포넌트를 추가하거나 기존 컴포넌트를 최신 버전으로 업데이트할 계획이라면 `utils.ts` 파일을 업데이트해야 합니다.

이전에는 일부 간단한 타입 헬퍼를 위해 `bits-ui`에 의존했기 때문에 이를 사용하는 컴포넌트를 사용하지 않더라도 `bits-ui`를 설치해야 했습니다.

이러한 헬퍼는 `utils.ts` 파일로 이동되었습니다:

```diff title="utils.ts"
 import { clsx, type ClassValue } from "clsx";
 import { twMerge } from "tailwind-merge";

 export function cn(...inputs: ClassValue[]) {
	 return twMerge(clsx(inputs));
 }

+ // eslint-disable-next-line @typescript-eslint/no-explicit-any
+ export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
+ // eslint-disable-next-line @typescript-eslint/no-explicit-any
+ export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
+ export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
+ export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
```

그런 다음 기존 컴포넌트에서 이러한 import를 점진적으로 교체할 수 있습니다:

```diff title="card.svelte"
<script lang="ts">
-	import type { WithElementRef } from "bits-ui";
+	import type { WithElementRef } from "$lib/utils.js";
</script>
```

### 6. 색상 업데이트 (선택 사항)

다크 모드 색상이 검토되고 더 접근 가능하도록 업데이트되었습니다. 이 문서와 [v4.shadcn-svelte.com](https://v4.shadcn-svelte.com) 데모 사이트에서 확인할 수 있습니다.

CLI를 사용하여 컴포넌트를 다시 추가하여 새로운 다크 모드 색상을 사용하도록 컴포넌트를 업데이트할 수 있습니다[^1].

<Steps>

<Step>변경 사항 커밋</Step>

**CLI는 기존 컴포넌트를 덮어씁니다.** CLI를 실행하기 전에 컴포넌트에 대한 변경 사항을 커밋하는 것이 좋습니다.

```bash
git add .
git commit -m '..."
```

<Step>컴포넌트 업데이트</Step>

<PMExecute command="shadcn-svelte@latest add --all --overwrite" />

<Step>색상 업데이트</Step>

`app.css` 파일의 다크 모드 색상을 새로운 OKLCH 값으로 업데이트하세요. 색상 목록은 [기본 색상](/docs/theming#base-colors) 레퍼런스를 참조하세요.

<Step>변경 사항 검토</Step>

git diff를 사용하여 컴포넌트에 대한 변경 사항을 검토하고 다시 적용하세요.

</Steps>

[^1]: 컴포넌트를 업데이트하면 기존 컴포넌트가 덮어쓰여집니다.
