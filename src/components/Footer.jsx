'use client';

import React from 'react';
import { 
  Headphones, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Activity,
  CheckCircle2
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
        {/* Main Footer Top Grid */}
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-column">
            <a href="#" className="footer-brand-logo" aria-label="Dovell Home">
              <img 
                src="/graphics/logo.svg" 
                alt="DOVELL" 
                className="footer-logo-brand-img"
                height={46}
              />
            </a>

            <p className="brand-tagline">Voice Intelligence & Conversation Analytics</p>
            <p className="brand-description">
              A centralized workspace for organizing voice interactions, reviewing transcripts, and understanding conversation outcomes.
            </p>

            <div className="footer-buttons-group">
              <a href="#contact" className="btn-coral-pill footer-pill-btn">
                Request a Demo
              </a>
              <a href="#how-it-works" className="btn-blue-pill footer-pill-btn">
                How It Works
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

          {/* Categorized Navigation Columns */}
          <div className="footer-nav-columns">
            <div className="footer-nav-col">
              <h4 className="col-title">Platform</h4>
              <ul className="footer-links-list">
                <li><a href="#capabilities">Conversation Management</a></li>
                <li><a href="#capabilities">Audio Uploads</a></li>
                <li><a href="#capabilities">Transcript Review</a></li>
                <li><a href="#workspace">Search & Categories</a></li>
                <li><a href="#capabilities">Conversation Analytics</a></li>
                <li><a href="#workspace">Reports & Outcomes</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="col-title">Solutions</h4>
              <ul className="footer-links-list">
                <li><a href="#solutions">Customer Support</a></li>
                <li><a href="#solutions">Contact Center Management</a></li>
                <li><a href="#solutions">Quality Assurance</a></li>
                <li><a href="#solutions">Business Analysis</a></li>
                <li><a href="#solutions">Customer Experience</a></li>
                <li><a href="#solutions">Compliance & Operations</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="col-title">Resources</h4>
              <ul className="footer-links-list">
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#faq">FAQs</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#contact">Request a Demo</a></li>
                <li><a href="#calculator">Review Estimator</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="col-title">Legal</h4>
              <ul className="footer-links-list">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="footer-sub-bar">
          <div className="sub-left-legal">
            <span className="sub-copy">© 2026 Dovell. All rights reserved.</span>
          </div>

          <div className="sub-right-status">
            <span className="status-indicator">
              <span className="pulse-dot"></span>
              All Systems Operational · SOC 2 Architecture
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
          grid-template-columns: 1.3fr 2fr;
          gap: 60px;
          align-items: flex-start;
          margin-bottom: 50px;
        }

        /* Brand Column */
        .footer-brand-column {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          margin-bottom: 16px;
        }

        .footer-logo-brand-img {
          height: 56px;
          width: auto;
          max-width: 230px;
          object-fit: contain;
          display: block;
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
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-white);
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .footer-brand-sub {
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #64748B;
          font-family: var(--font-mono);
        }

        .brand-tagline {
          font-size: 0.95rem;
          font-weight: 700;
          color: #E2E8F0;
          margin-bottom: 8px;
        }

        .brand-description {
          font-size: 0.86rem;
          color: #94A3B8;
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 380px;
        }

        .footer-buttons-group {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .footer-pill-btn {
          font-size: 0.82rem;
          padding: 9px 20px;
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
          grid-template-columns: repeat(4, 1fr);
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

        /* Sub-footer legal bar */
        .footer-sub-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.78rem;
          flex-wrap: wrap;
          gap: 16px;
        }

        .sub-left-legal {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sub-copy {
          color: #64748B;
        }

        .status-indicator {
          display: inline-flex;
          align-items: center;
          gap: 7px;
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
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-nav-columns {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }

        @media (max-width: 640px) {
          .footer-nav-columns {
            grid-template-columns: 1fr;
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
