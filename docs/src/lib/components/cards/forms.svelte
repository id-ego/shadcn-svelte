<script lang="ts">
	import * as Card from "$lib/registry/ui/card/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import { Checkbox } from "$lib/registry/ui/checkbox/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import * as RadioGroup from "$lib/registry/ui/radio-group/index.js";
	import { Textarea } from "$lib/registry/ui/textarea/index.js";

	const plans = [
		{
			id: "starter",
			name: "스타터 플랜",
			description: "소규모 비즈니스용",
			price: "$10",
		},
		{
			id: "pro",
			name: "프로 플랜",
			description: "더 많은 기능과 저장공간",
			price: "$20",
		},
	] as const;

	const id = $props.id();
</script>

<Card.Root>
	<Card.Header>
		<Card.Title class="text-lg">구독 업그레이드</Card.Title>
		<Card.Description class="text-balance">
			현재 무료 플랜을 사용 중입니다. 프로 플랜으로 업그레이드하여 모든 기능을 이용하세요.
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<Field.Group>
				<Field.Group class="grid grid-cols-2">
					<Field.Field>
						<Field.Label for="name-{id}">이름</Field.Label>
						<Input id="name-{id}" placeholder="Max Leiter" />
					</Field.Field>
					<Field.Field>
						<Field.Label for="email-{id}">이메일</Field.Label>
						<Input id="email-{id}" placeholder="mail@acme.com" />
					</Field.Field>
				</Field.Group>
				<Field.Group class="grid grid-cols-2 gap-3 md:grid-cols-[1fr_80px_60px]">
					<Field.Field>
						<Field.Label for="card-number-{id}">카드 번호</Field.Label>
						<Input
							id="card-number-{id}"
							placeholder="1234 1234 1234 1234"
							class="col-span-2 md:col-span-1"
						/>
					</Field.Field>
					<Field.Field>
						<Field.Label for="card-number-expiry-{id}">만료일</Field.Label>
						<Input id="card-number-expiry-{id}" placeholder="MM/YY" />
					</Field.Field>
					<Field.Field>
						<Field.Label for="card-number-cvc-{id}">CVC</Field.Label>
						<Input id="card-number-cvc-{id}" placeholder="CVC" />
					</Field.Field>
				</Field.Group>
				<Field.Set>
					<Field.Legend>플랜</Field.Legend>
					<Field.Description>필요에 가장 적합한 플랜을 선택하세요.</Field.Description
					>
					<RadioGroup.Root value="starter" class="grid grid-cols-2 gap-2">
						{#each plans as plan (plan.id)}
							<Field.Label>
								<Field.Field orientation="horizontal">
									<Field.Content>
										<Field.Title>{plan.name}</Field.Title>
										<Field.Description class="text-xs">
											{plan.description}
										</Field.Description>
									</Field.Content>
									<RadioGroup.Item value={plan.id} id={plan.name} />
								</Field.Field>
							</Field.Label>
						{/each}
					</RadioGroup.Root>
				</Field.Set>
				<Field.Field>
					<Field.Label for="notes">메모</Field.Label>
					<Textarea id="notes" placeholder="메모를 입력하세요" />
				</Field.Field>
				<Field.Field>
					<Field.Field orientation="horizontal">
						<Checkbox id="terms" />
						<Field.Label for="terms" class="font-normal">
							이용약관에 동의합니다
						</Field.Label>
					</Field.Field>
					<Field.Field orientation="horizontal">
						<Checkbox id="newsletter" checked />
						<Field.Label for="newsletter" class="font-normal">
							이메일 수신을 허용합니다
						</Field.Label>
					</Field.Field>
				</Field.Field>
				<Field.Field orientation="horizontal">
					<Button variant="outline" size="sm">취소</Button>
					<Button size="sm">플랜 업그레이드</Button>
				</Field.Field>
			</Field.Group>
		</form>
	</Card.Content>
</Card.Root>
