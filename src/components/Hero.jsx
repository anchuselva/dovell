'use client';

import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="semicircle-hero-section">
      <div className="container hero-container">
        
        {/* Left Column: 4-Line Punchy Headline, Subtitle, Dual Pill Buttons & Trust */}
        <div className="hero-content-col">
          
          {/* Subtle Platform Tag */}
          <div className="hero-tag-badge">
            <span className="hero-tag-dot"></span>
            <span>ENTERPRISE KNOWLEDGE GRAPH &amp; GPU OPTIMIZATION</span>
          </div>

          {/* 4-Line Punchy Headline */}
          <h1 className="hero-headline">
            <span className="hl-row">Connect enterprise silos,</span>
            <span className="hl-row">map dependencies,</span>
            <span className="hl-row">and navigate</span>
            <span className="hl-row hero-accent-text">complex relationships</span>
          </h1>

          {/* Clean Description Text */}
          <p className="hero-description-text">
            Transform disconnected databases, business systems, and documents into an interactive knowledge graph. Trace multi-hop connections, run GPU-accelerated relationship analytics, and retrieve linked context with full data provenance.
          </p>

          {/* Dual Pill Buttons Row */}
          <div className="hero-pill-buttons-row">
            <a href="#contact" className="hero-pill-btn hero-pill-primary">
              <span>Explore Knowledge Graph</span>
              <ArrowRight size={16} />
            </a>
            <a href="#calculator" className="hero-pill-btn hero-pill-secondary">
              <span>Calculate Cloud Savings →</span>
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <CheckCircle2 size={15} className="text-coral" />
              <span>Zero-ETL ingestion</span>
            </div>
            <div className="trust-sep">•</div>
            <div className="trust-item">
              <CheckCircle2 size={15} className="text-coral" />
              <span>Multi-hop sub-0.08ms latency</span>
            </div>
            <div className="trust-sep">•</div>
            <div className="trust-item">
              <CheckCircle2 size={15} className="text-coral" />
              <span>Full data provenance</span>
            </div>
          </div>
        </div>

        {/* Right Column: Giant Semicircular Photo Bowl (MASSIVE SCALE - Fills Hero Section Height) */}
        <div className="hero-visual-col">
          <div className="giant-semicircle-wrapper">
            
            <svg 
              className="hero-semicircle-svg" 
              viewBox="0 0 1200 620" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* 1. Semicircular ClipPath: Center (600, 0), Radius = 560 */}
                <clipPath id="massiveHeroBowlClip">
                  <path d="M 40,0 A 560,560 0 0,0 1160,0 Z" />
                </clipPath>

                {/* 2. Soft Photo Vignette Overlay */}
                <radialGradient id="massivePhotoVignette" cx="50%" cy="20%" r="80%">
                  <stop offset="35%" stopColor="rgba(10, 34, 64, 0)" />
                  <stop offset="100%" stopColor="rgba(10, 34, 64, 0.45)" />
                </radialGradient>

                {/* 3. Drop Shadow for Orbit Arcs */}
                <filter id="massiveArcShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="rgba(10, 34, 64, 0.3)" />
                </filter>
              </defs>

              {/* === THE GIANT SEMICIRCULAR PHOTO BOWL (Full-Bleed Real Photograph) === */}
              <g clipPath="url(#massiveHeroBowlClip)">
                {/* Dark Navy Base */}
                <rect x="40" y="0" width="1120" height="620" fill="#0A2240" />

                {/* Full-bleed Real High-Resolution Photograph */}
                <image 
                  href="/images/hero-cluster.jpg" 
                  x="40" 
                  y="0" 
                  width="1120" 
                  height="580" 
                  preserveAspectRatio="xMidYMid slice" 
                  className="fullbleed-massive-photo"
                />

                {/* Subtle Cinematic Vignette for Depth */}
                <rect x="40" y="0" width="1120" height="620" fill="url(#massivePhotoVignette)" />

                {/* Subtle Top-Edge Border Overlay */}
                <line x1="40" y1="1" x2="1160" y2="1" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" />
              </g>

              {/* === THE SIGNATURE CONCENTRIC ORBIT STROKES (Center 600, 0) === */}

              {/* 1. Left Arc: Electric Cyan stroke framing the left edge of the circular bowl */}
              {/* Radius = 578 (18px offset), Theta 162° to 112° */}
              <path 
                d="M 50,179 A 578,578 0 0,0 384,536" 
                stroke="#38BDF8" 
                strokeWidth="9.5" 
                strokeLinecap="round" 
                filter="url(#massiveArcShadow)"
              />

              {/* 2. Bottom-Right Arc: Dark Navy stroke hugging the lower-right curve */}
              {/* Radius = 572 (12px offset), Theta 96° to 34° */}
              <path 
                d="M 540,569 A 572,572 0 0,0 1074,320" 
                stroke="#0A2240" 
                strokeWidth="11" 
                strokeLinecap="round" 
              />

              {/* 3. Bottom Outer Arc: Soft Sky Blue stroke sweeping underneath the bottom curve */}
              {/* Radius = 596 (36px offset), Theta 125° to 65° */}
              <path 
                d="M 258,488 A 596,596 0 0,0 852,540" 
                stroke="#BAE6FD" 
                strokeWidth="8.5" 
                strokeLinecap="round" 
              />
            </svg>

            {/* Live Telemetry Glassmorphism Pill at Bottom Center of the Bowl */}
            <div className="semicircle-status-pill">
              <span className="live-pulse-dot"></span>
              <span className="status-label">Dovell GPU Supercluster</span>
              <span className="status-sep">•</span>
              <span className="status-metric">94.8% VRAM Packed</span>
              <span className="status-sep">•</span>
              <span className="status-metric">&lt; 0.08ms</span>
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        .semicircle-hero-section {
          background-color: #FFFFFF;
          position: relative;
          width: 100%;
          min-height: 640px;
          overflow: hidden;
          border-bottom: 1px solid #E2E8F0;
          padding-top: 0;
        }

        .hero-container {
          display: grid;
          grid-template-columns: minmax(460px, 520px) 1fr;
          align-items: center;
          gap: 20px;
          position: relative;
          max-width: 1680px;
          margin: 0 auto;
          padding: 0 0 0 40px;
          min-height: 640px;
        }

        /* Left Content Column */
        .hero-content-col {
          display: flex;
          flex-direction: column;
          padding-top: 40px;
          padding-bottom: 50px;
          z-index: 2;
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

        /* 4-Line Headline */
        .hero-headline {
          display: flex;
          flex-direction: column;
          font-size: clamp(2.1rem, 3.1vw, 3.35rem);
          font-weight: 900;
          line-height: 1.1;
          color: #0A1C36;
          letter-spacing: -0.035em;
          margin: 0 0 22px 0;
          font-family: var(--font-primary), 'Plus Jakarta Sans', sans-serif;
        }

        .hl-row {
          display: block;
          white-space: nowrap;
        }

        .hero-accent-text {
          color: #7C3AED;
          background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6366F1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .hero-description-text {
          font-size: 1.02rem;
          line-height: 1.62;
          color: #334155;
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
          flex-wrap: wrap;
        }

        .hero-pill-btn {
          padding: 14px 30px;
          font-size: 0.94rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          letter-spacing: 0.01em;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
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
          box-shadow: 0 10px 24px rgba(232, 90, 42, 0.35);
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
          font-size: 0.83rem;
          color: #64748B;
          font-weight: 500;
          flex-wrap: wrap;
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

        /* Right Column: Giant Semicircle Visual (MASSIVE Full-Height Presence) */
        .hero-visual-col {
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          width: 100%;
          height: 100%;
          position: relative;
          padding-top: 0;
          overflow: visible;
        }

        .giant-semicircle-wrapper {
          position: relative;
          width: 100%;
          max-width: 1140px;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
        }

        .hero-semicircle-svg {
          width: 100%;
          height: auto;
          max-height: 620px;
          display: block;
          overflow: visible;
          filter: drop-shadow(0 25px 65px rgba(10, 34, 64, 0.28));
          transition: transform 0.4s ease;
        }

        .giant-semicircle-wrapper:hover .hero-semicircle-svg {
          transform: translateY(2px);
        }

        /* Neat Status Pill at Bottom of Semicircle */
        .semicircle-status-pill {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(10, 34, 64, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(14px);
          color: #FFFFFF;
          padding: 10px 26px;
          border-radius: var(--radius-full);
          font-size: 0.84rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.38);
          white-space: nowrap;
          z-index: 5;
          pointer-events: none;
        }

        .live-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ADE80;
          box-shadow: 0 0 10px #4ADE80;
          flex-shrink: 0;
        }

        .status-label {
          color: #FFFFFF;
          font-weight: 700;
        }

        .status-sep {
          color: rgba(255, 255, 255, 0.4);
        }

        .status-metric {
          color: #BAE6FD;
          font-family: var(--font-mono);
          font-size: 0.76rem;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1360px) {
          .hero-container {
            grid-template-columns: 480px 1fr;
            padding: 0 0 0 32px;
          }
          .giant-semicircle-wrapper {
            max-width: 960px;
          }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 0 24px;
            min-height: auto;
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
            max-width: 640px;
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
          .semicircle-status-pill {
            bottom: 14px;
            padding: 7px 16px;
            font-size: 0.72rem;
          }
        }
      `}</style>
    </section>
  );
}
