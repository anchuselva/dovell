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
        
        {/* Left Column: Exactly Aligned with Navbar Grid Guidelines */}
        <div className="hero-content-col">
          
          {/* Subtle Platform Tag */}
          <div className="hero-tag-badge">
            <span className="hero-tag-dot"></span>
            <span>ENTERPRISE KNOWLEDGE GRAPH &amp; GPU OPTIMIZATION</span>
          </div>

          {/* 4-Line Punchy Headline styled with Website Theme Typography */}
          <h1 className="hero-headline">
            <span className="hl-row">Connect enterprise silos,</span>
            <span className="hl-row">map dependencies,</span>
            <span className="hl-row">and navigate</span>
            <span className="hl-row hero-accent-text">complex relationships</span>
          </h1>

          {/* Clean Theme Description Text */}
          <p className="hero-description-text">
            Transform disconnected databases, business systems, and documents into an interactive knowledge graph. Trace multi-hop connections, run GPU-accelerated relationship analytics, and retrieve linked context with full data provenance.
          </p>

          {/* Dual Pill Buttons Row (Clean Single Horizontal Row) */}
          <div className="hero-pill-buttons-row">
            <a href="#contact" className="hero-pill-btn hero-pill-primary">
              <span>Explore Knowledge Graph</span>
              <ArrowRight size={15} />
            </a>
            <a href="#calculator" className="hero-pill-btn hero-pill-secondary">
              <span>Calculate Cloud Savings →</span>
            </a>
          </div>

          {/* Micro Trust Indicators (Single Neat Row) */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <CheckCircle2 size={14} className="text-coral" />
              <span>Zero-ETL ingestion</span>
            </div>
            <div className="trust-sep">•</div>
            <div className="trust-item">
              <CheckCircle2 size={14} className="text-coral" />
              <span>Multi-hop &lt; 0.08ms latency</span>
            </div>
            <div className="trust-sep">•</div>
            <div className="trust-item">
              <CheckCircle2 size={14} className="text-coral" />
              <span>Full data provenance</span>
            </div>
          </div>
        </div>

        {/* Right Column: Giant Circular Photo Bowl (Sized to Balance with Zero Text Collision) */}
        <div className="hero-visual-col">
          <div className="giant-semicircle-wrapper">
            
            <svg 
              className="hero-semicircle-svg" 
              viewBox="0 0 840 430" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* 1. Semicircular ClipPath: Center (420, 0), Radius = 385 */}
                <clipPath id="heroPhotoBowlClip">
                  <path d="M 35,0 A 385,385 0 0,0 805,0 Z" />
                </clipPath>

                {/* 2. Soft Photo Vignette Overlay */}
                <radialGradient id="heroVignette" cx="50%" cy="20%" r="80%">
                  <stop offset="35%" stopColor="rgba(10, 34, 64, 0)" />
                  <stop offset="100%" stopColor="rgba(10, 34, 64, 0.42)" />
                </radialGradient>

                {/* 3. Drop Shadow for Orbit Arcs */}
                <filter id="heroArcShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="rgba(10, 34, 64, 0.28)" />
                </filter>
              </defs>

              {/* === THE GIANT SEMICIRCULAR PHOTO BOWL (Full-Bleed Real Photograph) === */}
              <g clipPath="url(#heroPhotoBowlClip)">
                {/* Dark Navy Base */}
                <rect x="35" y="0" width="770" height="430" fill="#0A2240" />

                {/* Full-bleed Real High-Resolution Photograph */}
                <image 
                  href="/images/hero-cluster.jpg" 
                  x="35" 
                  y="0" 
                  width="770" 
                  height="400" 
                  preserveAspectRatio="xMidYMid slice" 
                  className="fullbleed-hero-img"
                />

                {/* Subtle Cinematic Vignette for Depth */}
                <rect x="35" y="0" width="770" height="430" fill="url(#heroVignette)" />

                {/* Subtle Top-Edge Border Overlay */}
                <line x1="35" y1="1" x2="805" y2="1" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" />
              </g>

              {/* === THE SIGNATURE CONCENTRIC ORBIT STROKES (Center 420, 0) === */}

              {/* 1. Left Arc: Electric Cyan stroke framing the left edge of the circular bowl */}
              {/* Radius = 399 (14px offset), Theta 162° to 112° */}
              <path 
                d="M 41,123 A 399,399 0 0,0 271,370" 
                stroke="#38BDF8" 
                strokeWidth="7.5" 
                strokeLinecap="round" 
                filter="url(#heroArcShadow)"
              />

              {/* 2. Bottom-Right Arc: Dark Navy stroke hugging the lower-right curve */}
              {/* Radius = 393 (8px offset), Theta 96° to 34° */}
              <path 
                d="M 379,391 A 393,393 0 0,0 746,220" 
                stroke="#0A2240" 
                strokeWidth="8.5" 
                strokeLinecap="round" 
              />

              {/* 3. Bottom Outer Arc: Soft Sky Blue stroke sweeping underneath the bottom curve */}
              {/* Radius = 412 (27px offset), Theta 125° to 65° */}
              <path 
                d="M 184,338 A 412,412 0 0,0 594,373" 
                stroke="#BAE6FD" 
                strokeWidth="6" 
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
          min-height: 560px;
          overflow: hidden;
          border-bottom: 1px solid #E2E8F0;
          padding-top: 0;
        }

        /* Container exactly aligned with Navbar guidelines: max-width: 1360px, padding: 0 32px */
        .hero-container {
          display: grid;
          grid-template-columns: 540px 1fr;
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
          padding-bottom: 60px;
          z-index: 2;
          max-width: 540px;
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

        /* 4-Line Headline styled with Plus Jakarta Sans theme typography */
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
          max-width: 510px;
          margin: 0 0 32px 0;
        }

        /* Dual Pill Buttons Row (Clean Single Horizontal Row) */
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

        /* Right Column: Giant Semicircle Visual (Anchored Flush to Navbar) */
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
          transition: transform 0.4s ease;
        }

        .giant-semicircle-wrapper:hover .hero-semicircle-svg {
          transform: translateY(2px);
        }

        /* Neat Status Pill at Bottom of Semicircle */
        .semicircle-status-pill {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(10, 34, 64, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(14px);
          color: #FFFFFF;
          padding: 8px 22px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 9px;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
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
          font-size: 0.74rem;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1180px) {
          .hero-container {
            grid-template-columns: 500px 1fr;
            gap: 24px;
          }
          .hero-headline {
            font-size: 2.3rem;
          }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
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
            bottom: 10px;
            padding: 6px 14px;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
}
