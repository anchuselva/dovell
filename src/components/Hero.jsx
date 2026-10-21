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
      <div className="hero-top-container">
        
        {/* Left Column: Headline, Description, Dual Action Buttons & Trust Labels */}
        <div className="hero-content-col">
          
          {/* Eyebrow Pill Badge */}
          <div className="hero-tag-badge">
            <span className="hero-tag-dot"></span>
            <span>VOICE INTELLIGENCE &amp; CONVERSATION ANALYTICS</span>
          </div>

          {/* Headline with 3 Distinct Rows and Violet/Blue Accent */}
          <h1 className="hero-headline">
            <span className="hl-row">Every conversation</span>
            <span className="hl-row">holds insight.</span>
            <span className="hl-row hero-accent-text">Bring yours into focus.</span>
          </h1>

          {/* Value Proposition Description */}
          <p className="hero-description-text">
            Organize audio recordings, review transcripts, and uncover recurring topics in one centralized workspace. Dovell helps your team turn voice interactions into searchable records, structured reviews, and clear conversation outcomes.
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

        {/* Right Column: Person Wearing Headset inside Dark Circle with Concentric Orbit Arcs */}
        <div className="hero-visual-col">
          <div className="agent-circle-visual-wrapper">
            {/* Real Graphic cropped cleanly from reference image */}
            <img 
              src="/images/headset-agent-circle-transparent.png" 
              alt="Dovell Voice Intelligence Agent" 
              className="agent-circle-img"
              loading="eager"
            />
          </div>
        </div>

      </div>

      {/* Wide Animated Audio Waveform Stretching Across Hero Below BOTH Text & Circle */}
      <div className="hero-waveform-fullwidth">
        <VoiceWaveformCanvas />
      </div>

      <style jsx>{`
        .dovell-hero-section {
          background-color: #FFFFFF;
          position: relative;
          width: 100%;
          min-height: 580px;
          overflow: hidden;
          border-bottom: 1px solid #E2E8F0;
          padding-top: 24px;
          padding-bottom: 0px;
        }

        .hero-top-container {
          display: grid;
          grid-template-columns: 530px 1fr;
          align-items: center;
          gap: 36px;
          position: relative;
          max-width: 1360px;
          margin: 0 auto;
          padding: 10px 32px 0 32px;
          z-index: 2;
        }

        /* Left Content Column */
        .hero-content-col {
          display: flex;
          flex-direction: column;
          padding-top: 20px;
          padding-bottom: 24px;
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
          margin-bottom: 20px;
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
          font-size: clamp(2.2rem, 2.9vw, 3rem);
          font-weight: 800;
          line-height: 1.14;
          color: #0A1C36;
          letter-spacing: -0.03em;
          margin: 0 0 20px 0;
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
          background: #FFFFFF;
          color: #0A1C36;
          border: 2px solid #CBD5E1;
        }

        .hero-pill-secondary:hover {
          border-color: #0A1C36;
          background: #F8FAFC;
          transform: translateY(-2px);
        }

        /* Micro Trust Row */
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

        /* Right Column: Circular Agent Visual */
        .hero-visual-col {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          position: relative;
        }

        .agent-circle-visual-wrapper {
          position: relative;
          width: 100%;
          max-width: 520px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .agent-circle-visual-wrapper:hover {
          transform: translateY(-4px);
        }

        .agent-circle-img {
          width: 100%;
          height: auto;
          max-height: 380px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 14px 35px rgba(10, 28, 54, 0.14));
        }

        /* Wide Full-Width Waveform at Bottom */
        .hero-waveform-fullwidth {
          width: 100%;
          height: 240px;
          position: relative;
          z-index: 1;
          margin-top: 14px;
          overflow: hidden;
          line-height: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1180px) {
          .hero-top-container {
            grid-template-columns: 480px 1fr;
            gap: 24px;
          }
          .hero-headline {
            font-size: 2.4rem;
          }
        }

        @media (max-width: 1024px) {
          .dovell-hero-section {
            min-height: auto;
            padding-top: 16px;
          }
          .hero-top-container {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 0 24px;
          }
          .hero-content-col {
            padding-top: 20px;
            padding-bottom: 10px;
            max-width: 100%;
          }
          .hero-visual-col {
            justify-content: center;
          }
          .agent-circle-visual-wrapper {
            max-width: 440px;
          }
          .hero-pill-buttons-row {
            flex-wrap: wrap;
          }
          .hero-trust-row {
            white-space: normal;
          }
          .hero-waveform-fullwidth {
            height: 185px;
            margin-top: 10px;
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
            height: 140px;
            margin-top: 6px;
          }
        }
      `}</style>
    </section>
  );
}
