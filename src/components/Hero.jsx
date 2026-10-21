'use client';

import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Sparkles
} from 'lucide-react';

export default function Hero() {
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
              viewBox="0 0 840 430" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Semicircular ClipPath: Center (420, 0), Radius = 385 */}
                <clipPath id="heroPhotoBowlClip">
                  <path d="M 35,0 A 385,385 0 0,0 805,0 Z" />
                </clipPath>

                {/* Soft Vignette Overlay */}
                <radialGradient id="heroVignette" cx="50%" cy="25%" r="80%">
                  <stop offset="30%" stopColor="rgba(10, 34, 64, 0)" />
                  <stop offset="100%" stopColor="rgba(10, 34, 64, 0.6)" />
                </radialGradient>

                {/* Drop Shadow for Orbit Arcs */}
                <filter id="heroArcShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="rgba(10, 34, 64, 0.3)" />
                </filter>
              </defs>

              {/* === THE GIANT SEMICIRCULAR PHOTO BOWL === */}
              <g clipPath="url(#heroPhotoBowlClip)">
                {/* Dark Navy Deep Studio Base */}
                <rect x="35" y="0" width="770" height="430" fill="#0A2240" />

                {/* Blended High-Tech Voice Network Texture */}
                <image 
                  href="/images/hero-cluster.jpg" 
                  x="35" 
                  y="0" 
                  width="770" 
                  height="400" 
                  preserveAspectRatio="xMidYMid slice" 
                  opacity="0.38"
                  style={{ mixBlendMode: 'luminosity' }}
                />

                {/* Vignette Overlay */}
                <rect x="35" y="0" width="770" height="430" fill="url(#heroVignette)" />

                {/* Top Border */}
                <line x1="35" y1="1" x2="805" y2="1" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" />
              </g>

              {/* === CONCENTRIC ORBIT STROKES === */}
              {/* 1. Left Arc: Electric Cyan */}
              <path 
                d="M 41,123 A 399,399 0 0,0 271,370" 
                stroke="#38BDF8" 
                strokeWidth="7.5" 
                strokeLinecap="round" 
                filter="url(#heroArcShadow)"
              />

              {/* 2. Bottom-Right Arc: Dark Navy */}
              <path 
                d="M 379,391 A 393,393 0 0,0 746,220" 
                stroke="#0A2240" 
                strokeWidth="8.5" 
                strokeLinecap="round" 
              />

              {/* 3. Bottom Outer Arc: Soft Sky Blue */}
              <path 
                d="M 184,338 A 412,412 0 0,0 594,373" 
                stroke="#BAE6FD" 
                strokeWidth="6" 
                strokeLinecap="round" 
              />
            </svg>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* EXTENDED HERO DOWN: GLOWING NEON VOICE SIGNAL WAVEFORM (ATTACHMENT MATCH) */}
      {/* ========================================================================= */}
      <div className="voice-signal-hero-banner">
        <div className="container signal-inner-container">
          
          <div className="signal-glow-frame">
            {/* Ambient Background Aura behind the Wave */}
            <div className="signal-aura-glow"></div>

            {/* Glowing Voice Waveform Visual */}
            <div className="signal-image-wrapper">
              <img 
                src="/images/voice-signal-hero.png" 
                alt="Dovell Voice Intelligence Signal Waveform"
                className="signal-waveform-img"
              />
              
              {/* Subtle Animated Luminous Shimmer Scanline */}
              <div className="signal-scanline-sweep"></div>
              
              {/* Vignette Gradients for Flawless Blending */}
              <div className="signal-edge-fade-left"></div>
              <div className="signal-edge-fade-right"></div>
              <div className="signal-edge-fade-bottom"></div>
            </div>

            {/* Minimalist Tech Badges Floating on the Waveform */}
            <div className="signal-floating-tags">
              <div className="signal-chip chip-left">
                <span className="pulse-dot-violet"></span>
                <span className="chip-text">48 kHz ACOUSTIC SIGNAL</span>
              </div>
              <div className="signal-chip chip-center">
                <Activity size={12} className="text-pink" />
                <span className="chip-text">REAL-TIME VOICE SPECTRUM</span>
              </div>
              <div className="signal-chip chip-right">
                <span className="pulse-dot-coral"></span>
                <span className="chip-text">LOSSLESS VOICE INGESTION</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style jsx>{`
        .semicircle-hero-section {
          background-color: #FFFFFF;
          position: relative;
          width: 100%;
          min-height: 780px;
          overflow: hidden;
          border-bottom: 1px solid #E2E8F0;
          padding-top: 0;
          padding-bottom: 40px;
          display: flex;
          flex-direction: column;
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
          flex: 1;
        }

        /* Left Content Column */
        .hero-content-col {
          display: flex;
          flex-direction: column;
          padding-top: 50px;
          padding-bottom: 30px;
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

        /* ========================================================================= */
        /* EXTENDED HERO DOWN: GLOWING NEON VOICE SIGNAL WAVEFORM                    */
        /* ========================================================================= */
        .voice-signal-hero-banner {
          width: 100%;
          margin-top: 10px;
          position: relative;
          z-index: 5;
        }

        .signal-inner-container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .signal-glow-frame {
          position: relative;
          width: 100%;
          background: #020617;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 20px 50px -10px rgba(10, 28, 54, 0.4), 0 0 30px rgba(124, 58, 237, 0.15);
        }

        .signal-aura-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 15% 50%, rgba(139, 92, 246, 0.25) 0%, transparent 50%),
                      radial-gradient(circle at 85% 50%, rgba(232, 90, 42, 0.25) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }

        .signal-image-wrapper {
          position: relative;
          width: 100%;
          height: 195px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #000000;
        }

        .signal-waveform-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
          display: block;
          filter: contrast(1.1) brightness(1.05);
          transition: transform 0.8s ease;
        }

        .signal-glow-frame:hover .signal-waveform-img {
          transform: scale(1.02);
        }

        /* Shimmer sweep animation */
        .signal-scanline-sweep {
          position: absolute;
          top: 0;
          bottom: 0;
          left: -100%;
          width: 60%;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 50%, transparent 100%);
          transform: skewX(-20deg);
          animation: shimmerWave 6s infinite ease-in-out;
          pointer-events: none;
          z-index: 2;
        }

        @keyframes shimmerWave {
          0% { left: -100%; }
          50% { left: 160%; }
          100% { left: 160%; }
        }

        /* Edge fades for smooth cinematic blending */
        .signal-edge-fade-left {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 80px;
          background: linear-gradient(90deg, #020617 0%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }

        .signal-edge-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 80px;
          background: linear-gradient(270deg, #020617 0%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }

        .signal-edge-fade-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 24px;
          background: linear-gradient(0deg, rgba(2, 6, 23, 0.8) 0%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* Floating Minimalist Chips */
        .signal-floating-tags {
          position: absolute;
          top: 14px;
          left: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 4;
          pointer-events: none;
        }

        .signal-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(10, 28, 54, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-full);
          padding: 4px 12px;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #E2E8F0;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
        }

        .pulse-dot-violet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #A855F7;
          box-shadow: 0 0 8px #A855F7;
          animation: pulseDot 2s infinite;
        }

        .pulse-dot-coral {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #E85A2A;
          box-shadow: 0 0 8px #E85A2A;
          animation: pulseDot 2s infinite 1s;
        }

        .text-pink {
          color: #F43F5E;
        }

        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
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
            padding-bottom: 30px;
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
          .signal-inner-container {
            padding: 0 24px;
          }
          .signal-image-wrapper {
            height: 150px;
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
          .signal-image-wrapper {
            height: 110px;
          }
          .signal-floating-tags {
            justify-content: center;
          }
          .chip-left, .chip-right {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
