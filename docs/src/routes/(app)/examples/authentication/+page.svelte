<script lang="ts">
	import UserAuthForm from "./(components)/user-auth-form.svelte";
	import { Button } from "$lib/registry/ui/button/index.js";
	import Metadata from "$lib/components/metadata.svelte";

	const title = "인증";
	const description = "컴포넌트를 사용하여 구축된 인증 폼입니다.";
</script>

<Metadata
	{title}
	{description}
	ogImage={{
		url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
	}}
/>

<div class="md:hidden">
	<img
		src="/img/examples/authentication-light.png"
		alt="Authentication"
		class="block dark:hidden"
	/>
	<img
		src="/img/examples/authentication-dark.png"
		alt="Authentication"
		class="hidden dark:block"
	/>
</div>

<div
	class="relative container hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<Button
		href="/examples/authentication"
		variant="ghost"
		class="absolute end-4 top-4 md:end-8 md:top-8"
	>
		로그인
	</Button>
	<div class="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-e">
		<div class="absolute inset-0 bg-zinc-900"></div>
		<div class="relative z-20 flex items-center text-lg font-medium">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="me-2 h-6 w-6"
			>
				<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
			</svg>
			Acme Inc
		</div>
		<div class="relative z-20 mt-auto">
			<blockquote class="space-y-2">
				<p class="text-lg">
					&ldquo;이 라이브러리는 수많은 작업 시간을 절약해 주었고, 그 어느 때보다 빠르게 고객에게 멋진 디자인을 제공할 수 있도록 도와주었습니다.&rdquo;
				</p>
				<footer class="text-sm">Sofia Davis</footer>
			</blockquote>
		</div>
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">계정 만들기</h1>
				<p class="text-muted-foreground text-sm">
					계정을 만들려면 아래에 이메일을 입력하세요
				</p>
			</div>
			<UserAuthForm />
			<p class="text-muted-foreground px-8 text-center text-sm">
				계속하기를 클릭하면
				<a href="/terms" class="hover:text-primary underline underline-offset-4">
					이용 약관
				</a>
				및
				<a href="/privacy" class="hover:text-primary underline underline-offset-4">
					개인정보 처리방침
				</a>에 동의하는 것입니다.
			</p>
		</div>
	</div>
</div>
