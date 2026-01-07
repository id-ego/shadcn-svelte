<script lang="ts">
	import * as Field from "$lib/registry/ui/field/index.js";
	import { Checkbox } from "$lib/registry/ui/checkbox/index.js";
</script>

<div class="w-full max-w-md">
	<Field.Group>
		<Field.Set>
			<Field.Label>응답</Field.Label>
			<Field.Description>
				연구나 이미지 생성과 같이 시간이 걸리는 요청에 ChatGPT가 응답하면 알림을 받습니다.
			</Field.Description>
			<Field.Group data-slot="checkbox-group">
				<Field.Field orientation="horizontal">
					<Checkbox id="push" checked disabled />
					<Field.Label for="push" class="font-normal">푸시 알림</Field.Label>
				</Field.Field>
			</Field.Group>
		</Field.Set>
		<Field.Separator />
		<Field.Set>
			<Field.Label>작업</Field.Label>
			<Field.Description>
				생성한 작업에 업데이트가 있을 때 알림을 받습니다.
				<a href="#/">작업 관리</a>
			</Field.Description>
			<Field.Group data-slot="checkbox-group">
				<Field.Field orientation="horizontal">
					<Checkbox id="push-tasks" />
					<Field.Label for="push-tasks" class="font-normal">
						푸시 알림
					</Field.Label>
				</Field.Field>
				<Field.Field orientation="horizontal">
					<Checkbox id="email-tasks" />
					<Field.Label for="email-tasks" class="font-normal">
						이메일 알림
					</Field.Label>
				</Field.Field>
			</Field.Group>
		</Field.Set>
	</Field.Group>
</div>
