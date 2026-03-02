"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useReducedMotion } from "framer-motion";
import styles from "./NeuralBackground.module.css";

type NeuralBackgroundProps = {
  containerRef?: React.RefObject<HTMLElement>;
  className?: string;
};

export function NeuralBackground({ className }: NeuralBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      background: {
        color: {
          value: "transparent"
        }
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: !prefersReducedMotion,
            mode: ["grab", "repulse"]
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 160,
            links: {
              opacity: 0.58
            }
          },
          repulse: {
            distance: 140,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: ["#4fe3c1", "#64d7ff", "#45a3ff"]
        },
        links: {
          enable: true,
          distance: 150,
          color: "#5dd3ff",
          opacity: 0.32,
          width: 1
        },
        move: {
          enable: !prefersReducedMotion,
          speed: 0.65,
          outModes: {
            default: "bounce"
          }
        },
        number: {
          value: prefersReducedMotion ? 26 : 68,
          density: {
            enable: true,
            area: 900
          }
        },
        opacity: {
          value: {
            min: 0.25,
            max: 0.62
          }
        },
        size: {
          value: {
            min: 1,
            max: 3
          }
        }
      },
      responsive: [
        {
          maxWidth: 480,
          options: {
            particles: {
              number: {
                value: prefersReducedMotion ? 16 : 34
              },
              move: {
                speed: 0.45
              },
              links: {
                distance: 120
              }
            }
          }
        },
        {
          maxWidth: 768,
          options: {
            particles: {
              number: {
                value: prefersReducedMotion ? 22 : 48
              }
            }
          }
        }
      ]
    }),
    [prefersReducedMotion]
  );

  return (
    <div className={`${styles.layer}${className ? ` ${className}` : ""}`} aria-hidden="true">
      {ready ? (
        <Particles id="hero-particles" options={options} className={styles.canvas} />
      ) : (
        <div className={styles.canvas} />
      )}
    </div>
  );
}
