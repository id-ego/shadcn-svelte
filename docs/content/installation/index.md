---
title: 설치
description: 의존성을 설치하고 앱 구조를 설정하는 방법입니다.
---

<script>
	import InstallCards from '$lib/components/install-cards.svelte'
	import SvelteWhite from '$lib/components/svelte-white.svelte'
</script>

## 가이드

<InstallCards />

## 임포트

React용 원본 [shadcn/ui](https://ui.shadcn.com)는 전체 컴포넌트를 단일 파일에 작성할 수 있지만, 이 포트에서는 컴포넌트가 여러 파일로 분리되어 있습니다. Svelte는 단일 파일에 여러 컴포넌트를 정의하는 것을 지원하지 않기 때문에, CLI를 활용하여 컴포넌트를 추가하는 것이 최적의 방법입니다.

CLI는 _각_ 컴포넌트마다 폴더를 생성하며, 때로는 단일 Svelte 파일만 포함하고, 때로는 여러 파일을 포함합니다. 각 폴더 내에는 컴포넌트를 내보내는 `index.ts` 파일이 있어 단일 파일에서 임포트할 수 있습니다.

예를 들어, Accordion 컴포넌트는 네 개의 `.svelte` 파일로 분리되어 있습니다:

- `accordion.svelte`
- `accordion-content.svelte`
- `accordion-item.svelte`
- `accordion-trigger.svelte`

이들은 다음과 같이 `accordion/index.ts` 파일에서 임포트할 수 있습니다:

```ts
import * as Accordion from '$lib/components/ui/accordion"
// or
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "$lib/components/ui/accordion"
```

어떤 임포트 방식을 사용하든, 컴포넌트는 Rollup에 의해 트리 셰이킹되므로 사용하지 않는 컴포넌트가 앱에 번들되는 것을 걱정할 필요가 없습니다.

## VSCode 확장

[@selemondev](https://github.com/selemondev)가 제작한 shadcn-svelte [VSCode 확장](https://marketplace.visualstudio.com/items?itemName=Selemondev.vscode-shadcn-svelte)을 Visual Studio Code에 설치하면 Shadcn Svelte 컴포넌트를 프로젝트에 쉽게 추가할 수 있습니다.

이 확장은 다양한 기능을 제공합니다:

- shadcn-svelte CLI 초기화 기능
- 프로젝트에 컴포넌트 추가
- IDE에서 직접 특정 컴포넌트의 문서 페이지로 이동
- 빠른 컴포넌트 임포트 및 마크업을 위한 편리한 스니펫

## JetBrains IDE 확장

[@WarningImHack3r](https://github.com/WarningImHack3r)가 제작한 shadcn/ui Components Manager [JetBrains 확장](https://plugins.jetbrains.com/plugin/23479-shadcn-ui-components-manager)을 JetBrains IDE(IntelliJ IDEA, WebStorm 등)에 설치하면 프로젝트 내에서 shadcn 컴포넌트를 쉽게 관리할 수 있습니다.

이 확장은 다음을 포함한 다양한 기능을 제공합니다:

- 프로젝트 내 shadcn/ui 컴포넌트 자동 감지
- 클릭 한 번으로 컴포넌트 추가, 제거 및 업데이트
- 모든 shadcn/ui 구현 지원: Svelte, React, Vue, Solid
- 원격 또는 기존 컴포넌트 간편하게 검색
