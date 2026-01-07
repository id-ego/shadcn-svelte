<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import * as Select from "$lib/registry/ui/select/index.js";
	import { Textarea } from "$lib/registry/ui/textarea/index.js";

	const id = $props.id();

	const areas = [
		{
			label: "팀",
			value: "team",
		},
		{
			label: "결제",
			value: "billing",
		},
		{
			label: "계정",
			value: "account",
		},
		{
			label: "배포",
			value: "deployments",
		},
		{
			label: "지원",
			value: "support",
		},
	];

	const levels = [
		{
			label: "심각도 1 (최고)",
			value: "1",
		},
		{
			label: "심각도 2",
			value: "2",
		},
		{
			label: "심각도 3",
			value: "3",
		},
		{
			label: "심각도 4 (최저)",
			value: "4",
		},
	];

	let area = $state("billing");
	let level = $state("2");

	const areaLabel = $derived(areas.find((a) => a.value === area)?.label ?? "선택");
	const levelLabel = $derived(levels.find((l) => l.value === level)?.label ?? "수준 선택");
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>문제 신고</Card.Title>
		<Card.Description>어떤 영역에서 문제가 있으신가요?</Card.Description>
	</Card.Header>
	<Card.Content>
		<Field.Group>
			<Field.Group class="grid gap-4 sm:grid-cols-2">
				<Field.Field>
					<Field.Label for="area-{id}">영역</Field.Label>
					<Select.Root type="single" bind:value={area}>
						<Select.Trigger id="area-{id}" aria-label="영역" class="w-full">
							{areaLabel}
						</Select.Trigger>
						<Select.Content>
							{#each areas as area (area.value)}
								<Select.Item value={area.value}>{area.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</Field.Field>
				<Field.Field>
					<Field.Label for="level-{id}">심각도</Field.Label>
					<Select.Root type="single" bind:value={level}>
						<Select.Trigger
							id="level-{id}"
							class="w-full [&_span]:!block [&_span]:truncate"
							aria-label="심각도"
						>
							<span>
								{levelLabel}
							</span>
						</Select.Trigger>
						<Select.Content>
							{#each levels as level (level.value)}
								<Select.Item value={level.value}>{level.label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</Field.Field>
			</Field.Group>
			<Field.Field>
				<Field.Label for="subject-{id}">제목</Field.Label>
				<Input id="subject-{id}" placeholder="도움이 필요합니다..." />
			</Field.Field>
			<Field.Field>
				<Field.Label for="description-{id}">설명</Field.Label>
				<Textarea
					id="description-{id}"
					placeholder="문제와 관련된 모든 정보를 포함해 주세요."
					class="min-h-24"
				/>
			</Field.Field>
			<Field.Field orientation="horizontal" class="justify-end">
				<Button variant="ghost" size="sm">취소</Button>
				<Button size="sm">제출</Button>
			</Field.Field>
		</Field.Group>
	</Card.Content>
</Card.Root>
