---
title: 변경 로그
description: 최신 업데이트 및 공지사항
---

<script>
	import Steps from '$lib/components/steps.svelte'
	import Callout from '$lib/components/callout.svelte'
	import ComponentPreview from '$lib/components/component-preview.svelte'
</script>

## 2025년 10월 - 새로운 컴포넌트
이번에는 우리가 매일 만드는 것들, 반복해서 다시 만드는 지루한 것들을 살펴보고 실제로 사용할 수 있는 재사용 가능한 추상화를 만들었습니다.

- [Spinner](/docs/components/spinner): 로딩 상태를 표시하는 인디케이터
- [Kbd](/docs/components/kbd): 키보드 키 또는 키 그룹 표시
- [Button Group](/docs/components/button-group): 액션과 분할 버튼을 위한 버튼 그룹
- [Input Group](/docs/components/input-group): 아이콘, 버튼, 라벨 등을 포함한 입력 필드
- [Field](/docs/components/field): 하나의 컴포넌트로 모든 폼 구성
- [Item](/docs/components/item): 아이템 목록, 카드 등 표시
- [Empty](/docs/components/empty): 빈 상태를 위한 컴포넌트

---

## 2025년 6월

### 새로운 캘린더 컴포넌트

`Calendar`와 `RangeCalendar` 컴포넌트를 완전히 개편하여 월과 연도 선택기에 드롭다운을 지원하도록 했으며, 자체 캘린더 컴포넌트 구축을 시작하는 데 도움이 되는 30개 이상의 캘린더 블록을 추가했습니다.

자세한 내용은 [Calendar](/docs/components/calendar) 문서 페이지와 [Calendar Blocks](/blocks/calendar) 페이지를 확인하세요.

---

## 2025년 5월

### Tailwind v4 지원

Tailwind v4 지원이 공식적으로 추가되었습니다. 여기에서 새로워진 스타일의 전체 데모를 확인할 수 있습니다: [https://v4.shadcn-svelte.com](https://v4.shadcn-svelte.com).

이번 릴리스에는 [Tailwind v4 마이그레이션 가이드](/docs/migration/tailwind-v4)에 설명된 몇 가지 주요 변경 사항이 포함되어 있습니다. Tailwind v3와 함께 Svelte v5를 계속 사용하는 경우, 업그레이드할 준비가 될 때까지 프로젝트와 CLI가 예상대로 계속 작동합니다.

### 차트

차트가 프로젝트에 미리보기 컴포넌트로 추가되었습니다. 예제는 [Charts](/charts) 페이지를 참조하세요.

Svelte v5와 Tailwind v4를 사용 중이라면 CLI를 통해 프로젝트에 추가할 수 있습니다.

### 커스텀 레지스트리 지원

커스텀/원격 레지스트리 지원이 추가되었습니다. 이제 `shadcn-svelte` CLI를 통해 자체 컴포넌트를 게시하고 커뮤니티와 공유할 수 있습니다.

자세한 내용은 [레지스트리 문서](/docs/registry)를 참조하세요.

---

## 2024년 3월

### 블록 소개

[Blocks](/blocks)는 앱을 구축하는 데 사용할 수 있는 미리 제작된 컴포넌트입니다. 완전히 반응형이고 접근 가능하며 조합 가능합니다. 즉, shadcn-svelte의 다른 컴포넌트와 동일한 원칙을 사용하여 구축되었습니다.

[v0](https://v0.dev)는 현재 React만 지원하므로 [shadcn/ui](https://ui.shadcn.com)의 원본처럼 커스터마이즈할 수 없습니다. 그러나 Svelte 지원에 관심이 있다면 v0 팀이 이에 대해 듣고 싶어할 것입니다. :)

### 새로운 컴포넌트: Breadcrumb

프로젝트에 새로운 컴포넌트 [Breadcrumb](/docs/components/breadcrumb)이 추가되었습니다.

### 새로운 컴포넌트: Scroll Area

Bits UI의 [Scroll Area](https://bits-ui.com/docs/components/scroll-area) 컴포넌트를 기반으로 구축된 새로운 컴포넌트 [Scroll Area](/docs/components/scroll-area)가 프로젝트에 추가되었습니다.

세로 및 가로 스크롤을 모두 지원하며 모든 브라우저와 플랫폼에서 일관된 경험을 제공하도록 설계되었습니다.

## 2024년 2월

### 새로운 컴포넌트: Resizable

[PaneForge](https://paneforge.com)를 기반으로 구축된 새로운 컴포넌트 [Resizable](/docs/components/resizable)이 프로젝트에 추가되었습니다. PaneForge는 아직 초기 단계이므로 라이브러리에서 발견한 문제는 [PaneForge GitHub](https://github.com/svecosystem/paneforge)에 제기해 주세요.


### 아이콘 import 업데이트

개발 서버 성능에 대한 피드백을 받은 후 아이콘을 import하는 방식을 업데이트했습니다. 이 변경으로 `new-york` 스타일의 경우 유지보수되지 않는 `radix-icons-svelte` 패키지에서 [svelte-radix](https://github.com/shinokada/svelte-radix)로 이동하기로 결정했습니다.

다음과 같이 아이콘을 import하는 대신:

```ts
import { Check } from "@lucide/svelte";
```

이제 직접 import합니다:

```ts
import Check from "@lucide/svelte/icons/check";
```

깊은 import를 사용하면 Vite가 전체 아이콘 컬렉션을 최적화하는 대신 프로젝트에서 실제로 사용되는 아이콘만 최적화하도록 방지할 수 있습니다. 지금까지 확인한 바로는 이것이 개발 서버 성능에 엄청난 영향을 미칩니다. 즐기세요! 🚀

### 주요 Forms 업데이트

Formsnap이 더 유연하고 사용하기 쉬우며 덜 독단적으로 완전히 재작성되었습니다. 이는 `shadcn-svelte`에서 사용하는 방식을 일부 변경해야 했지만, 익숙해지면 이전 버전보다 훨씬 더 강력하고 덜 제한적이라는 것을 알게 될 것입니다.

변경 사항이 너무 크기 때문에 이전 버전에서 새 버전으로의 직접적인 마이그레이션 경로는 없습니다. 새 API를 사용하도록 컴포넌트를 업데이트하고 최신 버전의 `formsnap` 및 `sveltekit-superforms`를 사용하고 있는지 확인해야 합니다.

모든 `Form` 컴포넌트가 새 API를 사용하도록 업데이트되었으며 [Forms Examples](/examples/forms) 페이지에서 라이브 예제를 볼 수 있습니다.

새 API와 사용 방법에 대해 자세히 알아보려면 업데이트된 [Formsnap](https://formsnap.dev) 문서를 참조하세요.

## 2024년 1월

프로젝트에 4개의 새로운 컴포넌트가 추가되었습니다: [Carousel](/docs/components/carousel), [Drawer](/docs/components/drawer), [Sonner](/docs/components/sonner), [Pagination](/docs/components/pagination).

### 새로운 컴포넌트: Carousel

프로젝트에 새로운 컴포넌트 [Carousel](/docs/components/carousel)이 추가되었습니다.

<ComponentPreview name="carousel-demo">

<div></div>

</ComponentPreview>

### 새로운 컴포넌트: Drawer

Drawer는 [vaul-svelte](https://vaul-svelte.com)를 기반으로 구축되었으며 [Emil Kowalski](https://twitter.com/emilkowalski_)가 React용으로 원래 만든 [vaul](https://vaul.emilkowalski.ski/)의 포트입니다.

<ComponentPreview name="drawer-demo">

<div></div>

</ComponentPreview>

### 새로운 컴포넌트: Sonner

Sonner 컴포넌트는 [svelte-sonner](https://svelte-sonner.vercel.app/)에서 제공하며, 이는 [Emil Kowalski](https://twitter.com/emilkowalski_)가 React용으로 원래 만든 [Sonner](https://sonner.emilkowal.ski/)의 Svelte 포트입니다.

<ComponentPreview name="sonner-demo">

<div></div>

</ComponentPreview>

### 새로운 컴포넌트: Pagination

Pagination은 Bits UI의 [Pagination](https://bits-ui.com/docs/components/pagination) 컴포넌트를 활용합니다.

## 2023년 12월

프로젝트에 3개의 새로운 컴포넌트가 추가되었습니다: [Calendar](/docs/components/calendar), [Range Calendar](/docs/components/range-calendar), [Date Picker](/docs/components/date-picker).


## 2023년 11월

### 새로운 컴포넌트: Toggle Group

라이브러리에 새로운 컴포넌트 [Toggle Group](/docs/components/toggle-group)이 추가되었습니다.

## 2023년 10월

라이브러리에 2개의 새로운 컴포넌트가 추가되었습니다: [Command](/docs/components/command), [Combobox](/docs/components/combobox). 또한 `<Form.Label />` 컴포넌트에 대한 일부 업데이트가 있으니 유의하시기 바랍니다.

### 새로운 컴포넌트: Command

Command는 명령 팔레트를 만들 수 있는 컴포넌트입니다. [cmdk](https://cmdk.paco.me)의 Svelte 포트인 [cmdk-sv](https://cmdk-sv.com)를 기반으로 구축되었습니다. 라이브러리는 아직 초기 단계이지만 앞으로 어떻게 발전할지 기대됩니다. 문제를 발견하면 라이브러리에 [이슈를 열어](https://github.com/huntabyte/cmdk-sv) 주세요.

자세한 내용은 [Command](/docs/components/command) 문서를 확인하세요.

### 새로운 컴포넌트: Combobox

Combobox는 `<Command />`와 `<Popover />` 컴포넌트의 조합입니다. 검색 가능한 드롭다운 메뉴를 만들 수 있습니다.

자세한 내용은 [Combobox](/docs/components/combobox) 문서를 확인하세요.

### Form 업데이트

#### Form.Label 변경 사항

미해결 문제를 수정하기 위해 formsnap에 일부 내부 변경을 해야 했기 때문에 `<Form.Label />` 컴포넌트에 약간의 수정을 해야 합니다. `getFormField()`에서 반환되는 `ids`가 이제 store이므로 사용할 때 `$` 접두사를 붙여야 합니다.

```svelte title="form-label.svelte" {2}
<Label
  for={$ids.input}
  class={cn($errors && "text-destructive", className)}
  {...$$restProps}
>
  <slot />
</Label>
```

### Form.Control

Formsnap이 비전통적인 폼 요소를 래핑하는 새로운 컴포넌트 `<Form.Control />`을 도입했습니다. 이를 통해 컴포넌트가 접근 가능하고 나머지 폼 컴포넌트와 잘 작동하도록 보장할 수 있습니다. `form/index.ts` 파일에서 해당 control을 정의하고 export해야 합니다.

```ts title="src/lib/ui/form/index.ts"
// ...rest
const Control = FormPrimitive.Control;

export {
  // ...rest
  Control,
  Control as FormControl,
};
```
