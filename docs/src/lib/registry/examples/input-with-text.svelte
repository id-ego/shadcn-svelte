<script lang="ts">
	import { Input } from "$lib/registry/ui/input/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
</script>

<div class="flex w-full max-w-sm flex-col gap-1.5">
	<Label for="email-2">이메일</Label>
	<Input type="email" id="email-2" placeholder="이메일" />
	<p class="text-muted-foreground text-sm">이메일 주소를 입력하세요.</p>
</div>
