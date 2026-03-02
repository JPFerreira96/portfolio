import type { Metadata, Viewport } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://juliopauloferreira.github.io"),
  title: "Julio Paulo | Software Developer",
  description:
    "Portfolio profissional de Julio Paulo, software developer em Recife com foco em React, Next.js, Node.js e Laravel, atuando em produtos publicos.",
  keywords: [
    "Julio Paulo",
    "Software Developer",
    "Desenvolvedor software Recife",
    "Portfolio ciencia da computacao",
    "Fullstack",
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "PHP",
    "MySQL",
    "APIs REST",
    "Setor publico"
  ],
  authors: [{ name: "Julio Paulo" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  openGraph: {
    title: "Julio Paulo | Software Developer",
    description:
      "Projetos publicos e solucoes fullstack com foco em performance, arquitetura e qualidade de codigo.",
    type: "website",
    locale: "pt_BR",
    url: "https://juliopauloferreira.github.io"
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Paulo | Software Developer",
    description:
      "Portfolio profissional com foco em produtos web, arquitetura e impacto no setor publico."
  }
};

export const viewport: Viewport = {
  themeColor: "#0b1420"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${spaceGrotesk.variable}`}>
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
