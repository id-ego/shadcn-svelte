---
title: Formsnap
description: Formsnap, Superforms, Zod를 사용한 폼 구축
links:
  doc: https://formsnap.dev
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/form
---

<script>
  import Callout from '$lib/components/callout.svelte'
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InfoIcon from "@lucide/svelte/icons/info"
</script>

<Callout title="이 컴포넌트는 더 이상 적극적으로 개발하지 않습니다." icon={InfoIcon}>

Form 컴포넌트는 `formsnap`과 `sveltekit-superforms` 라이브러리의 추상화입니다. 앞으로는 폼을 구축하기 위해 [`<Field />`](/docs/components/field) 컴포넌트를 사용하는 것을 권장합니다.

</Callout>

폼은 까다롭습니다. 웹 애플리케이션에서 가장 흔하게 만들게 되는 것이지만, 동시에 가장 복잡한 것 중 하나입니다.

잘 설계된 HTML 폼은:

- 잘 구조화되어 있고 의미론적으로 올바릅니다.
- 사용하기 쉽고 탐색이 용이합니다 (키보드).
- ARIA 속성과 적절한 라벨로 접근성을 갖추고 있습니다.
- 클라이언트 및 서버 측 유효성 검사를 지원합니다.
- 애플리케이션의 나머지 부분과 일관성 있게 스타일링되어 있습니다.

이 가이드에서는 [formsnap](https://formsnap.dev), [sveltekit-superforms](https://superforms.rocks), [zod](https://zod.dev)를 사용하여 폼을 구축하는 방법을 살펴보겠습니다.

## 기능

`shadcn-svelte`에서 제공하는 `Form` 컴포넌트는 `formsnap`과 `sveltekit-superforms`를 감싸고 있으며 다음과 같은 기능을 제공합니다:

- 폼을 구축하기 위한 조합 가능한 컴포넌트.
- 폼 상태의 범위를 지정하기 위한 폼 필드 컴포넌트.
- [Zod](https://zod.dev) 또는 [Superforms](https://superforms.rocks)에서 지원하는 다른 유효성 검사 라이브러리를 사용한 폼 유효성 검사.
- 상태에 따라 폼 필드에 올바른 `aria` 속성을 적용합니다.
- [Select](/docs/components/select), [RadioGroup](/docs/components/radio-group), [Switch](/docs/components/switch), [Checkbox](/docs/components/checkbox) 및 기타 폼 컴포넌트를 폼과 함께 쉽게 사용할 수 있습니다.

[Superforms](https://superforms.rocks)와 [Formsnap](https://formsnap.dev)에 익숙하지 않다면, 먼저 문서를 확인하는 것이 좋습니다. 이 가이드는 이들이 함께 작동하는 방식에 대한 기본적인 이해를 전제로 합니다.

## 구조

```svelte showLineNumbers
<form>
  <Form.Field>
    <Form.Control>
      <Form.Label />
      <!-- Any Form input component -->
    </Form.Control>
    <Form.Description />
    <Form.FieldErrors />
  </Form.Field>
</form>
```

## 예제

```svelte showLineNumbers
<form method="POST" use:enhance>
  <Form.Field {form} name="email">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Email</Form.Label>
        <Input {...props} bind:value={$formData.email} />
      {/snippet}
    </Form.Control>
    <Form.Description />
    <Form.FieldErrors />
  </Form.Field>
</form>
```

## 설치

<PMAddComp name="form" />

## 사용법

<Steps>

### 폼 스키마 생성

Zod 스키마를 사용하여 폼의 구조를 정의합니다. Zod 사용에 대한 자세한 내용은 [Zod 문서](https://zod.dev)에서 확인할 수 있습니다. 페이지 컴포넌트와 같은 디렉토리에 `schema.ts`라는 파일로 정의할 것이지만, 원하는 곳 어디에든 둘 수 있습니다.

```ts title="src/routes/settings/schema.ts" showLineNumbers
import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export type FormSchema = typeof formSchema;
```

### load 함수 설정

```ts title="src/routes/settings/+page.server.ts" showLineNumbers
import type { PageServerLoad } from "./$types.js";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod4 } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod4(formSchema)),
  };
};
```

### 폼 컴포넌트 생성

이 예제에서는 load 함수에서 반환된 `form`을 이 컴포넌트에 prop으로 전달합니다. 올바르게 타입이 지정되도록 `sveltekit-superforms`의 `SuperValidated` 타입을 사용하고 폼 스키마의 타입을 전달합니다.

```svelte title="src/routes/settings/settings-form.svelte" showLineNumbers
<script lang="ts">
  import * as Form from "$lib/components/ui/form/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { formSchema, type FormSchema } from "./schema";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zod4Client } from "sveltekit-superforms/adapters";

  let { data }: { data: { form: SuperValidated<Infer<FormSchema>> } } =
    $props();

  const form = superForm(data.form, {
    validators: zod4Client(formSchema),
  });

  const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
  <Form.Field {form} name="username">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Username</Form.Label>
        <Input {...props} bind:value={$formData.username} />
      {/snippet}
    </Form.Control>
    <Form.Description>This is your public display name.</Form.Description>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button>Submit</Form.Button>
</form>
```

`Form.Control` 컴포넌트의 `attrs` 객체를 스프레드하여 입력에 `name`, `id` 및 모든 접근성 속성이 적용됩니다. `Form.Label`은 `for` 속성을 사용하여 자동으로 입력과 연결되므로 걱정할 필요가 없습니다.

### 컴포넌트 사용

load 함수에서 반환된 데이터의 `form`을 위에서 만든 폼 컴포넌트에 전달합니다.

```svelte title="src/routes/settings/+page.svelte" showLineNumbers
<script lang="ts">
  import type { PageData } from "./$types.js";
  import SettingsForm from "./settings-form.svelte";
  let { data }: { data: PageData } = $props();
</script>

<SettingsForm {data} />
```

### Action 생성

```ts title="src/routes/settings/+page.server.ts" showLineNumbers {1-2,13-25}
import type { PageServerLoad, Actions } from "./$types.js";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod4 } from "sveltekit-superforms/adapters";
import { formSchema } from "./schema";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod4(formSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod4(formSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }
    return {
      form,
    };
  },
};
```

### 완료

이제 완료되었습니다. 이제 타입 안전하고 클라이언트 및 서버 측 유효성 검사를 갖춘 완전히 접근 가능한 폼이 만들어졌습니다.

<ComponentPreview name="form-demo">

<div></div>

</ComponentPreview>

</Steps>

## 다음 단계

사용 방법에 대한 자세한 내용은 [Formsnap](https://formsnap.dev)과 [Superforms](https://superforms.rocks) 문서를 확인하세요.

## 예제

다른 `Form` 컴포넌트를 사용하는 방법에 대한 더 많은 예제는 다음 링크를 참조하세요:

- [Checkbox](/docs/components/checkbox#form)
- [Date Picker](/docs/components/date-picker#form)
- [Input](/docs/components/input#form)
- [Radio Group](/docs/components/radio-group#form)
- [Select](/docs/components/select#form)
- [Switch](/docs/components/switch#form)
- [Textarea](/docs/components/textarea#form)
