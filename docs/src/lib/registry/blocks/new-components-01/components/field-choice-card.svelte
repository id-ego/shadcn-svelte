<script lang="ts">
	import * as Field from "$lib/registry/ui/field/index.js";
	import * as RadioGroup from "$lib/registry/ui/radio-group/index.js";

	let computeEnvironment = $state("kubernetes");
</script>

<div class="w-full max-w-md">
	<Field.Group>
		<Field.Set>
			<Field.Label for="compute-environment-p8w">컴퓨팅 환경</Field.Label>
			<Field.Description>클러스터의 컴퓨팅 환경을 선택하세요.</Field.Description>
			<RadioGroup.Root bind:value={computeEnvironment}>
				<Field.Label for="kubernetes-r2h">
					<Field.Field orientation="horizontal">
						<Field.Content>
							<Field.Title>Kubernetes</Field.Title>
							<Field.Description>
								K8s 구성 클러스터에서 GPU 워크로드를 실행합니다.
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
								GPU 워크로드를 실행하기 위해 VM 구성 클러스터에 액세스합니다.
							</Field.Description>
						</Field.Content>
						<RadioGroup.Item value="vm" id="vm-z4k" />
					</Field.Field>
				</Field.Label>
			</RadioGroup.Root>
		</Field.Set>
	</Field.Group>
</div>
