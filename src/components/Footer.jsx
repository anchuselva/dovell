'use client';

import React from 'react';
import { 
  Cpu, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Activity,
  Terminal,
  ExternalLink
} from 'lucide-react';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Top Grid (matching reference image footer layout) */}
        <div className="footer-top-grid">
          {/* Left Column: Brand Logo, Address, and TWO signature reference buttons */}
          <div className="footer-brand-column">
            <a href="#" className="footer-brand-logo" aria-label="Dovell AI Home">
              <div className="footer-logo-icon">
                <Cpu size={22} className="cyan-text" />
                <span className="logo-sparkle"></span>
              </div>
              <div className="footer-logo-text">
                <span className="footer-brand-name">DOVELL<span className="coral-text">.AI</span></span>
                <span className="footer-brand-sub">ENTERPRISE KNOWLEDGE &amp; GPU PLATFORM</span>
              </div>
            </a>

            <div className="footer-address-block">
              <p className="address-line">Global Headquarters & AI Systems Lab</p>
              <p className="address-line">500 Howard Street, Suite 400</p>
              <p className="address-line">San Francisco, CA 94105 • United States</p>
              <p className="address-line secondary-loc">Zurich Quantum Lab: Neugasse 29, 8005 Zürich</p>
            </div>

            {/* Reference signature dual buttons: Orange Button + Light Blue Button */}
            <div className="footer-buttons-group">
              <a href="#contact" className="btn-coral-pill footer-pill-btn">
                CONTACT US
              </a>
              <a href="#architecture" className="btn-blue-pill footer-pill-btn">
                OUR PARTNERS
              </a>
            </div>

            <div className="footer-social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Center Column: Categorized Navigation Links */}
          <div className="footer-nav-columns">
            <div className="footer-nav-col">
              <h4 className="col-title">Platform</h4>
              <ul className="footer-links-list">
                <li><a href="#engines">GPU Slicing Engine</a></li>
                <li><a href="#engines">KV-Cache Tiering</a></li>
                <li><a href="#showcase">eBPF Cluster Daemon</a></li>
                <li><a href="#engines">Spot Fleet Arbitrage</a></li>
                <li><a href="#architecture">Kernel Architecture</a></li>
                <li><a href="#calculator">ROI Calculator</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="col-title">Solutions</h4>
              <ul className="footer-links-list">
                <li><a href="#contact">LLM Inference Fleets</a></li>
                <li><a href="#contact">Distributed Fine-Tuning</a></li>
                <li><a href="#contact">Sovereign Air-Gapped AI</a></li>
                <li><a href="#pricing">FinOps Cost Governance</a></li>
                <li><a href="#pricing">Enterprise SLA</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="col-title">Developers</h4>
              <ul className="footer-links-list">
                <li><a href="#architecture">Helm Chart Docs</a></li>
                <li><a href="#architecture">Slurm Integration</a></li>
                <li><a href="#architecture">vLLM Optimization Guide</a></li>
                <li><a href="#faq">Security & SOC2</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Right Column: Stylized Radar / Global Data Center Mesh with Concentric Arcs (matching reference image footer right map) */}
          <div className="footer-map-column">
            <div className="radar-map-container">
              {/* Concentric Decorative SVG Arcs (directly reproducing reference footer circular arcs) */}
              <svg className="radar-arcs-svg" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer concentric grid */}
                <circle cx="140" cy="140" r="120" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="140" cy="140" r="85" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1" />
                <circle cx="140" cy="140" r="50" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                
                {/* Signature reference thick orange arc */}
                <path d="M 40 210 A 120 120 0 0 0 235 210" stroke="#E85A2A" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Signature reference white inner arc */}
                <path d="M 65 190 A 90 90 0 0 0 215 190" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>

              {/* Stylized Node Map Overlay */}
              <div className="radar-content-overlay">
                <div className="map-node node-sf active">
                  <div className="node-ping"></div>
                  <div className="node-marker">
                    <MapPin size={18} className="marker-pin-coral" />
                  </div>
                  <span className="node-label">US-West (SF)</span>
                </div>

                <div className="map-node node-va">
                  <div className="node-marker-small"></div>
                  <span className="node-label">US-East</span>
                </div>

                <div className="map-node node-eu">
                  <div className="node-marker-small"></div>
                  <span className="node-label">EU-Central</span>
                </div>

                <div className="map-node node-tyo">
                  <div className="node-marker-small"></div>
                  <span className="node-label">APAC</span>
                </div>

                <div className="radar-stats-tag">
                  <Activity size={12} className="cyan-text" />
                  <span>Global GPU Interconnect Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer (matching reference image legal & copyright bar) */}
        <div className="footer-sub-bar">
          <div className="sub-left-legal">
            <a href="#" className="sub-link">Home</a>
            <span className="sub-dot">•</span>
            <a href="#faq" className="sub-link">Accessibility</a>
            <span className="sub-dot">•</span>
            <a href="#architecture" className="sub-link">Architecture Plan</a>
            <span className="sub-dot">•</span>
            <a href="#faq" className="sub-link">Legal Notices</a>
            <span className="sub-dot">•</span>
            <a href="#faq" className="sub-link">Confidentiality</a>
            <span className="sub-dot">•</span>
            <span className="sub-copy">© 2026 Dovell Technologies, Inc. All rights reserved.</span>
          </div>

          <div className="sub-right-status">
            <span className="status-indicator">
              <span className="pulse-dot"></span>
              All Systems Operational
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background-color: var(--color-navy-darkest);
          color: #94A3B8;
          padding-top: 80px;
          padding-bottom: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.6fr 1fr;
          gap: 50px;
          align-items: flex-start;
          margin-bottom: 60px;
        }

        /* Brand Column */
        .footer-brand-column {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 20px;
        }

        .footer-logo-icon {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #0F274B;
          border: 1px solid rgba(0, 194, 255, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cyan-text {
          color: var(--color-cyan);
        }

        .coral-text {
          color: var(--color-coral);
        }

        .logo-sparkle {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 7px;
          height: 7px;
          background: var(--color-coral);
          border-radius: 50%;
          box-shadow: 0 0 6px var(--color-coral);
        }

        .footer-logo-text {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-white);
          line-height: 1.1;
        }

        .footer-brand-sub {
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #64748B;
          font-family: var(--font-mono);
        }

        .footer-address-block {
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .address-line {
          font-size: 0.84rem;
          color: #CBD5E1;
        }

        .address-line.secondary-loc {
          color: #64748B;
          font-size: 0.78rem;
          margin-top: 4px;
        }

        /* Reference Dual Buttons: Orange + Light Blue */
        .footer-buttons-group {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .footer-pill-btn {
          font-size: 0.8rem;
          padding: 10px 22px;
          letter-spacing: 0.04em;
        }

        .footer-social-links {
          display: flex;
          gap: 10px;
        }

        .footer-social-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          color: #94A3B8;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-social-btn:hover {
          background: var(--color-coral);
          color: var(--color-white);
          transform: translateY(-2px);
        }

        /* Nav Columns */
        .footer-nav-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .col-title {
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-white);
          text-transform: uppercase;
          margin-bottom: 18px;
          font-family: var(--font-mono);
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links-list li a {
          font-size: 0.85rem;
          color: #94A3B8;
          transition: color 0.2s ease;
        }

        .footer-links-list li a:hover {
          color: var(--color-white);
          text-decoration: underline;
        }

        /* Map Column (Radar with Concentric Arcs matching reference) */
        .footer-map-column {
          display: flex;
          justify-content: center;
        }

        .radar-map-container {
          position: relative;
          width: 270px;
          height: 270px;
          background: radial-gradient(circle at center, #0F274B 0%, #061121 80%);
          border-radius: 50%;
          border: 1px solid rgba(0, 194, 255, 0.25);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          overflow: hidden;
        }

        .radar-arcs-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .radar-content-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .map-node {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .node-sf {
          top: 36%;
          left: 45%;
        }

        .marker-pin-coral {
          color: var(--color-coral);
          filter: drop-shadow(0 0 6px rgba(232, 90, 42, 0.8));
          animation: bounce 2s infinite ease-in-out;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .node-ping {
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(232, 90, 42, 0.35);
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          top: -3px;
          left: -3px;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }

        .node-va {
          top: 42%;
          left: 68%;
        }

        .node-eu {
          top: 32%;
          left: 20%;
        }

        .node-tyo {
          top: 55%;
          left: 72%;
        }

        .node-marker-small {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-cyan);
          box-shadow: 0 0 6px var(--color-cyan);
        }

        .node-label {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          color: #E2E8F0;
          background: rgba(10, 28, 54, 0.7);
          padding: 1px 4px;
          border-radius: 3px;
        }

        .radar-stats-tag {
          position: absolute;
          bottom: 22px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #94A3B8;
          background: rgba(6, 17, 33, 0.85);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Sub-footer legal bar */
        .footer-sub-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.75rem;
          flex-wrap: wrap;
          gap: 16px;
        }

        .sub-left-legal {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .sub-link {
          color: #94A3B8;
          transition: color 0.2s;
        }

        .sub-link:hover {
          color: var(--color-white);
        }

        .sub-dot {
          color: rgba(255, 255, 255, 0.2);
        }

        .sub-copy {
          color: #64748B;
          margin-left: 6px;
        }

        .status-indicator {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #10B981;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }

        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 6px #10B981;
        }

        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-map-column {
            grid-column: span 2;
            justify-content: flex-start;
          }
        }

        @media (max-width: 768px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-nav-columns {
            grid-template-columns: 1fr;
          }
          .footer-map-column {
            grid-column: span 1;
            justify-content: center;
          }
          .footer-sub-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
