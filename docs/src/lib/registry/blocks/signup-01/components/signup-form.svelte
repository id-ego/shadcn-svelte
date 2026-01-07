<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import type { ComponentProps } from "svelte";

	let { ...restProps }: ComponentProps<typeof Card.Root> = $props();
</script>

<Card.Root {...restProps}>
	<Card.Header>
		<Card.Title>계정 만들기</Card.Title>
		<Card.Description>아래 정보를 입력하여 계정을 생성하세요</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<Field.Group>
				<Field.Field>
					<Field.Label for="name">이름</Field.Label>
					<Input id="name" type="text" placeholder="홍길동" required />
				</Field.Field>
				<Field.Field>
					<Field.Label for="email">이메일</Field.Label>
					<Input id="email" type="email" placeholder="m@example.com" required />
					<Field.Description>
						연락처로 사용됩니다. 이메일은 다른 사람과 공유되지 않습니다.
					</Field.Description>
				</Field.Field>
				<Field.Field>
					<Field.Label for="password">비밀번호</Field.Label>
					<Input id="password" type="password" required />
					<Field.Description>최소 8자 이상이어야 합니다.</Field.Description>
				</Field.Field>
				<Field.Field>
					<Field.Label for="confirm-password">비밀번호 확인</Field.Label>
					<Input id="confirm-password" type="password" required />
					<Field.Description>비밀번호를 다시 입력하세요.</Field.Description>
				</Field.Field>
				<Field.Group>
					<Field.Field>
						<Button type="submit">계정 만들기</Button>
						<Button variant="outline" type="button">Google로 가입</Button>
						<Field.Description class="px-6 text-center">
							이미 계정이 있으신가요? <a href="#/">로그인</a>
						</Field.Description>
					</Field.Field>
				</Field.Group>
			</Field.Group>
		</form>
	</Card.Content>
</Card.Root>
