---
title: Date Picker
description: 범위와 프리셋이 있는 날짜 선택기 컴포넌트입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/examples/date-picker-demo.svelte
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
</script>

<ComponentPreview name="calendar-22">

<div></div>

</ComponentPreview>

## 설치

날짜 선택기는 `<Popover />` 컴포넌트와 `<Calendar />` 또는 `<RangeCalendar />` 컴포넌트의 조합으로 구성됩니다.

[Popover](/docs/components/popover#installation), [Calendar](/docs/components/calendar#installation), [Range Calendar](/docs/components/range-calendar#installation) 컴포넌트의 설치 안내를 참고하세요.

## 사용법

```svelte showLineNumbers title="lib/components/example-date-picker.svelte"
<script lang="ts">
  import CalendarIcon from "@lucide/svelte/icons/calendar";
  import {
    type DateValue,
    DateFormatter,
    getLocalTimeZone,
  } from "@internationalized/date";
  import { cn } from "$lib/utils.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Calendar } from "$lib/components/ui/calendar/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";

  const df = new DateFormatter("en-US", {
    dateStyle: "long",
  });

  let value = $state<DateValue>();
</script>

<Popover.Root>
  <Popover.Trigger>
    {#snippet child({ props })}
      <Button
        variant="outline"
        class={cn(
          "w-[280px] justify-start text-start font-normal",
          !value && "text-muted-foreground"
        )}
        {...props}
      >
        <CalendarIcon class="me-2 size-4" />
        {value ? df.format(value.toDate(getLocalTimeZone())) : "Select a date"}
      </Button>
    {/snippet}
  </Popover.Trigger>
  <Popover.Content class="w-auto p-0">
    <Calendar bind:value type="single" initialFocus captionLayout="dropdown" />
  </Popover.Content>
</Popover.Root>
```

## 예제

### 생년월일 선택기

<ComponentPreview name="calendar-22" description="A calendar with date of birth picker." >

<div></div>

</ComponentPreview>

### 입력이 있는 선택기

<!--need to fix code not showing due to type-->

<ComponentPreview name="calendar-28" description="A calendar with input and picker." >

<div></div>

</ComponentPreview>

### 날짜 및 시간 선택기

<ComponentPreview name="calendar-24" description="A calendar with date and time picker." >
<div></div>

</ComponentPreview>

### 자연어 선택기

이 컴포넌트는 자연어 날짜를 파싱하기 위해 `chrono-node` 라이브러리를 사용합니다.

<ComponentPreview name="calendar-29" description="A calendar with natural language picker.">

<div></div>

</ComponentPreview>
