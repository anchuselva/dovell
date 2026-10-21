'use client';

import React from 'react';
import { 
  Check, 
  ArrowRight, 
  FileText, 
  Clock, 
  User, 
  Tag, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export default function ShowcaseBanner() {
  const supportingPoints = [
    'Keep recordings, transcripts, and analysis connected.',
    'Assign conversations for review and track progress.',
    'Record corrections, tags, and investigation notes.',
    'Maintain a history of review activity and outcomes.'
  ];

  return (
    <section id="workspace" className="workspace-banner-section">
      {/* Background Graphic with Studio Navy Tone */}
      <div className="banner-bg-container">
        <img 
          src="/images/control-room.jpg" 
          alt="Dovell Conversation Workspace" 
          className="banner-bg-img"
        />
        <div className="banner-overlay"></div>
      </div>

      <div className="container banner-inner-content">
        <div className="banner-grid">
          
          {/* Left Column: Eyebrow, Heading, Description, Points, Dual Buttons */}
          <div className="banner-left">
            <span className="bracket-tag-light">[ YOUR CONVERSATION WORKSPACE ]</span>
            
            <h2 className="banner-headline">
              One place to manage, review, and <br />
              <span className="banner-highlight">understand voice interactions</span>
            </h2>

            <p className="banner-text">
              Give communication teams a shared workspace for following recordings from upload through review. Find the conversation you need, check its processing status, and see what requires attention.
            </p>

            {/* 4 Supporting Points */}
            <div className="banner-features-list">
              {supportingPoints.map((point, idx) => (
                <div key={idx} className="feature-item">
                  <div className="feature-check">
                    <Check size={14} />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Dual Buttons */}
            <div className="banner-buttons-row">
              <a href="#contact" className="btn-coral-pill banner-primary-btn">
                <span>See Dovell in Action</span>
                <ArrowRight size={15} />
              </a>
              <a href="#how-it-works" className="btn-outline-pill banner-secondary-btn">
                <span>View the Review Workflow →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Conversation Overview Preview Panel */}
          <div className="banner-right">
            <div className="conversation-overview-card">
              
              {/* Card Header */}
              <div className="panel-header">
                <div className="header-left">
                  <FileText size={18} className="text-cyan" />
                  <span className="panel-title">Conversation Overview</span>
                </div>
                <span className="sample-badge">SAMPLE DATA</span>
              </div>

              {/* Rows Grid */}
              <div className="panel-rows-list">
                <div className="data-row">
                  <span className="row-key">Conversation:</span>
                  <span className="row-val highlight-title">Customer Billing Inquiry</span>
                </div>

                <div className="data-row">
                  <span className="row-key">Assigned Team:</span>
                  <div className="team-badge">
                    <User size={13} />
                    <span>Customer Support</span>
                  </div>
                </div>

                <div className="data-row">
                  <span className="row-key">Processing Status:</span>
                  <div className="status-tag complete">
                    <Check size={12} />
                    <span>Complete</span>
                  </div>
                </div>

                <div className="data-row">
                  <span className="row-key">Transcript Status:</span>
                  <div className="status-tag awaiting">
                    <Clock size={12} />
                    <span>Awaiting Review</span>
                  </div>
                </div>

                <div className="data-row">
                  <span className="row-key">Suggested Topic:</span>
                  <div className="topic-tag">
                    <Tag size={12} />
                    <span>Billing</span>
                  </div>
                </div>

                <div className="data-row">
                  <span className="row-key">Recorded Outcome:</span>
                  <div className="outcome-tag">
                    <AlertCircle size={12} />
                    <span>Follow-up Required</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Footnote */}
              <div className="panel-footer-note">
                <HelpCircle size={13} className="text-muted" />
                <span>Automated analysis remains unverified until reviewed.</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .workspace-banner-section {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
          background-color: #061121;
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
          opacity: 0.28;
          mix-blend-mode: luminosity;
        }

        .banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(6, 17, 33, 0.94) 0%, rgba(10, 34, 64, 0.9) 100%);
        }

        .banner-inner-content {
          position: relative;
          z-index: 2;
        }

        .banner-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.9fr;
          gap: 50px;
          align-items: center;
        }

        .bracket-tag-light {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: #38BDF8;
          letter-spacing: 0.12em;
          display: inline-block;
          margin-bottom: 16px;
        }

        .banner-headline {
          font-family: var(--font-primary);
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.2;
          letter-spacing: -0.025em;
          margin-bottom: 20px;
        }

        .banner-highlight {
          color: #38BDF8;
          background: linear-gradient(135deg, #38BDF8 0%, #818CF8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .banner-text {
          font-size: 1.05rem;
          line-height: 1.68;
          color: #CBD5E1;
          margin-bottom: 28px;
          max-width: 580px;
        }

        .banner-features-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 34px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #E2E8F0;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .feature-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(56, 189, 248, 0.18);
          border: 1px solid rgba(56, 189, 248, 0.45);
          color: #38BDF8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .banner-buttons-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .banner-primary-btn {
          background: #E85A2A;
          color: #FFFFFF;
          padding: 13px 28px;
          font-size: 0.92rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 6px 20px rgba(232, 90, 42, 0.35);
        }

        .banner-primary-btn:hover {
          background: #D0481B;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(232, 90, 42, 0.45);
        }

        .banner-secondary-btn {
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 13px 26px;
          font-size: 0.92rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .banner-secondary-btn:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #FFFFFF;
          transform: translateY(-2px);
        }

        /* Right Preview Panel */
        .conversation-overview-card {
          background: rgba(10, 28, 54, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(16px);
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 20px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .text-cyan {
          color: #38BDF8;
        }

        .panel-title {
          font-family: var(--font-primary);
          font-size: 1.15rem;
          font-weight: 800;
          color: #FFFFFF;
        }

        .sample-badge {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #38BDF8;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .panel-rows-list {
          display: flex;
          flex-direction: column;
          gap: 13px;
          margin-bottom: 22px;
        }

        .data-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 10px 14px;
        }

        .row-key {
          font-size: 0.85rem;
          color: #94A3B8;
          font-weight: 500;
        }

        .row-val.highlight-title {
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.92rem;
        }

        .team-badge,
        .status-tag,
        .topic-tag,
        .outcome-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }

        .team-badge {
          background: rgba(255, 255, 255, 0.1);
          color: #E2E8F0;
        }

        .status-tag.complete {
          background: rgba(52, 211, 153, 0.15);
          border: 1px solid rgba(52, 211, 153, 0.35);
          color: #34D399;
        }

        .status-tag.awaiting {
          background: rgba(251, 191, 36, 0.15);
          border: 1px solid rgba(251, 191, 36, 0.35);
          color: #FBBF24;
        }

        .topic-tag {
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #38BDF8;
        }

        .outcome-tag {
          background: rgba(248, 113, 113, 0.15);
          border: 1px solid rgba(248, 113, 113, 0.35);
          color: #F87171;
        }

        .panel-footer-note {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.74rem;
          color: #94A3B8;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 14px;
        }

        .text-muted {
          color: #64748B;
        }

        @media (max-width: 1024px) {
          .banner-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .banner-left {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
