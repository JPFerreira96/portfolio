"use client";

import type { ReactNode } from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import styles from "./Footer.module.css";

type FooterLink = {
  label: string;
  href: string;
  ariaLabel: string;
  icon: ReactNode;
};

const links: FooterLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/julio-paulo-ferreira-83543b218",
    ariaLabel: "Abrir LinkedIn de Julio Paulo",
    icon: <FaLinkedinIn aria-hidden="true" focusable="false" />
  },
  {
    label: "GitHub",
    href: "https://github.com/JulioPFerreira96",
    ariaLabel: "Abrir GitHub de Julio Paulo",
    icon: <FaGithub aria-hidden="true" focusable="false" />
  },
  {
    label: "Gmail",
    href: "mailto:juliojpf21@gmail.com",
    ariaLabel: "Enviar email para Julio Paulo",
    icon: <FaEnvelope aria-hidden="true" focusable="false" />
  },
  {
    label: "WhatsApp",
    href:
      "https://wa.me/5581996122288?text=Ol%C3%A1%20J%C3%BAlio%20tudo%20bem%20%3F%20Te%20encontrei%20atrav%C3%A9s%20do%20teu%20site%2C%20podemos%20conversar%20%3F",
    ariaLabel: "Falar no WhatsApp com Julio Paulo",
    icon: <FaWhatsapp aria-hidden="true" focusable="false" />
  }
];

export function Footer() {
  return (
    <footer className={styles.footer} aria-label="Rodape">
      <div className={styles.inner}>
        <h2 className={styles.title}>Vamos conversar?</h2>
        <p className={styles.subtitle}>
          Estou disponivel para oportunidades fullstack, colaboracoes tecnicas e projetos com impacto
          real. Escolha o canal ideal para falar comigo.
        </p>
        <div className={styles.icons}>
          {links.map((link) => (
            <a
              key={link.label}
              className={styles.iconLink}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
              aria-label={link.ariaLabel}
            >
              <span className={styles.icon}>{link.icon}</span>
              <span className={styles.label}>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
      <div className={styles.subFooter}>
        (c) 2026 Julio Paulo. Feito com Next.js.
      </div>
    </footer>
  );
}
