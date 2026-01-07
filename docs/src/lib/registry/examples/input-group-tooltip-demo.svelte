<script lang="ts">
	import * as InputGroup from "$lib/registry/ui/input-group/index.js";
	import * as Tooltip from "$lib/registry/ui/tooltip/index.js";
	import HelpCircleIcon from "@lucide/svelte/icons/help-circle";
	import InfoIcon from "@lucide/svelte/icons/info";
</script>

<div class="grid w-full max-w-sm gap-4">
	<InputGroup.Root>
		<InputGroup.Input placeholder="비밀번호 입력" type="password" />
		<InputGroup.Addon align="inline-end">
			<Tooltip.Root>
				<Tooltip.Trigger>
					{#snippet child({ props })}
						<InputGroup.Button
							{...props}
							variant="ghost"
							aria-label="Info"
							size="icon-xs"
						>
							<InfoIcon />
						</InputGroup.Button>
					{/snippet}
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>비밀번호는 최소 8자 이상이어야 합니다</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</InputGroup.Addon>
	</InputGroup.Root>
	<InputGroup.Root>
		<InputGroup.Input placeholder="이메일 주소" />
		<InputGroup.Addon align="inline-end">
			<Tooltip.Root>
				<Tooltip.Trigger>
					{#snippet child({ props })}
						<InputGroup.Button
							{...props}
							variant="ghost"
							aria-label="Help"
							size="icon-xs"
						>
							<HelpCircleIcon />
						</InputGroup.Button>
					{/snippet}
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>알림을 보내는 데 사용됩니다</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</InputGroup.Addon>
	</InputGroup.Root>
	<InputGroup.Root>
		<InputGroup.Input placeholder="API 키 입력" />
		<Tooltip.Root>
			<Tooltip.Trigger>
				{#snippet child({ props })}
					<InputGroup.Addon>
						<InputGroup.Button
							{...props}
							variant="ghost"
							aria-label="Help"
							size="icon-xs"
						>
							<HelpCircleIcon />
						</InputGroup.Button>
					</InputGroup.Addon>
				{/snippet}
			</Tooltip.Trigger>
			<Tooltip.Content side="left">
				<p>API 키 관련 도움말 보기</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</InputGroup.Root>
</div>
