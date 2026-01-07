<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class={cn("flex flex-col gap-6", className)} {...restProps}>
	<Card.Root>
		<Card.Header class="text-center">
			<Card.Title class="text-xl">계정 만들기</Card.Title>
			<Card.Description>아래에 이메일을 입력하여 계정을 생성하세요</Card.Description>
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
					</Field.Field>
					<Field.Field>
						<Field.Field class="grid grid-cols-2 gap-4">
							<Field.Field>
								<Field.Label for="password">비밀번호</Field.Label>
								<Input id="password" type="password" required />
							</Field.Field>
							<Field.Field>
								<Field.Label for="confirm-password">비밀번호 확인</Field.Label>
								<Input id="confirm-password" type="password" required />
							</Field.Field>
						</Field.Field>
						<Field.Description>최소 8자 이상이어야 합니다.</Field.Description>
					</Field.Field>
					<Field.Field>
						<Button type="submit">계정 만들기</Button>
						<Field.Description class="text-center">
							이미 계정이 있으신가요? <a href="#/">로그인</a>
						</Field.Description>
					</Field.Field>
				</Field.Group>
			</form>
		</Card.Content>
	</Card.Root>
	<Field.Description class="px-6 text-center">
		계속 진행하면 <a href="#/">서비스 약관</a> 및 <a href="#/">개인정보 보호정책</a>에 동의하는 것으로 간주됩니다.
	</Field.Description>
</div>
