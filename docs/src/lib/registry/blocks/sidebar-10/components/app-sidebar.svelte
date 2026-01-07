<script lang="ts" module>
	import AudioWaveformIcon from "@lucide/svelte/icons/audio-waveform";
	import BlocksIcon from "@lucide/svelte/icons/blocks";
	import CalendarIcon from "@lucide/svelte/icons/calendar";
	import CommandIcon from "@lucide/svelte/icons/command";
	import HouseIcon from "@lucide/svelte/icons/house";
	import InboxIcon from "@lucide/svelte/icons/inbox";
	import MessageCircleQuestionIcon from "@lucide/svelte/icons/message-circle-question";
	import SearchIcon from "@lucide/svelte/icons/search";
	import Settings2Icon from "@lucide/svelte/icons/settings-2";
	import SparklesIcon from "@lucide/svelte/icons/sparkles";
	import Trash2Icon from "@lucide/svelte/icons/trash-2";
	// This is sample data.
	const data = {
		teams: [
			{
				name: "Acme Inc",
				logo: CommandIcon,
				plan: "Enterprise",
			},
			{
				name: "Acme Corp.",
				logo: AudioWaveformIcon,
				plan: "Startup",
			},
			{
				name: "Evil Corp.",
				logo: CommandIcon,
				plan: "Free",
			},
		],
		navMain: [
			{
				title: "검색",
				url: "#",
				icon: SearchIcon,
			},
			{
				title: "AI에게 물어보기",
				url: "#",
				icon: SparklesIcon,
			},
			{
				title: "홈",
				url: "#",
				icon: HouseIcon,
				isActive: true,
			},
			{
				title: "받은편지함",
				url: "#",
				icon: InboxIcon,
				badge: "10",
			},
		],
		navSecondary: [
			{
				title: "캘린더",
				url: "#",
				icon: CalendarIcon,
			},
			{
				title: "설정",
				url: "#",
				icon: Settings2Icon,
			},
			{
				title: "템플릿",
				url: "#",
				icon: BlocksIcon,
			},
			{
				title: "휴지통",
				url: "#",
				icon: Trash2Icon,
			},
			{
				title: "도움말",
				url: "#",
				icon: MessageCircleQuestionIcon,
			},
		],
		favorites: [
			{
				name: "프로젝트 관리 및 작업 추적",
				url: "#",
				emoji: "📊",
			},
			{
				name: "가족 레시피 모음 및 식단 계획",
				url: "#",
				emoji: "🍳",
			},
			{
				name: "피트니스 트래커 및 운동 루틴",
				url: "#",
				emoji: "💪",
			},
			{
				name: "독서 노트 및 읽을 책 목록",
				url: "#",
				emoji: "📚",
			},
			{
				name: "지속가능한 정원 가꾸기 팁 및 식물 관리",
				url: "#",
				emoji: "🌱",
			},
			{
				name: "언어 학습 진행 상황 및 자료",
				url: "#",
				emoji: "🗣️",
			},
			{
				name: "집 리모델링 아이디어 및 예산 추적",
				url: "#",
				emoji: "🏠",
			},
			{
				name: "개인 재무 및 투자 포트폴리오",
				url: "#",
				emoji: "💰",
			},
			{
				name: "영화 및 TV 프로그램 시청 목록과 리뷰",
				url: "#",
				emoji: "🎬",
			},
			{
				name: "일일 습관 추적 및 목표 설정",
				url: "#",
				emoji: "✅",
			},
		],
		workspaces: [
			{
				name: "개인 생활 관리",
				emoji: "🏠",
				pages: [
					{
						name: "일일 저널 및 회고",
						url: "#",
						emoji: "📔",
					},
					{
						name: "건강 및 웰빙 트래커",
						url: "#",
						emoji: "🍏",
					},
					{
						name: "자기계발 및 학습 목표",
						url: "#",
						emoji: "🌟",
					},
				],
			},
			{
				name: "전문성 개발",
				emoji: "💼",
				pages: [
					{
						name: "경력 목표 및 이정표",
						url: "#",
						emoji: "🎯",
					},
					{
						name: "기술 습득 및 교육 기록",
						url: "#",
						emoji: "🧠",
					},
					{
						name: "네트워킹 연락처 및 이벤트",
						url: "#",
						emoji: "🤝",
					},
				],
			},
			{
				name: "창작 프로젝트",
				emoji: "🎨",
				pages: [
					{
						name: "글쓰기 아이디어 및 스토리 개요",
						url: "#",
						emoji: "✍️",
					},
					{
						name: "아트 및 디자인 포트폴리오",
						url: "#",
						emoji: "🖼️",
					},
					{
						name: "음악 작곡 및 연습 기록",
						url: "#",
						emoji: "🎵",
					},
				],
			},
			{
				name: "가정 관리",
				emoji: "🏡",
				pages: [
					{
						name: "가계 예산 및 지출 추적",
						url: "#",
						emoji: "💰",
					},
					{
						name: "집 유지보수 일정 및 작업",
						url: "#",
						emoji: "🔧",
					},
					{
						name: "가족 캘린더 및 이벤트 계획",
						url: "#",
						emoji: "📅",
					},
				],
			},
			{
				name: "여행 및 모험",
				emoji: "🧳",
				pages: [
					{
						name: "여행 계획 및 일정",
						url: "#",
						emoji: "🗺️",
					},
					{
						name: "여행 버킷리스트 및 영감",
						url: "#",
						emoji: "🌎",
					},
					{
						name: "여행 저널 및 사진 갤러리",
						url: "#",
						emoji: "📸",
					},
				],
			},
		],
	};
</script>

<script lang="ts">
	import NavFavorites from "./nav-favorites.svelte";
	import NavMain from "./nav-main.svelte";
	import NavSecondary from "./nav-secondary.svelte";
	import NavWorkspaces from "./nav-workspaces.svelte";
	import TeamSwitcher from "./team-switcher.svelte";
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref class="border-e-0" {...restProps}>
	<Sidebar.Header>
		<TeamSwitcher teams={data.teams} />
		<NavMain items={data.navMain} />
	</Sidebar.Header>
	<Sidebar.Content>
		<NavFavorites favorites={data.favorites} />
		<NavWorkspaces workspaces={data.workspaces} />
		<NavSecondary items={data.navSecondary} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
