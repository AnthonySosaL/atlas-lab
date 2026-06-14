import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ATLAS Lab — Laboratorio cuantitativo",
  description:
    "57 experimentos honestos buscando alpha de trading retail. Validación rigurosa, código abierto.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="border-t py-8 text-center text-xs text-muted-foreground">
            ATLAS Lab · datos generados localmente desde el laboratorio de experimentos
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
