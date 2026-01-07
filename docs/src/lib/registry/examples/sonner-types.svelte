<script lang="ts">
	import { toast } from "svelte-sonner";
	import { Button } from "$lib/registry/ui/button/index.js";
</script>

<div class="flex flex-wrap gap-2">
	<Button variant="outline" onclick={() => toast("이벤트가 생성되었습니다")}>기본</Button>
	<Button variant="outline" onclick={() => toast.success("이벤트가 생성되었습니다")}>
		성공
	</Button>
	<Button
		variant="outline"
		onclick={() => toast.info("이벤트 시간 10분 전에 도착해주세요")}
	>
		정보
	</Button>
	<Button
		variant="outline"
		onclick={() => toast.warning("이벤트 시작 시간은 오전 8시보다 빠를 수 없습니다")}
	>
		경고
	</Button>
	<Button variant="outline" onclick={() => toast.error("이벤트가 생성되지 않았습니다")}>
		오류
	</Button>
	<Button
		variant="outline"
		onclick={() => {
			toast.promise<{ name: string }>(
				() => new Promise((resolve) => setTimeout(() => resolve({ name: "이벤트" }), 2000)),
				{
					loading: "로딩 중...",
					success: (data) => `${data.name}가 생성되었습니다`,
					error: "오류",
				}
			);
		}}
	>
		Promise
	</Button>
</div>
