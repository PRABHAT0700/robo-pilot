import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/content";
import { defaultKeywords, OG_IMAGE, organizationSchema, SITE_URL, websiteSchema } from "@/lib/seo";

const display = Plus_Jakarta_Sans({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | AI agents, ML, apps and consulting`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: defaultKeywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: site.name,
    title: `${site.name} | AI agents, ML, apps and consulting`,
    description: site.description,
    images: [{ url: OG_IMAGE, width: 1024, height: 682, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | AI agents, ML, apps and consulting`,
    description: site.description,
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/robopilot-icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/robopilot-icon.png", sizes: "180x180" }],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${figtree.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
      </head>
      <body className="relative flex min-h-full flex-col font-sans">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <SmoothScroll>
          <div className="noise" aria-hidden />
          <CustomCursor />
          <Navbar />
          <main className="relative z-[2] flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
