import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { APP_NAME } from "@/lib/constants";
import { Code, Mail, Users } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-8">
          {/* 브랜드 섹션 */}
          <div>
            <h3 className="mb-4 font-bold">{APP_NAME}</h3>
            <p className="text-sm text-muted-foreground">
              Next.js v15 기반 스타터킷으로 빠르게 웹 프로젝트를 시작하세요.
            </p>
          </div>

          {/* 링크 섹션 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">빠른 링크</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-foreground transition-colors">
                  기능
                </Link>
              </li>
            </ul>
          </div>

          {/* 소셜 링크 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">팔로우</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Code className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@example.com"
                aria-label="이메일"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="커뮤니티"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Users className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
          <p>© {currentYear} {APP_NAME}. All rights reserved.</p>
          <p>Built with Next.js v15 + TailwindCSS v4 + shadcn/ui</p>
        </div>
      </div>
    </footer>
  );
}
