<script lang="ts">
	import * as Field from "$lib/registry/ui/field/index.js";
	import * as RadioGroup from "$lib/registry/ui/radio-group/index.js";

	let plan = $state("monthly");
</script>

<div class="w-full max-w-md">
	<Field.Set>
		<Field.Label>구독 플랜</Field.Label>
		<Field.Description>연간 및 평생 플랜은 상당한 할인을 제공합니다.</Field.Description>
		<RadioGroup.Root bind:value={plan}>
			<Field.Field orientation="horizontal">
				<RadioGroup.Item value="monthly" id="plan-monthly" />
				<Field.Label for="plan-monthly" class="font-normal">
					월간 ($9.99/월)
				</Field.Label>
			</Field.Field>
			<Field.Field orientation="horizontal">
				<RadioGroup.Item value="yearly" id="plan-yearly" />
				<Field.Label for="plan-yearly" class="font-normal">
					연간 ($99.99/년)
				</Field.Label>
			</Field.Field>
			<Field.Field orientation="horizontal">
				<RadioGroup.Item value="lifetime" id="plan-lifetime" />
				<Field.Label for="plan-lifetime" class="font-normal">
					평생 ($299.99)
				</Field.Label>
			</Field.Field>
		</RadioGroup.Root>
	</Field.Set>
</div>
