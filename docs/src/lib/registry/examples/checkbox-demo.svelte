<script lang="ts">
	import { Checkbox } from "$lib/registry/ui/checkbox/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center gap-3">
		<Checkbox id="terms" />
		<Label for="terms">이용 약관에 동의합니다</Label>
	</div>
	<div class="flex items-start gap-3">
		<Checkbox id="terms-2" checked />
		<div class="grid gap-2">
			<Label for="terms-2">이용 약관에 동의합니다</Label>
			<p class="text-muted-foreground text-sm">
				이 체크박스를 클릭하면 이용 약관에 동의하게 됩니다.
			</p>
		</div>
	</div>
	<div class="flex items-start gap-3">
		<Checkbox id="toggle" disabled />
		<Label for="toggle">알림 활성화</Label>
	</div>
	<Label
		class="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950"
	>
		<Checkbox
			id="toggle-2"
			checked
			class="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
		/>
		<div class="grid gap-1.5 font-normal">
			<p class="text-sm leading-none font-medium">알림 활성화</p>
			<p class="text-muted-foreground text-sm">
				언제든지 알림을 활성화하거나 비활성화할 수 있습니다.
			</p>
		</div>
	</Label>
</div>
