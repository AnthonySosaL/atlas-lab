import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { SiteJsonLd } from "@/components/site-json-ld";
import { getLab, getSummary } from "@/lib/data";
import { PORTFOLIO_URL, SITE_URL } from "@/lib/site";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const [summary, lab] = await Promise.all([getSummary(), getLab()]);
  const description = `${summary.total} experimentos y ${lab.total.toLocaleString("en")} estrategias de trading probadas con out-of-sample, Deflated Sharpe y Monte Carlo. Resultados públicos, incluidos los negativos.`;
  return {
    metadataBase: new URL(SITE_URL),
    title: "ATLAS Lab — Laboratorio cuantitativo",
    description,
    keywords: ["trading cuantitativo", "backtesting", "Deflated Sharpe Ratio", "Monte Carlo", "out-of-sample", "Python"],
    authors: [{ name: "Anthony Sosa", url: PORTFOLIO_URL }],
    openGraph: {
      type: "website",
      siteName: "ATLAS Lab",
      title: "ATLAS Lab — Laboratorio cuantitativo",
      description,
      locale: "es_EC",
    },
    twitter: { card: "summary_large_image", title: "ATLAS Lab — Laboratorio cuantitativo", description },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <I18nProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </I18nProvider>
        </ThemeProvider>
        <SiteJsonLd />
        {/* AdSense: inactivo hasta poner el ID real en public/adsense.js */}
        <Script src="/adsense.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
