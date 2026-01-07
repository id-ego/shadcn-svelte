<script lang="ts">
	import * as NativeSelect from "$lib/registry/ui/native-select/index.js";
</script>

<NativeSelect.Root aria-invalid="true">
	<NativeSelect.Option value="">역할 선택</NativeSelect.Option>
	<NativeSelect.Option value="admin">관리자</NativeSelect.Option>
	<NativeSelect.Option value="editor">편집자</NativeSelect.Option>
	<NativeSelect.Option value="viewer">뷰어</NativeSelect.Option>
	<NativeSelect.Option value="guest">게스트</NativeSelect.Option>
</NativeSelect.Root>
