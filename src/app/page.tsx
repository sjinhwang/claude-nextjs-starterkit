import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Layers, Palette, Shield, Zap, Code, Settings } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Next.js v15",
    description: "App Router + Turbopack으로 빠른 개발 경험. React Server Components 기본 지원.",
  },
  {
    icon: Palette,
    title: "TailwindCSS v4",
    description: "CSS-first 설정. tailwind.config 파일 없이 @theme 블록으로 디자인 토큰 관리.",
  },
  {
    icon: Shield,
    title: "shadcn/ui",
    description: "접근성 있는 Radix UI 기반 컴포넌트. 직접 소유하는 코드, lucide-react 아이콘 포함.",
  },
];

const benefits = [
  "다크/라이트 모드 자동 전환",
  "완전 반응형 레이아웃",
  "TypeScript 기본 지원",
  "ESLint & Prettier 설정",
  "즉시 배포 가능",
  "무료 오픈소스",
];

const tools = [
  {
    icon: Code,
    name: "React 19",
    description: "최신 버전의 React로 현대적인 개발",
  },
  {
    icon: Zap,
    name: "Turbopack",
    description: "번개 같이 빠른 빌드 성능",
  },
  {
    icon: Settings,
    name: "TypeScript",
    description: "타입 안정성과 개발 경험 향상",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4 inline-block">
            ⭐ 완전히 새로운 시작
          </Badge>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            Next.js v15 스타터킷
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            TailwindCSS v4 + shadcn/ui + TypeScript로 모던한 웹 개발을 빠르게 시작하세요.
            다크 모드, 반응형 레이아웃, 모든 것이 준비되어 있습니다.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg" className="gap-2">
              시작하기
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              문서 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">강력한 기능</h2>
            <p className="text-muted-foreground">
              모던 웹 개발에 필요한 모든 기술 스택이 통합되어 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-none bg-background">
                <CardHeader>
                  <feature.icon className="mb-4 h-10 w-10 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold">개발자 경험 최고</h2>
            <p className="mb-8 text-muted-foreground">
              설정이 최소화되고 개발에 집중할 수 있도록 모든 것이 미리 준비되어 있습니다.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border bg-muted/50 p-8">
            <div className="space-y-4 font-mono text-sm">
              <div>
                <span className="text-green-600 dark:text-green-400">$ npm install</span>
              </div>
              <div>
                <span className="text-green-600 dark:text-green-400">$ npm run dev</span>
              </div>
              <div className="text-muted-foreground">
                <span>➜ http://localhost:3000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="border-t bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">포함된 도구</h2>
            <p className="text-muted-foreground">
              최신 개발 도구로 효율적인 개발을 지원합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {tools.map((tool) => (
              <Card key={tool.name} className="border-none bg-background text-center">
                <CardHeader className="items-center">
                  <tool.icon className="mb-4 h-12 w-12 text-primary" />
                  <CardTitle>{tool.name}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">지금 시작하세요</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            설정 없이 바로 개발을 시작할 수 있는 완벽한 스타터킷입니다.
            필요한 모든 것이 미리 준비되어 있습니다.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              GitHub 보러가기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
