<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
</script>

<Card.Root class="-my-4 w-full max-w-sm">
	<Card.Header>
		<Card.Title>계정에 로그인</Card.Title>
		<Card.Description>계정에 로그인하려면 아래에 이메일을 입력하세요</Card.Description>
		<Card.Action>
			<Button variant="link">회원가입</Button>
		</Card.Action>
	</Card.Header>
	<Card.Content>
		<form>
			<div class="flex flex-col gap-6">
				<div class="grid gap-2">
					<Label for="email">이메일</Label>
					<Input id="email" type="email" placeholder="m@example.com" required />
				</div>
				<div class="grid gap-2">
					<div class="flex items-center">
						<Label for="password">비밀번호</Label>
						<a
							href="##"
							class="ms-auto inline-block text-sm underline-offset-4 hover:underline"
						>
							비밀번호를 잊으셨나요?
						</a>
					</div>
					<Input id="password" type="password" required />
				</div>
			</div>
		</form>
	</Card.Content>
	<Card.Footer class="flex-col gap-2">
		<Button type="submit" class="w-full">로그인</Button>
		<Button variant="outline" class="w-full">Google로 로그인</Button>
	</Card.Footer>
</Card.Root>
