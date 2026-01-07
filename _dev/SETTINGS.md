# 수정해야 할 설정들

## 완료된 설정 ✅

### 루트 설정

| 파일 | 항목 | 변경 내용 |
|------|------|-----------|
| `package.json` | name | `@id-ego/shadcn-svelte` |
| `package.json` | description | `shadcn-svelte 한글 문서` |
| `package.json` | author | `id-ego` |
| `package.json` | repository.url | `id-ego/shadcn-svelte` |
| `LICENSE.md` | copyright | id-ego 추가 |
| `README.md` | 전체 | 한글화 프로젝트 설명 |

### 배포 설정

| 파일 | 항목 | 변경 내용 |
|------|------|-----------|
| `docs/registry.json` | homepage | `https://shadcn-svelte.docsforall.com` |
| GitHub Secrets | CF_API_TOKEN | 설정 완료 |
| GitHub Secrets | CF_ACCOUNT_ID | 설정 완료 |

---

## 확인 필요한 설정 ⚠️

### 사이트 메타데이터

| 파일 | 확인 사항 |
|------|-----------|
| `docs/src/app.html` | title, meta description |
| `docs/src/routes/+layout.svelte` | 사이트 제목, 설명 |
| `docs/static/` | favicon, OG 이미지 |

### SEO 관련

| 파일 | 확인 사항 |
|------|-----------|
| `docs/src/routes/+layout.ts` | 기본 메타 태그 |
| `docs/static/robots.txt` | 검색엔진 설정 |
| `docs/static/sitemap.xml` | 사이트맵 (자동 생성 여부 확인) |

### 외부 서비스

| 서비스 | 확인 사항 |
|--------|-----------|
| Google Analytics | 추가 여부 결정 |
| Google Search Console | 등록 여부 결정 |

---

## 수정 불필요 (기본 유지)

| 파일 | 이유 |
|------|------|
| `docs/svelte.config.js` | 빌드 설정 동일 |
| `docs/vite.config.ts` | 빌드 설정 동일 |
| `docs/velite.config.js` | 컨텐츠 처리 동일 |
| `docs/wrangler.jsonc` | Cloudflare 설정 동일 |
| `.prettierrc` | 코드 스타일 동일 |
| `eslint.config.js` | 린트 규칙 동일 |
