'use client';

import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Radio
} from 'lucide-react';

export default function Hero() {
  // 52 Waveform bars forming the two distinct voice speech burst spindles matching user's Image 2
  const barsData = [
    // Lead-in
    { h: 14, peak: false },
    { h: 18, peak: false },
    { h: 22, peak: false },
    { h: 28, peak: false },
    // Burst 1 (First Voice Spindle)
    { h: 38, peak: false },
    { h: 54, peak: false },
    { h: 72, peak: true },
    { h: 96, peak: true },
    { h: 124, peak: true },
    { h: 148, peak: true }, // Crest 1
    { h: 132, peak: true },
    { h: 104, peak: true },
    { h: 78, peak: true },
    { h: 58, peak: false },
    { h: 42, peak: false },
    { h: 28, peak: false },
    // Valley
    { h: 20, peak: false },
    { h: 16, peak: false },
    { h: 18, peak: false },
    { h: 22, peak: false },
    { h: 26, peak: false },
    // Burst 2 (Dominant Voice Spindle)
    { h: 40, peak: false },
    { h: 62, peak: true },
    { h: 90, peak: true },
    { h: 128, peak: true },
    { h: 165, peak: true },
    { h: 195, peak: true }, // High Crest 2
    { h: 180, peak: true },
    { h: 145, peak: true },
    { h: 112, peak: true },
    { h: 84, peak: true },
    { h: 60, peak: false },
    { h: 42, peak: false },
    { h: 30, peak: false },
    // Inter-spindle Valley
    { h: 22, peak: false },
    { h: 18, peak: false },
    { h: 20, peak: false },
    { h: 26, peak: false },
    // Burst 3 (Secondary Spindle on Right)
    { h: 45, peak: false },
    { h: 74, peak: true },
    { h: 110, peak: true },
    { h: 138, peak: true }, // Crest 3
    { h: 122, peak: true },
    { h: 95, peak: true },
    { h: 68, peak: false },
    { h: 48, peak: false },
    { h: 32, peak: false },
    // Trailing out
    { h: 22, peak: false },
    { h: 18, peak: false },
    { h: 14, peak: false },
    { h: 12, peak: false }
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

        {/* Right Column: Giant Circular Semicircle Bowl with LIVE RUNNING VOICE SIGNAL (Matching Image 2) */}
        <div className="hero-visual-col">
          <div className="giant-semicircle-wrapper">
            
            <svg 
              className="hero-semicircle-svg" 
              viewBox="0 0 840 460" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Semicircular ClipPath: Center (420, 0), Radius = 390 */}
                <clipPath id="heroPhotoBowlClip">
                  <path d="M 30,0 A 390,390 0 0,0 810,0 Z" />
                </clipPath>

                {/* Soft Vignette Overlay */}
                <radialGradient id="heroVignette" cx="50%" cy="30%" r="75%">
                  <stop offset="30%" stopColor="rgba(10, 34, 64, 0)" />
                  <stop offset="100%" stopColor="rgba(6, 17, 33, 0.75)" />
                </radialGradient>

                {/* Cyan Neon Glow Filter */}
                <filter id="voiceCyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Orange Flare Filter */}
                <filter id="orangeNodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Drop Shadow for Orbit Arcs */}
                <filter id="heroArcShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="rgba(10, 34, 64, 0.35)" />
                </filter>
              </defs>

              {/* === THE GIANT SEMICIRCULAR PHOTO BOWL === */}
              <g clipPath="url(#heroPhotoBowlClip)">
                {/* Deep Studio Navy Base */}
                <rect x="30" y="0" width="780" height="460" fill="#07172E" />

                {/* Background Texture & Grid from Reference Image 2 */}
                <image 
                  href="/images/voice-signal-running.png" 
                  x="30" 
                  y="0" 
                  width="780" 
                  height="460" 
                  preserveAspectRatio="xMidYMid slice" 
                  opacity="0.32"
                  style={{ mixBlendMode: 'screen' }}
                />

                {/* Background Fine Vertical Coordinate Grid Lines */}
                {[120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720].map((gx, gIdx) => (
                  <line 
                    key={gIdx} 
                    x1={gx} 
                    y1="40" 
                    x2={gx} 
                    y2="420" 
                    stroke="rgba(56, 189, 248, 0.08)" 
                    strokeWidth="1" 
                    strokeDasharray="4 6" 
                  />
                ))}

                {/* Neural Orange Network Line on Upper Right (matching Image 2) */}
                <g className="network-nodes-group">
                  <path 
                    d="M 540,110 L 680,55 L 770,105" 
                    fill="none" 
                    stroke="#E85A2A" 
                    strokeWidth="2" 
                    opacity="0.85" 
                  />
                  <path 
                    d="M 680,55 L 750,25" 
                    fill="none" 
                    stroke="#38BDF8" 
                    strokeWidth="1.5" 
                    opacity="0.6" 
                  />
                  {/* Glowing Orange Node */}
                  <circle cx="680" cy="55" r="5" fill="#E85A2A" filter="url(#orangeNodeGlow)" />
                  <circle cx="680" cy="55" r="10" fill="none" stroke="#E85A2A" opacity="0.4" className="pulse-aura" />
                  <circle cx="770" cy="105" r="3.5" fill="#38BDF8" />
                </g>

                {/* Ambient Center Cyan Glow Aura behind the Voice Waves */}
                <circle cx="430" cy="225" r="140" fill="rgba(56, 189, 248, 0.12)" filter="url(#voiceCyanGlow)" />

                {/* ========================================================================= */}
                {/* LIVE RUNNING VOICE SIGNAL BARS (Match Image 2: Dual Spindles, Pulsing)     */}
                {/* ========================================================================= */}
                <g className="running-voice-spindles">
                  {barsData.map((bar, i) => {
                    const startX = 110;
                    const step = 11.5;
                    const x = startX + i * step;
                    const centerY = 225;
                    const rawH = bar.h;
                    const y = centerY - rawH / 2;
                    const isPeak = bar.peak;
                    const animDelay = (i * 0.045) % 0.8;
                    const animDuration = 1.1 + (i % 5) * 0.12;

                    return (
                      <rect 
                        key={i}
                        x={x}
                        y={y}
                        width="5.5"
                        height={rawH}
                        rx="2.75"
                        ry="2.75"
                        fill={isPeak ? '#00D4FF' : '#38BDF8'}
                        filter="url(#voiceCyanGlow)"
                        className="voice-bar-running"
                        style={{
                          transformOrigin: `${x + 2.75}px ${centerY}px`,
                          animationDelay: `${animDelay}s`,
                          animationDuration: `${animDuration}s`
                        }}
                      />
                    );
                  })}
                </g>

                {/* Smooth Glowing Electric Cyan Sine Wave Crossing Through Bars (Match Image 2) */}
                <path 
                  d="M 50,225 C 130,155 190,295 270,225 S 410,145 490,225 S 630,305 710,215 S 770,250 820,225" 
                  fill="none" 
                  stroke="#38BDF8" 
                  strokeWidth="2.8" 
                  filter="url(#voiceCyanGlow)"
                  className="voice-crossing-sine-wave"
                />

                {/* Secondary Soft Cyan Flow Line */}
                <path 
                  d="M 50,225 C 150,285 230,165 330,225 S 510,295 610,225 S 730,175 820,225" 
                  fill="none" 
                  stroke="#7DD3FC" 
                  strokeWidth="1.2" 
                  opacity="0.45" 
                />

                {/* Zero-Crossing Baseline Axis */}
                <line 
                  x1="50" 
                  y1="225" 
                  x2="810" 
                  y2="225" 
                  stroke="rgba(255, 255, 255, 0.14)" 
                  strokeWidth="1" 
                />

                {/* Vignette Overlay for Depth */}
                <rect x="30" y="0" width="780" height="460" fill="url(#heroVignette)" />

                {/* Top Border */}
                <line x1="30" y1="1" x2="810" y2="1" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
              </g>

              {/* === CONCENTRIC ORBIT STROKES (Signature Curved Frame) === */}
              {/* 1. Left Arc: Electric Cyan */}
              <path 
                d="M 38,130 A 405,405 0 0,0 274,385" 
                stroke="#38BDF8" 
                strokeWidth="8" 
                strokeLinecap="round" 
                filter="url(#heroArcShadow)"
              />

              {/* 2. Bottom-Right Arc: Dark Navy */}
              <path 
                d="M 385,410 A 398,398 0 0,0 758,228" 
                stroke="#0A2240" 
                strokeWidth="9" 
                strokeLinecap="round" 
              />

              {/* 3. Bottom Outer Arc: Soft Sky Blue */}
              <path 
                d="M 180,355 A 418,418 0 0,0 600,390" 
                stroke="#BAE6FD" 
                strokeWidth="6.5" 
                strokeLinecap="round" 
              />
            </svg>

            {/* Subtle Live Floating Telemetry Badge in Bottom Corner */}
            <div className="hero-voice-live-badge">
              <span className="live-pulse-dot"></span>
              <span className="badge-text">VOICE SIGNAL · RUNNING</span>
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        .semicircle-hero-section {
          background-color: #FFFFFF;
          position: relative;
          width: 100%;
          min-height: 590px;
          overflow: hidden;
          border-bottom: 1px solid #E2E8F0;
          padding-top: 0;
          padding-bottom: 50px;
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
          padding-top: 50px;
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

        /* Running Voice Signal Bars Animation (Speech Wave undulation) */
        .voice-bar-running {
          animation: runningVoicePulse 1.25s ease-in-out infinite alternate;
        }

        @keyframes runningVoicePulse {
          0% {
            transform: scaleY(0.72);
            opacity: 0.75;
          }
          50% {
            transform: scaleY(1.3);
            opacity: 1;
            filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.9));
          }
          100% {
            transform: scaleY(0.85);
            opacity: 0.82;
          }
        }

        /* Crossing Sine Wave Animation */
        .voice-crossing-sine-wave {
          animation: sineFlow 4s ease-in-out infinite alternate;
        }

        @keyframes sineFlow {
          0% {
            opacity: 0.8;
            stroke-width: 2.6px;
          }
          50% {
            opacity: 1;
            stroke-width: 3.4px;
            filter: drop-shadow(0 0 12px rgba(56, 189, 248, 0.95));
          }
          100% {
            opacity: 0.85;
            stroke-width: 2.8px;
          }
        }

        /* Pulse Aura */
        .pulse-aura {
          animation: auraPulse 2s infinite ease-out;
          transform-origin: 680px 55px;
        }

        @keyframes auraPulse {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        /* Floating Live Status Badge */
        .hero-voice-live-badge {
          position: absolute;
          bottom: 24px;
          left: 48px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(10, 28, 54, 0.88);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(56, 189, 248, 0.35);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
          z-index: 5;
        }

        .live-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #38BDF8;
          box-shadow: 0 0 8px #38BDF8;
          animation: dotBlink 1.4s infinite;
        }

        @keyframes dotBlink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }

        .badge-text {
          font-family: var(--font-mono);
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #E2E8F0;
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
            padding-bottom: 40px;
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
          .hero-voice-live-badge {
            left: 20px;
            bottom: 16px;
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
        }
      `}</style>
    </section>
  );
}
