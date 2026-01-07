<script lang="ts">
	import { Button, buttonVariants } from "$lib/registry/ui/button/index.js";
	import * as Dialog from "$lib/registry/ui/dialog/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
</script>

<Dialog.Root>
	<form>
		<Dialog.Trigger class={buttonVariants({ variant: "outline" })}>다이얼로그 열기</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title>프로필 수정</Dialog.Title>
				<Dialog.Description>
					여기서 프로필을 변경하세요. 완료되면 저장을 클릭하세요.
				</Dialog.Description>
			</Dialog.Header>
			<div class="grid gap-4">
				<div class="grid gap-3">
					<Label for="name-1">이름</Label>
					<Input id="name-1" name="name" defaultValue="Pedro Duarte" />
				</div>
				<div class="grid gap-3">
					<Label for="username-1">사용자명</Label>
					<Input id="username-1" name="username" defaultValue="@peduarte" />
				</div>
			</div>
			<Dialog.Footer>
				<Dialog.Close class={buttonVariants({ variant: "outline" })}>취소</Dialog.Close>
				<Button type="submit">변경사항 저장</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</form>
</Dialog.Root>
