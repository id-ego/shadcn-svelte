<script lang="ts">
	import * as Empty from "$lib/registry/ui/empty/index.js";
	import * as InputGroup from "$lib/registry/ui/input-group/index.js";
	import * as Kbd from "$lib/registry/ui/kbd/index.js";
	import SearchIcon from "@lucide/svelte/icons/search";
</script>

<Empty.Root>
	<Empty.Header>
		<Empty.Title>404 - 페이지를 찾을 수 없습니다</Empty.Title>
		<Empty.Description>
			찾으시는 페이지가 존재하지 않습니다. 아래에서 필요한 내용을 검색해 보세요.
		</Empty.Description>
	</Empty.Header>
	<Empty.Content>
		<InputGroup.Root class="sm:w-3/4">
			<InputGroup.Input placeholder="페이지 검색..." />
			<InputGroup.Addon>
				<SearchIcon />
			</InputGroup.Addon>
			<InputGroup.Addon align="inline-end">
				<Kbd.Root>/</Kbd.Root>
			</InputGroup.Addon>
		</InputGroup.Root>
		<Empty.Description>
			도움이 필요하신가요? <a href="#/">고객 지원 문의</a>
		</Empty.Description>
	</Empty.Content>
</Empty.Root>
