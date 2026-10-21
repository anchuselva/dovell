'use client';

import React, { useEffect, useRef } from 'react';

export default function PlayerWaveformRunningCanvas({ isPlaying = true, roleId = 'qa' }) {
  const canvasRef = useRef(null);
  const playingRef = useRef(isPlaying);

  useEffect(() => {
    playingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const startTime = performance.now();

    // 40 waveform bars
    const numBars = 40;

    const render = (currentTime) => {
      const elapsed = (currentTime - startTime) * 0.001; // seconds
      const t = prefersReducedMotion || !playingRef.current ? 0 : elapsed;

      ctx.clearRect(0, 0, width, height);

      const centerY = height * 0.5;
      const maxHalfHeight = height * 0.44;
      const barSpacing = width / numBars;
      const barWidth = Math.max(2.2, Math.min(3.8, barSpacing * 0.54));

      // -----------------------------------------------------------
      // 1. Draw Voice Bars: Animated "Left to Right" and "Up Down"
      // -----------------------------------------------------------
      for (let i = 0; i < numBars; i++) {
        const normX = i / (numBars - 1);
        const x = i * barSpacing + barSpacing * 0.5;

        // Base Envelope: Natural speech burst matching reference player
        // Low on left, prominent speech spindle in middle-left (0.40 - 0.65), trailing to right
        const g1 = Math.exp(-Math.pow((normX - 0.28) / 0.08, 2)) * 0.55;
        const g2 = Math.exp(-Math.pow((normX - 0.52) / 0.10, 2)) * 0.95; // Central burst
        const g3 = Math.exp(-Math.pow((normX - 0.76) / 0.09, 2)) * 0.45;
        const baseShape = Math.max(0.14, g1 + g2 + g3);

        // Continuous "Left to Right" travelling wave & "Up Down" oscillation
        const runningWave = prefersReducedMotion || !playingRef.current
          ? 1
          : 0.70 
            + 0.24 * Math.sin(t * 4.6 - normX * 10.0) // Left-to-right travelling wave
            + 0.12 * Math.sin(t * 7.2 + i * 0.5)     // Fast up-down speech flutter
            + 0.08 * Math.cos(t * 2.8 - i * 0.3);

        const currentHalfH = Math.max(3.5, baseShape * maxHalfHeight * runningWave);
        const topY = centerY - currentHalfH;
        const barH = currentHalfH * 2;
        const r = Math.min(barWidth * 0.5, currentHalfH);

        // Color Gradient: Electric Cyan at tips, Sky blue body
        const grad = ctx.createLinearGradient(0, topY, 0, centerY + currentHalfH);
        grad.addColorStop(0, '#00D4FF'); // Electric Cyan
        grad.addColorStop(0.5, '#38BDF8'); // Sky Blue
        grad.addColorStop(1, '#00D4FF');

        ctx.save();
        ctx.fillStyle = grad;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
        ctx.shadowBlur = 5;

        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(x - barWidth * 0.5, topY, barWidth, barH, r);
        } else {
          ctx.rect(x - barWidth * 0.5, topY, barWidth, barH);
        }
        ctx.fill();
        ctx.restore();
      }

      // -----------------------------------------------------------
      // 2. Animated Flowing Wave Stream Line (Left to Right)
      // -----------------------------------------------------------
      ctx.save();
      ctx.beginPath();
      const waveSpeed = t * 3.8;
      const waveFreq = 0.025;
      const waveAmp = height * 0.18;

      for (let px = 0; px <= width; px += 3) {
        const py = centerY 
          + Math.sin(px * waveFreq - waveSpeed) * waveAmp
          + Math.sin(px * 0.05 + waveSpeed * 0.5) * (waveAmp * 0.35);

        if (px === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.restore();

      // -----------------------------------------------------------
      // 3. Moving Highlight Pulse Node
      // -----------------------------------------------------------
      if (!prefersReducedMotion && playingRef.current) {
        const pulseProgress = ((t * 0.22) % 1); // travels 0 to 1 across player
        const pulseX = pulseProgress * width;
        const pulseY = centerY 
          + Math.sin(pulseX * waveFreq - waveSpeed) * waveAmp
          + Math.sin(pulseX * 0.05 + waveSpeed * 0.5) * (waveAmp * 0.35);

        ctx.save();
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#E85A2A';
        ctx.shadowColor = '#E85A2A';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [roleId]);

  return (
    <div className="player-waveform-canvas-wrapper" aria-hidden="true">
      <canvas ref={canvasRef} className="player-waveform-canvas" />
      <style jsx>{`
        .player-waveform-canvas-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 38px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: transparent;
          pointer-events: none;
          user-select: none;
        }

        .player-waveform-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
        }
      `}</style>
    </div>
  );
}
