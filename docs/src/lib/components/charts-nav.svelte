<script lang="ts">
	import { page } from "$app/state";
	import { cn } from "$lib/utils.js";
	import { ScrollArea } from "$lib/registry/ui/scroll-area/index.js";
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className, ...restProps }: HTMLAttributes<HTMLElement> = $props();

	const links = [
		{
			name: "영역 차트",
			href: "/charts/area#charts",
		},
		{
			name: "막대 차트",
			href: "/charts/bar#charts",
		},
		{
			name: "선 차트",
			href: "/charts/line#charts",
		},
		{
			name: "파이 차트",
			href: "/charts/pie#charts",
		},
		{
			name: "레이더 차트",
			href: "/charts/radar#charts",
		},
		{
			name: "방사형 차트",
			href: "/charts/radial#charts",
		},
		{
			name: "툴팁",
			href: "/charts/tooltip#charts",
		},
	];
</script>

<div class="relative overflow-hidden">
	<ScrollArea
		class="max-w-[600px] lg:max-w-none"
		orientation="both"
		scrollbarXClasses="invisible"
	>
		<div class={cn("flex items-center", className)} {...restProps}>
			{#each links as link (link.href)}
				<a
					href={link.href}
					data-active={link.href.startsWith(page.url.pathname)}
					class={cn(
						"text-muted-foreground hover:text-primary data-[active=true]:text-primary flex h-7 shrink-0 items-center justify-center px-4 text-center text-base font-medium transition-colors"
					)}
				>
					{link.name}
				</a>
			{/each}
		</div>
	</ScrollArea>
</div>
