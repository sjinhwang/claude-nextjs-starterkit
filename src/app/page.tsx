import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Layers, Palette, Shield } from "lucide-react";

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

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <Badge variant="secondary" className="mb-4">
          Starter Kit
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Next.js v15 스타터킷
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          TailwindCSS v4 + shadcn/ui + TypeScript로 웹 개발을 빠르게 시작하세요.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">
            시작하기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            문서 보기
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
