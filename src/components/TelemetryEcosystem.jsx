'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  FileText, 
  GitBranch, 
  Headphones, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle2, 
  Tag, 
  Clock, 
  ArrowRight,
  Activity,
  Play,
  Pause
} from 'lucide-react';

const WORKFLOW_TABS = [
  {
    id: 'teams',
    name: 'Teams',
    description: 'Empower cross-functional teams with structured voice intelligence.',
    items: [
      {
        title: 'Customer Support',
        desc: 'Find previous interactions and track unresolved issues.',
        meta: 'Resolution tracking'
      },
      {
        title: 'Contact Center Managers',
        desc: 'Review conversation volume, topics, and outcomes.',
        meta: 'Capacity & insights'
      },
      {
        title: 'Quality Assurance',
        desc: 'Assign reviews, verify transcripts, and document findings.',
        meta: 'Compliance & accuracy'
      },
      {
        title: 'Business Analysts',
        desc: 'Explore recurring topics and communication trends.',
        meta: 'Trend discovery'
      },
      {
        title: 'Customer Experience',
        desc: 'Identify repeated concerns and follow-up needs.',
        meta: 'Journey optimization'
      },
      {
        title: 'Compliance & Operations',
        desc: 'Examine review history and investigation notes.',
        meta: 'Audit trails'
      }
    ]
  },
  {
    id: 'records',
    name: 'Conversation Records',
    description: 'Every interaction captured with complete contextual data.',
    items: [
      {
        title: 'Audio recordings',
        desc: 'High-fidelity audio storage linked to time-aligned transcript timestamps.',
        meta: 'Multi-format support'
      },
      {
        title: 'Conversation details',
        desc: 'Caller metadata, duration, timestamps, channel, and agent attribution.',
        meta: 'Context preservation'
      },
      {
        title: 'Transcripts and corrections',
        desc: 'Automated speech-to-text with reviewer correction markup and audit history.',
        meta: 'Dual-state verification'
      },
      {
        title: 'Topics and keywords',
        desc: 'Configurable NLP indicators for product mentions, intent, and recurring themes.',
        meta: 'Automated tagging'
      },
      {
        title: 'Tags and reviewer notes',
        desc: 'Custom team labels, QA scores, flags for supervisor review, and rich notes.',
        meta: 'Collaborative review'
      },
      {
        title: 'Outcomes and review history',
        desc: 'Final resolution codes, follow-up tickets created, and full change logging.',
        meta: 'Traceable workflow'
      }
    ]
  },
  {
    id: 'workflows',
    name: 'Review Workflows',
    description: 'A structured stage-by-stage lifecycle from upload to report.',
    items: [
      {
        title: 'Upload and organize',
        desc: 'Ingest recordings, append metadata, and assign to target departmental queues.',
        meta: 'Step 01'
      },
      {
        title: 'Track processing',
        desc: 'Monitor transcription progress, sentiment analysis, and automated topic detection.',
        meta: 'Step 02'
      },
      {
        title: 'Assign a reviewer',
        desc: 'Route conversations to specific QA specialists or team leads based on workload.',
        meta: 'Step 03'
      },
      {
        title: 'Correct and verify',
        desc: 'Review transcripts alongside playback, rectify terms, and mark as Human Verified.',
        meta: 'Step 04'
      },
      {
        title: 'Tag and categorize',
        desc: 'Apply verified topic tags, flag coaching moments, and record conversation outcome.',
        meta: 'Step 05'
      },
      {
        title: 'Report and follow up',
        desc: 'Aggregate team metrics, export clean transcripts, and trigger follow-up actions.',
        meta: 'Step 06'
      }
    ]
  }
];

const INITIAL_ACTIVITIES = [
  { time: '10:24:12', type: 'UPLOAD', text: 'A new support recording was added.' },
  { time: '10:24:14', type: 'PROCESSING', text: 'A transcript is ready for review.' },
  { time: '10:24:16', type: 'REVIEW', text: 'A reviewer corrected the transcript.' },
  { time: '10:24:19', type: 'TAG', text: 'The conversation was categorized as a billing inquiry.' },
  { time: '10:24:22', type: 'OUTCOME', text: 'Follow-up was assigned to the support team.' }
];

export default function TelemetryEcosystem() {
  const [activeTab, setActiveTab] = useState('teams');
  const [activities, setActivities] = useState(INITIAL_ACTIVITIES);
  const [isLive, setIsLive] = useState(true);

  // Rotating activity feed
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      const feedItems = [
        { type: 'UPLOAD', text: 'Tier-2 Technical Support call (14m 20s) uploaded and queued.' },
        { type: 'PROCESSING', text: 'Automated transcription complete (98.4% confidence score).' },
        { type: 'REVIEW', text: 'Reviewer Sarah verified customer address and billing line items.' },
        { type: 'TAG', text: 'Categorized under "Invoice Discrepancy" · High Priority.' },
        { type: 'OUTCOME', text: 'Follow-up ticket #8492 dispatched to Billing Operations.' },
        { type: 'REVIEW', text: 'QA verification completed. Marked as Human Verified.' }
      ];
      const randomItem = feedItems[Math.floor(Math.random() * feedItems.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      setActivities((prev) => [
        { time: timeStr, type: randomItem.type, text: randomItem.text },
        ...prev.slice(0, 5)
      ]);
    }, 4000);

    return () => clearInterval(interval);
  }, [isLive]);

  const currentTabData = WORKFLOW_TABS.find((t) => t.id === activeTab);

  return (
    <section className="teams-section section-padding" id="solutions">
      <div className="container">
        <div className="section-header text-center">
          <span className="bracket-tag">BUILT FOR COMMUNICATION TEAMS</span>
          <h2 className="section-title">Support the people who review and act on conversations</h2>
          <p className="section-subtitle center-subtitle">
            Bring conversation records into the daily work of support, quality assurance, analysis, and operations teams.
          </p>
        </div>

        <div className="teams-layout-grid">
          {/* Left: Tabbed Teams & Workflows Grid */}
          <div className="matrix-pane">
            <div className="matrix-tabs">
              {WORKFLOW_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`matrix-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                >
                  {tab.id === 'teams' && <Users size={14} className="tab-icon" />}
                  {tab.id === 'records' && <FileText size={14} className="tab-icon" />}
                  {tab.id === 'workflows' && <GitBranch size={14} className="tab-icon" />}
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            <div className="matrix-cards-grid">
              {currentTabData?.items.map((item, idx) => (
                <div key={idx} className="matrix-card">
                  <div className="matrix-card-header">
                    <span className="matrix-item-name">{item.title}</span>
                    <CheckCircle2 size={15} className="text-coral" />
                  </div>
                  <div className="matrix-card-desc">{item.desc}</div>
                  <div className="matrix-card-meta">
                    <Tag size={11} className="meta-icon" />
                    <span>{item.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live Conversation Activity Feed */}
          <div className="activity-stream-pane">
            <div className="stream-header">
              <div className="stream-title-group">
                <Activity size={16} className="text-coral" />
                <span className="stream-title">Conversation Activity</span>
                <span className="badge-sample">SAMPLE ACTIVITY</span>
              </div>
              <button 
                onClick={() => setIsLive(!isLive)}
                className="live-toggle-btn"
                title={isLive ? 'Pause Activity Feed' : 'Resume Activity Feed'}
              >
                {isLive ? <Pause size={12} /> : <Play size={12} />}
                <span>{isLive ? 'LIVE' : 'PAUSED'}</span>
              </button>
            </div>

            <div className="stream-logs-box">
              {activities.map((act, idx) => (
                <div key={idx} className="log-entry">
                  <span className="log-time">{act.time}</span>
                  <span className={`log-badge badge-${act.type.toLowerCase()}`}>{act.type}</span>
                  <span className="log-text">{act.text}</span>
                </div>
              ))}
            </div>

            <div className="stream-footer">
              <span className="footer-tag">Processing Status</span>
              <span className="footer-dot">·</span>
              <span className="footer-tag">Review Progress</span>
              <span className="footer-dot">·</span>
              <span className="footer-tag">Recorded Outcomes</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .teams-section {
          background-color: var(--color-white);
        }

        .text-center {
          text-align: center;
        }

        .center-subtitle {
          margin-left: auto;
          margin-right: auto;
        }

        .teams-layout-grid {
          display: grid;
          grid-template-columns: 1.28fr 0.92fr;
          gap: 32px;
          align-items: stretch;
        }

        /* Matrix Pane */
        .matrix-pane {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-xl);
          padding: 28px;
          display: flex;
          flex-direction: column;
        }

        .matrix-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          border-bottom: 1px solid #E2E8F0;
          padding-bottom: 12px;
          flex-wrap: wrap;
        }

        .matrix-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.86rem;
          font-weight: 700;
          color: #64748B;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .matrix-tab-btn:hover {
          color: var(--color-navy-primary);
          background: #EEF2F6;
        }

        .matrix-tab-btn.active {
          background: var(--color-navy-primary);
          color: var(--color-white);
        }

        .matrix-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .matrix-card {
          background: var(--color-white);
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .matrix-card:hover {
          border-color: #CBD5E1;
          box-shadow: 0 6px 16px rgba(10, 28, 54, 0.05);
          transform: translateY(-1px);
        }

        .matrix-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .matrix-item-name {
          font-size: 0.92rem;
          font-weight: 800;
          color: var(--color-navy-primary);
        }

        .text-coral {
          color: var(--color-coral);
        }

        .matrix-card-desc {
          font-size: 0.8rem;
          color: #64748B;
          line-height: 1.45;
          flex: 1;
        }

        .matrix-card-meta {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #0A1C36;
          font-family: var(--font-mono);
          margin-top: 4px;
        }

        .meta-icon {
          color: #94A3B8;
        }

        /* Activity Stream Pane */
        .activity-stream-pane {
          background: #0A1C36;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(255, 255, 255, 0.12);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 15px 35px rgba(10, 28, 54, 0.2);
        }

        .stream-header {
          background: #061121;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stream-title-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .stream-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #F8FAFC;
          letter-spacing: 0.02em;
        }

        .badge-sample {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: var(--radius-full);
          background: rgba(232, 90, 42, 0.2);
          color: #FF8F6B;
          border: 1px solid rgba(232, 90, 42, 0.4);
        }

        .live-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
          border: 1px solid #10B981;
          border-radius: var(--radius-full);
          padding: 4px 10px;
          font-size: 0.68rem;
          font-weight: 700;
          font-family: var(--font-mono);
          transition: all 0.2s;
        }

        .stream-logs-box {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;
          overflow-y: auto;
          min-height: 280px;
        }

        .log-entry {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          line-height: 1.45;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .log-time {
          color: #64748B;
          flex-shrink: 0;
          font-size: 0.72rem;
        }

        .log-badge {
          padding: 2px 7px;
          border-radius: 4px;
          font-size: 0.65rem;
          font-weight: 800;
          flex-shrink: 0;
          letter-spacing: 0.03em;
        }

        .badge-upload {
          background: rgba(0, 194, 255, 0.18);
          color: #38BDF8;
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        .badge-processing {
          background: rgba(234, 179, 8, 0.18);
          color: #FACC15;
          border: 1px solid rgba(250, 204, 21, 0.3);
        }

        .badge-review {
          background: rgba(168, 85, 247, 0.18);
          color: #C084FC;
          border: 1px solid rgba(192, 132, 252, 0.3);
        }

        .badge-tag {
          background: rgba(16, 185, 129, 0.18);
          color: #34D399;
          border: 1px solid rgba(52, 211, 153, 0.3);
        }

        .badge-outcome {
          background: rgba(232, 90, 42, 0.2);
          color: #FF8F6B;
          border: 1px solid rgba(232, 90, 42, 0.4);
        }

        .log-text {
          color: #E2E8F0;
          font-family: var(--font-sans);
          font-size: 0.82rem;
          line-height: 1.4;
        }

        .stream-footer {
          background: #061121;
          padding: 14px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: #94A3B8;
        }

        .footer-tag {
          color: #CBD5E1;
          font-weight: 600;
        }

        .footer-dot {
          color: var(--color-coral);
          font-weight: 700;
        }

        @media (max-width: 992px) {
          .teams-layout-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .matrix-cards-grid {
            grid-template-columns: 1fr;
          }
          .stream-footer {
            flex-wrap: wrap;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}
