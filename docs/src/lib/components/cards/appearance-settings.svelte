<script lang="ts">
	import MinusIcon from "@lucide/svelte/icons/minus";
	import PlusIcon from "@lucide/svelte/icons/plus";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as ButtonGroup from "$lib/registry/ui/button-group/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import * as RadioGroup from "$lib/registry/ui/radio-group/index.js";
	import { Switch } from "$lib/registry/ui/switch/index.js";

	let gpuCount = $state(8);

	function handleGpuCountChange(event: Event) {
		const target = event.target as HTMLInputElement;
		let inputValue = target.value;
		const previousValue = gpuCount.toString();

		// Remove any non-numeric characters
		let cleanedValue = inputValue.replace(/[^0-9]/g, "");

		// Prevent deletion of a single digit
		if (cleanedValue === "" && previousValue.length === 1) {
			target.value = previousValue;
			return;
		}

		// Handle input cases
		if (cleanedValue !== "") {
			const numValue = parseInt(cleanedValue, 10);

			// If we already have 2 digits and user is trying to type more, keep the original value
			if (
				previousValue.length === 2 &&
				cleanedValue !== previousValue &&
				cleanedValue.length === 3
			) {
				target.value = previousValue;
				return;
			}

			// Ensure value is within valid range (1-99)
			if (numValue < 1) {
				cleanedValue = "1";
			} else if (numValue > 99) {
				cleanedValue = "99";
			}

			// Update both the input value and the state
			target.value = cleanedValue;
			gpuCount = parseInt(cleanedValue, 10);
		}
	}
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
								K8s로 구성된 클러스터에서 GPU 워크로드를 실행합니다. 기본값입니다.
							</Field.Description>
						</Field.Content>
						<RadioGroup.Item
							value="kubernetes"
							id="kubernetes-r2h"
							aria-label="Kubernetes"
						/>
					</Field.Field>
				</Field.Label>
				<Field.Label for="vm-z4k">
					<Field.Field orientation="horizontal">
						<Field.Content>
							<Field.Title>가상 머신</Field.Title>
							<Field.Description>
								VM으로 구성된 클러스터에 액세스하여 워크로드를 실행합니다. (곧 출시)
							</Field.Description>
						</Field.Content>
						<RadioGroup.Item value="vm" id="vm-z4k" aria-label="가상 머신" />
					</Field.Field>
				</Field.Label>
			</RadioGroup.Root>
		</Field.Set>
		<Field.Separator />
		<Field.Field orientation="horizontal">
			<Field.Content>
				<Field.Label for="number-of-gpus-f6l">GPU 수</Field.Label>
				<Field.Description>나중에 더 추가할 수 있습니다.</Field.Description>
			</Field.Content>
			<ButtonGroup.Root>
				<Input
					id="number-of-gpus-f6l"
					bind:value={gpuCount}
					size={3}
					class="h-8 !w-14 font-mono"
					maxlength={3}
					oninput={handleGpuCountChange}
					type="text"
					inputmode="numeric"
					pattern="[0-9]*"
				/>
				<Button
					onclick={() => gpuCount--}
					variant="outline"
					size="icon-sm"
					type="button"
					aria-label="감소"
					disabled={gpuCount <= 1}
				>
					<MinusIcon />
				</Button>
				<Button
					onclick={() => gpuCount++}
					variant="outline"
					size="icon-sm"
					type="button"
					aria-label="증가"
					disabled={gpuCount >= 99}
				>
					<PlusIcon />
				</Button>
			</ButtonGroup.Root>
		</Field.Field>
		<Field.Separator />
		<Field.Field orientation="horizontal">
			<Field.Content>
				<Field.Label for="tinting">배경화면 색조</Field.Label>
				<Field.Description>배경화면의 색조 변경을 허용합니다.</Field.Description>
			</Field.Content>
			<Switch id="tinting" checked />
		</Field.Field>
	</Field.Group>
</Field.Set>
