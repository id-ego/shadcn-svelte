<script lang="ts">
	import { Input } from "$lib/registry/ui/input/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";

	const id = $props.id();
</script>

<div class="flex w-full max-w-sm flex-col gap-1.5">
	<Label for="email-{id}">이메일</Label>
	<Input type="email" id="email-{id}" placeholder="이메일" />
</div>
