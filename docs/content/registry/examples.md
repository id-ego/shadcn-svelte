---
title: 예제
description: "레지스트리 아이템 예제: 스타일, 컴포넌트, CSS 변수 등"
---

## registry:style

### shadcn-svelte를 확장하는 커스텀 스타일

다음 레지스트리 아이템은 shadcn/ui를 확장하는 커스텀 스타일입니다. `npx shadcn-svelte@latest init` 실행 시 다음을 수행합니다:

- `phosphor-svelte` 아이콘을 의존성으로 설치합니다.
- `login-01` 블록과 `calendar` 컴포넌트를 프로젝트에 추가합니다.
- 원격 레지스트리에서 `editor`를 추가합니다.
- `font-sans` 변수를 `Inter, sans-serif`로 설정합니다.
- 라이트 모드와 다크 모드에서 `brand` 색상을 설치합니다.

```json title="example-style.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "example-style",
  "type": "registry:style",
  "dependencies": ["phosphor-svelte"],
  "registryDependencies": [
    "login-01",
    "calendar",
    "https://example.com/r/editor.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif"
    },
    "light": {
      "brand": "oklch(0.145 0 0)"
    },
    "dark": {
      "brand": "oklch(0.145 0 0)"
    }
  }
}
```

### 처음부터 만드는 커스텀 스타일

다음 레지스트리 아이템은 shadcn-svelte를 확장하지 _않는_ 커스텀 스타일입니다. `extends: none` 필드를 확인하세요.

이는 처음부터 새로운 스타일을 생성하는 데 사용할 수 있습니다. 즉, 커스텀 컴포넌트, CSS 변수, 의존성 등을 만들 수 있습니다.

`npx shadcn-svelte@latest add` 실행 시 다음을 수행합니다:

- `tailwind-merge`와 `clsx`를 의존성으로 설치합니다.
- shadcn-svelte 레지스트리에서 `utils` 레지스트리 아이템을 추가합니다.
- 원격 레지스트리에서 `button`, `input`, `label`, `select` 컴포넌트를 추가합니다.
- 새로운 CSS 변수를 설치합니다: `main`, `bg`, `border`, `text`, `ring`.

```json title="example-style.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "extends": "none",
  "name": "new-style",
  "type": "registry:style",
  "dependencies": ["tailwind-merge", "clsx"],
  "registryDependencies": [
    "utils",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json",
    "https://example.com/r/select.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif",
    }
    "light": {
      "main": "#88aaee",
      "bg": "#dfe5f2",
      "border": "#000",
      "text": "#000",
      "ring": "#000",
    },
    "dark": {
      "main": "#88aaee",
      "bg": "#272933",
      "border": "#000",
      "text": "#e6e6e6",
      "ring": "#fff",
    }
  }
}
```

## registry:theme

### 커스텀 테마

```json title="example-theme.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "light": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.546 0.245 262.881)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.746 0.16 232.661)",
      "sidebar-primary": "oklch(0.546 0.245 262.881)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "sidebar-ring": "oklch(0.746 0.16 232.661)"
    },
    "dark": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.707 0.165 254.624)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.707 0.165 254.624)",
      "sidebar-primary": "oklch(0.707 0.165 254.624)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "sidebar-ring": "oklch(0.707 0.165 254.624)"
    }
  }
}
```

### 커스텀 색상

다음 스타일은 shadcn-svelte 기본값을 사용하여 초기화한 다음 커스텀 `brand` 색상을 추가합니다.

```json title="example-style.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "custom-style",
  "type": "registry:style",
  "cssVars": {
    "light": {
      "brand": "oklch(0.99 0.00 0)"
    },
    "dark": {
      "brand": "oklch(0.14 0.00 286)"
    }
  }
}
```

## registry:block

### 커스텀 블록

이 블록은 shadcn-svelte 레지스트리에서 `login-01` 블록을 설치합니다.

```json title="login-01.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "login-01",
  "type": "registry:block",
  "description": "A simple login form.",
  "registryDependencies": ["button", "card", "input", "label"],
  "files": [
    {
      "path": "blocks/login-01/page.svelte",
      "content": "import { LoginForm } ...",
      "type": "registry:page",
      "target": "src/routes/login/+page.svelte"
    },
    {
      "path": "blocks/login-01/components/login-form.svelte",
      "content": "...",
      "type": "registry:component"
    }
  ]
}
```

### 블록 설치 및 프리미티브 오버라이드

shadcn-svelte 레지스트리에서 블록을 설치하고 커스텀 프리미티브로 오버라이드할 수 있습니다.

`npx shadcn-svelte@latest add` 실행 시 다음을 수행합니다:

- shadcn-svelte 레지스트리에서 `login-01` 블록을 추가합니다.
- `button`, `input`, `label` 프리미티브를 원격 레지스트리의 것으로 오버라이드합니다.

```json title="example-style.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "custom-login",
  "type": "registry:block",
  "registryDependencies": [
    "login-01",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json"
  ]
}
```

## CSS 변수

### 커스텀 테마 변수

`theme` 객체에 커스텀 테마 변수를 추가합니다.

```json title="example-theme.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "theme": {
      "font-heading": "Inter, sans-serif",
      "shadow-card": "0 0 0 1px rgba(0, 0, 0, 0.1)"
    }
  }
}
```

### Tailwind CSS 변수 오버라이드

```json title="example-theme.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "theme": {
      "spacing": "0.2rem",
      "breakpoint-sm": "640px",
      "breakpoint-md": "768px",
      "breakpoint-lg": "1024px",
      "breakpoint-xl": "1280px",
      "breakpoint-2xl": "1536px"
    }
  }
}
```

## 커스텀 CSS 추가

### 베이스 스타일

```json title="example-base.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "custom-style",
  "type": "registry:style",
  "css": {
    "@layer base": {
      "h1": {
        "font-size": "var(--text-2xl)"
      },
      "h2": {
        "font-size": "var(--text-xl)"
      }
    }
  }
}
```

### 컴포넌트

```json title="example-card.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "custom-card",
  "type": "registry:component",
  "css": {
    "@layer components": {
      "card": {
        "background-color": "var(--color-white)",
        "border-radius": "var(--rounded-lg)",
        "padding": "var(--spacing-6)",
        "box-shadow": "var(--shadow-xl)"
      }
    }
  }
}
```

## 커스텀 유틸리티 추가

### 단순 유틸리티

```json title="example-component.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility content-auto": {
      "content-visibility": "auto"
    }
  }
}
```

### 복잡한 유틸리티

```json title="example-utility.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility scrollbar-hidden": {
      "scrollbar-hidden": {
        "&::-webkit-scrollbar": {
          "display": "none"
        }
      }
    }
  }
}
```

### 함수형 유틸리티

```json title="example-functional.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility tab-*": {
      "tab-size": "var(--tab-size-*)"
    }
  }
}
```

## 커스텀 애니메이션 추가

참고: 애니메이션을 사용하려면 CSS에서 `@keyframes`와 cssVars에서 `theme`을 모두 정의해야 합니다.

```json title="example-component.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "cssVars": {
    "theme": {
      "--animate-wiggle": "wiggle 1s ease-in-out infinite"
    }
  },
  "css": {
    "@keyframes wiggle": {
      "0%, 100%": {
        "transform": "rotate(-3deg)"
      },
      "50%": {
        "transform": "rotate(3deg)"
      }
    }
  }
}
```
