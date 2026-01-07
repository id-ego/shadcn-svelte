<script lang="ts">
	import * as Alert from "$lib/registry/ui/alert/index.js";
	import CheckCircle2Icon from "@lucide/svelte/icons/check-circle-2";
	import AlertCircleIcon from "@lucide/svelte/icons/alert-circle";
	import PopcornIcon from "@lucide/svelte/icons/popcorn";
</script>

<div class="grid w-full max-w-xl items-start gap-4">
	<Alert.Root>
		<CheckCircle2Icon />
		<Alert.Title>성공! 변경 사항이 저장되었습니다</Alert.Title>
		<Alert.Description>아이콘, 제목, 설명이 있는 알림입니다.</Alert.Description>
	</Alert.Root>
	<Alert.Root>
		<PopcornIcon />
		<Alert.Title>이 알림에는 제목과 아이콘이 있습니다. 설명은 없습니다.</Alert.Title>
	</Alert.Root>
	<Alert.Root variant="destructive">
		<AlertCircleIcon />
		<Alert.Title>결제를 처리할 수 없습니다.</Alert.Title>
		<Alert.Description>
			<p>청구 정보를 확인하고 다시 시도해 주세요.</p>
			<ul class="list-inside list-disc text-sm">
				<li>카드 정보 확인</li>
				<li>잔액 충분 여부 확인</li>
				<li>청구지 주소 확인</li>
			</ul>
		</Alert.Description>
	</Alert.Root>
</div>
