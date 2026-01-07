<script lang="ts">
	import { Card, CardContent } from "$lib/registry/ui/card/index.js";
	import { Checkbox } from "$lib/registry/ui/checkbox/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";

	const options = [
		{
			label: "소셜 미디어",
			value: "social-media",
		},
		{
			label: "검색 엔진",
			value: "search-engine",
		},
		{
			label: "추천",
			value: "referral",
		},
		{
			label: "기타",
			value: "other",
		},
	];
</script>

<Card class="py-4 shadow-none">
	<CardContent class="px-4">
		<form>
			<Field.Group>
				<Field.Set class="gap-4">
					<Field.Legend>저희를 어떻게 알게 되셨나요?</Field.Legend>
					<Field.Description class="line-clamp-1">
						저희를 알게 된 경로를 선택해 주세요.
					</Field.Description>
					<Field.Group class="flex flex-row flex-wrap gap-2 [--radius:9999rem]">
						{#each options as option (option.value)}
							<Field.Label for={option.value} class="!w-fit">
								<Field.Field
									orientation="horizontal"
									class="gap-1.5 overflow-hidden !px-3 !py-1.5 transition-all duration-100 ease-linear group-has-data-[state=checked]/field-label:!px-2"
								>
									<Checkbox
										value={option.value}
										id={option.value}
										checked={option.value === "social-media"}
										class="-ms-6 -translate-x-1 rounded-full transition-all duration-100 ease-linear data-[state=checked]:ms-0 data-[state=checked]:translate-x-0"
									/>
									<Field.Title class="text-nowrap">{option.label}</Field.Title>
								</Field.Field>
							</Field.Label>
						{/each}
					</Field.Group>
				</Field.Set>
			</Field.Group>
		</form>
	</CardContent>
</Card>
