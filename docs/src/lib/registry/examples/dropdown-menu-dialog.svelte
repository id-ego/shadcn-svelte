<script lang="ts">
	import MoreHorizontal from "@lucide/svelte/icons/more-horizontal";

	import { Button, buttonVariants } from "$lib/registry/ui/button/index.js";
	import * as Dialog from "$lib/registry/ui/dialog/index.js";
	import * as DropdownMenu from "$lib/registry/ui/dropdown-menu/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
	import { Textarea } from "$lib/registry/ui/textarea/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";

	let showNewDialog = $state(false);
	let showShareDialog = $state(false);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: "outline", size: "icon-sm" })}>
		<MoreHorizontal />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-40" align="end">
		<DropdownMenu.Label>파일 작업</DropdownMenu.Label>
		<DropdownMenu.Group>
			<DropdownMenu.Item onSelect={() => (showNewDialog = true)}>
				새 파일...
			</DropdownMenu.Item>
			<DropdownMenu.Item onSelect={() => (showShareDialog = true)}>
				공유...
			</DropdownMenu.Item>
			<DropdownMenu.Item disabled>다운로드</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>

<Dialog.Root bind:open={showNewDialog}>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>새 파일 만들기</Dialog.Title>
			<Dialog.Description>
				새 파일의 이름을 입력하세요. 완료되면 만들기를 클릭하세요.
			</Dialog.Description>
		</Dialog.Header>
		<Field.Group class="pb-3">
			<Field.Field>
				<Field.Label for="filename">파일 이름</Field.Label>
				<Input id="filename" name="filename" placeholder="document.txt" />
			</Field.Field>
		</Field.Group>
		<Dialog.Footer>
			<Dialog.Close class={buttonVariants({ variant: "outline" })}>취소</Dialog.Close>
			<Button type="submit">만들기</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>

<Dialog.Root bind:open={showShareDialog}>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>파일 공유</Dialog.Title>
			<Dialog.Description>
				링크가 있는 사람은 누구나 이 파일을 볼 수 있습니다.
			</Dialog.Description>
		</Dialog.Header>
		<Field.Group class="py-3">
			<Field.Field>
				<Label for="email">이메일 주소</Label>
				<Input id="email" name="email" type="email" placeholder="shadcn@vercel.com" />
			</Field.Field>
			<Field.Field>
				<Field.Label for="message">메시지 (선택사항)</Field.Label>
				<Textarea id="message" name="message" placeholder="이 파일을 확인해 보세요" />
			</Field.Field>
		</Field.Group>
		<Dialog.Footer>
			<Dialog.Close class={buttonVariants({ variant: "outline" })}>취소</Dialog.Close>
			<Button type="submit">초대 보내기</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
