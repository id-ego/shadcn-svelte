<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import { Textarea } from "$lib/registry/ui/textarea/index.js";
</script>

<div class="grid w-full gap-2">
	<Textarea placeholder="메시지를 입력하세요." />
	<Button>메시지 전송</Button>
</div>
