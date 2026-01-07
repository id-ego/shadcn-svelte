<script lang="ts">
	import * as Field from "$lib/registry/ui/field/index.js";
	import { Textarea } from "$lib/registry/ui/textarea/index.js";
</script>

<div class="w-full max-w-md">
	<Field.Set>
		<Field.Group>
			<Field.Field>
				<Field.Label for="feedback">피드백</Field.Label>
				<Textarea id="feedback" placeholder="여러분의 피드백은 개선에 도움이 됩니다..." rows={4} />
				<Field.Description>서비스에 대한 의견을 공유해 주세요.</Field.Description>
			</Field.Field>
		</Field.Group>
	</Field.Set>
</div>
