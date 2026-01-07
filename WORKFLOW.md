# shadcn-svelte 한글화 프로젝트 워크플로우

## 개요

이 문서는 [huntabyte/shadcn-svelte](https://github.com/huntabyte/shadcn-svelte) 원본 저장소를 Fork하여 한글화 문서 사이트를 운영하는 워크플로우를 설명합니다.

## 저장소 구조

```
huntabyte/shadcn-svelte (upstream)     ← 원본 저장소
         │
         │ Fork
         ▼
id-ego/shadcn-svelte (origin)          ← 내 저장소 (한글화)
         │
         │ Clone
         ▼
로컬 PC                                 ← 작업 환경
```

## 브랜치 전략

| 브랜치 | 용도 |
|--------|------|
| `main` | 한글화 버전 (배포 대상) |
| `upstream/main` | 원본 참조용 (동기화 소스) |

## 초기 설정

### 1. GitHub에서 Fork

1. [huntabyte/shadcn-svelte](https://github.com/huntabyte/shadcn-svelte) 접속
2. **Fork** 버튼 클릭
3. 설정:
   - Repository name: `shadcn-svelte` (또는 `shadcn-svelte-ko`)
   - Description: `shadcn-svelte 한글 문서`

### 2. 로컬 Clone

```bash
git clone https://github.com/YOUR_USERNAME/shadcn-svelte.git
cd shadcn-svelte
```

### 3. Upstream 원격 저장소 추가

```bash
git remote add upstream https://github.com/huntabyte/shadcn-svelte.git
```

### 4. 확인

```bash
git remote -v
# origin    https://github.com/YOUR_USERNAME/shadcn-svelte.git (fetch)
# origin    https://github.com/YOUR_USERNAME/shadcn-svelte.git (push)
# upstream  https://github.com/huntabyte/shadcn-svelte.git (fetch)
# upstream  https://github.com/huntabyte/shadcn-svelte.git (push)
```

## Git 동기화 워크플로우

### 원본 업데이트 확인 및 반영

```bash
# 1. 원본 변경사항 다운로드 (내 코드에 영향 없음)
git fetch upstream

# 2. 새 커밋 있는지 확인
git log main..upstream/main --oneline

# 3. 새 커밋이 있으면 병합
git merge upstream/main

# 4. 내 저장소에 push
git push origin main
```

### Git 명령어 설명

| 명령어 | 역할 |
|--------|------|
| `git fetch upstream` | 원본 변경사항 다운로드 (내 코드 안 건드림) |
| `git log main..upstream/main` | upstream에만 있는 새 커밋 확인 |
| `git log upstream/main..main` | 내가 추가한 커밋 확인 |
| `git merge upstream/main` | 원본 변경사항을 내 코드에 합침 |

### Merge 동작 방식

Git은 **변경된 부분만 자동으로 합칩니다**:

| 파일 상태 | upstream | 나 | 결과 |
|-----------|----------|-----|------|
| LICENSE.md | 안 건드림 | 수정함 | **내 버전 유지** |
| README.md | 안 건드림 | 안 건드림 | 그대로 |
| docs/intro.md | 수정함 | 안 건드림 | **upstream 반영** |
| docs/guide.md | 수정함 | 수정함 (번역) | **충돌 발생** |

### 충돌 해결

같은 파일의 같은 부분을 둘 다 수정했을 때 충돌 발생:

```markdown
<<<<<<< HEAD
내 버전 (한글 번역)
=======
원본 버전 (새 내용)
>>>>>>> upstream/main
```

해결 방법:
1. 파일을 직접 편집하여 원하는 형태로 수정
2. `<<<`, `===`, `>>>` 마커 삭제
3. 저장 후:

```bash
git add <충돌파일>
git commit -m "merge: upstream 동기화, 충돌 해결"
```

## 라이선스

MIT 라이선스 - 상업적 사용, 광고 수익 가능

**조건**: LICENSE 파일에 원저작자 표시 유지

```
Copyright (c) 2026 id-ego <https://github.com/id-ego>
Copyright (c) 2023 Hunter Johnston <https://github.com/huntabyte>
Copyright (c) 2023 CokaKoala <https://github.com/adriangonz97>
Copyright (c) 2023 shadcn
```

## 한글화 작업 전 설정 체크리스트

### 1. GitHub Workflows 정리 ✅ 완료

**위치**: `.github/workflows/`

#### 유지된 워크플로우

| 파일 | 용도 | 비고 |
|------|------|------|
| `ci.yml` | 테스트, 린트 | `cli-test` job 삭제됨 |
| `autoformat.yml` | PR에서 `/format` 코멘트 시 자동 포맷팅 | |
| `deploy-prod.yml` | main 브랜치 Cloudflare 배포 | Secrets 설정 필요 |
| `deploy-preview.yml` | PR 미리보기 배포 | `projectName` 수정 필요 |
| `build-preview.yml` | PR 미리보기 빌드 | |

#### 삭제된 워크플로우

| 파일 | 이유 |
|------|------|
| `release.yml` | npm 패키지 배포 안 함 |
| `deploy-svelte-4.yml` | Svelte 4 버전 운영 안 함 |
| `deploy-tailwind-3.yml` | Tailwind 3 버전 운영 안 함 |
| `pr-guard.yml` | 외부 저장소 의존, 불필요 |
| `reproduire.yml` | 원본 프로젝트 이슈 관리용 |
| `reproduire-close.yml` | 원본 프로젝트 이슈 관리용 |

#### 추가된 워크플로우

| 파일 | 용도 | 실행 시점 |
|------|------|-----------|
| `sync-upstream.yml` | 원본 저장소 동기화 자동화 | 매주 월요일 9시(UTC) 또는 수동 |

**동작 방식**:

1. upstream fetch → 새 커밋 확인
2. 충돌 없음 → PR 자동 생성
3. 충돌 있음 → Issue 자동 생성 (수동 해결 필요)

#### 배포 관련 설정 필요 사항

GitHub 저장소 Settings → Secrets에 추가:
- `CF_API_TOKEN` - Cloudflare API 토큰
- `CF_ACCOUNT_ID` - Cloudflare 계정 ID

수정 필요 파일:
- `docs/wrangler.jsonc` → `"name"` 변경
- `.github/workflows/deploy-preview.yml` → `projectName` 변경

### 2. package.json 수정 ✅ 완료

**루트 `/package.json`**:

| 항목 | 변경 전 | 변경 후 |
|------|---------|---------|
| name | `@shadcn-svelte/monorepo` | `@id-ego/shadcn-svelte` |
| description | `monorepo for shadcn-svelte` | `shadcn-svelte 한글 문서` |
| author.name | `huntabyte` | `id-ego` |
| author.url | `https://twitter.com/huntabyte` | `https://github.com/id-ego` |
| repository.url | `huntabyte/shadcn-svelte` | `id-ego/shadcn-svelte` |

### 3. docs/registry.json 수정

```json
{
  "name": "shadcn-svelte",           // 변경 검토
  "homepage": "https://shadcn-svelte.com"  // 변경 필요 (배포 URL)
}
```

### 4. 배포 설정

**현재 설정**: Cloudflare Pages (`docs/wrangler.jsonc`)

**선택지**:
- Cloudflare Pages 유지 → `wrangler.jsonc` 수정
- Vercel로 변경 → Cloudflare 설정 삭제, Vercel 연결

### 5. 삭제 대상 폴더/파일

| 경로 | 이유 |
|------|------|
| `packages/cli/` | CLI 배포 안 함 (문서만 운영) |
| `packages/registry/` | CLI 의존성 |
| `registry-template/` | 템플릿 필요 없음 |
| `repro/` | 재현 테스트용 |
| `.changeset/` | npm 버전 관리용 |

> **주의**: CLI 패키지 삭제 시 빌드 스크립트 수정 필요

### 6. README.md 수정 ✅ 완료

- 한글 프로젝트 설명 추가
- 원본 저장소 링크 및 크레딧 표시
- 기여 방법 (번역 기여)
- 라이선스 및 원저작자 표시

### 7. 기타 설정 파일

| 파일 | 확인 사항 |
|------|-----------|
| `docs/svelte.config.js` | 기본 유지 |
| `docs/vite.config.ts` | 기본 유지 |
| `docs/velite.config.js` | 기본 유지 |
| `.prettierrc` | 기본 유지 |
| `eslint.config.js` | 기본 유지 |

---

## 작업 순서

### Phase 1: 저장소 정리

- [x] 불필요한 GitHub Workflows 삭제
- [x] upstream 동기화 워크플로우 추가
- [x] package.json 정보 수정
- [x] README.md 한글화 프로젝트 설명 추가

### Phase 2: 배포 설정
- [ ] 배포 플랫폼 선택 (Vercel/Cloudflare)
- [ ] 배포 설정 및 테스트
- [ ] 도메인 연결 (선택)

### Phase 3: 한글화 작업
- [ ] docs/content/ 문서 번역
- [ ] UI 텍스트 번역 (있다면)

### Phase 4: 자동화
- [ ] 원본 동기화 워크플로우 테스트
- [ ] 자동 배포 확인
