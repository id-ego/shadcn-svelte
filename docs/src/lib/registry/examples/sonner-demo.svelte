<script lang="ts">
	import { toast } from "svelte-sonner";
	import { Button } from "$lib/registry/ui/button/index.js";
</script>

<Button
	variant="outline"
	onclick={() =>
		toast("이벤트가 생성되었습니다", {
			description: "2023년 12월 3일 일요일 오전 9:00",
			action: {
				label: "취소",
				onClick: () => console.info("Undo"),
			},
		})}
>
	토스트 표시
</Button>
