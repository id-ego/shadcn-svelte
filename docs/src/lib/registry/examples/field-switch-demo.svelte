<script lang="ts">
	import * as Field from "$lib/registry/ui/field/index.js";
	import { Switch } from "$lib/registry/ui/switch/index.js";
</script>

<div class="w-full max-w-md">
	<Field.Field orientation="horizontal">
		<Field.Content>
			<Field.Label for="2fa">다중 인증</Field.Label>
			<Field.Description>
				다중 인증을 활성화합니다. 2단계 인증 기기가 없는 경우 이메일로 전송된 일회용 코드를 사용할 수 있습니다.
			</Field.Description>
		</Field.Content>
		<Switch id="2fa" />
	</Field.Field>
</div>
