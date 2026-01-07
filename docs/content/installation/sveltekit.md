---
title: SvelteKit
description: SvelteKit 프로젝트에서 shadcn-svelte를 설정하는 방법.
---

<script>
	import * as Alert from "$lib/registry/ui/alert/index.js";
	import Steps from "$lib/components/steps.svelte";
	import PMCreate from "$lib/components/pm-create.svelte";
	import PMExecute from "$lib/components/pm-execute.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
</script>

<Steps>

### 프로젝트 생성

SvelteKit CLI를 사용하여 TailwindCSS가 포함된 새 프로젝트를 생성합니다

<PMExecute command="sv create my-app --add tailwindcss" />

### 경로 별칭 설정

기본 별칭인 `$lib`를 사용하지 않는 경우, `svelte.config.js` 파일에 해당 별칭을 추가해야 합니다.

```ts title="svelte.config.js" {6} showLineNumbers
const config = {
  // ... other config
  kit: {
    // ... other config
    alias: {
      "@/*": "./path/to/lib/*",
    },
  },
};
```

### CLI 실행

<PMExecute command="shadcn-svelte@latest init" />

### components.json 설정

`components.json`을 설정하기 위한 몇 가지 질문이 표시됩니다:

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

위 명령어는 프로젝트에 `Button` 컴포넌트를 추가합니다. 다음과 같이 가져올 수 있습니다:

```svelte {2,5} showLineNumbers
<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button>Click me</Button>
```

</Steps>
