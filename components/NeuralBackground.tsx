"use client";

import { useEffect, useRef } from "react";
import styles from "./NeuralBackground.module.css";

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
  influence: number;
};

type NeuralBackgroundProps = {
  containerRef: React.RefObject<HTMLElement>;
  className?: string;
};

export function NeuralBackground({ containerRef, className }: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motionFactor = prefersReducedMotion ? 0.62 : 1;
    const particles: Particle[] = [];
    const pointer = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false
    };

    let width = 0;
    let height = 0;
    let frameId = 0;
    let resizeObserver: ResizeObserver | null = null;

    const setCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;
      const area = width * height;
      const count = Math.min(112, Math.max(54, Math.floor(area / 18000)));

      for (let index = 0; index < count; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * 0.07 + 0.03) * motionFactor;
        const x = Math.random() * width;
        const y = Math.random() * height;

        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 1.25 + 0.75,
          alpha: Math.random() * 0.26 + 0.24,
          phase: Math.random() * Math.PI * 2,
          influence: 0
        });
      }
    };

    const updateParticles = (time: number) => {
      const t = time * 0.001;
      const linkDistance = Math.min(178, Math.max(122, width * 0.13));
      const linkDistanceSquared = linkDistance * linkDistance;
      const interactionRadius = Math.min(200, Math.max(120, width * 0.13));
      const interactionRadiusSquared = interactionRadius * interactionRadius;
      const spring = 0.02 * motionFactor;
      const damping = 0.918;

      ctx.clearRect(0, 0, width, height);

      if (pointer.active) {
        pointer.x += (pointer.targetX - pointer.x) * 0.22;
        pointer.y += (pointer.targetY - pointer.y) * 0.22;
      }

      for (const particle of particles) {
        const driftX = Math.cos(t * 0.26 + particle.phase) * (3.2 * motionFactor);
        const driftY = Math.sin(t * 0.22 + particle.phase * 0.8) * (3.2 * motionFactor);
        const anchorX = particle.baseX + driftX;
        const anchorY = particle.baseY + driftY;

        if (pointer.active) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < interactionRadiusSquared) {
            const distance = Math.sqrt(distanceSquared) || 0.0001;
            const force = (interactionRadius - distance) / interactionRadius;
            particle.vx += (dx / distance) * force * 0.36 * motionFactor;
            particle.vy += (dy / distance) * force * 0.36 * motionFactor;
            particle.influence = Math.max(particle.influence, force);
          }
        }

        particle.vx += (anchorX - particle.x) * spring;
        particle.vy += (anchorY - particle.y) * spring;

        const speed = Math.hypot(particle.vx, particle.vy);
        if (speed > 1.35) {
          particle.vx = (particle.vx / speed) * 1.35;
          particle.vy = (particle.vy / speed) * 1.35;
        }

        particle.vx *= damping;
        particle.vy *= damping;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.influence *= 0.9;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(width, particle.x));
        }
        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(height, particle.y));
        }
      }

      for (let i = 0; i < particles.length; i += 1) {
        const first = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const second = particles[j];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared > linkDistanceSquared) {
            continue;
          }

          const ratio = 1 - distanceSquared / linkDistanceSquared;
          const midRatio = (first.x + second.x) / (2 * width);
          const red = Math.round(108 + midRatio * 24);
          const green = Math.round(138 + midRatio * 26);
          const blue = Math.round(255 - midRatio * 10);
          const interactionBoost = (first.influence + second.influence) * 0.28;
          const alpha = Math.min(0.42, ratio * 0.24 + interactionBoost);

          ctx.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${alpha.toFixed(3)})`;
          ctx.lineWidth = 0.9 + interactionBoost * 1.7;
          ctx.beginPath();
          ctx.moveTo(first.x, first.y);
          ctx.lineTo(second.x, second.y);
          ctx.stroke();
        }
      }

      for (const particle of particles) {
        let highlight = 0;

        if (pointer.active) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          const interactionRadius = Math.min(200, Math.max(120, width * 0.13));
          if (distance < interactionRadius) {
            highlight = 1 - distance / interactionRadius;
          }
        }

        const radius = particle.size + highlight * 0.58;
        const alpha = Math.min(0.98, particle.alpha + highlight * 0.34);
        const color = highlight > 0 ? "158, 224, 255" : "136, 164, 255";

        ctx.fillStyle = `rgba(${color}, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const render = (time: number) => {
      updateParticles(time);
      frameId = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.targetX = event.clientX - rect.left;
      pointer.targetY = event.clientY - rect.top;

      if (!pointer.active) {
        pointer.x = pointer.targetX;
        pointer.y = pointer.targetY;
      }

      pointer.active = true;
    };

    const handleMouseMove = (event: MouseEvent) => {
      handlePointerMove(event as unknown as PointerEvent);
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      pointer.x = -1000;
      pointer.y = -1000;
      pointer.targetX = -1000;
      pointer.targetY = -1000;
    };

    const handleResize = () => {
      setCanvasSize();
      if (prefersReducedMotion) {
        updateParticles(performance.now());
      }
    };

    setCanvasSize();
    frameId = window.requestAnimationFrame(render);

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("pointerleave", handlePointerLeave);
    container.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("resize", handleResize);
    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(container);
    }

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      container.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [containerRef]);

  return (
    <div className={`${styles.layer}${className ? ` ${className}` : ""}`} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
