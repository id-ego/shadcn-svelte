<script lang="ts">
	import { Checkbox } from "$lib/registry/ui/checkbox/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
</script>

<div>
	<div class="flex items-center space-x-2">
		<Checkbox id="terms" />
		<Label for="terms">이용 약관에 동의합니다</Label>
	</div>
</div>
