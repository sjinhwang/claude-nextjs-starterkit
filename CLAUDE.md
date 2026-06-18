# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 명령어

```bash
npm run dev        # 개발 서버 (Turbopack)
npm run build      # 프로덕션 빌드
npm run lint       # ESLint
npm run format     # Prettier 포맷 적용
npm run format:check  # Prettier 포맷 검사
```

테스트: Playwright가 설치되어 있으나 `playwright.config.ts`가 아직 없음. E2E 테스트 추가 시 설정 파일 먼저 생성 필요.

## 아키텍처

**App Router** 기반 (`src/app/`). `src/` 경로 별칭 `@/`로 접근.

### 레이아웃 계층

`layout.tsx` → `ThemeProvider` → `Header` + `<main>` + `Footer` 순으로 감싸짐. 모든 페이지는 이 구조를 상속.

### TailwindCSS v4

`tailwind.config.js` 없음. 디자인 토큰은 `src/app/globals.css`의 `@theme inline {}` 블록에서 CSS 변수로 관리. 색상은 OKLCH 형식 사용. 다크 모드는 `.dark` 클래스 기반 (`@custom-variant dark (&:is(.dark *))`).

### shadcn/ui 컴포넌트

`src/components/ui/`에 위치. **Radix UI가 아닌 `@base-ui/react`를 primitive로 사용**하므로 표준 shadcn 문서와 props가 다를 수 있음. 새 컴포넌트 추가 시 기존 컴포넌트 패턴 확인 필요.

### 다크 모드

`next-themes`의 `ThemeProvider`가 `attribute="class"`로 `<html>`에 `.dark` 클래스를 토글. `ThemeToggle` 컴포넌트가 전환 UI 담당.

### 타입 주의사항

`src/types/index.ts`의 `PageProps`에서 `params`와 `searchParams`가 `Promise` 타입:

```ts
// 페이지 컴포넌트에서 반드시 await 필요
export default async function Page({ params }: PageProps) {
  const { id } = await params;
}
```

### 환경 변수

`src/lib/constants.ts`에서 `NEXT_PUBLIC_APP_NAME`, `NEXT_PUBLIC_APP_URL` 참조. 변경 시 이 파일을 수정.
