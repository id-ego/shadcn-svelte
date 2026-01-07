<script lang="ts">
	import * as Accordion from "$lib/registry/ui/accordion/index.js";
</script>

<Accordion.Root type="single" class="w-full sm:max-w-[70%]" value="item-1">
	<Accordion.Item value="item-1">
		<Accordion.Trigger>제품 정보</Accordion.Trigger>
		<Accordion.Content class="flex flex-col gap-4 text-balance">
			<p>
				당사의 주력 제품은 최첨단 기술과 세련된 디자인을 결합했습니다. 프리미엄 소재로 제작되어 탁월한 성능과 신뢰성을 제공합니다.
			</p>
			<p>
				주요 기능에는 고급 처리 기능과 초보자와 전문가 모두를 위해 설계된 직관적인 사용자 인터페이스가 포함됩니다.
			</p>
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-2">
		<Accordion.Trigger>배송 정보</Accordion.Trigger>
		<Accordion.Content class="flex flex-col gap-4 text-balance">
			<p>
				신뢰할 수 있는 택배 파트너를 통해 전 세계로 배송합니다. 표준 배송은 영업일 기준 3-5일이 소요되며, 빠른 배송은 영업일 기준 1-2일 이내에 배송을 보장합니다.
			</p>
			<p>
				모든 주문은 세심하게 포장되며 완전히 보험에 가입됩니다. 전용 추적 포털을 통해 실시간으로 배송을 추적하세요.
			</p>
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-3">
		<Accordion.Trigger>반품 정책</Accordion.Trigger>
		<Accordion.Content class="flex flex-col gap-4 text-balance">
			<p>
				당사는 포괄적인 30일 반품 정책으로 제품을 보증합니다. 완전히 만족하지 못하신 경우, 원래 상태로 제품을 반품하시면 됩니다.
			</p>
			<p>
				번거로움 없는 반품 프로세스에는 무료 반품 배송과 반품 제품 수령 후 48시간 이내에 처리되는 전액 환불이 포함됩니다.
			</p>
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
