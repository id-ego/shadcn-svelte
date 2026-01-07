---
title: FAQ
description: 레지스트리 운영에 관한 자주 묻는 질문입니다.
---

## 자주 묻는 질문

### 복잡한 컴포넌트는 어떻게 생겼나요?

다음은 페이지, 두 개의 컴포넌트, 훅, format-date 유틸 및 설정 파일을 설치하는 복잡한 컴포넌트의 예입니다.

```json showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "hello-world",
  "title": "Hello World",
  "type": "registry:block",
  "description": "A complex hello world component",
  "files": [
    {
      "path": "registry/hello-world/page.svelte",
      "type": "registry:page",
      "target": "src/routes/hello/+page.svelte"
    },
    {
      "path": "registry/hello-world/components/hello-world.svelte",
      "type": "registry:component"
    },
    {
      "path": "registry/hello-world/components/formatted-message.svelte",
      "type": "registry:component"
    },
    {
      "path": "registry/hello-world/hooks/use-hello.svelte.ts",
      "type": "registry:hook"
    },
    {
      "path": "registry/hello-world/lib/format-date.ts",
      "type": "registry:utils"
    },
    {
      "path": "registry/hello-world/hello.config.ts",
      "type": "registry:file",
      "target": "hello.config.ts"
    }
  ]
}
```

### 새로운 Tailwind 색상을 추가하려면 어떻게 하나요?

새로운 색상을 추가하려면 `cssVars`의 `light`와 `dark` 키 아래에 추가해야 합니다.

```json showLineNumbers {10-18}
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "hello-world",
  "title": "Hello World",
  "type": "registry:block",
  "description": "A complex hello world component",
  "files": [
    // ...
  ],
  "cssVars": {
    "light": {
      "brand-background": "20 14.3% 4.1%",
      "brand-accent": "20 14.3% 4.1%"
    },
    "dark": {
      "brand-background": "20 14.3% 4.1%",
      "brand-accent": "20 14.3% 4.1%"
    }
  }
}
```

CLI가 프로젝트 CSS 파일을 업데이트합니다. 업데이트되면 새로운 색상을 유틸리티 클래스로 사용할 수 있습니다: `bg-brand`, `text-brand-accent`.

### Tailwind 테마 변수를 추가하거나 재정의하려면 어떻게 하나요?

테마 변수를 추가하거나 재정의하려면 `cssVars.theme`에 추가하거나 재정의하려는 키 아래에 추가하면 됩니다.

```json showLineNumbers {10-15}
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "hello-world",
  "title": "Hello World",
  "type": "registry:block",
  "description": "A complex hello world component",
  "files": [
    // ...
  ],
  "cssVars": {
    "theme": {
      "text-base": "3rem",
      "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      "font-heading": "Poppins, sans-serif"
    }
  }
}
```
