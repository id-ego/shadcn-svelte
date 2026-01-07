<script lang="ts">
	import GithubIcon from "$lib/components/github.svelte";
	import SpinnerIcon from "$lib/components/spinner.svelte";
	import { Button } from "$lib/registry/ui/button/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
	import { cn } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className, ...restProps }: HTMLAttributes<HTMLElement> = $props();

	let isLoading = $state(false);
	async function onSubmit(e: Event) {
		e.preventDefault();
		isLoading = true;

		setTimeout(() => {
			isLoading = false;
		}, 3000);
	}
</script>

<div class={cn("grid gap-6", className)} {...restProps}>
	<form onsubmit={onSubmit}>
		<div class="grid gap-2">
			<div class="grid gap-1">
				<Label class="sr-only" for="email">이메일</Label>
				<Input
					id="email"
					placeholder="name@example.com"
					type="email"
					autocapitalize="none"
					autocomplete="email"
					autocorrect="off"
					disabled={isLoading}
				/>
			</div>
			<Button disabled={isLoading}>
				{#if isLoading}
					<SpinnerIcon class="me-2 size-4 animate-spin" />
				{/if}
				이메일로 로그인
			</Button>
		</div>
	</form>
	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t"></span>
		</div>
		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background text-muted-foreground px-2"> 또는 다음으로 계속 </span>
		</div>
	</div>
	<Button variant="outline" type="button" disabled={isLoading}>
		{#if isLoading}
			<SpinnerIcon class="me-2 size-4 animate-spin" />
		{:else}
			<GithubIcon class="me-2 size-4" />
		{/if}
		GitHub
	</Button>
</div>
