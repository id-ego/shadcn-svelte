<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
</script>

<Card.Root class="gap-2 py-4 shadow-none">
	<Card.Header class="px-4">
		<Card.Title class="text-sm">뉴스레터 구독</Card.Title>
		<Card.Description>사이드바에 대한 업데이트와 소식을 받아보세요.</Card.Description>
	</Card.Header>
	<Card.Content class="px-4">
		<form>
			<div class="grid gap-2.5">
				<Sidebar.Input type="email" placeholder="이메일" />
				<Button
					class="bg-sidebar-primary text-sidebar-primary-foreground w-full shadow-none"
					size="sm"
				>
					구독하기
				</Button>
			</div>
		</form>
	</Card.Content>
</Card.Root>
