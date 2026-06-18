import { Separator } from "@/components/ui/separator";
import { APP_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <Separator className="mb-8" />
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
          <p>Built with Next.js v15 + TailwindCSS v4 + shadcn/ui</p>
        </div>
      </div>
    </footer>
  );
}
