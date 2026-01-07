# 작업 규칙

## 한글화 작업

### 파일 종류별 한글화 대상

| 종류 | 경로 | 대상 | 상태 |
|------|------|------|------|
| 마크다운 문서 | `docs/content/**/*.md` | 본문 텍스트, 제목 | ⏳ |
| Svelte 컴포넌트 | `docs/src/**/*.svelte` | UI 텍스트, 버튼, 라벨 | ⏳ |
| 메타데이터 | `docs/src/routes/` | title, description | ⏳ |
| 정적 파일 | `docs/static/` | OG 이미지 텍스트 (선택) | ⏳ |

### 한글화 완료 파일

| 파일 | 완료일 | 비고 |
|------|--------|------|
| `README.md` | 2026-01-07 | 프로젝트 설명 |
| `LICENSE.md` | 2026-01-07 | 저작권 추가 |

### 한글화 제외 대상

| 종류 | 이유 |
|------|------|
| 코드 예제 | 원본 유지 (영어) |
| API 명세 | 원본 유지 |
| 파일명/폴더명 | URL 유지 |
| 컴포넌트 props | 기술 용어 |

---

## 사이트 설정 수정

### 수정 완료

| 파일 | 항목 | 값 |
|------|------|-----|
| `package.json` | name | `@id-ego/shadcn-svelte` |
| `package.json` | description | `shadcn-svelte 한글 문서` |
| `package.json` | author.name | `id-ego` |
| `package.json` | author.url | `https://github.com/id-ego` |
| `package.json` | repository.url | `https://github.com/id-ego/shadcn-svelte.git` |
| `docs/registry.json` | homepage | `https://shadcn-svelte.docsforall.com` |

### 수정 예정

| 파일 | 항목 | 현재 값 | 변경 값 |
|------|------|---------|---------|
| `docs/src/app.html` | title | (확인 필요) | shadcn-svelte 한글 문서 |
| `docs/src/app.html` | meta description | (확인 필요) | 한글 설명 |
| `docs/src/lib/config.ts` | (있다면) | (확인 필요) | 한글 설정 |

### 확인 필요

- [ ] 사이트 제목 위치 확인
- [ ] 네비게이션 텍스트 위치 확인
- [ ] 푸터 텍스트 위치 확인
- [ ] 검색 placeholder 위치 확인

---

## 번역 용어 통일

| 영어 | 한글 | 비고 |
|------|------|------|
| Component | 컴포넌트 | |
| Installation | 설치 | |
| Getting Started | 시작하기 | |
| Documentation | 문서 | |
| Dark Mode | 다크 모드 | |
| Theming | 테마 설정 | |
| CLI | CLI | 영어 유지 |
| Props | Props | 영어 유지 |

---

## 작업 순서

1. 사이트 설정 파일 확인 및 수정
2. 메인 페이지 한글화
3. 네비게이션/푸터 한글화
4. 문서 페이지 한글화 (우선순위순)
