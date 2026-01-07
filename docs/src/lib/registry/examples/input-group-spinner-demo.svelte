<script lang="ts">
	import * as InputGroup from "$lib/registry/ui/input-group/index.js";
	import { Spinner } from "$lib/registry/ui/spinner/index.js";
	import LoaderIcon from "@lucide/svelte/icons/loader";
</script>

<div class="grid w-full max-w-sm gap-4">
	<InputGroup.Root data-disabled>
		<InputGroup.Input placeholder="검색 중..." disabled />
		<InputGroup.Addon align="inline-end">
			<Spinner />
		</InputGroup.Addon>
	</InputGroup.Root>
	<InputGroup.Root data-disabled>
		<InputGroup.Input placeholder="처리 중..." disabled />
		<InputGroup.Addon>
			<Spinner />
		</InputGroup.Addon>
	</InputGroup.Root>
	<InputGroup.Root data-disabled>
		<InputGroup.Input placeholder="변경사항 저장 중..." disabled />
		<InputGroup.Addon align="inline-end">
			<InputGroup.Text>저장 중...</InputGroup.Text>
			<Spinner />
		</InputGroup.Addon>
	</InputGroup.Root>
	<InputGroup.Root data-disabled>
		<InputGroup.Input placeholder="데이터 새로고침 중..." disabled />
		<InputGroup.Addon>
			<LoaderIcon class="animate-spin" />
		</InputGroup.Addon>
		<InputGroup.Addon align="inline-end">
			<InputGroup.Text class="text-muted-foreground">잠시만 기다려 주세요...</InputGroup.Text>
		</InputGroup.Addon>
	</InputGroup.Root>
</div>
