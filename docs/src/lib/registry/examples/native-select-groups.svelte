<script lang="ts">
	import * as NativeSelect from "$lib/registry/ui/native-select/index.js";
</script>

<NativeSelect.Root>
	<NativeSelect.Option value="">부서 선택</NativeSelect.Option>
	<NativeSelect.OptGroup label="엔지니어링">
		<NativeSelect.Option value="frontend">프론트엔드</NativeSelect.Option>
		<NativeSelect.Option value="backend">백엔드</NativeSelect.Option>
		<NativeSelect.Option value="devops">데브옵스</NativeSelect.Option>
	</NativeSelect.OptGroup>
	<NativeSelect.OptGroup label="영업">
		<NativeSelect.Option value="sales-rep">영업 담당자</NativeSelect.Option>
		<NativeSelect.Option value="account-manager">계정 관리자</NativeSelect.Option>
		<NativeSelect.Option value="sales-director">영업 이사</NativeSelect.Option>
	</NativeSelect.OptGroup>
	<NativeSelect.OptGroup label="운영">
		<NativeSelect.Option value="support">고객 지원</NativeSelect.Option>
		<NativeSelect.Option value="product-manager">제품 관리자</NativeSelect.Option>
		<NativeSelect.Option value="ops-manager">운영 관리자</NativeSelect.Option>
	</NativeSelect.OptGroup>
</NativeSelect.Root>
