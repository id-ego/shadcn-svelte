<script lang="ts">
	import GalleryVerticalEndIcon from "@lucide/svelte/icons/gallery-vertical-end";
	import { cn } from "$lib/utils.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";
	import * as InputOTP from "$lib/registry/ui/input-otp/index.js";
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class={cn("flex flex-col gap-6", className)} {...restProps}>
	<form>
		<Field.Group>
			<div class="flex flex-col items-center gap-2 text-center">
				<a href="#/" class="flex flex-col items-center gap-2 font-medium">
					<div class="flex size-8 items-center justify-center rounded-md">
						<GalleryVerticalEndIcon class="size-6" />
					</div>
					<span class="sr-only">Acme Inc.</span>
				</a>
				<h1 class="text-xl font-bold">인증 코드 입력</h1>
				<Field.Description>이메일 주소로 6자리 코드를 보냈습니다</Field.Description>
			</div>
			<Field.Field>
				<Field.Label for="otp" class="sr-only">인증 코드</Field.Label>
				<InputOTP.Root maxlength={6} id="otp" required class="gap-4">
					{#snippet children({ cells })}
						<InputOTP.Group
							class="gap-2.5 *:data-[slot=input-otp-slot]:h-16 *:data-[slot=input-otp-slot]:w-12 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border *:data-[slot=input-otp-slot]:text-xl"
						>
							{#each cells.slice(0, 3) as cell (cell)}
								<InputOTP.Slot {cell} />
							{/each}
						</InputOTP.Group>
						<InputOTP.Separator />
						<InputOTP.Group
							class="gap-2.5 *:data-[slot=input-otp-slot]:h-16 *:data-[slot=input-otp-slot]:w-12 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border *:data-[slot=input-otp-slot]:text-xl"
						>
							{#each cells.slice(3, 6) as cell (cell)}
								<InputOTP.Slot {cell} />
							{/each}
						</InputOTP.Group>
					{/snippet}
				</InputOTP.Root>
				<Field.Description class="text-center">
					코드를 받지 못하셨나요? <a href="#/">재전송</a>
				</Field.Description>
			</Field.Field>
			<Field.Field>
				<Button type="submit">확인</Button>
			</Field.Field>
		</Field.Group>
	</form>
	<Field.Description class="px-6 text-center">
		계속하기를 클릭하면 <a href="#/">서비스 약관</a> 및 <a href="#/">개인정보 보호정책</a>에 동의하는 것으로 간주됩니다.
	</Field.Description>
</div>
