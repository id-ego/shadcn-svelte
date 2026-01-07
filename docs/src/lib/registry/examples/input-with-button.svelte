<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
</script>

<div class="flex w-full max-w-sm items-center gap-2">
	<Input type="email" placeholder="이메일" />
	<Button type="submit" variant="outline">구독</Button>
</div>
