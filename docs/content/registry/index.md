---
title: 레지스트리
description: 자체 컴포넌트 레지스트리를 운영하세요.
---

<script>
	import Callout from "$lib/components/callout.svelte";
	import PMExecute from "$lib/components/pm-execute.svelte";
</script>

<Callout>

**참고:** 이 기능은 현재 실험적 단계입니다. 테스트하고 피드백을 보내주셔서 개선에 도움을 주세요. 질문이 있으시면 [문의해 주세요](https://github.com/huntabyte/shadcn-svelte/discussions).

</Callout>

`shadcn-svelte` CLI를 사용하여 자체 컴포넌트 레지스트리를 만들 수 있습니다. 자체 레지스트리를 만들면 커스텀 컴포넌트, 훅, 페이지 및 기타 파일을 모든 Svelte 프로젝트에 배포할 수 있습니다.

레지스트리 아이템은 자동으로 `shadcn-svelte` CLI와 호환됩니다.

## 요구사항

커스텀 레지스트리를 원하는 방식으로 자유롭게 설계하고 호스팅할 수 있습니다. 유일한 요구사항은 레지스트리 아이템이 [레지스트리 아이템 스키마 명세](/docs/registry/registry-item-json)를 준수하는 유효한 JSON 파일이어야 한다는 것입니다.

레지스트리 예제를 보고 싶다면, 시작점으로 사용할 수 있는 [템플릿 프로젝트](https://github.com/huntabyte/shadcn-svelte/tree/main/registry-template)를 제공합니다.

`degit`을 사용하여 클론할 수 있습니다

<PMExecute command="degit huntabyte/shadcn-svelte/registry-template#next-tailwind-4" />
