'use client';

import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2,
  Mic,
  FileText,
  Tag,
  Clock,
  Sparkles,
  Volume2,
  Check
} from 'lucide-react';

export default function Hero() {
  return (
    <section id="platform" className="semicircle-hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Aligned with Navbar Grid Guidelines */}
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

        {/* Right Column: Giant Circular Conversation Workspace Bowl */}
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
                  <stop offset="100%" stopColor="rgba(10, 34, 64, 0.55)" />
                </radialGradient>

                {/* Drop Shadow for Orbit Arcs */}
                <filter id="heroArcShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="rgba(10, 34, 64, 0.28)" />
                </filter>
              </defs>

              {/* === THE GIANT SEMICIRCULAR PHOTO BOWL === */}
              <g clipPath="url(#heroPhotoBowlClip)">
                {/* Dark Navy Deep Studio Base */}
                <rect x="35" y="0" width="770" height="430" fill="#0A2240" />

                {/* Blended High-Tech Audio Datacenter Texture */}
                <image 
                  href="/images/hero-cluster.jpg" 
                  x="35" 
                  y="0" 
                  width="770" 
                  height="400" 
                  preserveAspectRatio="xMidYMid slice" 
                  opacity="0.35"
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

            {/* Conversation Workspace Interactive Card Overlay inside the Bowl */}
            <div className="workspace-preview-overlay">
              <div className="wp-header-row">
                <div className="wp-title-group">
                  <span className="wp-title">Your Conversation Workspace</span>
                  <span className="wp-subtitle">Customer Support · Billing Inquiry</span>
                </div>
                <div className="wp-status-pill">
                  <span className="status-dot-amber"></span>
                  <span>Awaiting review</span>
                </div>
              </div>

              {/* Workspace Labels Strip */}
              <div className="wp-labels-grid">
                <div className="wp-label-item">
                  <Mic size={13} className="text-cyan" />
                  <span className="label-key">Audio Recording:</span>
                  <span className="label-val">04:32 min</span>
                </div>
                <div className="wp-label-item">
                  <FileText size={13} className="text-emerald" />
                  <span className="label-key">Transcript:</span>
                  <span className="label-val">Generated (99.2% conf)</span>
                </div>
                <div className="wp-label-item">
                  <Tag size={13} className="text-coral" />
                  <span className="label-key">Topics &amp; Keywords:</span>
                  <span className="label-val">Billing, Tier Downgrade</span>
                </div>
                <div className="wp-label-item">
                  <Clock size={13} className="text-blue" />
                  <span className="label-key">Conversation Outcome:</span>
                  <span className="label-val">Follow-up Required</span>
                </div>
              </div>

              {/* Audio Waveform Sample Line */}
              <div className="wp-audio-strip">
                <div className="audio-play-icon">
                  <Volume2 size={13} />
                </div>
                <div className="waveform-bars">
                  {[35, 60, 45, 80, 95, 50, 70, 85, 40, 65, 90, 75, 40, 55, 80, 100, 60, 45, 70, 85, 40, 60, 75, 90, 50, 30].map((h, i) => (
                    <span 
                      key={i} 
                      className="wave-bar" 
                      style={{ height: `${h}%`, opacity: i < 16 ? 1 : 0.4 }}
                    ></span>
                  ))}
                </div>
                <span className="audio-timestamp">02:14 / 04:32</span>
              </div>

              <div className="wp-footer-note">
                <span>Illustrative platform preview · Processing complete · Awaiting review</span>
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
          min-height: 570px;
          overflow: hidden;
          border-bottom: 1px solid #E2E8F0;
          padding-top: 0;
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
          padding-bottom: 60px;
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

        .text-emerald {
          color: #34D399;
        }

        .text-blue {
          color: #60A5FA;
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

        /* Overlay Workspace Card inside the Bowl */
        .workspace-preview-overlay {
          position: absolute;
          top: 36px;
          left: 50%;
          transform: translateX(-50%);
          width: 82%;
          background: rgba(10, 28, 54, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(16px);
          border-radius: 18px;
          padding: 20px 24px;
          color: #FFFFFF;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
          z-index: 5;
        }

        .wp-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 12px;
          margin-bottom: 14px;
        }

        .wp-title-group {
          display: flex;
          flex-direction: column;
        }

        .wp-title {
          font-family: var(--font-primary);
          font-size: 1.05rem;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.01em;
        }

        .wp-subtitle {
          font-family: var(--font-primary);
          font-size: 0.74rem;
          color: #94A3B8;
          font-weight: 500;
          margin-top: 2px;
        }

        .wp-status-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(245, 158, 11, 0.18);
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 600;
          color: #FBBF24;
        }

        .status-dot-amber {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FBBF24;
          box-shadow: 0 0 6px #FBBF24;
        }

        /* Workspace Labels Grid */
        .wp-labels-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 16px;
        }

        .wp-label-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 7px 10px;
        }

        .label-key {
          color: #94A3B8;
          font-weight: 500;
        }

        .label-val {
          color: #FFFFFF;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* Audio Waveform Strip */
        .wp-audio-strip {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 8px 14px;
          margin-bottom: 12px;
        }

        .audio-play-icon {
          color: #38BDF8;
          display: flex;
          align-items: center;
        }

        .waveform-bars {
          display: flex;
          align-items: center;
          gap: 3px;
          flex: 1;
          height: 22px;
        }

        .wave-bar {
          flex: 1;
          background: #38BDF8;
          border-radius: 2px;
          min-height: 4px;
        }

        .audio-timestamp {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #94A3B8;
        }

        .wp-footer-note {
          font-size: 0.68rem;
          color: #64748B;
          text-align: center;
          font-style: italic;
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
          .workspace-preview-overlay {
            width: 90%;
            top: 24px;
            padding: 16px;
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
          .wp-labels-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
