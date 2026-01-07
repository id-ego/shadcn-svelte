---
title: JavaScript
description: shadcn-svelte를 JavaScript와 함께 사용하는 방법입니다.
---

이 프로젝트와 컴포넌트들은 TypeScript로 작성되었습니다. 프로젝트에도 TypeScript를 사용하는 것을 권장합니다.

하지만 컴포넌트의 JavaScript 버전도 제공하고 있습니다. JavaScript 버전은 [CLI](/docs/cli)를 통해서_만_ 사용할 수 있습니다.

TypeScript를 사용하지 않으려면 `components.json` 파일의 `typescript` 플래그를 사용할 수 있습니다.

```json {6} title="components.json" showLineNumbers
{
  "style": "default",
  "tailwind": {
    "css": "src/routes/layout.css"
  },
  "typescript": false,
  "aliases": {
    "utils": "$lib/utils",
    "components": "$lib/components",
    "hooks": "$lib/hooks",
    "ui": "$lib/components/ui"
  },
  "registry": "https://shadcn-svelte.com/registry"
}
```

import 별칭을 설정하려면 `jsconfig.json` 파일을 생성하세요:

```json {4} title="jsconfig.json" showLineNumbers
{
  "compilerOptions": {
    "paths": {
      "$lib/*": ["./src/lib/*"]
    }
  }
}
```
