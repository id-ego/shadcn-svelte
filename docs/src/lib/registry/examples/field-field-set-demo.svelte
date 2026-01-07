<script lang="ts">
	import * as Field from "$lib/registry/ui/field/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
</script>

<div class="w-full max-w-md space-y-6">
	<Field.Set>
		<Field.Legend>주소 정보</Field.Legend>
		<Field.Description>주문을 배송하기 위해 주소가 필요합니다.</Field.Description>
		<Field.Group>
			<Field.Field>
				<Field.Label for="street">도로명 주소</Field.Label>
				<Input id="street" type="text" placeholder="서울시 강남구 테헤란로 123" />
			</Field.Field>
			<div class="grid grid-cols-2 gap-4">
				<Field.Field>
					<Field.Label for="city">도시</Field.Label>
					<Input id="city" type="text" placeholder="서울" />
				</Field.Field>
				<Field.Field>
					<Field.Label for="zip">우편번호</Field.Label>
					<Input id="zip" type="text" placeholder="06234" />
				</Field.Field>
			</div>
		</Field.Group>
	</Field.Set>
</div>
