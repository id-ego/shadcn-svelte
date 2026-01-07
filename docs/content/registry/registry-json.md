---
title: registry.json
description: 컴포넌트 레지스트리 운영을 위한 스키마입니다.
---

<script>
	import Callout from "$lib/components/callout.svelte";
</script>

`registry.json` 스키마는 사용자 정의 컴포넌트 레지스트리를 정의하는 데 사용됩니다.

```json title="registry.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry.json",
  "name": "shadcn-svelte",
  "homepage": "https://shadcn-svelte.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "src/lib/registry/blocks/hello-world/hello-world.svelte",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

## 정의

`registry.json`의 JSON 스키마는 [여기](/schema/registry.json)에서 확인할 수 있습니다.

### $schema

`$schema` 속성은 `registry.json` 파일의 스키마를 지정하는 데 사용됩니다.

```json title="registry.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry.json"
}
```

### name

`name` 속성은 레지스트리의 이름을 지정하는 데 사용됩니다. 이는 데이터 속성 및 기타 메타데이터에 사용됩니다.

```json title="registry.json" showLineNumbers
{
  "name": "acme"
}
```

### homepage

레지스트리의 홈페이지입니다. 이는 데이터 속성 및 기타 메타데이터에 사용됩니다.

```json title="registry.json" showLineNumbers
{
  "homepage": "https://acme.com"
}
```

### items

레지스트리의 `items`입니다. 각 아이템은 [registry-item 스키마 사양](/schema/registry-item.json)을 구현해야 합니다.

```json title="registry.json" showLineNumbers
{
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "src/lib/registry/blocks/hello-world/hello-world.svelte",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

자세한 내용은 [registry-item 스키마 문서](/docs/registry/registry-item-json)를 참고하세요.

### aliases

`aliases`는 사용자가 컴포넌트를 설치할 때 레지스트리의 내부 import 경로가 어떻게 변환될지 정의합니다. 이는 레지스트리 코드 내에서 컴포넌트를 import하는 방식과 일치해야 합니다.

예를 들어, 레지스트리의 컴포넌트가 다음과 같다면:

```svelte
<script lang="ts">
  import { Button } from "@/lib/registry/ui/button/index.js";
  import { cn } from "@/lib/utils.js";
</script>
```

`registry.json`은 일치하는 aliases를 가져야 합니다:

```json title="registry.json" showLineNumbers
{
  "aliases": {
    "lib": "@/lib", // Matches your internal imports
    "ui": "@/lib/registry/ui", // Matches your internal imports
    "components": "@/lib/registry/components", // Matches your internal imports
    "utils": "@/lib/utils", // Matches your internal imports
    "hooks": "@/lib/hooks" // Matches your internal imports
  }
}
```

사용자가 컴포넌트를 설치하면, 이러한 경로는 사용자의 `components.json` 설정에 따라 변환됩니다. 여기서 정의한 aliases는 대체될 "소스" 경로입니다.

기본 aliases (지정하지 않은 경우):

```json title="registry.json" showLineNumbers
{
  "aliases": {
    "lib": "$lib/registry/lib", // For internal library code
    "ui": "$lib/registry/ui", // For UI components
    "components": "$lib/registry/components", // For component-specific code
    "utils": "$lib/utils", // For utility functions
    "hooks": "$lib/registry/hooks" // For reactive state and logic (.svelte.js|ts)
  }
}
```

### overrideDependencies

`overrideDependencies`를 사용하면 `shadcn-svelte registry build`가 `package.json`에서 감지하는 내용을 재정의하여 특정 버전 범위의 의존성을 강제할 수 있습니다.

일반적인 사용 사례:

- 최신 프리릴리스 버전 사용: `"overrideDependencies": ["paneforge@next"]`
- 특정 버전으로 고정: `"overrideDependencies": ["dep@1.5.0"]`

<Callout class="bg-blue-50 mt-6 border-blue-600 dark:border-blue-900 dark:bg-blue-950 mb-6 [&_code]:bg-blue-100 dark:[&_code]:bg-blue-900 text-foreground">

**주의**: 의존성을 재정의하면 신중하게 관리하지 않을 경우 버전 충돌이 발생할 수 있습니다. 이 옵션은 드물게 사용해야 합니다.

</Callout>

변환 예제:

```json
// Your registry's package.json
{
  "dependencies": {
    "paneforge": "1.0.0-next.1"
  }
}
```

사용자가 컴포넌트를 설치하면 `1.0.0-next.1` 대신 최신 `@next` 버전이 사용됩니다

```json
{
  "dependencies": {
    "paneforge": "1.0.0-next.1", // overrideDependencies: []
    "paneforge": "1.0.0-next.5" // overrideDependencies: ["paneforge@next"]
  }
}
```
