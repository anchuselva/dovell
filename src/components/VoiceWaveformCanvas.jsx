'use client';

import React, { useEffect, useRef } from 'react';

export default function VoiceWaveformCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Resize handler with High-DPI support
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

    // Number of vertical bars scaled smoothly with screen width
    const getBarCount = () => {
      if (width < 480) return 56;
      if (width < 768) return 76;
      if (width < 1024) return 96;
      if (width < 1440) return 124;
      return 140;
    };

    let startTime = performance.now();

    const render = (currentTime) => {
      const elapsed = (currentTime - startTime) * 0.001; // seconds
      const t = prefersReducedMotion ? 0 : elapsed;

      ctx.clearRect(0, 0, width, height);

      const numBars = getBarCount();
      const centerY = height * 0.52;
      const maxHalfHeight = height * 0.44;
      const barSpacing = width / numBars;
      const barWidth = Math.max(2.8, Math.min(5.2, barSpacing * 0.56));

      // -----------------------------------------------------------
      // 1. Draw Waveform Bars with Voice Energy Spindles
      // -----------------------------------------------------------
      for (let i = 0; i < numBars; i++) {
        const normX = i / (numBars - 1); // 0 to 1 across width
        const x = i * barSpacing + barSpacing * 0.5;

        // Base Envelope: Multiple speech spindle bursts (matching reference image)
        // Spindle 1 (left): ~0.16
        // Spindle 2 (center-left): ~0.36
        // Spindle 3 (dominant center-right): ~0.56 (highest vocal crest)
        // Spindle 4 (right cluster): ~0.76
        // Spindle 5 (right edge): ~0.90
        const g1 = Math.exp(-Math.pow((normX - 0.16) / 0.08, 2)) * 0.72;
        const g2 = Math.exp(-Math.pow((normX - 0.36) / 0.07, 2)) * 0.62;
        const g3 = Math.exp(-Math.pow((normX - 0.56) / 0.10, 2)) * 0.98; // Highest central voice peak
        const g4 = Math.exp(-Math.pow((normX - 0.75) / 0.07, 2)) * 0.68;
        const g5 = Math.exp(-Math.pow((normX - 0.89) / 0.07, 2)) * 0.82; // Right spindle

        // Background baseline energy
        const baseShape = Math.max(0.12, g1 + g2 + g3 + g4 + g5);

        // Natural smooth voice movement: combination of phased harmonics
        const waveMovement = prefersReducedMotion 
          ? 1 
          : 0.72 
            + 0.18 * Math.sin(t * 2.8 + i * 0.22) 
            + 0.10 * Math.sin(t * 4.2 - i * 0.35) 
            + 0.08 * Math.cos(t * 1.6 + i * 0.15);

        const currentHalfH = Math.max(5, baseShape * maxHalfHeight * waveMovement);

        // Bar Color Gradient: Electric Cyan at tips, Sky Blue in body, Rich Cyan at center
        const topY = centerY - currentHalfH;
        const barH = currentHalfH * 2;
        const barGrad = ctx.createLinearGradient(0, topY, 0, centerY + currentHalfH);
        barGrad.addColorStop(0, '#00D4FF'); // Electric Cyan
        barGrad.addColorStop(0.28, '#38BDF8'); // Sky Blue
        barGrad.addColorStop(0.5, '#0284C7'); // Rich Cyan / Blue
        barGrad.addColorStop(0.72, '#38BDF8');
        barGrad.addColorStop(1, '#00D4FF');

        // Draw rounded vertical bar
        ctx.fillStyle = barGrad;
        ctx.beginPath();
        const r = Math.min(barWidth * 0.5, currentHalfH);

        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(x - barWidth * 0.5, topY, barWidth, barH, r);
        } else {
          ctx.rect(x - barWidth * 0.5, topY, barWidth, barH);
        }
        ctx.fill();
      }

      // -----------------------------------------------------------
      // 2. Continuous Flowing Cyan Sine Wave Curve (Left to Right)
      // -----------------------------------------------------------
      ctx.save();
      ctx.beginPath();
      const waveSpeed = t * 1.8;
      const waveFreq = 0.012;
      const waveAmp = height * 0.18;

      for (let px = 0; px <= width; px += 3) {
        // Dual harmonic traveling wave
        const py = centerY 
          + Math.sin(px * waveFreq - waveSpeed) * waveAmp
          + Math.sin(px * 0.024 + waveSpeed * 0.6) * (waveAmp * 0.35);

        if (px === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 2.0;
      ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.restore();

      // -----------------------------------------------------------
      // 3. Secondary Delicate Soft Wave Curve
      // -----------------------------------------------------------
      ctx.save();
      ctx.beginPath();
      const wave2Speed = t * 1.3 + 1.2;
      const wave2Freq = 0.009;
      const wave2Amp = height * 0.22;

      for (let px = 0; px <= width; px += 4) {
        const py = centerY 
          + Math.sin(px * wave2Freq + wave2Speed) * wave2Amp
          + Math.cos(px * 0.018 - wave2Speed * 0.4) * (wave2Amp * 0.25);

        if (px === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.strokeStyle = 'rgba(186, 230, 253, 0.45)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.restore();

      // -----------------------------------------------------------
      // 4. Moving Glowing Orange Highlight Nodes (Left to Right)
      // -----------------------------------------------------------
      const numNodes = 6;
      for (let k = 0; k < numNodes; k++) {
        // Continuous left-to-right loop with wrap-around
        const nodeSpeed = 0.085; // cycles per second
        const offset = k / numNodes;
        const nodeProgress = ((t * nodeSpeed + offset) % 1); // 0 to 1
        const nx = nodeProgress * width;

        // Position rides on top of the primary sine wave
        const ny = centerY 
          + Math.sin(nx * waveFreq - waveSpeed) * waveAmp
          + Math.sin(nx * 0.024 + waveSpeed * 0.6) * (waveAmp * 0.35);

        // Draw Outer Orange Pulse Halo
        ctx.save();
        ctx.beginPath();
        ctx.arc(nx, ny, 7.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(232, 90, 42, 0.22)';
        ctx.fill();

        // Draw Core Orange Highlight Dot
        ctx.beginPath();
        ctx.arc(nx, ny, 3.8, 0, Math.PI * 2);
        ctx.fillStyle = '#E85A2A';
        ctx.shadowColor = '#E85A2A';
        ctx.shadowBlur = 10;
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
  }, []);

  return (
    <div className="voice-waveform-container" aria-hidden="true">
      <canvas ref={canvasRef} className="voice-waveform-canvas" />
      <style jsx>{`
        .voice-waveform-container {
          position: relative;
          width: 100%;
          height: 160px;
          overflow: hidden;
          background: transparent;
          pointer-events: none;
          user-select: none;
          margin-top: 10px;
        }

        .voice-waveform-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        @media (max-width: 768px) {
          .voice-waveform-container {
            height: 115px;
            margin-top: 6px;
          }
        }
      `}</style>
    </div>
  );
}
