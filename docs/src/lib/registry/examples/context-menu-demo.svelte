<script lang="ts">
	import * as ContextMenu from "$lib/registry/ui/context-menu/index.js";

	let showBookmarks = $state(false);
	let showFullURLs = $state(true);

	let value = $state("pedro");
</script>

<ContextMenu.Root>
	<ContextMenu.Trigger
		class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
	>
		여기서 우클릭하세요
	</ContextMenu.Trigger>
	<ContextMenu.Content class="w-52">
		<ContextMenu.Item inset>
			뒤로
			<ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
		</ContextMenu.Item>
		<ContextMenu.Item inset disabled>
			앞으로
			<ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
		</ContextMenu.Item>
		<ContextMenu.Item inset>
			새로고침
			<ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
		</ContextMenu.Item>
		<ContextMenu.Sub>
			<ContextMenu.SubTrigger inset>추가 도구</ContextMenu.SubTrigger>
			<ContextMenu.SubContent class="w-48">
				<ContextMenu.Item>
					페이지를 다른 이름으로 저장...
					<ContextMenu.Shortcut>⇧⌘S</ContextMenu.Shortcut>
				</ContextMenu.Item>
				<ContextMenu.Item>바로가기 만들기...</ContextMenu.Item>
				<ContextMenu.Item>창 이름 지정...</ContextMenu.Item>
				<ContextMenu.Separator />
				<ContextMenu.Item>개발자 도구</ContextMenu.Item>
			</ContextMenu.SubContent>
		</ContextMenu.Sub>
		<ContextMenu.Separator />
		<ContextMenu.CheckboxItem bind:checked={showBookmarks}>
			북마크 표시
		</ContextMenu.CheckboxItem>
		<ContextMenu.CheckboxItem bind:checked={showFullURLs}>
			전체 URL 표시
		</ContextMenu.CheckboxItem>
		<ContextMenu.Separator />
		<ContextMenu.RadioGroup bind:value>
			<ContextMenu.Group>
				<ContextMenu.GroupHeading inset>사용자</ContextMenu.GroupHeading>
				<ContextMenu.RadioItem value="pedro">Pedro Duarte</ContextMenu.RadioItem>
				<ContextMenu.RadioItem value="colm">Colm Tuite</ContextMenu.RadioItem>
			</ContextMenu.Group>
		</ContextMenu.RadioGroup>
	</ContextMenu.Content>
</ContextMenu.Root>
