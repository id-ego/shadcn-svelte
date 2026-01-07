<script lang="ts">
	import { Checkbox } from "$lib/registry/ui/checkbox/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
</script>

<div class="items-top flex space-x-2">
	<Checkbox id="terms1" />
	<div class="grid gap-1.5 leading-none">
		<Label
			for="terms1"
			class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
		>
			이용 약관에 동의합니다
		</Label>
		<p class="text-muted-foreground text-sm">
			서비스 이용약관 및 개인정보 처리방침에 동의하게 됩니다.
		</p>
	</div>
</div>
