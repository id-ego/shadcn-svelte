---
title: Alert Dialog
description: 중요한 내용으로 사용자를 중단시키고 응답을 기대하는 모달 대화상자입니다.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/alert-dialog
  doc: https://bits-ui.com/docs/components/alert-dialog
  api: https://bits-ui.com/docs/components/alert-dialog#api-reference
---

<script>
	import ComponentPreview from "$lib/components/component-preview.svelte";
	import ComponentSource from "$lib/components/component-source.svelte";
	import PMAddComp from "$lib/components/pm-add-comp.svelte";
	import PMInstall from "$lib/components/pm-install.svelte";
	import Steps from "$lib/components/steps.svelte";
	import InstallTabs from "$lib/components/install-tabs.svelte";

	let { viewerData } = $props();
	import Step from "$lib/components/step.svelte";
</script>

<ComponentPreview name="alert-dialog-demo">

<div></div>

</ComponentPreview>

## 설치

<InstallTabs>
{#snippet cli()}
<PMAddComp name="alert-dialog" />
{/snippet}
{#snippet manual()}
<Steps>

<Step>

`bits-ui`를 설치합니다:

</Step>

<PMInstall command="bits-ui -D" />

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

```svelte showLineNumbersw
<script lang="ts">
  import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
</script>
```

```svelte showLineNumbers
<AlertDialog.Root>
  <AlertDialog.Trigger>Open</AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
      <AlertDialog.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.Action>Continue</AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>
```
