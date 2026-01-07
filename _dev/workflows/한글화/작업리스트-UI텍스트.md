# UI 텍스트 한글화 작업 리스트

## 개요

| 카테고리 | 파일 수 | 상태 |
| -------- | ------- | ---- |
| examples (컴포넌트 데모) | 228 | 대기 |
| blocks (블록 데모) | 33 | 대기 |
| 마크다운 코드 예제 | 54 | 대기 |

---

## 1. Blocks (블록 데모) - 33개

우선순위 높음: 화면에 표시되는 UI 텍스트와 Mock 데이터가 많음

### Dashboard

- [ ] dashboard-01

### Login

- [ ] login-01
- [ ] login-02
- [ ] login-03
- [ ] login-04
- [ ] login-05

### Signup

- [ ] signup-01
- [ ] signup-02
- [ ] signup-03
- [ ] signup-04
- [ ] signup-05

### OTP

- [ ] otp-01
- [ ] otp-02
- [ ] otp-03
- [ ] otp-04
- [ ] otp-05

### Sidebar

- [ ] sidebar-01
- [ ] sidebar-02
- [ ] sidebar-03
- [ ] sidebar-04
- [ ] sidebar-05
- [ ] sidebar-06
- [ ] sidebar-07
- [ ] sidebar-08
- [ ] sidebar-09
- [ ] sidebar-10
- [ ] sidebar-11
- [ ] sidebar-12
- [ ] sidebar-13
- [ ] sidebar-14
- [ ] sidebar-15
- [ ] sidebar-16

### Other

- [ ] new-components-01

---

## 2. Examples (컴포넌트 데모) - 228개

### 작업 방식

파일이 많으므로 컴포넌트별로 그룹화하여 작업

```
예: accordion-*.svelte (약 3개씩 그룹)
```

### 컴포넌트별 목록

- [ ] accordion-* (accordion-demo 등)
- [ ] alert-* (alert-demo 등)
- [ ] alert-dialog-*
- [ ] aspect-ratio-*
- [ ] avatar-*
- [ ] badge-*
- [ ] breadcrumb-*
- [ ] button-*
- [ ] calendar-*
- [ ] card-*
- [ ] carousel-*
- [ ] chart-*
- [ ] checkbox-*
- [ ] collapsible-*
- [ ] combobox-*
- [ ] command-*
- [ ] context-menu-*
- [ ] data-table-*
- [ ] date-picker-*
- [ ] dialog-*
- [ ] drawer-*
- [ ] dropdown-menu-*
- [ ] empty-*
- [ ] field-*
- [ ] form-*
- [ ] hover-card-*
- [ ] input-*
- [ ] input-group-*
- [ ] input-otp-*
- [ ] item-*
- [ ] kbd-*
- [ ] label-*
- [ ] menubar-*
- [ ] native-select-*
- [ ] navigation-menu-*
- [ ] pagination-*
- [ ] popover-*
- [ ] progress-*
- [ ] radio-group-*
- [ ] range-calendar-*
- [ ] resizable-*
- [ ] scroll-area-*
- [ ] select-*
- [ ] separator-*
- [ ] sheet-*
- [ ] sidebar-*
- [ ] skeleton-*
- [ ] slider-*
- [ ] sonner-*
- [ ] spinner-*
- [ ] switch-*
- [ ] table-*
- [ ] tabs-*
- [ ] textarea-*
- [ ] toggle-*
- [ ] toggle-group-*
- [ ] tooltip-*
- [ ] typography-*

---

## 3. 마크다운 코드 예제 - 54개

`docs/content/components/*.md` 파일 내 "## 사용법" 섹션의 코드 블록

### 작업 방식

각 컴포넌트 문서의 코드 예제 내 UI 텍스트 번역

- [ ] accordion.md
- [ ] alert.md
- [ ] alert-dialog.md
- [ ] (나머지 컴포넌트 문서...)

---

## 작업 순서 권장

1. **Blocks** 먼저 (사용자에게 가장 눈에 띄는 데모)
2. **Examples** (컴포넌트별로 진행)
3. **마크다운 코드 예제** (문서 내 코드 블록)

## 참고

- 번역 규칙: `_dev/workflows/한글화/규칙.md` 참조
- 사람 이름, 숫자, ID, 키 이름은 번역하지 않음
