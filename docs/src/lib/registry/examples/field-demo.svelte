<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import { Checkbox } from "$lib/registry/ui/checkbox/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import * as Select from "$lib/registry/ui/select/index.js";
	import { Textarea } from "$lib/registry/ui/textarea/index.js";

	let month = $state<string>();
	let year = $state<string>();
</script>

<div class="w-full max-w-md">
	<form>
		<Field.Group>
			<Field.Set>
				<Field.Legend>결제 수단</Field.Legend>
				<Field.Description>모든 거래는 안전하게 암호화됩니다</Field.Description>
				<Field.Group>
					<Field.Field>
						<Field.Label for="checkout-7j9-card-name-43j">카드 소유자 이름</Field.Label>
						<Input id="checkout-7j9-card-name-43j" placeholder="홍길동" required />
					</Field.Field>
					<div class="grid grid-cols-3 gap-4">
						<Field.Field class="col-span-2">
							<Field.Label for="checkout-7j9-card-number-uw1">
								카드 번호
							</Field.Label>
							<Input
								id="checkout-7j9-card-number-uw1"
								placeholder="1234 5678 9012 3456"
								required
							/>
							<Field.Description>16자리 번호를 입력하세요.</Field.Description>
						</Field.Field>
						<Field.Field class="col-span-1">
							<Field.Label for="checkout-7j9-cvv">CVV</Field.Label>
							<Input id="checkout-7j9-cvv" placeholder="123" required />
						</Field.Field>
					</div>
					<div class="grid grid-cols-2 gap-4">
						<Field.Field>
							<Field.Label for="checkout-7j9-exp-month-ts6">월</Field.Label>
							<Select.Root type="single" bind:value={month}>
								<Select.Trigger id="checkout-7j9-exp-month-ts6">
									<span>
										{month || "MM"}
									</span>
								</Select.Trigger>
								<Select.Content>
									<Select.Item value="01">01</Select.Item>
									<Select.Item value="02">02</Select.Item>
									<Select.Item value="03">03</Select.Item>
									<Select.Item value="04">04</Select.Item>
									<Select.Item value="05">05</Select.Item>
									<Select.Item value="06">06</Select.Item>
									<Select.Item value="07">07</Select.Item>
									<Select.Item value="08">08</Select.Item>
									<Select.Item value="09">09</Select.Item>
									<Select.Item value="10">10</Select.Item>
									<Select.Item value="11">11</Select.Item>
									<Select.Item value="12">12</Select.Item>
								</Select.Content>
							</Select.Root>
						</Field.Field>
						<Field.Field>
							<Field.Label for="checkout-7j9-exp-year-f59">연도</Field.Label>
							<Select.Root type="single" bind:value={year}>
								<Select.Trigger id="checkout-7j9-exp-year-f59">
									<span>
										{year || "YYYY"}
									</span>
								</Select.Trigger>
								<Select.Content>
									<Select.Item value="2024">2024</Select.Item>
									<Select.Item value="2025">2025</Select.Item>
									<Select.Item value="2026">2026</Select.Item>
									<Select.Item value="2027">2027</Select.Item>
									<Select.Item value="2028">2028</Select.Item>
									<Select.Item value="2029">2029</Select.Item>
								</Select.Content>
							</Select.Root>
						</Field.Field>
					</div>
				</Field.Group>
			</Field.Set>
			<Field.Separator />
			<Field.Set>
				<Field.Legend>청구 주소</Field.Legend>
				<Field.Description>
					결제 수단과 연결된 청구 주소
				</Field.Description>
				<Field.Group>
					<Field.Field orientation="horizontal">
						<Checkbox id="checkout-7j9-same-as-shipping-wgm" checked={true} />
						<Field.Label for="checkout-7j9-same-as-shipping-wgm" class="font-normal">
							배송 주소와 동일
						</Field.Label>
					</Field.Field>
				</Field.Group>
			</Field.Set>
			<Field.Separator />
			<Field.Set>
				<Field.Group>
					<Field.Field>
						<Field.Label for="checkout-7j9-optional-comments">코멘트</Field.Label>
						<Textarea
							id="checkout-7j9-optional-comments"
							placeholder="추가 코멘트를 입력하세요"
							class="resize-none"
						/>
					</Field.Field>
				</Field.Group>
			</Field.Set>
			<Field.Field orientation="horizontal">
				<Button type="submit">제출</Button>
				<Button variant="outline" type="button">취소</Button>
			</Field.Field>
		</Field.Group>
	</form>
</div>
