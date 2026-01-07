---
title: Carousel
description: Embla를 사용하여 제작된 모션과 스와이프 기능이 있는 캐러셀입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/carousel
  doc: https://www.embla-carousel.com/get-started/svelte
  api: https://www.embla-carousel.com/api
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import ComponentSource from "$lib/components/component-source.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import Step from "$lib/components/step.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";

	let { viewerData } = $props();
</script>

<ComponentPreview name="carousel-demo">

<div></div>

</ComponentPreview>

## 소개

캐러셀 컴포넌트는 [Embla Carousel](https://www.embla-carousel.com/get-started/svelte/) 라이브러리를 사용하여 제작되었습니다.

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="carousel" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

`embla-carousel-svelte`를 설치합니다:

</Step>

<PMInstall command="embla-carousel-svelte -D" />

<Step>

다음 코드를 복사하여 프로젝트에 붙여넣습니다.

</Step>
{#if viewerData}
	<ComponentSource item={viewerData} data-llm-ignore/>
{/if}

</Steps>
{/snippet}
</InstallTabs>

## 사용법

```svelte showLineNumbers
<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>
```

```svelte showLineNumbers
<Carousel.Root>
  <Carousel.Content>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>
```

## 예제

### 크기

항목의 크기를 설정하려면 `<Carousel.Item />`에 `basis` 유틸리티 클래스를 사용할 수 있습니다.

<ComponentPreview name="carousel-size">

<div></div>

</ComponentPreview>

```svelte showLineNumbers {4-6}
<!-- 33% of the carousel width. -->
<Carousel.Root>
  <Carousel.Content>
    <Carousel.Item class="basis-1/3">...</Carousel.Item>
    <Carousel.Item class="basis-1/3">...</Carousel.Item>
    <Carousel.Item class="basis-1/3">...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

```svelte showLineNumbers {4-6}
<!-- 50% on small screens and 33% on larger screens. -->
<Carousel.Root>
  <Carousel.Content>
    <Carousel.Item class="md:basis-1/2 lg:basis-1/3">...</Carousel.Item>
    <Carousel.Item class="md:basis-1/2 lg:basis-1/3">...</Carousel.Item>
    <Carousel.Item class="md:basis-1/2 lg:basis-1/3">...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

### 간격

항목 간의 간격을 설정하려면 `<Carousel.Item />`에 `ps-[VALUE]` 유틸리티를 사용하고 `<Carousel.Content />`에 음수 `-ms-[VALUE]`를 사용합니다.

<ComponentPreview name="carousel-spacing">

<div></div>

</ComponentPreview>

```svelte showLineNumbers /-ms-4/ /ps-4/
<Carousel.Root>
  <Carousel.Content class="-ms-4">
    <Carousel.Item class="ps-4">...</Carousel.Item>
    <Carousel.Item class="ps-4">...</Carousel.Item>
    <Carousel.Item class="ps-4">...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

```svelte showLineNumbers /-ms-2/ /ps-2/ /md:-ms-4/ /md:ps-4/
<Carousel.Root>
  <Carousel.Content class="-ms-2 md:-ms-4">
    <Carousel.Item class="ps-2 md:ps-4">...</Carousel.Item>
    <Carousel.Item class="ps-2 md:ps-4">...</Carousel.Item>
    <Carousel.Item class="ps-2 md:ps-4">...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

### 방향

캐러셀의 방향을 설정하려면 `orientation` prop을 사용합니다.

<ComponentPreview name="carousel-orientation">

<div></div>

</ComponentPreview>

```svelte showLineNumbers /vertical | horizontal/
<Carousel.Root orientation="vertical | horizontal">
  <Carousel.Content>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

## 옵션

`opts` prop을 사용하여 캐러셀에 옵션을 전달할 수 있습니다. 자세한 내용은 [Embla Carousel 문서](https://www.embla-carousel.com/api/options/)를 참고하세요.

```svelte showLineNumbers {2-5}
<Carousel.Root
  opts={{
    align: "start",
    loop: true,
  }}
>
  <Carousel.Content>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

## API

리액티브 상태와 `setApi` 콜백을 사용하여 캐러셀 API의 인스턴스를 가져올 수 있습니다.

<ComponentPreview name="carousel-api">

<div></div>

</ComponentPreview>

```svelte showLineNumbers {2,5,19}
<script lang="ts">
  import { type CarouselAPI } from "$lib/components/ui/carousel/context.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  let api = $state<CarouselAPI>();
  let current = $state(0);
  const count = $derived(api ? api.scrollSnapList().length : 0);

  $effect(() => {
    if (api) {
      current = api.selectedScrollSnap() + 1;
      api.on("select", () => {
        current = api!.selectedScrollSnap() + 1;
      });
    }
  });
</script>

<Carousel.Root setApi={(emblaApi) => (api = emblaApi)}>
  <Carousel.Content>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

## 이벤트

`bind:api`에서 가져온 api 인스턴스를 사용하여 이벤트를 수신할 수 있습니다.

```svelte showLineNumbers {2,5,7-13,16}
<script lang="ts">
  import { type CarouselAPI } from "$lib/components/ui/carousel/context.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  let api = $state<CarouselAPI>();

  $effect(() => {
    if (api) {
      api.on("select", () => {
        // do something
      });
    }
  });
</script>

<Carousel.Root setApi={(emblaApi) => (api = emblaApi)}>
  <Carousel.Content>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

## 플러그인

`plugins` prop을 사용하여 캐러셀에 플러그인을 추가할 수 있습니다.

```svelte showLineNumbers {2,7-11}
<script lang="ts">
  import Autoplay from "embla-carousel-autoplay";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>

<Carousel.Root
  plugins={[
    Autoplay({
      delay: 2000,
    }),
  ]}
>
  <!-- ... -->
</Carousel.Root>
```

<ComponentPreview name="carousel-plugin">

<div></div>

</ComponentPreview>

플러그인 사용에 대한 자세한 내용은 [Embla Carousel 문서](https://www.embla-carousel.com/api/plugins/)를 참고하세요.
