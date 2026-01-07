<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";
	import * as InputOTP from "$lib/registry/ui/input-otp/index.js";

	let className: string | undefined = undefined;
	export { className as class };
</script>

<div class={cn("flex flex-col gap-6", className)} {...$$restProps}>
	<form>
		<Field.Group>
			<div class="flex flex-col items-center gap-1 text-center">
				<h1 class="text-2xl font-bold">인증 코드 입력</h1>
				<p class="text-muted-foreground text-sm text-balance">
					이메일로 6자리 코드를 보냈습니다.
				</p>
			</div>
			<Field.Field>
				<Field.Label for="otp" class="sr-only">인증 코드</Field.Label>
				<InputOTP.Root maxlength={6} id="otp" required>
					{#snippet children({ cells })}
						<InputOTP.Group
							class="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border"
						>
							{#each cells.slice(0, 2) as cell (cell)}
								<InputOTP.Slot {cell} />
							{/each}
						</InputOTP.Group>
						<InputOTP.Separator />
						<InputOTP.Group
							class="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border"
						>
							{#each cells.slice(2, 4) as cell (cell)}
								<InputOTP.Slot {cell} />
							{/each}
						</InputOTP.Group>
						<InputOTP.Separator />
						<InputOTP.Group
							class="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border"
						>
							{#each cells.slice(4, 6) as cell (cell)}
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
</div>
