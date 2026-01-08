<script lang="ts">
	import { X } from "@lucide/svelte";
	import { PersistedState } from "runed";
	import { Button } from "$lib/registry/ui/button/index.js";

	const dismissed = new PersistedState("translation-banner-dismissed", false);
</script>

{#if !dismissed.current}
	<div
		class="bg-primary text-primary-foreground relative flex items-center justify-center gap-2 px-4 py-2 text-sm"
	>
		<span>
			이 사이트는
			<a
				href="https://shadcn-svelte.com"
				target="_blank"
				rel="noreferrer"
				class="font-semibold underline underline-offset-4 hover:no-underline"
			>
				shadcn-svelte
			</a>
			공식 문서의 한국어 번역입니다.
		</span>
		<Button
			variant="ghost"
			size="icon"
			class="text-primary-foreground hover:bg-primary-foreground/10 absolute right-2 size-6"
			onclick={() => (dismissed.current = true)}
		>
			<X class="size-4" />
			<span class="sr-only">닫기</span>
		</Button>
	</div>
{/if}
