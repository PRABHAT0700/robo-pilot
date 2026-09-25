import type { Metadata } from "next";
import { Sora, Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { site } from "@/lib/content";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Build Smarter. Move Faster.`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} ${figtree.variable} h-full antialiased`}>
      <body className="relative min-h-full flex flex-col font-sans">
        <div className="noise" aria-hidden />
        <CustomCursor />
        <Navbar />
        <main className="relative z-[2] flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
