<script lang="ts">
	import * as Tabs from "$lib/registry/ui/tabs/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
</script>

<div class="-mb-4 flex w-full max-w-sm flex-col gap-6">
	<Tabs.Root value="account">
		<Tabs.List>
			<Tabs.Trigger value="account">계정</Tabs.Trigger>
			<Tabs.Trigger value="password">비밀번호</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="account">
			<Card.Root>
				<Card.Header>
					<Card.Title>계정</Card.Title>
					<Card.Description>
						계정 정보를 여기에서 변경할 수 있습니다. 완료되면 저장을 클릭하세요.
					</Card.Description>
				</Card.Header>
				<Card.Content class="grid gap-6">
					<div class="grid gap-3">
						<Label for="tabs-demo-name">이름</Label>
						<Input id="tabs-demo-name" value="Pedro Duarte" />
					</div>
					<div class="grid gap-3">
						<Label for="tabs-demo-username">사용자명</Label>
						<Input id="tabs-demo-username" value="@peduarte" />
					</div>
				</Card.Content>
				<Card.Footer>
					<Button>변경사항 저장</Button>
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
		<Tabs.Content value="password">
			<Card.Root>
				<Card.Header>
					<Card.Title>비밀번호</Card.Title>
					<Card.Description>
						비밀번호를 여기에서 변경할 수 있습니다. 저장 후 로그아웃됩니다.
					</Card.Description>
				</Card.Header>
				<Card.Content class="grid gap-6">
					<div class="grid gap-3">
						<Label for="tabs-demo-current">현재 비밀번호</Label>
						<Input id="tabs-demo-current" type="password" />
					</div>
					<div class="grid gap-3">
						<Label for="tabs-demo-new">새 비밀번호</Label>
						<Input id="tabs-demo-new" type="password" />
					</div>
				</Card.Content>
				<Card.Footer>
					<Button>비밀번호 저장</Button>
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
	</Tabs.Root>
</div>
