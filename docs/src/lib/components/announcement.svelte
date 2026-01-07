<script lang="ts">
	import { badgeVariants } from "$lib/registry/ui/badge/index.js";
	import { ArrowRightIcon } from "@lucide/svelte";
</script>

<a
	href="/docs/changelog"
	class="cn({badgeVariants({ variant: 'secondary', class: 'bg-transparent' })}"
>
	<span class="bg-svelte-orange size-2 rounded-full" title="New"></span>
	새 컴포넌트: Field, Input Group, Item 외 다수 <ArrowRightIcon />
</a>
