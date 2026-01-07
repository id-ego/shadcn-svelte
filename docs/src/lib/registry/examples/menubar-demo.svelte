<script lang="ts">
	import * as Menubar from "$lib/registry/ui/menubar/index.js";

	let bookmarks = $state(false);
	let fullUrls = $state(true);
	let profileRadioValue = $state("benoit");
</script>

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger>파일</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item>
				새 탭 <Menubar.Shortcut>⌘T</Menubar.Shortcut>
			</Menubar.Item>
			<Menubar.Item>
				새 창 <Menubar.Shortcut>⌘N</Menubar.Shortcut>
			</Menubar.Item>
			<Menubar.Item>새 시크릿 창</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Sub>
				<Menubar.SubTrigger>공유</Menubar.SubTrigger>
				<Menubar.SubContent>
					<Menubar.Item>이메일 링크</Menubar.Item>
					<Menubar.Item>메시지</Menubar.Item>
					<Menubar.Item>메모</Menubar.Item>
				</Menubar.SubContent>
			</Menubar.Sub>
			<Menubar.Separator />
			<Menubar.Item>
				인쇄... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
			</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger>편집</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item>
				실행 취소 <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
			</Menubar.Item>
			<Menubar.Item>
				다시 실행 <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
			</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Sub>
				<Menubar.SubTrigger>찾기</Menubar.SubTrigger>
				<Menubar.SubContent>
					<Menubar.Item>웹 검색</Menubar.Item>
					<Menubar.Separator />
					<Menubar.Item>찾기...</Menubar.Item>
					<Menubar.Item>다음 찾기</Menubar.Item>
					<Menubar.Item>이전 찾기</Menubar.Item>
				</Menubar.SubContent>
			</Menubar.Sub>
			<Menubar.Separator />
			<Menubar.Item>잘라내기</Menubar.Item>
			<Menubar.Item>복사</Menubar.Item>
			<Menubar.Item>붙여넣기</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger>보기</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.CheckboxItem bind:checked={bookmarks}
				>항상 북마크 표시줄 표시</Menubar.CheckboxItem
			>
			<Menubar.CheckboxItem bind:checked={fullUrls}>
				항상 전체 URL 표시
			</Menubar.CheckboxItem>
			<Menubar.Separator />
			<Menubar.Item inset>
				새로고침 <Menubar.Shortcut>⌘R</Menubar.Shortcut>
			</Menubar.Item>
			<Menubar.Item inset>
				강제 새로고침 <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
			</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item inset>전체화면 전환</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item inset>사이드바 숨기기</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger>프로필</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.RadioGroup bind:value={profileRadioValue}>
				<Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
				<Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
				<Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
			</Menubar.RadioGroup>
			<Menubar.Separator />
			<Menubar.Item inset>편집...</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item inset>프로필 추가...</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>
