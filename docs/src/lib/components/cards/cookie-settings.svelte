<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import { Switch } from "$lib/registry/ui/switch/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>쿠키 설정</Card.Title>
		<Card.Description>쿠키 설정을 관리하세요.</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-6">
		<Field.Field orientation="horizontal">
			<Field.Content>
				<Field.Label for="necessary">필수</Field.Label>
				<Field.Description>
					이 쿠키들은 웹사이트 사용과 기능 이용에 필수적입니다.
				</Field.Description>
			</Field.Content>
			<Switch id="necessary" checked aria-label="Necessary" />
		</Field.Field>
		<Field.Field>
			<Button variant="outline">설정 저장</Button>
		</Field.Field>
	</Card.Content>
</Card.Root>
