<script lang="ts">
	import { Label } from "$lib/registry/ui/label/index.js";
	import { Textarea } from "$lib/registry/ui/textarea/index.js";
</script>

<div class="grid w-full gap-1.5">
	<Label for="message">메시지</Label>
	<Textarea placeholder="메시지를 입력하세요." id="message" />
</div>
