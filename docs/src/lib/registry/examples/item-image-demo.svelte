<script lang="ts">
	import * as Item from "$lib/registry/ui/item/index.js";

	const music = [
		{
			title: "한밤의 도시 불빛",
			artist: "네온 드림스",
			album: "일렉트릭 나이츠",
			duration: "3:45",
		},
		{
			title: "커피숍 대화",
			artist: "더 모닝 브루",
			album: "도시 이야기",
			duration: "4:05",
		},
		{
			title: "디지털 레인",
			artist: "사이버 심포니",
			album: "바이너리 비트",
			duration: "3:30",
		},
	];
</script>

<div class="flex w-full max-w-md flex-col gap-6">
	<div class="flex w-full max-w-md flex-col gap-4">
		{#each music as song (song)}
			<Item.Root variant="outline">
				{#snippet child({ props })}
					<a href="#/" {...props}>
						<Item.Media variant="image">
							<img
								src={`https://avatar.vercel.sh/${song.title}`}
								alt={song.title}
								width="32"
								height="32"
								class="size-8 rounded object-cover grayscale"
							/>
						</Item.Media>
						<Item.Content>
							<Item.Title class="line-clamp-1">
								{song.title} -
								<span class="text-muted-foreground">{song.album}</span>
							</Item.Title>
							<Item.Description>{song.artist}</Item.Description>
						</Item.Content>
						<Item.Content class="flex-none text-center">
							<Item.Description>{song.duration}</Item.Description>
						</Item.Content>
					</a>
				{/snippet}
			</Item.Root>
		{/each}
	</div>
</div>
