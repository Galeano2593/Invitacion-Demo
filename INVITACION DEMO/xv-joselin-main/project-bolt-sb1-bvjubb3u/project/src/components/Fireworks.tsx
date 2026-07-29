import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

// Colores actualizados: Champán Dorado, Verde Eucalipto y Verde Sage
const COLORS = [
  "rgba(184, 151, 90, 1)",  // Champagne Gold (#B8975A)
  "rgba(44, 59, 50, 1)",    // Eucalyptus Green (#2C3B32)
  "rgba(107, 124, 112, 1)", // Sage Green (#6B7C70)
  "rgba(212, 182, 126, 1)", // Soft Gold
];

export default function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let raf = 0;
    const particles: Particle[] = [];
    let lastLaunch = 0;

    const launch = (x: number, y: number) => {
      const count = 35 + Math.floor(Math.random() * 15);
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = Math.random() * 2.5 + 1;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 50 + Math.random() * 30,
          color,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const render = (t: number) => {
      // FIX CLAVE: Limpiar el canvas sin pintar un rectángulo oscuro encima
      ctx.clearRect(0, 0, width, height);

      if (t - lastLaunch > 1500) {
        lastLaunch = t;
        launch(
          Math.random() * width * 0.8 + width * 0.1,
          Math.random() * height * 0.4 + height * 0.1
        );
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03; // Gravedad suave
        p.vx *= 0.99;
        const alpha = 1 - p.life / p.maxLife;
        if (alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace("1)", `${alpha})`);
        ctx.shadowBlur = 4; // Sombra sutil para no ensuciar el fondo claro
        ctx.shadowColor = p.color.replace("1)", `${alpha * 0.5})`);
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full z-0 opacity-80"
    />
  );
}
