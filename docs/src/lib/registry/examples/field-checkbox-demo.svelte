<script lang="ts">
	import * as Field from "$lib/registry/ui/field/index.js";
	import { Checkbox } from "$lib/registry/ui/checkbox/index.js";
</script>

<div class="w-full max-w-md">
	<Field.Group>
		<Field.Set>
			<Field.Legend variant="label">데스크톱에 표시할 항목</Field.Legend>
			<Field.Description>데스크톱에 표시할 항목을 선택하세요.</Field.Description>
			<Field.Group class="gap-3">
				<Field.Field orientation="horizontal">
					<Checkbox id="finder-pref-9k2-hard-disks-ljj" checked />
					<Field.Label for="finder-pref-9k2-hard-disks-ljj" class="font-normal">
						하드 디스크
					</Field.Label>
				</Field.Field>
				<Field.Field orientation="horizontal">
					<Checkbox id="finder-pref-9k2-external-disks-1yg" />
					<Field.Label for="finder-pref-9k2-external-disks-1yg" class="font-normal">
						외장 디스크
					</Field.Label>
				</Field.Field>
				<Field.Field orientation="horizontal">
					<Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
					<Field.Label for="finder-pref-9k2-cds-dvds-fzt" class="font-normal">
						CD, DVD 및 iPod
					</Field.Label>
				</Field.Field>
				<Field.Field orientation="horizontal">
					<Checkbox id="finder-pref-9k2-connected-servers-6l2" />
					<Field.Label for="finder-pref-9k2-connected-servers-6l2" class="font-normal">
						연결된 서버
					</Field.Label>
				</Field.Field>
			</Field.Group>
		</Field.Set>
		<Field.Separator />
		<Field.Field orientation="horizontal">
			<Checkbox id="finder-pref-9k2-sync-folders-nep" checked />
			<Field.Content>
				<Field.Label for="finder-pref-9k2-sync-folders-nep">
					데스크톱 및 문서 폴더 동기화
				</Field.Label>
				<Field.Description>
					데스크톱 및 문서 폴더가 iCloud Drive와 동기화됩니다. 다른 기기에서 액세스할 수 있습니다.
				</Field.Description>
			</Field.Content>
		</Field.Field>
	</Field.Group>
</div>
