---
title: 시작하기
description: 자신의 컴포넌트 레지스트리를 설정하고 실행하는 방법을 배워보세요.
---

<script>
	import Step from "$lib/components/step.svelte";
	import Steps from "$lib/components/steps.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import PMRun from "$lib/components/pm-run.svelte";
	import PMExecute from "$lib/components/pm-execute.svelte";
	import Callout from "$lib/components/callout.svelte";
</script>

이 가이드는 자신의 컴포넌트 레지스트리를 설정하는 과정을 안내합니다.

이미 컴포넌트가 있는 프로젝트를 레지스트리로 전환하려는 경우를 전제로 합니다.

새로운 레지스트리 프로젝트를 시작하는 경우, [레지스트리 템플릿](https://github.com/huntabyte/shadcn-svelte/tree/main/registry-template)을 시작점으로 사용할 수 있습니다. 이미 설정이 완료되어 있습니다.

## registry.json

`registry.json` 파일은 `shadcn-svelte` CLI를 사용하여 레지스트리를 빌드하는 경우에만 필요합니다.

다른 빌드 시스템을 사용하는 경우, 빌드 시스템이 [레지스트리 아이템 스키마 명세](/docs/registry/registry-item-json)를 준수하는 유효한 JSON 파일을 생성하는 한 이 단계를 건너뛸 수 있습니다.

<Steps>

### registry.json 파일 추가

프로젝트 루트에 `registry.json` 파일을 생성합니다.

```json title="registry.json" showLineNumbers
{
  "$schema": "https://shadcn-svelte.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    // ...
  ]
}
```

이 `registry.json` 파일은 [레지스트리 스키마 명세](/docs/registry/registry-json)를 준수해야 합니다.

</Steps>

## 레지스트리 아이템 추가

<Steps>

### 컴포넌트 생성

첫 번째 컴포넌트를 추가합니다. 다음은 간단한 `<HelloWorld />` 컴포넌트의 예제입니다:

```svelte title="registry/hello-world/hello-world.svelte" showLineNumbers
<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button>Hello World</Button>
```

<Callout class="mt-6">

**참고:** 이 예제는 컴포넌트를 `registry/` 디렉토리에 배치합니다. `registry.json` 파일에 올바른 경로를 설정하고 `registry/[NAME]` 디렉토리 구조를 따르는 한 프로젝트의 어디에든 배치할 수 있습니다.

</Callout>

```txt
registry
└── hello-world
    └── hello-world.svelte
```

<Callout class="mt-6 [&_[data-rehype-pretty-code-title]]:pt-1 [&_pre]:mb-0">

**주의:** 커스텀 디렉토리에 컴포넌트를 배치하는 경우, Tailwind CSS에서 감지할 수 있는지 확인하세요.

```css showLineNumbers title="src/routes/layout.css"
@source "./registry/@acmecorp/ui-lib";
```

</Callout>

### 레지스트리에 컴포넌트 추가

레지스트리에 컴포넌트를 추가하려면 `registry.json`에 컴포넌트 정의를 추가해야 합니다.

```json title="registry.json" showLineNumbers {6-17}
{
  "$schema": "https://shadcn-svelte.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "./src/lib/hello-world/hello-world.svelte",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

레지스트리 아이템은 `name`, `type`, `title`, `description`, `files`를 추가하여 정의합니다.

추가하는 모든 파일에 대해 `path`와 `type`을 지정해야 합니다. `path`는 프로젝트 루트에서 파일까지의 상대 경로입니다. `type`은 파일의 타입입니다.

레지스트리 아이템 스키마와 파일 타입에 대한 자세한 내용은 [레지스트리 아이템 스키마 문서](/docs/registry/registry-item-json)를 참조하세요.

</Steps>

## 레지스트리 빌드

<Steps>

### shadcn-svelte CLI 설치

<PMInstall command="shadcn-svelte@latest" />

### 빌드 스크립트 추가

`package.json` 파일에 `registry:build` 스크립트를 추가합니다.

```json title="package.json" showLineNumbers
{
  "scripts": {
    "registry:build": "pnpm shadcn-svelte registry build"
  }
}
```

### 빌드 스크립트 실행

빌드 스크립트를 실행하여 레지스트리 JSON 파일을 생성합니다.

<PMRun command="registry:build" />

<Callout class="mt-6">

**참고:** 기본적으로 빌드 스크립트는 `static/r`에 레지스트리 JSON 파일을 생성합니다(예: `static/r/hello-world.json`).

`--output` 옵션을 전달하여 출력 디렉토리를 변경할 수 있습니다. 자세한 내용은 [shadcn-svelte registry build 명령어](/docs/cli#registry-build)를 참조하세요.

</Callout>

</Steps>

## 레지스트리 제공

개발 서버를 실행하여 레지스트리를 제공할 수 있습니다.

<PMRun command="dev" />

이제 파일이 `http://localhost:5173/r/[NAME].json`에서 제공됩니다(예: `http://localhost:5173/r/hello-world.json`).

## 레지스트리 배포

다른 개발자가 레지스트리를 사용할 수 있도록 하려면 프로젝트를 공개 URL에 배포하여 게시할 수 있습니다.

## 인증 추가

`shadcn-svelte` CLI는 레지스트리에 인증을 추가하는 내장 방법을 제공하지 않습니다. 레지스트리 서버에서 인증을 처리하는 것을 권장합니다.

일반적인 간단한 접근 방식은 `token` 쿼리 매개변수를 사용하여 레지스트리에 대한 요청을 인증하는 것입니다(예: `http://localhost:5173/r/hello-world.json?token=[SECURE_TOKEN_HERE]`).

보안 토큰을 사용하여 요청을 인증하고 토큰이 유효하지 않은 경우 401 Unauthorized 응답을 반환합니다. `shadcn-svelte` CLI는 401 응답을 처리하고 사용자에게 메시지를 표시합니다.

<Callout class="mt-6">

**참고:** 토큰을 암호화하고 만료되도록 설정해야 합니다.

</Callout>

## 가이드라인

레지스트리용 컴포넌트를 빌드할 때 따라야 할 가이드라인입니다.

- 블록 정의에는 다음 속성이 필수입니다: `name`, `description`, `type`, `files`.
- 모든 레지스트리 의존성을 `registryDependencies`에 나열해야 합니다. 레지스트리 의존성은 레지스트리에 있는 컴포넌트의 이름(예: `input`, `button`, `card` 등) 또는 레지스트리 아이템의 URL(예: `http://localhost:5173/r/editor.json`)입니다.
- 레지스트리 아이템 내의 파일은 `components`, `hooks`, `lib` 디렉토리에 배치하는 것이 이상적입니다.

## CLI를 사용한 설치

`shadcn-svelte` CLI를 사용하여 레지스트리 아이템을 설치하려면 레지스트리 아이템의 URL 뒤에 `add` 명령어를 사용합니다.

<PMExecute command="shadcn-svelte@latest add http://localhost:5173/r/hello-world.json" />
