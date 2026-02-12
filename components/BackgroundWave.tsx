
import React, { useEffect, useRef } from 'react';

export const BackgroundWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      ctx.clearRect(0, 0, width, height);
      time += 0.0015; // Slow, elegant movement

      // SKALE uses a dense topographical string look
      const lineCount = 45;
      const verticalSpacing = 7;
      const baseY = height * 0.58; // Positioned slightly below center

      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();
        
        // Very thin strokes for "string" look
        ctx.lineWidth = 0.45;
        ctx.lineCap = 'round';
        
        // Opacity gradient: lines in the middle are more visible
        const relativeIndex = (i - lineCount / 2) / (lineCount / 2);
        const opacity = Math.max(0, 0.18 * (1 - Math.pow(Math.abs(relativeIndex), 1.5)));
        ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
        
        const yBase = baseY + (i - lineCount / 2) * verticalSpacing;
        
        ctx.moveTo(0, yBase);
        
        // Draw string with high resolution for smoothness
        for (let x = 0; x <= width; x += 3) {
          // Normalize x for wave functions
          const nx = x / width;
          
          // Easing: waves are flatter at the edges of the screen
          const edgeTaper = Math.sin(nx * Math.PI);
          
          // Multi-frequency wave interference
          const wave1 = Math.sin(nx * 5 + time + i * 0.04) * 50;
          const wave2 = Math.sin(nx * 12 - time * 0.8 + i * 0.08) * 25;
          const wave3 = Math.cos(nx * 3 + time * 0.4) * 15;
          
          // Combine waves with vertical offset and taper
          const y = yBase + (wave1 + wave2 + wave3) * edgeTaper;
          
          ctx.lineTo(x, y);
        }
        
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-90 select-none"
      aria-hidden="true"
    />
  );
};
