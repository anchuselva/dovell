'use client';

import React, { useState } from 'react';
import { 
  Upload, 
  Cpu, 
  UserCheck, 
  BarChart4, 
  ArrowRight, 
  Check, 
  FileText, 
  Clock, 
  Tag, 
  MessageSquare
} from 'lucide-react';

const STEPS = [
  {
    num: '01',
    category: 'UPLOAD & ORGANIZE',
    title: 'Bring your recordings together',
    description: 'Upload supported audio files and add conversation details such as date, team, category, and reference number.',
    status: 'Uploaded',
    icon: Upload,
    graphic: '/graphics/how-works-1.svg'
  },
  {
    num: '02',
    category: 'PROCESS & TRANSCRIBE',
    title: 'Prepare conversations for review',
    description: 'Track processing progress and generate transcripts through a configured transcription service, or attach an existing transcript.',
    status: 'Processing / Ready for Review',
    icon: Cpu,
    graphic: '/graphics/how-works-2.svg'
  },
  {
    num: '03',
    category: 'REVIEW & VERIFY',
    title: 'Add human judgment',
    description: 'Review the transcript alongside the recording, correct errors, check suggested analysis, and record reviewer notes.',
    status: 'In Review / Verified',
    icon: UserCheck,
    graphic: '/graphics/how-works-3.svg'
  },
  {
    num: '04',
    category: 'ANALYZE & REPORT',
    title: 'Turn reviewed records into useful reports',
    description: 'Filter conversations by topic, team, tag, review status, or outcome. Explore recurring patterns and prepare reports for your operational needs.',
    status: 'Ready for Reporting',
    icon: BarChart4,
    graphic: '/graphics/how-works-4.svg'
  }
];

export default function ArchitecturePipeline() {
  const [activeTab, setActiveTab] = useState('record');

  return (
    <section id="how-it-works" className="how-it-works-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="bracket-tag">HOW DOVELL WORKS</span>
          <h2 className="section-title">A CLEAR PATH FROM AUDIO UPLOAD TO REVIEWED INSIGHTS</h2>
          
          <div className="accent-lines center">
            <div className="accent-line-coral"></div>
            <div className="accent-line-blue"></div>
          </div>

          <p className="section-subtitle center-subtitle">
            Keep each stage visible, with processing statuses and review checkpoints that help your team understand what is ready and what needs attention.
          </p>
        </div>

        {/* 4-Step Pipeline Grid */}
        <div className="steps-grid">
          {STEPS.map((step) => {
            return (
              <div key={step.num} className="step-card">
                <div className="step-top-row">
                  <span className="step-number">{step.num}</span>
                  <div className="step-graphic-badge">
                    <img 
                      src={step.graphic} 
                      alt={step.category} 
                      className="step-svg-graphic"
                      width={38}
                      height={38}
                    />
                  </div>
                </div>

                <span className="step-category-pill">{step.category}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>

                <div className="step-status-footer">
                  <span className="status-label-tag">{step.status}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3-Tab Workflow Preview Panel */}
        <div className="workflow-preview-panel">
          
          {/* Tabs Navigation Header */}
          <div className="tabs-header">
            <div className="tabs-list">
              <button 
                type="button"
                className={`tab-btn ${activeTab === 'record' ? 'active' : ''}`}
                onClick={() => setActiveTab('record')}
              >
                <FileText size={14} />
                <span>Conversation Record</span>
              </button>

              <button 
                type="button"
                className={`tab-btn ${activeTab === 'transcript' ? 'active' : ''}`}
                onClick={() => setActiveTab('transcript')}
              >
                <MessageSquare size={14} />
                <span>Transcript Review</span>
              </button>

              <button 
                type="button"
                className={`tab-btn ${activeTab === 'analysis' ? 'active' : ''}`}
                onClick={() => setActiveTab('analysis')}
              >
                <Tag size={14} />
                <span>Analysis &amp; Outcome</span>
              </button>
            </div>

            <a href="#contact" className="panel-cta-btn">
              <span>Explore the Workflow</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Tab Content Box */}
          <div className="tab-content-body">
            {activeTab === 'record' && (
              <div className="tab-pane-view">
                <div className="record-details-grid">
                  <div className="record-field">
                    <span className="field-key">Conversation</span>
                    <span className="field-val highlight">Billing Follow-up</span>
                  </div>
                  <div className="record-field">
                    <span className="field-key">Category</span>
                    <span className="field-val">Customer Support</span>
                  </div>
                  <div className="record-field">
                    <span className="field-key">Transcript</span>
                    <span className="status-pill-verified">
                      <Check size={12} />
                      <span>Human Verified</span>
                    </span>
                  </div>
                  <div className="record-field">
                    <span className="field-key">Suggested Topic</span>
                    <span className="field-val">Invoice Clarification</span>
                  </div>
                </div>

                <div className="review-notes-box">
                  <span className="notes-key">Review Note:</span>
                  <p className="notes-text">
                    &ldquo;Customer requested an explanation of the latest charge. Verified line items against account history.&rdquo;
                  </p>
                </div>

                <div className="outcome-strip">
                  <span className="outcome-key">Outcome:</span>
                  <span className="outcome-val-pill">Follow-up Required</span>
                </div>
              </div>
            )}

            {activeTab === 'transcript' && (
              <div className="tab-pane-view">
                <div className="transcript-review-view">
                  <div className="transcript-meta-row">
                    <span className="audio-channel">Speaker 01 (Agent) &amp; Speaker 02 (Customer)</span>
                    <span className="verification-status-tag">Human Verification: Complete</span>
                  </div>

                  <div className="dialogue-flow">
                    <div className="dialogue-bubble agent">
                      <span className="speaker-name">Agent [00:12]:</span>
                      <p className="dialogue-text">
                        Thank you for calling Dovell Support. How may I assist you with your invoice today?
                      </p>
                    </div>
                    <div className="dialogue-bubble customer">
                      <span className="speaker-name">Customer [00:24]:</span>
                      <p className="dialogue-text">
                        Hi, I noticed a discrepancy in my latest billing summary under the tier add-on. Could we clarify that charge?
                      </p>
                    </div>
                  </div>

                  <div className="transcript-correction-note">
                    <Check size={14} className="text-emerald" />
                    <span>Reviewer verified transcript against audio timestamp 00:24. Status marked as Verified.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analysis' && (
              <div className="tab-pane-view">
                <div className="analysis-summary-view">
                  <div className="analysis-tags-grid">
                    <div className="analysis-tag-box">
                      <span className="tag-header">Suggested Topic</span>
                      <span className="tag-body">Invoice Clarification</span>
                    </div>
                    <div className="analysis-tag-box">
                      <span className="tag-header">Keywords Detected</span>
                      <span className="tag-body">Billing, Charge, Tier, Discrepancy</span>
                    </div>
                    <div className="analysis-tag-box">
                      <span className="tag-header">Sentiment Indicator</span>
                      <span className="tag-body">Neutral · Constructive</span>
                    </div>
                  </div>

                  <div className="outcome-assignment-box">
                    <span className="box-title">Follow-up Routing:</span>
                    <p className="box-desc">
                      Follow-up Required — Assigned to Customer Support Tier 2 for billing adjustment review.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

      <style jsx>{`
        .how-it-works-section {
          background-color: #FFFFFF;
          padding: 90px 0 100px;
          border-bottom: 1px solid #E2E8F0;
        }

        .section-header {
          margin-bottom: 54px;
        }

        .bracket-tag {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: #E85A2A;
          letter-spacing: 0.12em;
          margin-bottom: 12px;
          background: rgba(232, 90, 42, 0.08);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(232, 90, 42, 0.2);
        }

        .section-title {
          font-family: var(--font-primary);
          font-size: clamp(1.8rem, 2.7vw, 2.5rem);
          font-weight: 800;
          color: #0A1C36;
          letter-spacing: -0.025em;
          margin-bottom: 16px;
        }

        .accent-lines.center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 14px auto 20px;
        }

        .accent-line-coral {
          width: 48px;
          height: 3px;
          background-color: #E85A2A;
          border-radius: 2px;
        }

        .accent-line-blue {
          width: 48px;
          height: 3px;
          background-color: #38BDF8;
          border-radius: 2px;
        }

        .section-subtitle.center-subtitle {
          max-width: 680px;
          margin: 0 auto;
          color: #64748B;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        /* 4-Step Pipeline Grid */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 50px;
        }

        .step-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
          border-color: #CBD5E1;
          box-shadow: 0 10px 24px rgba(10, 28, 54, 0.08);
        }

        .step-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .step-number {
          font-family: var(--font-mono);
          font-size: 1.4rem;
          font-weight: 900;
          color: #0A1C36;
          opacity: 0.85;
        }

        .step-graphic-badge {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: #FFFFFF;
          border: 1px solid rgba(232, 90, 42, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          box-shadow: 0 4px 14px rgba(232, 90, 42, 0.08);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .step-card:hover .step-graphic-badge {
          transform: scale(1.1) rotate(2deg);
          border-color: #E85A2A;
          box-shadow: 0 6px 18px rgba(232, 90, 42, 0.16);
        }

        .step-svg-graphic {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .step-category-pill {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          color: #64748B;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .step-title {
          font-family: var(--font-primary);
          font-size: 1.05rem;
          font-weight: 800;
          color: #0A1C36;
          line-height: 1.35;
          margin-bottom: 10px;
        }

        .step-desc {
          font-size: 0.86rem;
          line-height: 1.55;
          color: #475569;
          margin-bottom: 18px;
          flex: 1;
        }

        .step-status-footer {
          padding-top: 12px;
          border-top: 1px solid #E2E8F0;
        }

        .status-label-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: #0284C7;
          background: rgba(2, 132, 199, 0.08);
          padding: 3px 8px;
          border-radius: 4px;
          display: inline-block;
        }

        /* 3-Tab Workflow Preview Panel */
        .workflow-preview-panel {
          background: #0A1C36;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(10, 28, 54, 0.18);
        }

        .tabs-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.25);
          padding: 12px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          flex-wrap: wrap;
          gap: 12px;
        }

        .tabs-list {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tab-btn {
          font-family: var(--font-primary);
          font-size: 0.84rem;
          font-weight: 600;
          color: #94A3B8;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .tab-btn:hover {
          color: #FFFFFF;
        }

        .tab-btn.active {
          background: rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
          font-weight: 700;
        }

        .panel-cta-btn {
          font-family: var(--font-primary);
          background: #E85A2A;
          color: #FFFFFF;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .panel-cta-btn:hover {
          background: #D0481B;
        }

        .tab-content-body {
          padding: 32px 30px;
          color: #FFFFFF;
        }

        .record-details-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .record-field {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .field-key {
          font-size: 0.72rem;
          color: #94A3B8;
          font-weight: 500;
        }

        .field-val {
          font-size: 0.92rem;
          font-weight: 700;
          color: #FFFFFF;
        }

        .field-val.highlight {
          color: #38BDF8;
        }

        .status-pill-verified {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #34D399;
          background: rgba(52, 211, 153, 0.15);
          padding: 3px 8px;
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .review-notes-box {
          background: rgba(255, 255, 255, 0.04);
          border-left: 3px solid #E85A2A;
          border-radius: 0 10px 10px 0;
          padding: 14px 18px;
          margin-bottom: 20px;
        }

        .notes-key {
          font-size: 0.76rem;
          font-weight: 700;
          color: #E85A2A;
          display: block;
          margin-bottom: 4px;
        }

        .notes-text {
          font-size: 0.88rem;
          color: #E2E8F0;
          font-style: italic;
          line-height: 1.5;
        }

        .outcome-strip {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .outcome-key {
          font-size: 0.82rem;
          color: #94A3B8;
          font-weight: 600;
        }

        .outcome-val-pill {
          background: rgba(248, 113, 113, 0.18);
          border: 1px solid rgba(248, 113, 113, 0.4);
          color: #F87171;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: var(--radius-full);
        }

        /* Dialogue styling for Transcript Tab */
        .transcript-meta-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.76rem;
          color: #94A3B8;
          margin-bottom: 16px;
        }

        .verification-status-tag {
          color: #34D399;
          font-weight: 600;
        }

        .dialogue-flow {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 18px;
        }

        .dialogue-bubble {
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
        }

        .dialogue-bubble.agent {
          border-left: 3px solid #38BDF8;
        }

        .dialogue-bubble.customer {
          border-left: 3px solid #A78BFA;
        }

        .speaker-name {
          font-size: 0.74rem;
          font-weight: 700;
          color: #94A3B8;
          display: block;
          margin-bottom: 4px;
        }

        .dialogue-text {
          font-size: 0.88rem;
          color: #FFFFFF;
          line-height: 1.5;
        }

        .transcript-correction-note {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: #94A3B8;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
        }

        .text-emerald {
          color: #34D399;
        }

        /* Analysis Tab */
        .analysis-tags-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 20px;
        }

        .analysis-tag-box {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px;
        }

        .tag-header {
          font-size: 0.72rem;
          color: #94A3B8;
          display: block;
          margin-bottom: 4px;
        }

        .tag-body {
          font-size: 0.88rem;
          font-weight: 700;
          color: #38BDF8;
        }

        .outcome-assignment-box {
          background: rgba(255, 255, 255, 0.04);
          border-radius: 10px;
          padding: 14px;
        }

        .box-title {
          font-size: 0.76rem;
          font-weight: 700;
          color: #CBD5E1;
          display: block;
          margin-bottom: 4px;
        }

        .box-desc {
          font-size: 0.86rem;
          color: #E2E8F0;
        }

        @media (max-width: 1024px) {
          .steps-grid {
            grid-template-columns: 1fr 1fr;
          }
          .record-details-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .record-details-grid {
            grid-template-columns: 1fr;
          }
          .analysis-tags-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
