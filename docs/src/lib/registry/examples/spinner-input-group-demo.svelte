<script lang="ts">
	import * as InputGroup from "$lib/registry/ui/input-group/index.js";
	import { Spinner } from "$lib/registry/ui/spinner/index.js";
	import ArrowUpIcon from "@lucide/svelte/icons/arrow-up";
</script>

<div class="flex w-full max-w-md flex-col gap-4">
	<InputGroup.Root>
		<InputGroup.Input placeholder="메시지를 입력하세요..." disabled />
		<InputGroup.Addon align="inline-end">
			<Spinner />
		</InputGroup.Addon>
	</InputGroup.Root>
	<InputGroup.Root>
		<InputGroup.Textarea placeholder="메시지를 입력하세요..." disabled />
		<InputGroup.Addon align="block-end">
			<Spinner /> 검증 중...
			<InputGroup.Button class="ms-auto" variant="default">
				<ArrowUpIcon />
				<span class="sr-only">전송</span>
			</InputGroup.Button>
		</InputGroup.Addon>
	</InputGroup.Root>
</div>
