---
title: Svelte 5
description: Svelte 4와 Tailwind 3에서 Svelte 5로 마이그레이션하는 방법입니다.
---

<script>
	import Steps from "$lib/components/steps.svelte";
	import PMExecute from "$lib/components/pm-execute.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import PMRemove from "$lib/components/pm-remove.svelte";
	import Callout from "$lib/components/callout.svelte";
</script>

<Callout>

**참고**: Svelte 5와 함께 이 프로젝트와 헤드리스 UI 라이브러리인 [bits-ui](https://bits-ui.com)에 중요한 변경 사항이 있습니다. 이 가이드는 shadcn-svelte 부분의 마이그레이션에만 초점을 맞추고 있으며 `bits-ui`의 마이그레이션은 다루지 않습니다. 자세한 내용은 [Bits UI 마이그레이션 가이드](https://bits-ui.com/docs/migration-guide)를 참조하세요.

</Callout>

## Svelte 4에서 Svelte 5로

이 가이드는 Svelte 4와 Tailwind 3 프로젝트를 Svelte 5와 Tailwind 3로 마이그레이션합니다.

이 가이드를 완료하고 모든 것이 정상적으로 작동하는 것을 확인하면, 다음 가이드로 넘어가 Tailwind 4로 마이그레이션할 수 있습니다.

## 사전 준비사항

1. Svelte 4에서 Svelte 5로의 변경 사항을 읽어보세요. Svelte는 [웹사이트](https://svelte.dev/docs/svelte/v5-migration-guide)에서 포괄적인 가이드를 제공합니다.
2. 저장소의 보류 중인 변경 사항을 커밋하세요.
3. 어떤 컴포넌트에 사용자 정의 동작/스타일이 있는지 확인하여 업데이트 후 다시 구현할 수 있도록 하세요.
4. [`sv-migrate`](https://svelte.dev/docs/cli/sv-migrate)를 사용하여 프로젝트를 Svelte 5로 마이그레이션하세요.

## 설정 업데이트

Svelte 5에서는 `components.json`, `utils`, 그리고 전역 CSS 파일이 변경되었습니다.

### `components.json` 업데이트

루트 객체에 `registry`를 추가하고, `aliases` 아래에 `hooks`, `ui`, `lib` 키를 추가하세요.

```diff
{
  "$schema": "https://shadcn-svelte.com/schema.json",
  "style": "default",
  "tailwind": {
    "css": "src/routes/layout.css",
    "baseColor": "slate"
  },
  "aliases": {
    "components": "$lib/components",
    "utils": "$lib/utils",
+   "ui": "$lib/components/ui",
+   "hooks": "$lib/hooks",
+   "lib": "$lib"
  },
  "typescript": true,
+ "registry": "https://shadcn-svelte.com/registry"
}
```

### `tailwind.config.js` 업데이트

`tailwindcss-animate`를 추가하세요.

<PMInstall command="tailwindcss-animate" />

`tailwindcss-animate` 플러그인, 사이드바 색상, 애니메이션 설정을 추가하세요.

```ts title="tailwind.config.js"
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: ["dark"],
  theme: {
    container: {
      // unchanged ...
    },
    extend: {
      colors: {
        // unchanged ...
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        // unchanged ...
      },
      fontFamily: {
        // unchanged ...
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--bits-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--bits-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
```

### `utils.ts` 업데이트

<Callout>

**참고**: 일부 컴포넌트가 이제 제거된 `flyAndScale` 함수에 의존할 수 있으므로, 컴포넌트를 업데이트한 후에 이 단계를 수행하는 것이 좋습니다.

</Callout>

`utils.ts`는 이제 `cn` 함수와 몇 가지 유틸리티 타입만 내보냅니다.

```ts title="src/lib/utils.ts"
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any }
  ? Omit<T, "children">
  : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & {
  ref?: U | null;
};
```

## 컴포넌트 업그레이드

### 의존성 별칭 지정 (선택 사항)

컴포넌트를 천천히 마이그레이션할 계획이라면, `package.json` 파일에서 `bits-ui`와 같은 주요 의존성의 이전 버전에 별칭을 지정하여 마이그레이션하는 동안 프로젝트에서 두 버전의 라이브러리를 모두 사용할 수 있도록 하는 것이 좋습니다.

```diff title="package.json"
{
  "devDependencies": {
-	"bits-ui": "^0.22.0",
+   "bits-ui-old": "npm:bits-ui@0.22.0",
  }
}
```

그런 다음 프로젝트에서 사용되는 모든 import를 `bits-ui-old`로 교체해야 합니다.

```diff title="src/lib/components/ui/dialog-content.svelte"
<script lang="ts">
-  import { Dialog as DialogPrimitive } from "bits-ui";
+  import { Dialog as DialogPrimitive } from "bits-ui-old";
</script>
```

프로젝트에서 사용하는 다른 의존성에 대해서도 동일한 작업을 수행할 수 있습니다.

### 의존성 업데이트

다음 의존성들이 Svelte 5를 지원하도록 업데이트되었습니다:

- `bits-ui` - `^1.0.0`
- `svelte-sonner` - `^1.0.0`
- `@lucide/svelte` - `^0.482.0`
- `paneforge` - `^1.0.0-next.5`
- `vaul-svelte` - `^1.0.0-next.7`
- `mode-watcher` - `^1.0.0`
- `cmdk-sv` - deprecated in favor of Bits UI's `Command` component
- `svelte-headless-table` - deprecated in favor of `@tanstack/table-core`
- `svelte-radix` - icons deprecated in favor of `@lucide/svelte`
- `lucide-svelte` - replaced with `@lucide/svelte`

다음 명령을 실행하여 의존성을 업데이트할 수 있습니다:

<PMInstall command="bits-ui@latest svelte-sonner@latest @lucide/svelte@latest paneforge@next vaul-svelte@next mode-watcher@latest -D" />

### 컴포넌트 마이그레이션 시작

이제 컴포넌트를 새 버전으로 업데이트할 준비가 되었습니다. CLI는 실제로 컴포넌트를 업데이트하지 않고 새 버전으로 교체하기만 하므로, CLI를 실행하기 전에 변경 사항을 커밋해야 합니다.

```bash
git add .
git commit -m 'before migration'
```

이제 `add` 명령을 실행하여 컴포넌트 마이그레이션을 시작할 수 있습니다.

<PMExecute command="shadcn-svelte@latest add dialog --overwrite" />

diff를 검토하여 업데이트된 내용을 확인하고 필요한 조정을 수행하세요. 마이그레이션하려는 각 컴포넌트에 대해 이 과정을 반복하세요.

## 사용하지 않는 의존성 제거

모든 컴포넌트를 업데이트한 후에는 `package.json` 파일에서 이전 의존성을 제거할 수 있습니다.

### cmdk-sv

`cmdk-sv`는 Bits UI의 `Command` 컴포넌트로 대체되었습니다.

<PMRemove command="cmdk-sv" />

### svelte-headless-table

`svelte-headless-table`은 `@tanstack/table-core`로 대체되었습니다.

<PMRemove command="svelte-headless-table" />

### svelte-radix

`svelte-radix`는 `@lucide/svelte`로 대체되었습니다.

<PMRemove command="svelte-radix" />

### lucide-svelte

`lucide-svelte`는 `@lucide/svelte`로 대체되었습니다.

<PMRemove command="lucide-svelte" />

## 다음 단계

이 가이드를 완료하고 모든 것이 예상대로 작동하는 것을 확인했다면, [Tailwind 4 가이드](/docs/migration/tailwind-v4)로 넘어갈 수 있습니다.
