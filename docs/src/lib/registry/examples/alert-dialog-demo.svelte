<script lang="ts">
	import * as AlertDialog from "$lib/registry/ui/alert-dialog/index.js";
	import { buttonVariants } from "$lib/registry/ui/button/index.js";
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger class={buttonVariants({ variant: "outline" })}>
		다이얼로그 표시
	</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>정말 확실하신가요?</AlertDialog.Title>
			<AlertDialog.Description>
				이 작업은 취소할 수 없습니다. 계정이 영구적으로 삭제되고 서버에서 데이터가 제거됩니다.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>취소</AlertDialog.Cancel>
			<AlertDialog.Action>계속</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
