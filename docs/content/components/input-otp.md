---
title: Input OTP
description: 복사 붙여넣기 기능을 갖춘 접근 가능한 일회용 비밀번호 컴포넌트입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/input-otp
  doc: https://bits-ui.com/docs/components/pin-input
  api: https://bits-ui.com/docs/components/pin-input#api-reference
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

<ComponentPreview name="input-otp-demo">

<div></div>

</ComponentPreview>

## 소개

Input OTP는 [@guilherme_rodz](https://twitter.com/guilherme_rodz)의 Input OTP 컴포넌트에서 영감을 받은 Bits UI의 [PinInput](https://bits-ui.com/docs/components/pin-input)을 기반으로 구축되었습니다.

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="input-otp" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

`bits-ui`를 설치합니다:

</Step>

<PMInstall command="bits-ui -D" />

<Step>

다음 코드를 프로젝트에 복사하여 붙여넣습니다.

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
  import * as InputOTP from "$lib/components/ui/input-otp/index.js";
</script>
```

```svelte showLineNumbers
<InputOTP.Root maxlength={6}>
  {#snippet children({ cells })}
    <InputOTP.Group>
      {#each cells.slice(0, 3) as cell}
        <InputOTP.Slot {cell} />
      {/each}
    </InputOTP.Group>
    <InputOTP.Separator />
    <InputOTP.Group>
      {#each cells.slice(3, 6) as cell}
        <InputOTP.Slot {cell} />
      {/each}
    </InputOTP.Group>
  {/snippet}
</InputOTP.Root>
```

## 예제

### 패턴

`pattern` prop을 사용하여 OTP 입력의 사용자 정의 패턴을 정의할 수 있습니다.

<ComponentPreview name="input-otp-pattern">

<div></div>

</ComponentPreview>

```svelte showLineNumbers {3,6}
<script lang="ts">
  import * as InputOTP from "$lib/components/ui/input-otp/index.js";
  import { REGEXP_ONLY_DIGITS_AND_CHARS } from "bits-ui";
</script>

<InputOTP.Root maxlength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
  <!-- ... -->
</InputOTP.Root>
```

### 구분자

`InputOTP.Separator` 컴포넌트를 사용하여 셀 그룹 사이에 구분자를 추가할 수 있습니다.

<ComponentPreview name="input-otp-separator">

<div></div>

</ComponentPreview>

```svelte showLineNumbers {12}
<script lang="ts">
  import * as InputOTP from "$lib/components/ui/input-otp/index.js";
</script>

<InputOTP.Root maxlength={4}>
  {#snippet children({ cells })}
    <InputOTP.Group>
      {#each cells.slice(0, 2) as cell}
        <InputOTP.Slot {cell} />
      {/each}
    </InputOTP.Group>
    <InputOTP.Separator />
    <InputOTP.Group>
      {#each cells.slice(2, 4) as cell}
        <InputOTP.Slot {cell} />
      {/each}
    </InputOTP.Group>
  {/snippet}
</InputOTP.Root>
```

### 제어 컴포넌트

<ComponentPreview name="input-otp-controlled">

<div></div>

</ComponentPreview>

### 폼

<ComponentPreview name="input-otp-form">

<div></div>

</ComponentPreview>
