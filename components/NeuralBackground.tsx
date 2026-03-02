"use client";

import { useEffect, useMemo } from "react";
import styles from "./NeuralBackground.module.css";

type NeuralBackgroundProps = {
  containerRef?: React.RefObject<HTMLElement>;
  className?: string;
};

type ParticlesDomEntry = {
  pJS?: {
    canvas?: { el?: HTMLCanvasElement | null };
    fn?: { vendors?: { destroypJS?: () => void } };
  };
};

declare global {
  interface Window {
    particlesJS?: (tagId: string, params: unknown) => void;
    pJSDom?: ParticlesDomEntry[];
  }
}

const destroyParticlesById = (containerId: string) => {
  if (!window.pJSDom?.length) {
    return;
  }

  window.pJSDom = window.pJSDom.filter((instance) => {
    const parentId = instance.pJS?.canvas?.el?.parentElement?.id;
    const isTarget = parentId === containerId;

    if (isTarget) {
      instance.pJS?.fn?.vendors?.destroypJS?.();
    }

    return !isTarget;
  });
};

export function NeuralBackground({ className }: NeuralBackgroundProps) {
  const containerId = "hero-particles-js";

  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#64d7ff"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.5,
          random: true
        },
        size: {
          value: 3,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 160,
          color: "#5dd3ff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "bounce",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 120,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    }),
    []
  );

  useEffect(() => {
    let cancelled = false;

    const mount = async () => {
      await import("particles.js");

      if (cancelled || !window.particlesJS) {
        return;
      }

      const container = document.getElementById(containerId);
      if (!container) {
        return;
      }

      destroyParticlesById(containerId);
      window.particlesJS(containerId, options);
    };

    // Wait one frame to avoid race conditions during hydration/fast refresh.
    const frameId = window.requestAnimationFrame(() => {
      mount();
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      destroyParticlesById(containerId);
    };
  }, [options]);

  return (
    <div className={`${styles.layer}${className ? ` ${className}` : ""}`} aria-hidden="true">
      <div id={containerId} className={styles.canvas} />
    </div>
  );
}
