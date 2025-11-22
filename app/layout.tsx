import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme-provider";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-gabarito",
});

export const metadata: Metadata = {
  title: {
    default: "Goodbooks - No-Code & AI Tools Directory",
    template: "%s | Goodbooks",
  },
  description:
    "Discover the best no-code tools, low-code platforms, and AI solutions. Your go-to directory for building products faster without writing code.",
  keywords: [
    "no-code tools",
    "low-code platforms",
    "AI tools",
    "SaaS directory",
    "website builders",
    "automation tools",
    "no-code database",
    "productivity tools",
  ],
  authors: [{ name: "Goodbooks" }],
  creator: "Goodbooks",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goodbooks.dev",
    title: "Goodbooks - No-Code & AI Tools Directory",
    description:
      "Discover the best no-code tools, low-code platforms, and AI solutions to build products faster.",
    siteName: "Goodbooks",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goodbooks - No-Code & AI Tools Directory",
    description:
      "Discover the best no-code tools, low-code platforms, and AI solutions to build products faster.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gabarito.variable} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
