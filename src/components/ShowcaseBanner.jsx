'use client';

import React from 'react';
import { 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  Check, 
  Zap, 
  Server,
  Activity
} from 'lucide-react';

export default function ShowcaseBanner() {
  return (
    <section id="showcase" className="showcase-banner-section">
      {/* Background Image with Dark Navy/Teal Gradient Overlay */}
      <div className="banner-bg-container">
        <img 
          src="/images/control-room.jpg" 
          alt="Autonomous AI Cluster Control Room" 
          className="banner-bg-img"
        />
        <div className="banner-overlay"></div>
      </div>

      <div className="container banner-inner-content">
        <div className="banner-grid">
          {/* Left Side: Bracketed tag, Headline, Description, Button */}
          <div className="banner-left">
            <span className="bracket-tag-light">[ AUTONOMOUS MISSION CONTROL ]</span>
            
            <h2 className="banner-headline">
              Zero-DevOps Kubernetes & <br />
              <span className="banner-highlight">Slurm GPU Autopilot</span>
            </h2>

            <p className="banner-text">
              Our ultra-lightweight eBPF daemon initializes across your Kubernetes or Slurm nodes in under 90 seconds. It operates transparently beneath PyTorch, vLLM, and Triton CUDA drivers—dynamically bin-packing tensor allocations without touching a single line of your application code.
            </p>

            {/* Feature Checklist */}
            <div className="banner-features-list">
              <div className="feature-item">
                <div className="feature-check">
                  <Check size={14} />
                </div>
                <span>Zero model code changes or container restarts</span>
              </div>
              <div className="feature-item">
                <div className="feature-check">
                  <Check size={14} />
                </div>
                <span>Automated cold-start reduction from 45s down to 800ms</span>
              </div>
              <div className="feature-item">
                <div className="feature-check">
                  <Check size={14} />
                </div>
                <span>Kernel-level memory compaction & OOM prevention</span>
              </div>
            </div>

            {/* Reference orange CTA button */}
            <div className="banner-cta-row">
              <a href="#contact" className="btn-coral-pill banner-cta-btn">
                <span>SCHEDULE LIVE CLUSTER AUDIT</span>
                <ArrowRight size={16} />
              </a>
              <a href="#calculator" className="btn-banner-outline">
                <Terminal size={16} />
                <span>Quick Helm Install</span>
              </a>
            </div>
          </div>

          {/* Right Side: Signature Curved Concentric Arcs framing control metrics */}
          <div className="banner-right">
            <div className="concentric-graphic-box">
              {/* Reference signature concentric curved white/orange arcs */}
              <svg className="banner-arcs-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer glowing orange arc */}
                <path d="M 60 340 A 180 180 0 0 1 340 340" stroke="#E85A2A" strokeWidth="6" strokeLinecap="round" />
                {/* Inner white track */}
                <path d="M 100 320 A 140 140 0 0 1 300 320" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="4 6" strokeOpacity="0.8" />
                {/* Cyan telemetry indicator arc */}
                <path d="M 120 280 A 100 100 0 0 1 280 280" stroke="#00C2FF" strokeWidth="4" strokeLinecap="round" />
              </svg>

              {/* Holographic Operations Card */}
              <div className="hologram-telemetry-card">
                <div className="hologram-header">
                  <Activity size={16} className="cyan-text" />
                  <span className="hologram-title">REAL-TIME DAEMON TELEMETRY</span>
                  <span className="live-pill">LIVE</span>
                </div>

                <div className="telemetry-rows">
                  <div className="telemetry-row">
                    <span className="row-label">Cluster Nodes:</span>
                    <span className="row-val">256 x 8-way H100 SXM5</span>
                  </div>
                  <div className="telemetry-row">
                    <span className="row-label">Memory Sliced:</span>
                    <span className="row-val text-cyan">163.8 TB VRAM</span>
                  </div>
                  <div className="telemetry-row">
                    <span className="row-label">Active Preemptions:</span>
                    <span className="row-val text-green">0 Dropped (Safe)</span>
                  </div>
                  <div className="telemetry-row">
                    <span className="row-label">Daemon Latency:</span>
                    <span className="row-val text-coral">&lt; 0.08 ms overhead</span>
                  </div>
                </div>

                <div className="hologram-footer">
                  <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: '94%' }}></div>
                  </div>
                  <span className="progress-label">Fleet Efficiency: 94% Peak Utilization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .showcase-banner-section {
          position: relative;
          background-color: var(--color-navy-darkest);
          color: var(--color-white);
          padding: 100px 0;
          overflow: hidden;
        }

        .banner-bg-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .banner-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.35;
          filter: saturate(1.2) contrast(1.1);
        }

        .banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg, 
            rgba(6, 17, 33, 0.96) 0%, 
            rgba(10, 28, 54, 0.92) 50%, 
            rgba(15, 39, 75, 0.75) 100%
          );
        }

        .banner-inner-content {
          position: relative;
          z-index: 2;
        }

        .banner-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .bracket-tag-light {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-coral);
          margin-bottom: 14px;
        }

        .banner-headline {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--color-white);
          margin-bottom: 20px;
        }

        .banner-highlight {
          color: var(--color-cyan);
        }

        .banner-text {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #CBD5E1;
          margin-bottom: 28px;
          max-width: 620px;
        }

        .banner-features-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 36px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          color: #E2E8F0;
        }

        .feature-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid #10B981;
          color: #10B981;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .banner-cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .banner-cta-btn {
          padding: 14px 30px;
          font-size: 0.92rem;
        }

        .btn-banner-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-white);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-full);
          font-size: 0.92rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .btn-banner-outline:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
        }

        /* Right Side Concentric & Hologram */
        .banner-right {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .concentric-graphic-box {
          position: relative;
          width: 380px;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .banner-arcs-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .hologram-telemetry-card {
          width: 330px;
          background: rgba(15, 39, 75, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(0, 194, 255, 0.3);
          border-radius: var(--radius-lg);
          padding: 24px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 194, 255, 0.15);
          z-index: 3;
        }

        .hologram-header {
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 12px;
          margin-bottom: 16px;
        }

        .cyan-text {
          color: var(--color-cyan);
        }

        .hologram-title {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #E2E8F0;
          font-family: var(--font-mono);
          flex: 1;
        }

        .live-pill {
          background: rgba(16, 185, 129, 0.2);
          color: #10B981;
          font-size: 0.62rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: var(--radius-full);
          border: 1px solid #10B981;
          font-family: var(--font-mono);
        }

        .telemetry-rows {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 18px;
          font-family: var(--font-mono);
          font-size: 0.82rem;
        }

        .telemetry-row {
          display: flex;
          justify-content: space-between;
        }

        .row-label {
          color: #94A3B8;
        }

        .row-val {
          font-weight: 600;
          color: var(--color-white);
        }

        .text-cyan {
          color: var(--color-cyan);
        }

        .text-green {
          color: #10B981;
        }

        .text-coral {
          color: var(--color-coral);
        }

        .hologram-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 14px;
        }

        .progress-bar-container {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #00C2FF, #10B981);
          border-radius: 3px;
        }

        .progress-label {
          font-size: 0.72rem;
          color: #94A3B8;
          font-family: var(--font-mono);
        }

        @media (max-width: 992px) {
          .banner-grid {
            grid-template-columns: 1fr;
          }
          .banner-headline {
            font-size: 2.2rem;
          }
          .banner-cta-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .banner-cta-btn, .btn-banner-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
