<script lang="ts">
	import * as NativeSelect from "$lib/registry/ui/native-select/index.js";
</script>

<NativeSelect.Root disabled>
	<NativeSelect.Option value="">우선순위 선택</NativeSelect.Option>
	<NativeSelect.Option value="low">낮음</NativeSelect.Option>
	<NativeSelect.Option value="medium">보통</NativeSelect.Option>
	<NativeSelect.Option value="high">높음</NativeSelect.Option>
	<NativeSelect.Option value="critical">긴급</NativeSelect.Option>
</NativeSelect.Root>
