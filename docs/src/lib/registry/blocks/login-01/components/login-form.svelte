<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import {
		FieldGroup,
		Field,
		FieldLabel,
		FieldDescription,
	} from "$lib/registry/ui/field/index.js";

	const id = $props.id();
</script>

<Card.Root class="mx-auto w-full max-w-sm">
	<Card.Header>
		<Card.Title class="text-2xl">로그인</Card.Title>
		<Card.Description>계정에 로그인하려면 이메일을 입력하세요</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<FieldGroup>
				<Field>
					<FieldLabel for="email-{id}">이메일</FieldLabel>
					<Input id="email-{id}" type="email" placeholder="m@example.com" required />
				</Field>
				<Field>
					<div class="flex items-center">
						<FieldLabel for="password-{id}">비밀번호</FieldLabel>
						<a href="##" class="ms-auto inline-block text-sm underline">
							비밀번호를 잊으셨나요?
						</a>
					</div>
					<Input id="password-{id}" type="password" required />
				</Field>
				<Field>
					<Button type="submit" class="w-full">로그인</Button>
					<Button variant="outline" class="w-full">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
								fill="currentColor"
							/>
						</svg>
						Google로 로그인
					</Button>
					<FieldDescription class="text-center">
						계정이 없으신가요? <a href="##">가입하기</a>
					</FieldDescription>
				</Field>
			</FieldGroup>
		</form>
	</Card.Content>
</Card.Root>
