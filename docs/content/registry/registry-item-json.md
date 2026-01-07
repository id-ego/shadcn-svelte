---
title: registry-item.json
description: 레지스트리 아이템 명세
---

`registry-item.json` 스키마는 커스텀 레지스트리 아이템을 정의하는 데 사용됩니다.

```json title="registry-item.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
  "name": "hello-world",
  "title": "Hello World",
  "type": "registry:block",
  "description": "A simple hello world component.",
  "files": [
    {
      "path": "registry/hello-world/hello-world.svelte",
      "type": "registry:component"
    },
    {
      "path": "registry/hello-world/use-hello-world.svelte.ts",
      "type": "registry:hook"
    }
  ],
  "cssVars": {
    "theme": {
      "font-heading": "Poppins, sans-serif"
    },
    "light": {
      "brand": "20 14.3% 4.1%"
    },
    "dark": {
      "brand": "20 14.3% 4.1%"
    }
  }
}
```

<div class="flex gap-2 items-center mt-6">

[더 많은 예제 보기](/docs/registry/examples)

</div>

## 정의

`registry-item.json`의 JSON 스키마는 [여기](/schema/registry-item.json)에서 확인할 수 있습니다.

### $schema

`$schema` 속성은 `registry-item.json` 파일의 스키마를 지정하는 데 사용됩니다.

```json title="registry-item.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry-item.json"
}
```

### name

아이템의 이름입니다. 레지스트리에서 아이템을 식별하는 데 사용됩니다. 레지스트리 내에서 고유해야 합니다.

```json title="registry-item.json" showLineNumbers
{
  "name": "hello-world"
}
```

### title

레지스트리 아이템의 사람이 읽을 수 있는 제목입니다. 짧고 설명적으로 작성하세요.

```json title="registry-item.json" showLineNumbers
{
  "title": "Hello World"
}
```

### description

레지스트리 아이템의 설명입니다. `title`보다 더 길고 상세하게 작성할 수 있습니다.

```json title="registry-item.json" showLineNumbers
{
  "description": "A simple hello world component."
}
```

### type

`type` 속성은 레지스트리 아이템의 타입을 지정하는 데 사용됩니다. 프로젝트에 대해 해석될 때 아이템의 타입과 대상 경로를 결정하는 데 사용됩니다.

```json title="registry-item.json" showLineNumbers
{
  "type": "registry:block"
}
```

다음 타입이 지원됩니다:

| 타입                 | 설명                                      |
| -------------------- | ------------------------------------------------ |
| `registry:block`     | 여러 파일이 있는 복잡한 컴포넌트에 사용합니다.  |
| `registry:component` | 단순한 컴포넌트에 사용합니다.                       |
| `registry:lib`       | 라이브러리와 유틸리티에 사용합니다.                           |
| `registry:hook`      | 훅에 사용합니다.                                   |
| `registry:ui`        | UI 컴포넌트와 단일 파일 프리미티브에 사용합니다. |
| `registry:page`      | 페이지 또는 파일 기반 라우트에 사용합니다.               |
| `registry:file`      | 기타 파일에 사용합니다.                     |
| `registry:style`     | 레지스트리 스타일에 사용합니다. 예: `new-york`          |
| `registry:theme`     | 테마에 사용합니다.                                  |

### author

`author` 속성은 레지스트리 아이템의 작성자를 지정하는 데 사용됩니다.

레지스트리 아이템마다 고유할 수도 있고 레지스트리 작성자와 동일할 수도 있습니다.

```json title="registry-item.json" showLineNumbers
{
  "author": "John Doe <john@doe.com>"
}
```

### dependencies

`dependencies` 속성은 레지스트리 아이템의 의존성을 지정하는 데 사용됩니다. 이것은 `npm` 패키지를 위한 것입니다.

`@version`을 사용하여 레지스트리 아이템의 버전을 지정하세요.

```json title="registry-item.json" showLineNumbers
{
  "dependencies": ["bits-ui", "zod", "@lucide/svelte", "name@1.0.2"]
}
```

### registryDependencies

이 아이템이 의존하는 다른 레지스트리 아이템을 정의합니다.

각 항목은 다음 중 하나일 수 있습니다:

#### shadcn-svelte 레지스트리 아이템

shadcn-svelte 레지스트리 아이템의 이름(예: `'button'`, `'input'`, `'select'`)으로, shadcn-svelte 레지스트리에서 해당 아이템으로 해석됩니다.

```json title="registry-item.json" showLineNumbers
{
  "registryDependencies": ["button", "input", "select"]
}
```

#### 원격 URL

커스텀 레지스트리 아이템의 전체 URL(예: `https://example.com/r/hello-world.json`)

```json title="registry-item.json" showLineNumbers
{
  "registryDependencies": ["https://example.com/r/hello-world.json"]
}
```

#### 로컬 별칭 (CLI로 빌드할 때)

`registry.json`에서 아이템을 정의하고 CLI를 사용하여 레지스트리를 빌드하는 경우, `local:` 접두사가 있는 이름(예: `local:stepper`)을 사용하여 현재 레지스트리의 아이템을 참조할 수 있습니다. CLI는 이를 출력 `registry-item.json` 파일에서 상대 경로(예: `./stepper.json`)로 변환합니다.

```json title="registry.json" showLineNumbers
{
  "items": [
    {
      "name": "hello-world",
      "registryDependencies": ["local:stepper"]
    }
  ]
}
```

CLI는 이를 출력 `registry-item.json` 파일에서 다음과 같이 변환합니다:

```json title="registry-item.json" showLineNumbers
{
  "registryDependencies": ["./stepper.json"]
}
```

#### 상대 경로

CLI를 사용하지 않고 `registry-item.json` 파일에서 직접 아이템을 정의하는 경우, 현재 아이템에 대한 상대 경로를 지정하여 레지스트리의 다른 아이템을 참조할 수 있습니다(예: `./stepper.json`).

```json title="registry-item.json" showLineNumbers
{
  "registryDependencies": ["./stepper.json"]
}
```

### files

`files` 속성은 레지스트리 아이템의 파일을 지정하는 데 사용됩니다. 각 파일에는 `path`, `type` 및 `target`(선택사항) 속성이 있습니다.

**`target` 속성은 `registry:page`와 `registry:file` 타입에 필수입니다.**

```json title="registry-item.json" showLineNumbers
{
  "files": [
    {
      "path": "registry/hello-world/page.svelte",
      "type": "registry:page",
      "target": "src/routes/hello/+page.svelte"
    },
    {
      "path": "registry/hello-world/hello-world.svelte",
      "type": "registry:component"
    },
    {
      "path": "registry/hello-world/use-hello-world.svelte.ts",
      "type": "registry:hook"
    },
    {
      "path": "registry/hello-world/.env",
      "type": "registry:file",
      "target": ".env"
    }
  ]
}
```

#### path

`path` 속성은 레지스트리에서 파일의 경로를 지정하는 데 사용됩니다. 이 경로는 빌드 스크립트가 레지스트리 JSON 페이로드를 파싱, 변환 및 빌드하는 데 사용됩니다.

#### type

`type` 속성은 파일의 타입을 지정하는 데 사용됩니다. 자세한 내용은 [type](#type) 섹션을 참조하세요.

#### target

`target` 속성은 파일이 프로젝트에 배치되어야 하는 위치를 나타내는 데 사용됩니다. 이것은 선택사항이며 `registry:page`와 `registry:file` 타입에만 필요합니다.

기본적으로 `shadcn-svelte` CLI는 프로젝트의 `components.json` 파일을 읽어 대상 경로를 결정합니다. 라우트나 설정과 같은 일부 파일의 경우 대상 경로를 수동으로 지정할 수 있습니다.

프로젝트의 루트를 참조하려면 `~`를 사용하세요(예: `~/foo.config.js`).

### cssVars

레지스트리 아이템에 대한 CSS 변수를 정의하는 데 사용합니다.

```json title="registry-item.json" showLineNumbers
{
  "cssVars": {
    "theme": {
      "font-heading": "Poppins, sans-serif"
    },
    "light": {
      "brand": "20 14.3% 4.1%",
      "radius": "0.5rem"
    },
    "dark": {
      "brand": "20 14.3% 4.1%"
    }
  }
}
```

### css

프로젝트의 CSS 파일에 새 규칙을 추가하려면 `css`를 사용하세요(예: `@layer base`, `@layer components`, `@utility`, `@keyframes` 등).

```json title="registry-item.json" showLineNumbers
{
  "css": {
    "@layer base": {
      "body": {
        "font-size": "var(--text-base)",
        "line-height": "1.5"
      }
    },
    "@layer components": {
      "button": {
        "background-color": "var(--color-primary)",
        "color": "var(--color-white)"
      }
    },
    "@utility text-magic": {
      "font-size": "var(--text-base)",
      "line-height": "1.5"
    },
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

### docs

CLI를 통해 레지스트리 아이템을 설치할 때 커스텀 문서나 메시지를 표시하려면 `docs`를 사용하세요.

```json title="registry-item.json" showLineNumbers
{
  "docs": "Remember to add the FOO_BAR environment variable to your .env file."
}
```

### categories

레지스트리 아이템을 구성하려면 `categories`를 사용하세요.

```json title="registry-item.json" showLineNumbers
{
  "categories": ["sidebar", "dashboard"]
}
```

### meta

레지스트리 아이템에 추가 메타데이터를 추가하려면 `meta`를 사용하세요. 레지스트리 아이템에서 사용할 수 있도록 하고 싶은 키/값 쌍을 추가할 수 있습니다.

```json title="registry-item.json" showLineNumbers
{
  "meta": { "foo": "bar" }
}
```
