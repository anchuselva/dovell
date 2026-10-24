'use client';

import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import VoiceWaveformCanvas from './VoiceWaveformCanvas';

export default function Hero() {
  return (
    <section id="platform" className="dovell-hero-section">
      {/* Full Cover Panoramic Background Graphic */}
      <div className="hero-cover-bg-wrap" aria-hidden="true">
        <img 
          src="/graphics/hero-extracted.png" 
          alt="Dovell Voice Intelligence Cover" 
          className="hero-cover-bg-img"
          loading="eager"
        />
        {/* Soft Frost/Gradient Overlay ensuring 100% text legibility on the left, full image clarity on the right */}
        <div className="hero-cover-gradient-overlay"></div>
        <div className="hero-cover-bottom-fade"></div>
      </div>

      <div className="hero-top-container">
        {/* Left Content Area: Headline, Description, Dual Action Buttons & Trust Labels */}
        <div className="hero-content-col">
          
          {/* Eyebrow Pill Badge */}
          <div className="hero-tag-badge">
            <span className="hero-tag-dot"></span>
            <span>VOICE INTELLIGENCE &amp; CONVERSATION ANALYTICS</span>
          </div>

          {/* Headline with 3 Distinct Rows and Coral Orange Accent */}
          <h1 className="hero-headline">
            <span className="hl-row">Conversations Hold</span>
            <span className="hl-row">Hidden Signals.</span>
            <span className="hl-row hero-accent-text">Bring Them Into Focus.</span>
          </h1>

          {/* Value Proposition Description */}
          <p className="hero-description-text">
            Organize voice recordings, review transcripts, and uncover meaningful conversation patterns in one centralized workspace. Dovell helps your team transform voice interactions into searchable records, structured evaluations, and actionable insights.
          </p>

          {/* Dual Pill Action Buttons */}
          <div className="hero-pill-buttons-row">
            <a href="#contact" className="hero-pill-btn hero-pill-primary">
              <span>Request a Demo</span>
              <ArrowRight size={15} />
            </a>
            <a href="#capabilities" className="hero-pill-btn hero-pill-secondary">
              <span>Explore the Platform →</span>
            </a>
          </div>

          {/* Supporting Micro Trust Labels with Coral Checkmarks */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <CheckCircle2 size={15} className="text-coral" />
              <span>Centralized audio records</span>
            </div>
            <div className="trust-sep">•</div>
            <div className="trust-item">
              <CheckCircle2 size={15} className="text-coral" />
              <span>Searchable transcripts</span>
            </div>
            <div className="trust-sep">•</div>
            <div className="trust-item">
              <CheckCircle2 size={15} className="text-coral" />
              <span>Traceable reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wide Animated Audio Waveform Stretching Across Hero Base */}
      <div className="hero-waveform-fullwidth">
        <VoiceWaveformCanvas />
      </div>

      <style jsx>{`
        .dovell-hero-section {
          background-color: #F8FAFC;
          position: relative;
          width: 100%;
          min-height: 640px;
          overflow: hidden;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* Full Cover Background Graphic */
        .hero-cover-bg-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .hero-cover-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: right 25%;
          display: block;
          filter: brightness(1.15) contrast(1.05) saturate(1.08);
        }

        /* Subtle gradient overlay: gives crisp contrast behind left text without dimming the picture */
        .hero-cover-gradient-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.94) 0%,
            rgba(255, 255, 255, 0.85) 30%,
            rgba(255, 255, 255, 0.45) 44%,
            rgba(255, 255, 255, 0.08) 58%,
            transparent 72%
          );
        }

        .hero-cover-bottom-fade {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 80px;
          background: linear-gradient(
            180deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.4) 60%,
            #FFFFFF 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        .hero-top-container {
          display: flex;
          align-items: center;
          position: relative;
          width: 100%;
          max-width: 1360px;
          margin: 0 auto;
          padding: 56px 32px 10px 32px;
          z-index: 2;
        }

        /* Left Content Column */
        .hero-content-col {
          display: flex;
          flex-direction: column;
          max-width: 580px;
          z-index: 2;
        }

        .hero-tag-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: #0A1C36;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
          width: fit-content;
          box-shadow: 0 2px 8px rgba(10, 28, 54, 0.04);
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
          font-size: clamp(2.3rem, 3.2vw, 3.2rem);
          font-weight: 800;
          line-height: 1.12;
          color: #0A1C36;
          letter-spacing: -0.03em;
          margin: 0 0 20px 0;
        }

        .hl-row {
          display: block;
          white-space: nowrap;
        }

        .hero-accent-text {
          color: #E85A2A;
          background: linear-gradient(135deg, #FF6B35 0%, #E85A2A 60%, #D0481B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .hero-description-text {
          font-family: var(--font-primary);
          font-size: 1.05rem;
          line-height: 1.68;
          color: #334155;
          font-weight: 500;
          max-width: 530px;
          margin: 0 0 28px 0;
        }

        /* Dual Pill Action Buttons Row */
        .hero-pill-buttons-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
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
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          color: #0A1C36;
          border: 2px solid #CBD5E1;
        }

        .hero-pill-secondary:hover {
          border-color: #0A1C36;
          background: #FFFFFF;
          transform: translateY(-2px);
        }

        /* Micro Trust Row */
        .hero-trust-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-primary);
          font-size: 0.85rem;
          color: #475569;
          font-weight: 600;
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

        /* Wide Full-Width Waveform at Bottom */
        .hero-waveform-fullwidth {
          width: 100%;
          height: 200px;
          position: relative;
          z-index: 2;
          margin-top: 10px;
          overflow: hidden;
          line-height: 0;
          pointer-events: none;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1180px) {
          .hero-headline {
            font-size: 2.6rem;
          }
          .hero-content-col {
            max-width: 520px;
          }
        }

        @media (max-width: 1024px) {
          .dovell-hero-section {
            min-height: auto;
          }
          .hero-cover-bg-img {
            object-position: 70% center;
          }
          .hero-cover-gradient-overlay {
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.92) 0%,
              rgba(255, 255, 255, 0.82) 48%,
              rgba(255, 255, 255, 0.65) 100%
            );
          }
          .hero-top-container {
            padding: 40px 24px 10px 24px;
          }
          .hero-content-col {
            max-width: 100%;
          }
          .hero-pill-buttons-row {
            flex-wrap: wrap;
          }
          .hero-trust-row {
            white-space: normal;
          }
          .hero-waveform-fullwidth {
            height: 160px;
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
          .hero-waveform-fullwidth {
            height: 130px;
            margin-top: 4px;
          }
        }
      `}</style>
    </section>
  );
}
