---
title: Table
description: 반응형 테이블 컴포넌트입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/table
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

<ComponentPreview name="table-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="table" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

다음 코드를 복사하여 프로젝트에 붙여넣으세요.

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
  import * as Table from "$lib/components/ui/table/index.js";
</script>
```

```svelte showLineNumbers
<Table.Root>
  <Table.Caption>최근 인보이스 목록입니다.</Table.Caption>
  <Table.Header>
    <Table.Row>
      <Table.Head class="w-[100px]">인보이스</Table.Head>
      <Table.Head>상태</Table.Head>
      <Table.Head>결제 방법</Table.Head>
      <Table.Head class="text-end">금액</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell class="font-medium">INV001</Table.Cell>
      <Table.Cell>결제 완료</Table.Cell>
      <Table.Cell>신용카드</Table.Cell>
      <Table.Cell class="text-end">$250.00</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
```

## 데이터 테이블

`<Table />` 컴포넌트를 사용하여 더 복잡한 데이터 테이블을 만들 수 있습니다. [@tanstack/table](https://tanstack.com/table)과 결합하면 정렬, 필터링, 페이지네이션 기능이 있는 테이블을 만들 수 있습니다.

자세한 내용은 [데이터 테이블](/docs/components/data-table) 문서를 참조하세요.

[Tasks](/examples/tasks) 데모에서도 데이터 테이블 예제를 볼 수 있습니다.
