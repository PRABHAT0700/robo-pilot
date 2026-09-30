import type { Metadata } from "next";
import { Space_Grotesk, Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { site } from "@/lib/content";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Digital products that move businesses forward`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://robopilot.ai"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${space.variable} ${figtree.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col font-sans">
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
