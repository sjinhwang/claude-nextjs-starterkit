# Next.js v15 스타터킷

Next.js v15 + TailwindCSS v4 + shadcn/ui + TypeScript로 구성된 웹 개발 스타터킷입니다.

## 기술 스택

| 기술 | 버전 | 설명 |
|---|---|---|
| [Next.js](https://nextjs.org) | v16 (v15 계열) | App Router + Turbopack |
| [TypeScript](https://www.typescriptlang.org) | v5 | 정적 타입 |
| [TailwindCSS](https://tailwindcss.com) | v4 | CSS-first 설정, `tailwind.config` 없음 |
| [shadcn/ui](https://ui.shadcn.com) | latest | Base UI 기반 컴포넌트 |
| [lucide-react](https://lucide.dev) | latest | 아이콘 라이브러리 |

## 빠른 시작

```bash
# 저장소 클론
git clone https://github.com/sjinhwang/claude-nextjs-starterkit.git
cd claude-nextjs-starterkit

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env.local

# 개발 서버 실행
npm run dev
```

`http://localhost:3000`에서 확인하세요.

## 프로젝트 구조

```
src/
├── app/
│   ├── globals.css         # TailwindCSS v4 (@import "tailwindcss")
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 홈 페이지
├── components/
│   ├── ui/                 # shadcn/ui 컴포넌트
│   └── layout/
│       ├── header.tsx      # 헤더
│       └── footer.tsx      # 푸터
├── lib/
│   ├── utils.ts            # cn() 유틸리티
│   └── constants.ts        # 앱 전역 상수
├── hooks/                  # 커스텀 훅
└── types/
    └── index.ts            # 공통 타입 정의
```

## 주요 명령어

```bash
npm run dev      # 개발 서버 실행 (Turbopack)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add [컴포넌트명]

# 예시
npx shadcn@latest add dialog
npx shadcn@latest add table
npx shadcn@latest add form
```

## TailwindCSS v4 커스텀 테마

`tailwind.config` 파일 없이 `src/app/globals.css`의 `@theme` 블록에서 디자인 토큰을 관리합니다.

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  --color-brand: oklch(0.6 0.2 250);  /* 커스텀 색상 추가 예시 */
}
```

## 환경 변수

`.env.example`을 복사해 `.env.local`을 만들고 값을 채워주세요.

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=MyApp
```

## 라이선스

MIT
