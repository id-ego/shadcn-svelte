<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Sheet from "$lib/registry/ui/sheet/index.js";
	import { buttonVariants } from "$lib/registry/ui/button/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
</script>

<Sheet.Root>
	<Sheet.Trigger class={buttonVariants({ variant: "outline" })}>열기</Sheet.Trigger>
	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title>프로필 수정</Sheet.Title>
			<Sheet.Description>
				여기서 프로필을 변경하세요. 완료되면 저장을 클릭하세요.
			</Sheet.Description>
		</Sheet.Header>
		<div class="grid flex-1 auto-rows-min gap-6 px-4">
			<div class="grid gap-3">
				<Label for="name" class="text-end">이름</Label>
				<Input id="name" value="Pedro Duarte" />
			</div>
			<div class="grid gap-3">
				<Label for="username" class="text-end">사용자명</Label>
				<Input id="username" value="@peduarte" />
			</div>
		</div>
		<Sheet.Footer>
			<Button type="submit">변경사항 저장</Button>
			<Sheet.Close class={buttonVariants({ variant: "outline" })}>닫기</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
