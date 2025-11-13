import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";

export const metadata: Metadata = {
  title: "Taro Hirai | Portfolio",
  description: "Next.js × shadcn × zod × RHF minimal starter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="min-h-dvh bg-background antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="container mx-auto px-4">
            <MainNav />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
