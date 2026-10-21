'use client';

import React, { useEffect, useRef } from 'react';

export default function VoiceSignalRunningCanvas({ workloadRatio = 1 }) {
  const canvasRef = useRef(null);
  const ratioRef = useRef(workloadRatio);

  useEffect(() => {
    ratioRef.current = workloadRatio;
  }, [workloadRatio]);

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

    // 42 baseline bar profile matching the exact layout in the user's screenshot
    // Contains distinct cyan clusters and accent coral bursts
    const numBars = 42;

    const render = (currentTime) => {
      const elapsed = (currentTime - startTime) * 0.001; // seconds
      const t = prefersReducedMotion ? 0 : elapsed;
      const currentRatio = ratioRef.current || 1;

      ctx.clearRect(0, 0, width, height);

      const centerY = height * 0.5;
      const maxHalfHeight = (height * 0.42) * Math.min(1.4, Math.max(0.65, currentRatio));
      const barSpacing = width / numBars;
      const barWidth = Math.max(2.2, Math.min(3.8, barSpacing * 0.52));

      // -----------------------------------------------------------
      // 1. Draw Background Coordinate Axis & Ticks
      // -----------------------------------------------------------
      ctx.save();
      // Zero-Crossing Baseline
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Subtle Vertical Coordinate Lines
      const numGridLines = 8;
      for (let g = 1; g < numGridLines; g++) {
        const gx = (width / numGridLines) * g;
        ctx.beginPath();
        ctx.moveTo(gx, 6);
        ctx.lineTo(gx, height - 6);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();

      // -----------------------------------------------------------
      // 2. Draw Actively Running Voice Waveform Bars
      // -----------------------------------------------------------
      for (let i = 0; i < numBars; i++) {
        const normX = i / (numBars - 1);
        const x = i * barSpacing + barSpacing * 0.5;

        // Base Envelope: 3 distinct voice clusters matching the screenshot
        // Cluster 1 (coral accent burst): ~0.20
        // Cluster 2 (high cyan central crest): ~0.50
        // Cluster 3 (coral accent burst): ~0.72
        const c1 = Math.exp(-Math.pow((normX - 0.20) / 0.07, 2)) * 0.72;
        const c2 = Math.exp(-Math.pow((normX - 0.50) / 0.09, 2)) * 0.98;
        const c3 = Math.exp(-Math.pow((normX - 0.72) / 0.07, 2)) * 0.76;
        const baseShape = Math.max(0.12, c1 + c2 + c3);

        // Identify Coral vs Cyan bars (matching screenshot pattern)
        const isCoral = (i >= 6 && i <= 9) || (i >= 20 && i <= 24) || (i >= 31 && i <= 33);

        // Running Voice Motion: Continuous travelling wave undulation
        // Speech packets ripple from left to right as if voice audio is live streaming
        const runningWave = prefersReducedMotion 
          ? 1 
          : 0.70 
            + 0.22 * Math.sin(t * 4.2 - normX * 12.0) 
            + 0.12 * Math.sin(t * 6.8 + i * 0.45) 
            + 0.08 * Math.cos(t * 2.4 - i * 0.25);

        const currentHalfH = Math.max(4, baseShape * maxHalfHeight * runningWave);
        const topY = centerY - currentHalfH;
        const barH = currentHalfH * 2;
        const r = Math.min(barWidth * 0.5, currentHalfH);

        ctx.save();
        if (isCoral) {
          ctx.fillStyle = '#E85A2A';
          ctx.shadowColor = 'rgba(232, 90, 42, 0.55)';
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = '#38BDF8';
          ctx.shadowColor = 'rgba(56, 189, 248, 0.45)';
          ctx.shadowBlur = 5;
        }

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
      // 3. Glowing Live Sine Wave Audio Stream (Running Left to Right)
      // -----------------------------------------------------------
      ctx.save();
      ctx.beginPath();
      const waveSpeed = t * 3.6;
      const waveFreq = 0.024;
      const waveAmp = (height * 0.16) * Math.min(1.3, Math.max(0.7, currentRatio));

      for (let px = 0; px <= width; px += 3) {
        const py = centerY 
          + Math.sin(px * waveFreq - waveSpeed) * waveAmp
          + Math.sin(px * 0.048 + waveSpeed * 0.5) * (waveAmp * 0.35);

        if (px === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.strokeStyle = '#00D4FF';
      ctx.lineWidth = 1.6;
      ctx.shadowColor = 'rgba(0, 212, 255, 0.85)';
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.restore();

      // -----------------------------------------------------------
      // 4. Moving Highlight Signal Nodes (Audio Packets)
      // -----------------------------------------------------------
      const numNodes = 3;
      for (let k = 0; k < numNodes; k++) {
        const nodeSpeed = 0.16; // cycles per second
        const offset = k / numNodes;
        const progress = ((t * nodeSpeed + offset) % 1);
        const nx = progress * width;
        const ny = centerY 
          + Math.sin(nx * waveFreq - waveSpeed) * waveAmp
          + Math.sin(nx * 0.048 + waveSpeed * 0.5) * (waveAmp * 0.35);

        ctx.save();
        // Coral glow bead
        ctx.beginPath();
        ctx.arc(nx, ny, 2.8, 0, Math.PI * 2);
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
  }, []);

  return (
    <div className="running-voice-canvas-wrapper" aria-hidden="true">
      <canvas ref={canvasRef} className="running-voice-canvas" />
      <style jsx>{`
        .running-voice-canvas-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 68px;
          display: block;
          overflow: hidden;
          background: transparent;
          pointer-events: none;
          user-select: none;
        }

        .running-voice-canvas {
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
