<script lang="ts">
	import * as Field from "$lib/registry/ui/field/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import { Textarea } from "$lib/registry/ui/textarea/index.js";
</script>

<div class="w-full max-w-4xl">
	<form>
		<Field.Set>
			<Field.Legend>프로필</Field.Legend>
			<Field.Description>프로필 정보를 입력하세요.</Field.Description>
			<Field.Separator />
			<Field.Group>
				<Field.Field orientation="responsive">
					<Field.Content>
						<Field.Label for="name">이름</Field.Label>
						<Field.Description>
							신원 확인을 위해 전체 이름을 입력하세요
						</Field.Description>
					</Field.Content>
					<Input id="name" placeholder="홍길동" required />
				</Field.Field>
				<Field.Separator />
				<Field.Field orientation="responsive">
					<Field.Content>
						<Field.Label for="message">메시지</Field.Label>
						<Field.Description>
							여기에 메시지를 작성할 수 있습니다. 짧게 작성하는 것이 좋으며, 100자 이내로 작성하세요.
						</Field.Description>
					</Field.Content>
					<Textarea
						id="message"
						placeholder="안녕하세요!"
						required
						class="min-h-[100px] resize-none sm:min-w-[300px]"
					/>
				</Field.Field>
				<Field.Separator />
				<Field.Field orientation="responsive">
					<Button type="submit">제출</Button>
					<Button type="button" variant="outline">취소</Button>
				</Field.Field>
			</Field.Group>
		</Field.Set>
	</form>
</div>
