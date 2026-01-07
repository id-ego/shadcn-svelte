<script lang="ts">
	import * as Select from "$lib/registry/ui/select/index.js";

	const fruits = [
		{ value: "apple", label: "사과" },
		{ value: "banana", label: "바나나" },
		{ value: "blueberry", label: "블루베리" },
		{ value: "grapes", label: "포도" },
		{ value: "pineapple", label: "파인애플" },
	];

	let value = $state("");

	const triggerContent = $derived(
		fruits.find((f) => f.value === value)?.label ?? "과일을 선택하세요"
	);
</script>

<Select.Root type="single" name="favoriteFruit" bind:value>
	<Select.Trigger class="w-[180px]">
		{triggerContent}
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			<Select.Label>과일</Select.Label>
			{#each fruits as fruit (fruit.value)}
				<Select.Item
					value={fruit.value}
					label={fruit.label}
					disabled={fruit.value === "grapes"}
				>
					{fruit.label}
				</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
</Select.Root>
