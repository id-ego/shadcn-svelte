<script lang="ts">
	import * as NativeSelect from "$lib/registry/ui/native-select/index.js";
</script>

<NativeSelect.Root>
	<NativeSelect.Option value="">상태 선택</NativeSelect.Option>
	<NativeSelect.Option value="todo">할 일</NativeSelect.Option>
	<NativeSelect.Option value="in-progress">진행 중</NativeSelect.Option>
	<NativeSelect.Option value="done">완료</NativeSelect.Option>
	<NativeSelect.Option value="cancelled">취소됨</NativeSelect.Option>
</NativeSelect.Root>
