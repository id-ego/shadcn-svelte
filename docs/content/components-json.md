---
title: components.json
description: 프로젝트 설정 파일입니다.
---

<script>
	import Callout from "$lib/components/callout.svelte";
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import PMExecute from "$lib/components/pm-execute.svelte";
</script>

`components.json` 파일은 프로젝트의 설정을 담고 있습니다.

이 파일을 통해 프로젝트가 어떻게 구성되어 있는지 이해하고, 프로젝트에 맞춤화된 컴포넌트를 생성합니다.

<Callout class="mt-6">

참고: `components.json` 파일은 선택 사항이며 **CLI를 사용하여 컴포넌트를 추가할 때만 필요**합니다. 복사 및 붙여넣기 방식을 사용한다면 이 파일이 필요하지 않습니다.

</Callout>

다음 명령어를 실행하여 프로젝트에 `components.json` 파일을 생성할 수 있습니다:

<PMExecute command="shadcn-svelte@latest init" />

자세한 내용은 [CLI 섹션](/docs/cli)을 참고하세요.

## $schema

`components.json`의 JSON 스키마는 [여기](https://shadcn-svelte.com/schema.json)에서 확인할 수 있습니다.

```json title="components.json"
{
  "$schema": "https://shadcn-svelte.com/schema.json"
}
```

## tailwind

CLI가 프로젝트의 Tailwind CSS 설정을 이해할 수 있도록 도와주는 설정입니다.

Tailwind CSS 설정 방법은 [설치 섹션](/docs/installation)을 참고하세요.

### tailwind.css

프로젝트에 Tailwind CSS를 가져오는 CSS 파일의 경로입니다.

```json title="components.json"
{
  "tailwind": {
    "css": "src/app.{p,post}css"
  }
}
```

### tailwind.baseColor

컴포넌트의 기본 색상 팔레트를 생성하는 데 사용됩니다. **초기화 후에는 변경할 수 없습니다.**

```json title="components.json"
{
  "tailwind": {
    "baseColor": "gray" | "neutral" | "slate" | "stone" | "zinc"
  }
}
```

## aliases

CLI는 이 값들과 `svelte.config.js` 파일의 `alias` 설정을 사용하여 생성된 컴포넌트를 올바른 위치에 배치합니다.

경로 별칭은 `svelte.config.js` 파일에 설정되어 있어야 합니다.

### aliases.lib

라이브러리의 import 별칭으로, _일반적으로_ 컴포넌트, 유틸리티, hooks 등을 저장하는 위치입니다.

```json title="components.json"
{
  "aliases": {
    "lib": "$lib"
  }
}
```

### aliases.utils

유틸리티 함수의 import 별칭입니다.

```json title="components.json"
{
  "aliases": {
    "utils": "$lib/utils"
  }
}
```

### aliases.components

컴포넌트의 import 별칭입니다.

```json title="components.json"
{
  "aliases": {
    "components": "$lib/components"
  }
}
```

### aliases.ui

UI 컴포넌트의 import 별칭입니다.

```json title="components.json"
{
  "aliases": {
    "ui": "$lib/components/ui"
  }
}
```

### aliases.hooks

hooks의 import 별칭입니다. Svelte 5에서 hooks는 일반적으로 `.svelte.ts` 또는 `.svelte.js`로 끝나는 파일에 있는 반응형 함수/클래스입니다.

```json title="components.json"
{
  "aliases": {
    "hooks": "$lib/hooks"
  }
}
```

## Typescript

Typescript를 활성화하거나 비활성화할 수 있습니다.

```json title="components.json"
{
  "typescript": true | false
}
```

`tsconfig.json` 또는 `jsconfig.json`과 다른 이름을 가지고 있거나 다른 디렉터리에 위치한 경우, 사용자 정의 Typescript 설정 파일의 경로를 지정할 수도 있습니다:

```json title="components.json"
{
  "typescript": {
    "config": "path/to/tsconfig.custom.json"
  }
}
```

## Registry

레지스트리 URL은 CLI가 shadcn-svelte 컴포넌트/레지스트리를 가져올 위치를 지정합니다. 특정 프리뷰 릴리스 또는 레지스트리의 자체 포크로 고정할 수 있습니다.

```json title="components.json"
{
  "registry": "https://shadcn-svelte.com/registry"
}
```
