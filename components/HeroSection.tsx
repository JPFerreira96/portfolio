"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, easeOut } from "framer-motion";
import { NeuralBackground } from "./NeuralBackground";
import styles from "./HeroSection.module.css";

// const highlights = [
//   {
//     value: "3 anos",
//     label: "Experiencia real em sistemas publicos"
//   },
//   {
//     value: "Fullstack",
//     label: "React, Next.js, Node.js e Laravel"
//   },
//   {
//     value: "Produto",
//     label: "UX, dados e arquitetura alinhados"
//   }
// ];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [heroImage, setHeroImage] = useState("/me.jpg");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [menuOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const buttonHover = { y: -2, scale: 1.02 };
  const buttonTap = { scale: 0.98 };
  const visualInitial = { opacity: 0, scale: 0.94 };
  const visualAnimate = { opacity: 1, scale: 1, transition: { duration: 0.7, ease: easeOut, delay: 0.2 } };

  return (
    <section
      ref={heroRef}
      id="perfil"
      className={styles.hero}
      aria-label="Apresentacao principal"
    >
      <NeuralBackground containerRef={heroRef} className={styles.neuralLayer} />
      <header className={styles.topBar}>
        <div className={styles.topBarInner}>
          <a className={styles.brand} href="#perfil" aria-label="Ir para o topo">
            {`<Julio ☕ Paulo/>`}
          </a>
          <button
            className={styles.hamburger}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`${styles.hamburgerBar} ${menuOpen ? styles.hamburgerOpen : ""}`} />
            <span className={`${styles.hamburgerBar} ${menuOpen ? styles.hamburgerOpen : ""}`} />
            <span className={`${styles.hamburgerBar} ${menuOpen ? styles.hamburgerOpen : ""}`} />
          </button>
          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Navegacao principal">
            <a className={styles.navLink} href="#perfil" onClick={() => setMenuOpen(false)}>
              Perfil
            </a>
            <a className={styles.navLink} href="#sobre" onClick={() => setMenuOpen(false)}>
              Sobre mim
            </a>
            <a className={styles.navLink} href="#stack" onClick={() => setMenuOpen(false)}>
              Habilidades
            </a>
            <a className={styles.navLink} href="#soft-skills" onClick={() => setMenuOpen(false)}>
              Soft skills
            </a>
            <a className={styles.navLink} href="#projetos" onClick={() => setMenuOpen(false)}>
              Projetos
            </a>
            <a className={styles.navLink} href="#carreira" onClick={() => setMenuOpen(false)}>
              Carreira
            </a>
            {/* <a className={styles.navLink} href="#contato">
              Contato
            </a> */}
          </nav>
        </div>
      </header>
      <div className={styles.inner}>
        <motion.div
          className={styles.copy}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={itemVariants}>
            Software Developer | Recife - PE
          </motion.p>
          <motion.h1 className={styles.title} variants={itemVariants}>
            Olá !!! Sejam Bem Vindos. Eu sou Júlio Paulo Ferreira :)
          </motion.h1>
          <motion.p className={styles.subtitle} variants={itemVariants}>
            Desenvolvedor Fullstack
          </motion.p>
          <motion.div className={styles.actions} variants={itemVariants}>
            <motion.a
              href="#projetos"
              className={styles.primaryCta}
              aria-label="Ver projetos em destaque"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              Ver Projetos
            </motion.a>
            <motion.a
              href="/uploads/CurrículoJulioPauloFerreira.pdf"
              className={styles.secondaryCta}
              aria-label="Baixar curriculo em PDF"
              whileHover={buttonHover}
              whileTap={buttonTap}
              download
            >
              Baixar Curriculo
            </motion.a>
            {/* <motion.a
              href="#contato"
              className={styles.tertiaryCta}
              aria-label="Ir para a secao de contato"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              Entrar em Contato
            </motion.a> */}
          </motion.div>
          {/* <motion.ul className={styles.metrics} variants={itemVariants}>
            {highlights.map((item) => (
              <li key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </motion.ul> */}
        </motion.div>

        <motion.div className={styles.visual} initial={visualInitial} animate={visualAnimate}>
          <div className={styles.photoGlow} aria-hidden="true" />
          <div className={styles.photoFrame}>
            <div className={styles.photoCore}>
              <Image
                src={heroImage}
                alt="Foto profissional de Julio Paulo"
                fill
                sizes="(max-width: 960px) 240px, 360px"
                priority
                className={styles.photo}
                onError={() => {
                  setHeroImage("/profile-photo.svg");
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
