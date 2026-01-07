<script lang="ts">
	import MinusIcon from "@tabler/icons-svelte/icons/minus";
	import PlusIcon from "@tabler/icons-svelte/icons/plus";
	import CheckIcon from "@lucide/svelte/icons/check";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as ButtonGroup from "$lib/registry/ui/button-group/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
	import * as RadioGroup from "$lib/registry/ui/radio-group/index.js";

	import { Switch } from "$lib/registry/ui/switch/index.js";

	const accents = [
		{
			name: "Blue",
			value: "blue",
		},
		{
			name: "Amber",
			value: "amber",
		},
		{
			name: "Green",
			value: "green",
		},
		{
			name: "Rose",
			value: "rose",
		},
	];
</script>

<Field.Set>
	<Field.Group>
		<Field.Set>
			<Field.Legend>컴퓨팅 환경</Field.Legend>
			<Field.Description>클러스터의 컴퓨팅 환경을 선택하세요.</Field.Description>
			<RadioGroup.Root value="kubernetes">
				<Field.Label for="kubernetes-r2h">
					<Field.Field orientation="horizontal">
						<Field.Content>
							<Field.Title>Kubernetes</Field.Title>
							<Field.Description>
								K8s 구성 클러스터에서 GPU 워크로드를 실행합니다. 기본값입니다.
							</Field.Description>
						</Field.Content>
						<RadioGroup.Item value="kubernetes" id="kubernetes-r2h" />
					</Field.Field>
				</Field.Label>
				<Field.Label for="vm-z4k">
					<Field.Field orientation="horizontal">
						<Field.Content>
							<Field.Title>Virtual Machine</Field.Title>
							<Field.Description>
								워크로드를 실행하기 위해 VM 구성 클러스터에 액세스합니다. (출시 예정)
							</Field.Description>
						</Field.Content>
						<RadioGroup.Item value="vm" id="vm-z4k" />
					</Field.Field>
				</Field.Label>
			</RadioGroup.Root>
		</Field.Set>
		<Field.Separator />
		<Field.Field orientation="horizontal">
			<Field.Content>
				<Field.Title>강조 색상</Field.Title>
				<Field.Description>사용할 강조 색상을 선택하세요.</Field.Description>
			</Field.Content>
			<Field.Set aria-label="Accent">
				<RadioGroup.Root class="flex flex-wrap gap-2" value="blue">
					{#each accents as accent (accent.value)}
						<Label
							for={accent.value}
							data-theme={accent.value}
							class="flex size-6 items-center justify-center rounded-full data-[theme=amber]:bg-amber-600 data-[theme=blue]:bg-blue-700 data-[theme=green]:bg-green-600 data-[theme=rose]:bg-rose-600"
						>
							<RadioGroup.Item
								id={accent.value}
								value={accent.value}
								aria-label={accent.name}
								class="peer sr-only"
							/>
							<CheckIcon
								class="hidden size-4 stroke-white peer-data-[state=checked]:block"
							/>
						</Label>
					{/each}
				</RadioGroup.Root>
			</Field.Set>
		</Field.Field>
		<Field.Separator />
		<Field.Field orientation="horizontal">
			<Field.Content>
				<Field.Label for="number-of-gpus-f6l">GPU 개수</Field.Label>
				<Field.Description>나중에 더 추가할 수 있습니다.</Field.Description>
			</Field.Content>
			<ButtonGroup.Root>
				<Input
					id="number-of-gpus-f6l"
					placeholder="8"
					size={3}
					class="h-8 !w-14 font-mono"
					maxlength={3}
				/>
				<Button variant="outline" size="icon-sm" type="button">
					<MinusIcon />
				</Button>
				<Button variant="outline" size="icon-sm" type="button">
					<PlusIcon />
				</Button>
			</ButtonGroup.Root>
		</Field.Field>
		<Field.Separator />
		<Field.Field orientation="horizontal">
			<Field.Content>
				<Field.Label for="tinting">배경화면 색조</Field.Label>
				<Field.Description>배경화면 색조 조정을 허용합니다.</Field.Description>
			</Field.Content>
			<Switch id="tinting" checked />
		</Field.Field>
	</Field.Group>
</Field.Set>
