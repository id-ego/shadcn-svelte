<script lang="ts">
	import * as Field from "$lib/registry/ui/field/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
</script>

<div class="w-full max-w-md">
	<Field.Set>
		<Field.Group>
			<Field.Field>
				<Field.Label for="username">사용자명</Field.Label>
				<Input id="username" type="text" placeholder="홍길동" />
				<Field.Description>계정의 고유한 사용자명을 선택하세요.</Field.Description>
			</Field.Field>
			<Field.Field>
				<Field.Label for="password">비밀번호</Field.Label>
				<Field.Description>최소 8자 이상이어야 합니다.</Field.Description>
				<Input id="password" type="password" placeholder="********" />
			</Field.Field>
		</Field.Group>
	</Field.Set>
</div>
