"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { NeuralBackground } from "./NeuralBackground";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [heroImage, setHeroImage] = useState("/me.jpg");

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Apresentacao principal">
      <NeuralBackground containerRef={heroRef} className={styles.neuralLayer} />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Fullstack Developer | Recife - PE</p>
          <h1 className={styles.title}>
            Desenvolvo produtos web com arquitetura solida, performance real e foco em resultado.
          </h1>
          <p className={styles.subtitle}>
            Sou Julio Paulo Ferreira. Atuo de ponta a ponta com React e Next.js no frontend, Node.js
            e Laravel no backend, aplicando Clean Code e SOLID em sistemas de uso publico.
          </p>
          <div className={styles.actions}>
            <a href="#projetos" className={styles.primaryCta}>
              Ver Projetos
            </a>
            <a href="#contato" className={styles.secondaryCta}>
              Entrar em Contato
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.photoGlow} aria-hidden="true" />
          <div className={styles.photoFrame}>
            <div className={styles.photoCore}>
              <Image
                src={heroImage}
                alt="Foto profissional de Julio Paulo Ferreira"
                fill
                sizes="(max-width: 960px) 260px, 360px"
                priority
                className={styles.photo}
                onError={() => {
                  setHeroImage("/profile-photo.svg");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
