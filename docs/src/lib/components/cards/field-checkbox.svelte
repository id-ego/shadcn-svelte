<script lang="ts">
	import { Checkbox } from "$lib/registry/ui/checkbox/index.js";
	import * as Field from "$lib/registry/ui/field/index.js";
</script>

<Field.Label for="checkbox-demo">
	<Field.Field orientation="horizontal">
		<Checkbox id="checkbox-demo" checked />
		<Field.Label for="checkbox-demo" class="line-clamp-1">
			이용약관에 동의합니다
		</Field.Label>
	</Field.Field>
</Field.Label>
