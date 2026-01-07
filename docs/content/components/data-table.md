---
title: 데이터 테이블
description: TanStack Table을 사용하여 구축된 강력한 테이블 및 데이터그리드입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/data-table
  doc: https://tanstack.com/table/v8/docs/introduction
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import Callout from "$lib/components/callout.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import Step from "$lib/components/step.svelte";
</script>

<ComponentPreview name="data-table-demo">

<div></div>

</ComponentPreview>

## 소개

데이터 테이블은 지원하는 기능의 다양성과 모든 데이터셋의 고유성 때문에 컴포넌트화하기 어렵습니다.

따라서 모든 경우에 맞는 단일 솔루션을 만드는 대신, 자체 데이터 테이블을 구축할 수 있도록 가이드를 제공합니다.

기본 `<Table />` 컴포넌트부터 시작하여 모든 기능을 갖춘 데이터 테이블까지 단계별로 진행하겠습니다.

<Callout>

팁: 여러 곳에서 동일한 테이블을 사용하는 경우, 언제든지 재사용 가능한 컴포넌트로 추출할 수 있습니다.

</Callout>

## 목차

이 가이드는 [TanStack Table](https://tanstack.com/table)과 `<Table />` 컴포넌트를 사용하여 자체 커스텀 데이터 테이블을 구축하는 방법을 보여줍니다. 다음 주제를 다룹니다:

- [기본 테이블](#basic-table)
- [행 액션](#row-actions)
- [페이지네이션](#pagination)
- [정렬](#sorting)
- [필터링](#filtering)
- [표시 여부](#visibility)
- [행 선택](#row-selection)
- [재사용 가능한 컴포넌트](#reusable-components)

## 설치

1. `<Table />` 컴포넌트와 `data-table` 헬퍼를 프로젝트에 추가합니다. 이 헬퍼들은 TanStack Table v8이 Svelte 5 스니펫, 컴포넌트 등과 함께 작동할 수 있도록 합니다.

<PMAddComp name="table data-table" />

2. `@tanstack/table-core`를 의존성으로 추가합니다:

<PMInstall command="@tanstack/table-core" />

## 전제 조건

최근 결제 내역을 보여주는 테이블을 만들 것입니다. 데이터는 다음과 같습니다:

```ts showLineNumbers
type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
];
```

## 프로젝트 구조

데이터 테이블을 위한 라우트를 생성합니다(여기서는 payments라고 부릅니다). 다음 파일들도 함께 생성합니다:

```txt
routes
└── payments
	├── columns.ts
    ├── data-table.svelte
    ├── data-table-actions.svelte
    ├── data-table-checkbox.svelte
	├── data-table-email-button.svelte
    └── +page.svelte
```

- `columns.ts`는 컬럼 정의를 포함합니다.
- `data-table.svelte`는 `<Table />` 컴포넌트와 완전한 `<DataTable />` 컴포넌트를 포함합니다.
- `data-table-actions.svelte`는 각 행의 액션 메뉴를 포함합니다.
- `data-table-checkbox.svelte`는 각 행의 체크박스를 포함합니다.
- `data-table-email-button.svelte`는 정렬 가능한 이메일 헤더 버튼을 포함합니다.
- `+page.svelte`는 `<DataTable />` 컴포넌트를 렌더링하고 접근하는 곳입니다.

## 기본 테이블

기본 테이블을 만드는 것부터 시작하겠습니다.

<Steps>

### 컬럼 정의

먼저 컬럼을 정의합니다.

```ts showLineNumbers {1,12-25} title="routes/payments/columns.ts"
import type { ColumnDef } from "@tanstack/table-core";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
```

<Callout class="mt-4">

**참고:** 컬럼은 테이블의 모습을 정의하는 핵심입니다. 표시될 데이터와 형식화, 정렬 및 필터링 방식을 정의합니다.

</Callout>

### `<DataTable />` 컴포넌트

다음으로 테이블을 렌더링하기 위한 `<DataTable />` 컴포넌트를 만듭니다.

```svelte showLineNumbers title="routes/payments/data-table.svelte"
<script lang="ts" generics="TData, TValue">
  import { type ColumnDef, getCoreRowModel } from "@tanstack/table-core";
  import {
    createSvelteTable,
    FlexRender,
  } from "$lib/components/ui/data-table/index.js";
  import * as Table from "$lib/components/ui/table/index.js";

  type DataTableProps<TData, TValue> = {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
  };

  let { data, columns }: DataTableProps<TData, TValue> = $props();

  const table = createSvelteTable({
    get data() {
      return data;
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
</script>

<div class="rounded-md border">
  <Table.Root>
    <Table.Header>
      {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
        <Table.Row>
          {#each headerGroup.headers as header (header.id)}
            <Table.Head colspan={header.colSpan}>
              {#if !header.isPlaceholder}
                <FlexRender
                  content={header.column.columnDef.header}
                  context={header.getContext()}
                />
              {/if}
            </Table.Head>
          {/each}
        </Table.Row>
      {/each}
    </Table.Header>
    <Table.Body>
      {#each table.getRowModel().rows as row (row.id)}
        <Table.Row data-state={row.getIsSelected() && "selected"}>
          {#each row.getVisibleCells() as cell (cell.id)}
            <Table.Cell>
              <FlexRender
                content={cell.column.columnDef.cell}
                context={cell.getContext()}
              />
            </Table.Cell>
          {/each}
        </Table.Row>
      {:else}
        <Table.Row>
          <Table.Cell colspan={columns.length} class="h-24 text-center">
            No results.
          </Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
```

<Callout>

**팁**: 여러 곳에서 `<DataTable />`을 사용하는 경우, `components/ui/data-table.svelte`로 추출하여 재사용 가능한 컴포넌트로 만들 수 있습니다.

`<DataTable columns={columns} data={data} />`

</Callout>

### 테이블 렌더링

마지막으로 페이지 컴포넌트에서 테이블을 렌더링합니다.

```ts showLineNumbers title="routes/payments/+page.server.ts"
export async function load() {
  // logic to fetch payments data here
  const payments = await getPayments();
  return {
    payments,
  };
}
```

```svelte showLineNumbers {8} title="routes/payments/+page.svelte"
<script lang="ts">
  import DataTable from "./data-table.svelte";
  import { columns } from "./columns.js";

  let { data } = $props();
</script>

<DataTable data={data.payments} {columns} />
```

</Steps>

## 셀 서식 지정

금액 셀을 달러 금액으로 표시하도록 서식을 지정하겠습니다. 또한 셀을 오른쪽으로 정렬합니다.

<Steps>

### 컬럼 정의 업데이트

금액에 대한 `header`와 `cell` 정의를 다음과 같이 업데이트합니다:

```ts showLineNumbers title="routes/payments/columns.ts"
import type { ColumnDef } from "@tanstack/table-core";
import { createRawSnippet } from "svelte";
import { renderSnippet } from "$lib/components/ui/data-table/index.js";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "amount",
    header: () => {
      const amountHeaderSnippet = createRawSnippet(() => ({
        render: () => `<div class="text-end">Amount</div>`,
      }));
      return renderSnippet(amountHeaderSnippet);
    },
    cell: ({ row }) => {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      const amountCellSnippet = createRawSnippet<[{ amount: number }]>(
        (getAmount) => {
          const { amount } = getAmount();
          const formatted = formatter.format(amount);
          return {
            render: () =>
              `<div class="text-end font-medium">${formatted}</div>`,
          };
        }
      );

      return renderSnippet(amountCellSnippet, {
        amount: row.original.amount,
      });
    },
  },
];
```

`createRawSnippet` 함수를 사용하여 컴포넌트처럼 전체 라이프사이클 및 상태 기능이 필요하지 않은 간단한 HTML 요소를 렌더링하기 위한 Svelte 스니펫을 생성합니다. 그런 다음 `renderSnippet` 헬퍼 함수를 사용하여 스니펫을 렌더링합니다.

동일한 방법으로 다른 셀과 헤더의 서식을 지정할 수 있습니다.

</Steps>

## 행 액션

테이블에 행 액션을 추가하겠습니다. 이를 위해 `<DropdownMenu />`와 `<Button />` 컴포넌트를 사용하므로, 아직 설치하지 않았다면 설치해야 합니다:

<PMAddComp name="button dropdown-menu" />

<Steps>

### 액션 컴포넌트 생성

`data-table-actions.svelte` 컴포넌트에서 액션 메뉴를 정의하는 것부터 시작합니다.

```svelte showLineNumbers title="routes/payments/data-table-actions.svelte"
<script lang="ts">
  import EllipsisIcon from "@lucide/svelte/icons/ellipsis";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

  let { id }: { id: string } = $props();
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    {#snippet child({ props })}
      <Button
        {...props}
        variant="ghost"
        size="icon"
        class="relative size-8 p-0"
      >
        <span class="sr-only">Open menu</span>
        <EllipsisIcon />
      </Button>
    {/snippet}
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.Label>Actions</DropdownMenu.Label>
      <DropdownMenu.Item onclick={() => navigator.clipboard.writeText(id)}>
        Copy payment ID
      </DropdownMenu.Item>
    </DropdownMenu.Group>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>View customer</DropdownMenu.Item>
    <DropdownMenu.Item>View payment details</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### 컬럼 정의 업데이트

이제 `<DataTableActions />` 컴포넌트를 정의했으니, `actions` 컬럼 정의를 업데이트하여 사용합니다.

```ts showLineNumbers title="routes/payments/columns.ts"
import type { ColumnDef } from "@tanstack/table-core";
import { renderComponent } from "$lib/components/ui/data-table/index.js";
import DataTableActions from "./data-table-actions.svelte";

export const columns: ColumnDef<Payment>[] = [
  // ...
  {
    id: "actions",
    cell: ({ row }) => {
      // You can pass whatever you need from `row.original` to the component
      return renderComponent(DataTableActions, { id: row.original.id });
    },
  },
];
```

`cell` 함수에서 `row.original`을 사용하여 행 데이터에 접근할 수 있습니다. 이를 사용하여 행에 대한 액션을 처리할 수 있습니다. 예를 들어 `id`를 사용하여 API에 DELETE 요청을 보낼 수 있습니다.

</Steps>

## 페이지네이션

다음으로 테이블에 페이지네이션을 추가하겠습니다.

<Steps>

### `<DataTable />` 업데이트

```svelte showLineNumbers title="routes/payments/data-table.svelte"
<script lang="ts" generics="TData, TValue">
  import {
    type ColumnDef,
    type PaginationState,
    getCoreRowModel,
    getPaginationRowModel,
  } from "@tanstack/table-core";

  type DataTableProps<TData, TValue> = {
    data: TData[];
    columns: ColumnDef<TData, TValue>[];
  };

  let { data, columns }: DataTableProps<TData, TValue> = $props();

  let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 10 });

  const table = createSvelteTable({
    get data() {
      return data;
    },
    columns,
    state: {
      get pagination() {
        return pagination;
      },
    },
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        pagination = updater(pagination);
      } else {
        pagination = updater;
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
</script>
```

이렇게 하면 행이 자동으로 10개씩 페이지로 나뉩니다. 페이지 크기 사용자 정의 및 수동 페이지네이션 구현에 대한 자세한 내용은 [페이지네이션 문서](https://tanstack.com/table/v8/docs/api/features/pagination)를 참조하세요.

### 페이지네이션 컨트롤 추가

`<Button />` 컴포넌트와 `table.previousPage()`, `table.nextPage()` API 메서드를 사용하여 테이블에 페이지네이션 컨트롤을 추가할 수 있습니다.

```svelte showLineNumbers title="routes/payments/data-table.svelte"
<script lang="ts" generics="TData, TValue">
  import { Button } from "$lib/components/ui/button/index.js";

  let { columns, data }: DataTableProps<TData, TValue> = $props();

  let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 10 });

  const table = createSvelteTable({
    get data() {
      return data;
    },
    columns,
    state: {
      get pagination() {
        return pagination;
      },
    },
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        pagination = updater(pagination);
      } else {
        pagination = updater;
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
</script>

<div>
  <div class="rounded-md border">
    <Table.Root>
      <!--- ... table implementation -->
    </Table.Root>
  </div>
  <div class="flex items-center justify-end space-x-2 py-4">
    <Button
      variant="outline"
      size="sm"
      onclick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      Previous
    </Button>
    <Button
      variant="outline"
      size="sm"
      onclick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
    >
      Next
    </Button>
  </div>
</div>
```

더 고급 페이지네이션 컴포넌트는 [재사용 가능한 컴포넌트](#reusable-components) 섹션을 참조하세요.

</Steps>

## 정렬

이메일 컬럼을 정렬 가능하게 만들어 보겠습니다.

<Steps>

### `<DataTableEmailButton />` 컴포넌트 정의

정렬 가능한 이메일 헤더 버튼을 렌더링하는 컴포넌트를 만드는 것부터 시작합니다.

```svelte showLineNumbers title="routes/payments/data-table-email-button.svelte"
<script lang="ts">
  import type { ComponentProps } from "svelte";
  import ArrowUpDownIcon from "@lucide/svelte/icons/arrow-up-down";
  import { Button } from "$lib/components/ui/button/index.js";

  let { variant = "ghost", ...restProps }: ComponentProps<typeof Button> =
    $props();
</script>

<Button {variant} {...restProps}>
  Email
  <ArrowUpDownIcon class="ms-2" />
</Button>
```

### `<DataTable />` 업데이트

```svelte showLineNumbers title="routes/payments/data-table.svelte"
<script lang="ts" generics="TData, TValue">
  import {
    type ColumnDef,
    type PaginationState,
    type SortingState,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
  } from "@tanstack/table-core";

  let { columns, data }: DataTableProps<TData, TValue> = $props();

  let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 10 });
  let sorting = $state<SortingState>([]);

  const table = createSvelteTable({
    get data() {
      return data;
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: (updater) => {
      if (typeof updater === "function") {
        sorting = updater(sorting);
      } else {
        sorting = updater;
      }
    },
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        pagination = updater(pagination);
      } else {
        pagination = updater;
      }
    },
    state: {
      get pagination() {
        return pagination;
      },
      get sorting() {
        return sorting;
      },
    },
  });
</script>
```

### 헤더 셀을 정렬 가능하게 만들기

이제 `email` 헤더 셀을 업데이트하여 정렬 컨트롤을 추가할 수 있습니다.

```ts showLineNumbers title="src/routes/payments/columns.ts"
import type { ColumnDef } from "@tanstack/table-core";
import { renderComponent } from "$lib/components/ui/data-table/index.js";
import DataTableEmailButton from "./data-table-email-button.svelte";

export const columns: ColumnDef<Payment>[] = [
  // ...
  {
    accessorKey: "email",
    header: ({ column }) =>
      renderComponent(DataTableEmailButton, {
        onclick: column.getToggleSortingHandler(),
      }),
  },
];
```

이렇게 하면 사용자가 헤더 셀을 토글할 때 테이블이 자동으로 정렬됩니다(오름차순 및 내림차순).

</Steps>

## 필터링

테이블의 이메일을 필터링하기 위한 검색 입력을 추가하겠습니다.

<Steps>

### `<DataTable />` 업데이트

```svelte showLineNumbers title="routes/payments/data-table.svelte"
<script lang="ts" generics="TData, TValue">
  import {
    type ColumnDef,
    type PaginationState,
    type SortingState,
    type ColumnFiltersState,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
  } from "@tanstack/table-core";
  import { Input } from "$lib/components/ui/input/index.js";

  let { columns, data }: DataTableProps<TData, TValue> = $props();

  let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 10 });
  let sorting = $state<SortingState>([]);
  let columnFilters = $state<ColumnFiltersState>([]);

  const table = createSvelteTable({
    get data() {
      return data;
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        pagination = updater(pagination);
      } else {
        pagination = updater;
      }
    },
    onSortingChange: (updater) => {
      if (typeof updater === "function") {
        sorting = updater(sorting);
      } else {
        sorting = updater;
      }
    },
    onColumnFiltersChange: (updater) => {
      if (typeof updater === "function") {
        columnFilters = updater(columnFilters);
      } else {
        columnFilters = updater;
      }
    },
    state: {
      get pagination() {
        return pagination;
      },
      get sorting() {
        return sorting;
      },
      get columnFilters() {
        return columnFilters;
      },
    },
  });
</script>

<div>
  <div class="flex items-center py-4">
    <Input
      placeholder="Filter emails..."
      value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
      onchange={(e) => {
        table.getColumn("email")?.setFilterValue(e.currentTarget.value);
      }}
      oninput={(e) => {
        table.getColumn("email")?.setFilterValue(e.currentTarget.value);
      }}
      class="max-w-sm"
    />
  </div>
  <div class="rounded-md border">
    <Table.Root><!-- ... --></Table.Root>
  </div>
</div>
```

이제 `email` 컬럼에 필터링이 활성화되었습니다. 다른 컬럼에도 필터를 추가할 수 있습니다. 필터 사용자 정의에 대한 자세한 내용은 [필터링 문서](https://tanstack.com/table/v8/docs/guide/filters)를 참조하세요.

</Steps>

## 표시 여부

`@tanstack/table-core` 표시 여부 API를 사용하면 컬럼 표시 여부를 추가하는 것이 매우 간단합니다.

<Steps>

### `<DataTable />` 업데이트

```svelte showLineNumbers title="routes/payments/data-table.svelte"
<script lang="ts" generics="TData, TValue">
  import {
    type ColumnDef,
    type PaginationState,
    type SortingState,
    type ColumnFiltersState,
    type VisibilityState,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
  } from "@tanstack/table-core";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

  let { columns, data }: DataTableProps<TData, TValue> = $props();

  let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 10 });
  let sorting = $state<SortingState>([]);
  let columnFilters = $state<ColumnFiltersState>([]);
  let columnVisibility = $state<VisibilityState>({});

  const table = createSvelteTable({
    get data() {
      return data;
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        pagination = updater(pagination);
      } else {
        pagination = updater;
      }
    },
    onSortingChange: (updater) => {
      if (typeof updater === "function") {
        sorting = updater(sorting);
      } else {
        sorting = updater;
      }
    },
    onColumnFiltersChange: (updater) => {
      if (typeof updater === "function") {
        columnFilters = updater(columnFilters);
      } else {
        columnFilters = updater;
      }
    },
    onColumnVisibilityChange: (updater) => {
      if (typeof updater === "function") {
        columnVisibility = updater(columnVisibility);
      } else {
        columnVisibility = updater;
      }
    },
    state: {
      get pagination() {
        return pagination;
      },
      get sorting() {
        return sorting;
      },
      get columnFilters() {
        return columnFilters;
      },
      get columnVisibility() {
        return columnVisibility;
      },
    },
  });
</script>

<div>
  <div class="flex items-center py-4">
    <Input
      placeholder="Filter emails..."
      value={table.getColumn("email")?.getFilterValue() as string}
      onchange={(e) =>
        table.getColumn("email")?.setFilterValue(e.currentTarget.value)}
      oninput={(e) =>
        table.getColumn("email")?.setFilterValue(e.currentTarget.value)}
      class="max-w-sm"
    />
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {#snippet child({ props })}
          <Button {...props} variant="outline" class="ms-auto">Columns</Button>
        {/snippet}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        {#each table
          .getAllColumns()
          .filter((col) => col.getCanHide()) as column (column.id)}
          <DropdownMenu.CheckboxItem
            class="capitalize"
            bind:checked={
              () => column.getIsVisible(), (v) => column.toggleVisibility(!!v)
            }
          >
            {column.id}
          </DropdownMenu.CheckboxItem>
        {/each}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
  <div class="rounded-md border">
    <Table.Root><!--...--></Table.Root>
  </div>
</div>
```

이렇게 하면 컬럼 표시 여부를 토글하는 데 사용할 수 있는 드롭다운 메뉴가 추가됩니다.

</Steps>

## 행 선택

다음으로 테이블에 행 선택 기능을 추가하겠습니다.

<Steps>

### `<DataTableCheckbox />` 컴포넌트 정의

`data-table-checkbox.svelte` 컴포넌트에서 체크박스 컴포넌트를 정의하는 것부터 시작합니다.

```svelte showLineNumbers title="routes/payments/data-table-checkbox.svelte"
<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { Checkbox } from "$lib/components/ui/checkbox/index.js";

  let {
    checked = false,
    onCheckedChange = (v) => (checked = v),
    ...restProps
  }: ComponentProps<typeof Checkbox> = $props();
</script>

<Checkbox bind:checked={() => checked, onCheckedChange} {...restProps} />
```

### 컬럼 정의 업데이트

이제 새 컴포넌트가 있으므로 체크박스를 렌더링하기 위한 `select` 컬럼 정의를 추가할 수 있습니다.

```ts showLineNumbers title="routes/payments/columns.ts"
import type { ColumnDef } from "@tanstack/table-core";
import { renderComponent } from "$lib/components/ui/data-table/index.js";
import { Checkbox } from "$lib/components/ui/checkbox/index.js";

export const columns: ColumnDef<Payment>[] = [
  // ...
  {
    id: "select",
    header: ({ table }) =>
      renderComponent(Checkbox, {
        checked: table.getIsAllPageRowsSelected(),
        indeterminate:
          table.getIsSomePageRowsSelected() &&
          !table.getIsAllPageRowsSelected(),
        onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
        "aria-label": "Select all",
      }),
    cell: ({ row }) =>
      renderComponent(Checkbox, {
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!!value),
        "aria-label": "Select row",
      }),
    enableSorting: false,
    enableHiding: false,
  },
];
```

### `<DataTable />` 업데이트

```svelte showLineNumbers title="routes/payments/data-table.svelte"
<script lang="ts" generics="TData, TValue">
  import {
    type ColumnDef,
    type PaginationState,
    type SortingState,
    type ColumnFiltersState,
    type VisibilityState,
    type RowSelectionState,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
  } from "@tanstack/table-core";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

  let { columns, data }: DataTableProps<TData, TValue> = $props();

  let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 10 });
  let sorting = $state<SortingState>([]);
  let columnFilters = $state<ColumnFiltersState>([]);
  let columnVisibility = $state<VisibilityState>({});
  let rowSelection = $state<RowSelectionState>({});

  const table = createSvelteTable({
    get data() {
      return data;
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        pagination = updater(pagination);
      } else {
        pagination = updater;
      }
    },
    onSortingChange: (updater) => {
      if (typeof updater === "function") {
        sorting = updater(sorting);
      } else {
        sorting = updater;
      }
    },
    onColumnFiltersChange: (updater) => {
      if (typeof updater === "function") {
        columnFilters = updater(columnFilters);
      } else {
        columnFilters = updater;
      }
    },
    onColumnVisibilityChange: (updater) => {
      if (typeof updater === "function") {
        columnVisibility = updater(columnVisibility);
      } else {
        columnVisibility = updater;
      }
    },
    onRowSelectionChange: (updater) => {
      if (typeof updater === "function") {
        rowSelection = updater(rowSelection);
      } else {
        rowSelection = updater;
      }
    },
    state: {
      get pagination() {
        return pagination;
      },
      get sorting() {
        return sorting;
      },
      get columnFilters() {
        return columnFilters;
      },
      get columnVisibility() {
        return columnVisibility;
      },
      get rowSelection() {
        return rowSelection;
      },
    },
  });
</script>
```

이렇게 하면 각 행에 체크박스가 추가되고 헤더에 모든 행을 선택하는 체크박스가 추가됩니다.

### 선택된 행 표시

`table.getFilteredSelectedRowModel()` API를 사용하여 선택된 행 수를 표시할 수 있습니다.

```svelte
<div class="text-muted-foreground flex-1 text-sm">
  {table.getFilteredSelectedRowModel().rows.length} of{" "}
  {table.getFilteredRowModel().rows.length} row(s) selected.
</div>
```

</Steps>

## 재사용 가능한 컴포넌트

데이터 테이블을 위한 재사용 가능한 컴포넌트 생성에 대해 알아보려면 [Tasks](/examples/tasks) 예제를 확인하세요.
