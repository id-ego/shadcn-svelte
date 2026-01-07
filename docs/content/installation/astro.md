---
title: Astro
description: Astro 프로젝트에서 shadcn-svelte를 설정하는 방법입니다.
---

<script>
	import * as Alert from "$lib/registry/ui/alert/index.js";
	import Steps from "$lib/components/steps.svelte";
	import Callout from "$lib/components/callout.svelte";
	import PMCreate from "$lib/components/pm-create.svelte";
	import PMExecute from "$lib/components/pm-execute.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
</script>

<Steps>

### 프로젝트 생성

새로운 Astro 프로젝트를 생성하는 것부터 시작합니다:

<PMCreate command="astro@latest" />

### Astro 프로젝트 구성

프로젝트를 구성하기 위한 몇 가지 질문이 표시됩니다:

```bash showLineNumbers
- Where should we create your new project?
./your-app-name
- How would you like to start your new project?
Choose a starter template (or Empty)
- Install dependencies?
Yes
- Initialize a new git repository? (optional)
Yes/No
```

### 프로젝트에 Svelte 추가

Astro CLI를 사용하여 Svelte를 설치합니다:

<PMExecute command="astro add svelte" />

<Callout className="mt-4">

Svelte 설치 시 CLI에서 표시되는 모든 질문에 `Yes`로 답변하세요.

</Callout>

### 프로젝트에 TailwindCSS 추가

Astro CLI를 사용하여 Tailwind CSS를 추가합니다:

<PMExecute command="astro add tailwind" />

<Callout className="mt-4">

TailwindCSS 설치 시 CLI에서 표시되는 모든 질문에 `Yes`로 답변하세요.

</Callout>

### 전역 CSS 파일 불러오기

`src/pages/index.astro` 파일에 `global.css` 파일을 불러옵니다:

```astro title="src/pages/index.astro" {2} showLineNumbers
---
import "../styles/global.css";
---
```

### 경로 별칭 설정

경로를 해석하기 위해 `tsconfig.json` 파일에 다음 코드를 추가합니다:

```json title="tsconfig.json" {2-10} showLineNumbers
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "$lib": ["./src/lib"],
      "$lib/*": ["./src/lib/*"]
    }
    // ...
  }
}
```

<Callout className="mt-4">

필요한 경우, 특정 요구사항에 맞게 경로 별칭을 조정하세요 ([자세히 알아보기](https://docs.astro.build/en/guides/aliases/)).

</Callout>

### CLI 실행

프로젝트를 설정하기 위해 `shadcn-svelte` init 명령어를 실행합니다:

<PMExecute command="shadcn-svelte@latest init" />

### components.json 구성

`components.json`을 구성하기 위한 몇 가지 질문이 표시됩니다:

```txt showLineNumbers
Which base color would you like to use? › Slate
Where is your global CSS file? (this file will be overwritten) › src/styles/global.css
Configure the import alias for lib: › $lib
Configure the import alias for components: › $lib/components
Configure the import alias for utils: › $lib/utils
Configure the import alias for hooks: › $lib/hooks
Configure the import alias for ui: › $lib/components/ui
```

### 완료

이제 프로젝트에 컴포넌트를 추가할 수 있습니다.

<PMAddComp name="button" />

위 명령어는 프로젝트에 `Button` 컴포넌트를 추가합니다. 다음과 같이 불러올 수 있습니다:

```astro title="index.astro" {2,10} showLineNumbers
---
import { Button } from "$lib/components/ui/button/index.js";
---

<html lang="en">
	<head>
		<title>Astro</title>
	</head>
	<body>
		<Button>Hello World</Button>
	</body>
</html>
```

<Callout className="mt-4">

인터랙티브 컴포넌트를 다룰 때는 `.astro` 파일 내에서 `client` 디렉티브를 사용해야 합니다 ([자세히 알아보기](https://docs.astro.build/en/reference/directives-reference/#client-directives)).

</Callout>

</Steps>
