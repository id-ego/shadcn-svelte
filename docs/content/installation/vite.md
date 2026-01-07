---
title: Vite
description: Vite 프로젝트에서 shadcn-svelte를 설정하는 방법입니다.
---

<script>
	import * as Alert from "$lib/registry/ui/alert/index.js";
	import Steps from "$lib/components/steps.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import PMExecute from "$lib/components/pm-execute.svelte";
</script>

<Steps>

### TailwindCSS 추가

Svelte CLI를 사용하여 프로젝트에 Tailwind CSS를 추가합니다.

<PMExecute command="sv add tailwindcss" />

### tsconfig.json 파일 수정

현재 버전의 Vite는 TypeScript 설정을 세 개의 파일로 분리하며, 그 중 두 개를 수정해야 합니다.
`tsconfig.json`과 `tsconfig.app.json` 파일의 `compilerOptions` 섹션에 `baseUrl`과 `paths` 속성을 추가합니다:

```json title="tsconfig.json" {7-13} showLineNumbers
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "$lib": ["./src/lib"],
      "$lib/*": ["./src/lib/*"]
    }
  }
}
```

### tsconfig.app.json 파일 수정

IDE에서 경로를 해석할 수 있도록 `tsconfig.app.json` 파일에 다음 코드를 추가합니다:

```json title="tsconfig.app.json" {4-8} showLineNumbers
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "$lib": ["./src/lib"],
      "$lib/*": ["./src/lib/*"]
    }
  }
}
```

### vite.config.ts 업데이트

앱이 경로를 오류 없이 해석할 수 있도록 vite.config.ts에 다음 코드를 추가합니다:

```ts title="vite.config.ts" {1, 5-9} showLineNumbers
import path from "path";

export default defineConfig({
  // ... other options
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
});
```

### CLI 실행

<PMExecute command="shadcn-svelte@latest init" />

### components.json 설정

`components.json`을 설정하기 위해 몇 가지 질문을 받게 됩니다:

```txt showLineNumbers
Which base color would you like to use? › Slate
Where is your global CSS file? (this file will be overwritten) › src/routes/layout.css
Configure the import alias for lib: › $lib
Configure the import alias for components: › $lib/components
Configure the import alias for utils: › $lib/utils
Configure the import alias for hooks: › $lib/hooks
Configure the import alias for ui: › $lib/components/ui
```

### 완료

이제 프로젝트에 컴포넌트를 추가할 수 있습니다.

<PMAddComp name="button" />

위 명령어는 프로젝트에 `Button` 컴포넌트를 추가합니다. 다음과 같이 import할 수 있습니다:

```svelte {2,5} showLineNumbers
<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button>Click me</Button>
```

</Steps>
