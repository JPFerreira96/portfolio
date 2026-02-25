import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://julioseunome.github.io"),
  title: "Julio Paulo Ferreira | Fullstack Developer",
  description:
    "Portfolio profissional de Julio Paulo Ferreira, desenvolvedor Fullstack com foco em React, Next.js, Node.js, Laravel e arquitetura escalavel.",
  keywords: [
    "Julio Paulo Ferreira",
    "Desenvolvedor Fullstack",
    "ReactJS",
    "Next.js",
    "Node.js",
    "Laravel",
    "PHP",
    "MySQL",
    "TypeORM",
    "Sequelize",
    "WordPress",
    "APIs REST"
  ],
  openGraph: {
    title: "Julio Paulo Ferreira | Fullstack Developer",
    description:
      "Projetos publicos e solucoes fullstack com foco em performance, arquitetura e qualidade de codigo.",
    type: "website",
    locale: "pt_BR",
    url: "https://julioseunome.github.io"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
