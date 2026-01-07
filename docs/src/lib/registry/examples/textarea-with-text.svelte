<script lang="ts">
	import { Label } from "$lib/registry/ui/label/index.js";
	import { Textarea } from "$lib/registry/ui/textarea/index.js";
</script>

<div class="grid w-full gap-1.5">
	<Label for="message-2">메시지</Label>
	<Textarea placeholder="메시지를 입력하세요." id="message-2" />
	<p class="text-muted-foreground text-sm">메시지가 지원팀에 전달됩니다.</p>
</div>
