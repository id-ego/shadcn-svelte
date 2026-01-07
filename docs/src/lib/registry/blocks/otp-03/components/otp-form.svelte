<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";
	import * as InputOTP from "$lib/registry/ui/input-otp/index.js";
	import type { ComponentProps } from "svelte";

	let { ...restProps }: ComponentProps<typeof Card.Root> = $props();
</script>

<Card.Root {...restProps}>
	<Card.Header class="text-center">
		<Card.Title class="text-xl">인증 코드 입력</Card.Title>
		<Card.Description>이메일로 6자리 코드를 보냈습니다.</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<Field.Group>
				<Field.Field>
					<Field.Label for="otp" class="sr-only">인증 코드</Field.Label>
					<InputOTP.Root maxlength={6} id="otp" required>
						{#snippet children({ cells })}
							<InputOTP.Group
								class="gap-2.5 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border"
							>
								{#each cells as cell (cell)}
									<InputOTP.Slot {cell} />
								{/each}
							</InputOTP.Group>
						{/snippet}
					</InputOTP.Root>
					<Field.Description class="text-center">
						이메일로 전송된 6자리 코드를 입력하세요.
					</Field.Description>
				</Field.Field>
				<Button type="submit">확인</Button>
				<Field.Description class="text-center">
					코드를 받지 못하셨나요? <a href="#/">재전송</a>
				</Field.Description>
			</Field.Group>
		</form>
	</Card.Content>
</Card.Root>
