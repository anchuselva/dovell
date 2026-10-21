'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Volume2, 
  Activity, 
  Radio, 
  Sparkles,
  Play,
  Pause
} from 'lucide-react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [signalLevel, setSignalLevel] = useState(74);

  // Random fluctuation for audio signal indicators
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSignalLevel(Math.floor(65 + Math.random() * 25));
    }, 1200);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Frequency spectrum bar heights for voice signal visualization
  const waveBars = [
    18, 25, 42, 60, 38, 22, 50, 78, 92, 64, 45, 80, 100, 85, 55, 32,
    48, 70, 88, 62, 35, 58, 82, 95, 75, 50, 30, 65, 88, 72, 44, 28,
    36, 52, 76, 94, 68, 42, 60, 84, 98, 74, 46, 30, 54, 78, 90, 65,
    38, 62, 85, 70, 48, 26, 44, 68, 86, 60, 34, 52, 76, 88, 55, 24
  ];

  return (
    <section id="platform" className="semicircle-hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Headline & Action Area */}
        <div className="hero-content-col">
          
          {/* Eyebrow */}
          <div className="hero-tag-badge">
            <span className="hero-tag-dot"></span>
            <span>VOICE INTELLIGENCE &amp; CONVERSATION ANALYTICS</span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            <span className="hl-row">Every conversation holds insight.</span>
            <span className="hl-row hero-accent-text">Bring yours into focus.</span>
          </h1>

          {/* Clean Description Text */}
          <p className="hero-description-text">
            Organize audio recordings, review transcripts, and uncover recurring topics in one centralized workspace. Dovell helps your team turn voice interactions into searchable records, structured reviews, and clear conversation outcomes.
          </p>

          {/* Dual Pill Buttons Row */}
          <div className="hero-pill-buttons-row">
            <a href="#contact" className="hero-pill-btn hero-pill-primary">
              <span>Request a Demo</span>
              <ArrowRight size={15} />
            </a>
            <a href="#capabilities" className="hero-pill-btn hero-pill-secondary">
              <span>Explore the Platform →</span>
            </a>
          </div>

          {/* Supporting Labels */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <CheckCircle2 size={14} className="text-coral" />
              <span>Centralized audio records</span>
            </div>
            <div className="trust-sep">•</div>
            <div className="trust-item">
              <CheckCircle2 size={14} className="text-coral" />
              <span>Searchable transcripts</span>
            </div>
            <div className="trust-sep">•</div>
            <div className="trust-item">
              <CheckCircle2 size={14} className="text-coral" />
              <span>Traceable reviews</span>
            </div>
          </div>
        </div>

        {/* Right Column: Giant Circular Semicircle Bowl with Concentric Orbit Arcs */}
        <div className="hero-visual-col">
          <div className="giant-semicircle-wrapper">
            
            <svg 
              className="hero-semicircle-svg" 
              viewBox="0 0 840 460" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Semicircular ClipPath: Center (420, 0), Radius = 400 */}
                <clipPath id="heroPhotoBowlClip">
                  <path d="M 20,0 A 400,400 0 0,0 820,0 Z" />
                </clipPath>

                {/* Soft Vignette Overlay */}
                <radialGradient id="heroVignette" cx="50%" cy="25%" r="80%">
                  <stop offset="30%" stopColor="rgba(10, 34, 64, 0)" />
                  <stop offset="100%" stopColor="rgba(10, 34, 64, 0.65)" />
                </radialGradient>

                {/* Drop Shadow for Orbit Arcs */}
                <filter id="heroArcShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="rgba(10, 34, 64, 0.35)" />
                </filter>

                {/* Wave Gradient */}
                <linearGradient id="waveLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="50%" stopColor="#E85A2A" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
              </defs>

              {/* === THE GIANT SEMICIRCULAR PHOTO BOWL === */}
              <g clipPath="url(#heroPhotoBowlClip)">
                {/* Dark Navy Deep Studio Base */}
                <rect x="20" y="0" width="800" height="460" fill="#0A2240" />

                {/* Blended High-Tech Voice Network Texture */}
                <image 
                  href="/images/hero-cluster.jpg" 
                  x="20" 
                  y="0" 
                  width="800" 
                  height="440" 
                  preserveAspectRatio="xMidYMid slice" 
                  opacity="0.42"
                  style={{ mixBlendMode: 'luminosity' }}
                />

                {/* Oscillating Sound Wave Curve inside the Bowl */}
                <g opacity="0.6">
                  <path 
                    d="M 60,180 Q 140,120 220,180 T 380,180 T 540,180 T 700,180 T 780,180" 
                    fill="none" 
                    stroke="url(#waveLineGrad)" 
                    strokeWidth="2.5" 
                    strokeDasharray="4 4"
                    className="inner-sound-wave"
                  />
                  <path 
                    d="M 60,210 Q 160,270 260,210 T 460,210 T 660,210 T 780,210" 
                    fill="none" 
                    stroke="#38BDF8" 
                    strokeWidth="2" 
                    opacity="0.5"
                  />
                </g>

                {/* Vignette Overlay */}
                <rect x="20" y="0" width="800" height="460" fill="url(#heroVignette)" />

                {/* Top Border */}
                <line x1="20" y1="1" x2="820" y2="1" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
              </g>

              {/* === CONCENTRIC ORBIT STROKES (Signature Geometry) === */}
              {/* 1. Left Arc: Electric Cyan */}
              <path 
                d="M 30,135 A 415,415 0 0,0 270,395" 
                stroke="#38BDF8" 
                strokeWidth="8" 
                strokeLinecap="round" 
                filter="url(#heroArcShadow)"
              />

              {/* 2. Bottom-Right Arc: Dark Navy */}
              <path 
                d="M 385,418 A 408,408 0 0,0 765,235" 
                stroke="#0A2240" 
                strokeWidth="9" 
                strokeLinecap="round" 
              />

              {/* 3. Bottom Outer Arc: Soft Sky Blue */}
              <path 
                d="M 180,365 A 428,428 0 0,0 610,400" 
                stroke="#BAE6FD" 
                strokeWidth="6.5" 
                strokeLinecap="round" 
              />
            </svg>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* EXTENDED HERO DOWN: LIVE VOICE SIGNAL INTELLIGENCE SPECTRUM VISUALIZER   */}
      {/* ========================================================================= */}
      <div className="container hero-signal-container">
        <div className="voice-signal-card">
          
          {/* Signal Header Bar */}
          <div className="signal-header-bar">
            <div className="signal-title-group">
              <span className={`signal-live-beacon ${isPlaying ? 'pulsing' : ''}`}></span>
              <div className="signal-icon-box">
                <Radio size={14} className="text-coral" />
              </div>
              <span className="signal-title-text">LIVE VOICE SIGNAL SPECTRUM</span>
              <span className="signal-channel-badge">CH-01 · 48 kHz / 24-BIT</span>
            </div>

            <div className="signal-meta-stats">
              <div className="signal-meta-item">
                <span className="meta-lbl">SIGNAL LEVEL:</span>
                <span className="meta-val text-cyan">{isPlaying ? `${signalLevel}%` : 'STANDBY'}</span>
              </div>
              <div className="signal-meta-item">
                <span className="meta-lbl">SNR:</span>
                <span className="meta-val text-green">+34.8 dB</span>
              </div>
              <div className="signal-meta-item">
                <span className="meta-lbl">VOICE DETECT:</span>
                <span className="meta-val text-amber">ACTIVE</span>
              </div>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="signal-toggle-btn"
                title={isPlaying ? 'Pause voice signal' : 'Play voice signal'}
              >
                {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                <span>{isPlaying ? 'LIVE' : 'PAUSED'}</span>
              </button>
            </div>
          </div>

          {/* Dynamic Frequency Waveform Visualizer */}
          <div className="waveform-spectrum-stage">
            <div className="waveform-bars-track">
              {waveBars.map((height, idx) => {
                // Determine color tone depending on position and amplitude
                const isPeak = height > 75;
                const isMid = height > 45 && height <= 75;
                const barColor = isPeak ? '#E85A2A' : (isMid ? '#38BDF8' : '#7DD3FC');
                const animDuration = 0.8 + (idx % 7) * 0.15;
                const animDelay = (idx * 0.04) % 0.6;

                return (
                  <div 
                    key={idx} 
                    className="wave-bar-col"
                  >
                    <span 
                      className={`signal-wave-bar ${isPlaying ? 'animating' : ''}`}
                      style={{ 
                        '--bar-height': `${height}%`,
                        '--bar-color': barColor,
                        '--anim-duration': `${animDuration}s`,
                        '--anim-delay': `${animDelay}s`,
                        height: isPlaying ? undefined : `${Math.max(12, height * 0.4)}%`
                      }}
                    ></span>
                  </div>
                );
              })}
            </div>

            {/* Center Zero-Crossing Audio Baseline Axis */}
            <div className="spectrum-axis-line"></div>
          </div>

          {/* Frequency Labels Track */}
          <div className="frequency-labels-row">
            <span>60 Hz</span>
            <span>125 Hz</span>
            <span>250 Hz</span>
            <span>500 Hz</span>
            <span>1 kHz</span>
            <span>2 kHz</span>
            <span>4 kHz</span>
            <span>8 kHz</span>
            <span>16 kHz</span>
            <span>20 kHz</span>
          </div>

          {/* Signal Footer Note */}
          <div className="signal-footer-row">
            <div className="signal-footnote">
              <Activity size={13} className="text-coral" />
              <span>Real-time voice stream ingestion: Multi-channel acoustic processing &amp; topic boundary detection</span>
            </div>
            <div className="signal-code-label">
              <span>DOVELL AUDIO ENGINE v4.2 · ZERO LATENCY PIPELINE</span>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .semicircle-hero-section {
          background-color: #FFFFFF;
          position: relative;
          width: 100%;
          min-height: 760px;
          overflow: hidden;
          border-bottom: 1px solid #E2E8F0;
          padding-top: 0;
          padding-bottom: 64px;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 530px 1fr;
          align-items: flex-start;
          gap: 36px;
          position: relative;
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* Left Content Column */
        .hero-content-col {
          display: flex;
          flex-direction: column;
          padding-top: 54px;
          padding-bottom: 40px;
          z-index: 2;
          max-width: 530px;
        }

        .hero-tag-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: #0A1C36;
          letter-spacing: 0.05em;
          margin-bottom: 22px;
          width: fit-content;
        }

        .hero-tag-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #E85A2A;
          box-shadow: 0 0 8px rgba(232, 90, 42, 0.6);
        }

        /* Headline */
        .hero-headline {
          display: flex;
          flex-direction: column;
          font-family: var(--font-primary);
          font-size: clamp(2.15rem, 2.75vw, 2.85rem);
          font-weight: 800;
          line-height: 1.15;
          color: #0A1C36;
          letter-spacing: -0.03em;
          margin: 0 0 22px 0;
        }

        .hl-row {
          display: block;
          white-space: nowrap;
        }

        .hero-accent-text {
          color: #7C3AED;
          background: linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #0284C7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .hero-description-text {
          font-family: var(--font-primary);
          font-size: 1.02rem;
          line-height: 1.65;
          color: #475569;
          font-weight: 500;
          max-width: 500px;
          margin: 0 0 32px 0;
        }

        /* Dual Pill Buttons Row */
        .hero-pill-buttons-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
          flex-wrap: nowrap;
        }

        .hero-pill-btn {
          font-family: var(--font-primary);
          padding: 13px 26px;
          font-size: 0.92rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          letter-spacing: 0.01em;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          white-space: nowrap;
        }

        .hero-pill-primary {
          background: #0A1C36;
          color: #FFFFFF;
          border: 2px solid #0A1C36;
          box-shadow: 0 6px 20px rgba(10, 28, 54, 0.18);
        }

        .hero-pill-primary:hover {
          background: #E85A2A;
          border-color: #E85A2A;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(232, 90, 42, 0.32);
        }

        .hero-pill-secondary {
          background: #FFFFFF;
          color: #0A1C36;
          border: 2px solid #CBD5E1;
        }

        .hero-pill-secondary:hover {
          border-color: #0A1C36;
          background: #F8FAFC;
          transform: translateY(-2px);
        }

        /* Micro Trust */
        .hero-trust-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-primary);
          font-size: 0.83rem;
          color: #64748B;
          font-weight: 500;
          white-space: nowrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .trust-sep {
          color: #CBD5E1;
        }

        .text-coral {
          color: #E85A2A;
        }

        .text-cyan {
          color: #38BDF8;
        }

        .text-green {
          color: #10B981;
        }

        .text-amber {
          color: #F59E0B;
        }

        /* Right Column: Giant Semicircle Visual */
        .hero-visual-col {
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          width: 100%;
          position: relative;
          padding-top: 0;
          overflow: visible;
        }

        .giant-semicircle-wrapper {
          position: relative;
          width: 100%;
          max-width: 780px;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
        }

        .hero-semicircle-svg {
          width: 100%;
          height: auto;
          display: block;
          overflow: visible;
          filter: drop-shadow(0 20px 50px rgba(10, 34, 64, 0.22));
        }

        /* ========================================================================= */
        /* EXTENDED HERO DOWN: LIVE VOICE SIGNAL INTELLIGENCE SPECTRUM VISUALIZER   */
        /* ========================================================================= */
        .hero-signal-container {
          max-width: 1360px;
          margin: 28px auto 0;
          padding: 0 32px;
          position: relative;
          z-index: 5;
        }

        .voice-signal-card {
          background: #0A1C36;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 22px 28px;
          box-shadow: 0 16px 40px rgba(10, 28, 54, 0.22);
          position: relative;
          overflow: hidden;
        }

        .voice-signal-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .signal-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 14px;
          margin-bottom: 18px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .signal-title-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .signal-live-beacon {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 10px #10B981;
        }

        .signal-live-beacon.pulsing {
          animation: beaconPulse 1.8s infinite;
        }

        @keyframes beaconPulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.35); opacity: 1; box-shadow: 0 0 14px #10B981; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }

        .signal-icon-box {
          display: flex;
          align-items: center;
        }

        .signal-title-text {
          font-family: var(--font-mono);
          font-size: 0.84rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: #FFFFFF;
        }

        .signal-channel-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          background: rgba(56, 189, 248, 0.15);
          color: #38BDF8;
          border: 1px solid rgba(56, 189, 248, 0.3);
          padding: 3px 8px;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .signal-meta-stats {
          display: flex;
          align-items: center;
          gap: 18px;
          font-family: var(--font-mono);
          font-size: 0.74rem;
        }

        .signal-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .meta-lbl {
          color: #64748B;
          font-weight: 600;
        }

        .meta-val {
          font-weight: 700;
        }

        .signal-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #FFFFFF;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 700;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: all 0.2s;
        }

        .signal-toggle-btn:hover {
          background: rgba(232, 90, 42, 0.2);
          border-color: #E85A2A;
          color: #E85A2A;
        }

        /* Waveform Spectrum Stage */
        .waveform-spectrum-stage {
          position: relative;
          height: 100px;
          background: rgba(6, 17, 33, 0.75);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 12px 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .waveform-bars-track {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          gap: 4px;
          position: relative;
          z-index: 2;
        }

        .wave-bar-col {
          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .signal-wave-bar {
          width: 100%;
          max-width: 6px;
          background-color: var(--bar-color);
          border-radius: 3px;
          transition: height 0.2s ease;
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.35);
        }

        .signal-wave-bar.animating {
          animation: wavePulse var(--anim-duration) ease-in-out infinite alternate;
          animation-delay: var(--anim-delay);
        }

        @keyframes wavePulse {
          0% {
            height: 14%;
            opacity: 0.45;
          }
          50% {
            height: var(--bar-height);
            opacity: 0.95;
          }
          100% {
            height: calc(var(--bar-height) * 0.7 + 10%);
            opacity: 0.85;
          }
        }

        .spectrum-axis-line {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 1;
        }

        /* Frequency Axis Labels */
        .frequency-labels-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #64748B;
          padding: 8px 18px 0;
        }

        /* Signal Footer */
        .signal-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.74rem;
          color: #94A3B8;
          flex-wrap: wrap;
          gap: 10px;
        }

        .signal-footnote {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .signal-code-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #CBD5E1;
          letter-spacing: 0.04em;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1180px) {
          .hero-container {
            grid-template-columns: 480px 1fr;
            gap: 24px;
          }
          .hero-headline {
            font-size: 2.3rem;
          }
        }

        @media (max-width: 1024px) {
          .semicircle-hero-section {
            min-height: auto;
            padding-bottom: 50px;
          }
          .hero-container {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 0 24px;
          }
          .hero-content-col {
            padding-top: 36px;
            padding-bottom: 20px;
            max-width: 100%;
          }
          .hero-visual-col {
            justify-content: center;
          }
          .giant-semicircle-wrapper {
            max-width: 580px;
          }
          .hero-pill-buttons-row {
            flex-wrap: wrap;
          }
          .hero-trust-row {
            white-space: normal;
          }
          .hero-signal-container {
            padding: 0 24px;
            margin-top: 20px;
          }
          .signal-meta-stats {
            flex-wrap: wrap;
            gap: 10px;
          }
        }

        @media (max-width: 640px) {
          .hl-row {
            white-space: normal;
          }
          .hero-headline {
            font-size: 2.1rem;
          }
          .hero-pill-buttons-row {
            flex-direction: column;
            width: 100%;
          }
          .hero-pill-btn {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
          .waveform-spectrum-stage {
            height: 70px;
            padding: 8px 10px;
          }
          .frequency-labels-row {
            display: none;
          }
          .signal-footer-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
