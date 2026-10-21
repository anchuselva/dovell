'use client';

import React, { useState } from 'react';
import { 
  Headphones, 
  Users, 
  FileText, 
  BarChart3, 
  MessageSquare, 
  ShieldCheck, 
  ChevronRight, 
  Play, 
  Pause, 
  CheckCircle2, 
  Tag, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import PlayerWaveformRunningCanvas from './PlayerWaveformRunningCanvas';

const TEAM_ROLES = [
  {
    id: 'support',
    name: 'Customer Support',
    subtitle: 'Find previous interactions and track unresolved issues.',
    icon: Headphones,
    workspaceTitle: 'Customer Support Workspace',
    audioTitle: 'Account access & MFA reset',
    duration: '03:18',
    speakers: [
      {
        role: 'Customer',
        color: '#38BDF8',
        time: '00:08',
        text: "I got locked out of my team account after changing my work phone. Can you reset my authentication?"
      },
      {
        role: 'Agent',
        color: '#E85A2A',
        time: '00:32',
        text: "I can verify your identity right away. I've sent a one-time push authorization to your primary work email."
      }
    ],
    tags: [
      { icon: CheckCircle2, text: 'Identity confirmed', type: 'green' },
      { icon: Tag, text: 'Account Security', type: 'blue' },
      { icon: CheckCircle2, text: 'Issue resolved', type: 'green' }
    ],
    steps: [
      { num: 1, label: 'Locate record' },
      { num: 2, label: 'Verify identity' },
      { num: 3, label: 'Resolve ticket' }
    ],
    activeStep: 2
  },
  {
    id: 'managers',
    name: 'Contact Center Managers',
    subtitle: 'Review conversation volume, topics, and outcomes.',
    icon: Users,
    workspaceTitle: 'Contact Center Manager Workspace',
    audioTitle: 'Escalation review — Tier 2 routing',
    duration: '06:45',
    speakers: [
      {
        role: 'Customer',
        color: '#38BDF8',
        time: '00:15',
        text: "This is the second time I've called regarding our enterprise SLA downtime report. Who can give me a definitive update?"
      },
      {
        role: 'Agent',
        color: '#E85A2A',
        time: '00:54',
        text: "I understand completely. I am conferring directly with our lead infrastructure engineer and generating an incident audit log now."
      }
    ],
    tags: [
      { icon: AlertCircle, text: 'Escalation flagged', type: 'orange' },
      { icon: Tag, text: 'Enterprise SLA', type: 'blue' },
      { icon: CheckCircle2, text: 'Supervisor notified', type: 'green' }
    ],
    steps: [
      { num: 1, label: 'Review workload' },
      { num: 2, label: 'Coach agent' },
      { num: 3, label: 'Optimize routing' }
    ],
    activeStep: 1
  },
  {
    id: 'qa',
    name: 'Quality Assurance',
    subtitle: 'Assign reviews, verify transcripts, and document findings.',
    icon: FileText,
    workspaceTitle: 'Quality Assurance Workspace',
    audioTitle: 'Billing inquiry',
    duration: '04:32',
    speakers: [
      {
        role: 'Customer',
        color: '#38BDF8',
        time: '00:12',
        text: "Hi, I'm reaching out because I was charged twice for my plan this month. Can you help me understand why this happened?"
      },
      {
        role: 'Agent',
        color: '#E85A2A',
        time: '00:46',
        text: "Of course, I can help with that. Let me pull up your account and take a look at the recent charges. I see the duplicate payment here — I'll go ahead and submit a refund for the extra charge."
      }
    ],
    tags: [
      { icon: CheckCircle2, text: 'Transcript verified', type: 'green' },
      { icon: Tag, text: 'Billing topic', type: 'blue' },
      { icon: AlertCircle, text: 'Follow-up required', type: 'orange' }
    ],
    steps: [
      { num: 1, label: 'Review transcript' },
      { num: 2, label: 'Document finding' },
      { num: 3, label: 'Assign follow-up' }
    ],
    activeStep: 1
  },
  {
    id: 'analysts',
    name: 'Business Analysts',
    subtitle: 'Explore recurring topics and communication trends.',
    icon: BarChart3,
    workspaceTitle: 'Business Analysis Workspace',
    audioTitle: 'Feature request & export pipeline',
    duration: '05:20',
    speakers: [
      {
        role: 'Customer',
        color: '#38BDF8',
        time: '00:22',
        text: "We love the speech analytics, but we need automated weekly CSV exports directly into our Snowflake warehouse."
      },
      {
        role: 'Agent',
        color: '#E85A2A',
        time: '01:05',
        text: "That makes great sense. We currently support direct webhook ingestion and our automated warehouse sync launches this quarter."
      }
    ],
    tags: [
      { icon: CheckCircle2, text: 'Trend captured', type: 'green' },
      { icon: Tag, text: 'Product Feedback', type: 'blue' },
      { icon: CheckCircle2, text: 'Pipeline mapped', type: 'green' }
    ],
    steps: [
      { num: 1, label: 'Extract keywords' },
      { num: 2, label: 'Cluster topics' },
      { num: 3, label: 'Model impact' }
    ],
    activeStep: 2
  },
  {
    id: 'cx',
    name: 'Customer Experience',
    subtitle: 'Identify repeated concerns and follow-up needs.',
    icon: MessageSquare,
    workspaceTitle: 'Customer Experience Workspace',
    audioTitle: 'Onboarding friction & retention feedback',
    duration: '04:10',
    speakers: [
      {
        role: 'Customer',
        color: '#38BDF8',
        time: '00:14',
        text: "The initial workspace setup was smooth, but our compliance team had questions about GDPR audio retention rules."
      },
      {
        role: 'Agent',
        color: '#E85A2A',
        time: '00:48',
        text: "All recordings in Dovell support custom automated retention policies with cryptographic erasure at rest."
      }
    ],
    tags: [
      { icon: CheckCircle2, text: 'Sentiment: Positive', type: 'green' },
      { icon: Tag, text: 'Onboarding CX', type: 'blue' },
      { icon: AlertCircle, text: 'Retention policy', type: 'orange' }
    ],
    steps: [
      { num: 1, label: 'Map journey' },
      { num: 2, label: 'Flag friction' },
      { num: 3, label: 'Improve CX' }
    ],
    activeStep: 1
  },
  {
    id: 'compliance',
    name: 'Compliance & Operations',
    subtitle: 'Examine review history and investigation notes.',
    icon: ShieldCheck,
    workspaceTitle: 'Compliance & Operations Workspace',
    audioTitle: 'PCI-DSS disclosure verification',
    duration: '05:50',
    speakers: [
      {
        role: 'Agent',
        color: '#E85A2A',
        time: '00:05',
        text: "This call is recorded for quality and compliance. Please do not state your CVV code aloud as our automated pause-and-resume is active."
      },
      {
        role: 'Customer',
        color: '#38BDF8',
        time: '00:28',
        text: "Understood, I entered the billing details securely through the digital keypad."
      }
    ],
    tags: [
      { icon: CheckCircle2, text: 'Mandatory disclosure passed', type: 'green' },
      { icon: Tag, text: 'PCI-DSS Audit', type: 'blue' },
      { icon: CheckCircle2, text: 'Redaction verified', type: 'green' }
    ],
    steps: [
      { num: 1, label: 'Audit disclosure' },
      { num: 2, label: 'Verify redaction' },
      { num: 3, label: 'Log compliance' }
    ],
    activeStep: 3
  }
];

export default function TelemetryEcosystem() {
  const [activeRoleId, setActiveRoleId] = useState('qa');
  const [isPlaying, setIsPlaying] = useState(true);

  const activeRole = TEAM_ROLES.find((r) => r.id === activeRoleId) || TEAM_ROLES[2];
  const RoleIcon = activeRole.icon;

  return (
    <section className="teams-section section-padding" id="solutions">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="bracket-tag">[ BUILT FOR COMMUNICATION TEAMS ]</span>
          <h2 className="section-title">
            <span className="title-row">One workspace.</span>
            <span className="title-row">Every conversation team.</span>
          </h2>
          <p className="section-subtitle center-subtitle">
            Give each team the context to review, understand, and act.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="teams-layout-grid">
          
          {/* Left Column: 6 Interactive Role Selectors */}
          <div className="roles-list-col">
            <div className="roles-stack">
              {TEAM_ROLES.map((role) => {
                const isSelected = role.id === activeRoleId;
                const IconComponent = role.icon;

                return (
                  <button
                    key={role.id}
                    onClick={() => setActiveRoleId(role.id)}
                    className={`role-item-btn ${isSelected ? 'is-selected' : ''}`}
                    type="button"
                  >
                    <div className="role-icon-box">
                      <IconComponent size={20} className={isSelected ? 'text-cyan' : 'text-slate'} />
                    </div>

                    <div className="role-text-box">
                      <div className="role-title">{role.name}</div>
                      <div className="role-desc">{role.subtitle}</div>
                    </div>

                    <div className="role-arrow">
                      <ChevronRight size={18} className={isSelected ? 'text-cyan' : 'text-chevron'} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Link below roles list */}
            <div className="explore-workflows-wrap">
              <a href="#contact" className="explore-workflows-link">
                <span>Explore team workflows</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Dark Navy Workspace Console */}
          <div className="workspace-console-col">
            <div className="workspace-console-card">
              
              {/* Console Header */}
              <div className="console-header-bar">
                <div className="console-title-group">
                  <RoleIcon size={19} className="text-cyan-glow" />
                  <h3 className="console-heading">{activeRole.workspaceTitle}</h3>
                </div>
                <div className="sample-preview-badge">
                  <span>SAMPLE PREVIEW</span>
                </div>
              </div>

              {/* Audio Player Strip with Animated Waveform ("left to right up down") */}
              <div className="audio-player-strip">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="audio-play-btn"
                  type="button"
                  title={isPlaying ? "Pause audio stream" : "Play audio stream"}
                >
                  {isPlaying ? <Pause size={14} fill="#FFFFFF" /> : <Play size={14} fill="#FFFFFF" style={{ marginLeft: 2 }} />}
                </button>

                <span className="audio-track-title">{activeRole.audioTitle}</span>

                {/* Animated Voice Waveform Canvas: Active Left-to-Right and Up-Down Undulation */}
                <div className="player-waveform-container">
                  <PlayerWaveformRunningCanvas isPlaying={isPlaying} roleId={activeRole.id} />
                </div>

                <span className="audio-timestamp">{activeRole.duration}</span>
              </div>

              {/* Dialogue Transcript Card */}
              <div className="transcript-dialogue-card">
                {activeRole.speakers.map((spk, sIdx) => (
                  <div key={sIdx} className={`speaker-dialogue-entry ${sIdx > 0 ? 'entry-mt' : ''}`}>
                    <div className="speaker-header-row">
                      <span className="speaker-bullet" style={{ backgroundColor: spk.color }}></span>
                      <span className="speaker-name" style={{ color: spk.color }}>{spk.role}</span>
                      <span className="speaker-time">{spk.time}</span>
                    </div>
                    <p className="speaker-quote">"{spk.text}"</p>
                  </div>
                ))}
              </div>

              {/* Review Summary */}
              <div className="review-summary-area">
                <div className="review-summary-heading">Review Summary</div>
                
                {/* 3 Status Tag Pills */}
                <div className="summary-tags-row">
                  {activeRole.tags.map((tag, tIdx) => {
                    const TagIcon = tag.icon;
                    return (
                      <div key={tIdx} className={`summary-pill-badge pill-${tag.type}`}>
                        <TagIcon size={13} />
                        <span>{tag.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Workflow Progress Stepper */}
                <div className="workflow-stepper-row">
                  {activeRole.steps.map((st, stIdx) => {
                    const isStepActive = st.num === activeRole.activeStep;
                    const isStepCompleted = st.num < activeRole.activeStep;

                    return (
                      <React.Fragment key={st.num}>
                        <div className={`stepper-node ${isStepActive ? 'active-step' : ''} ${isStepCompleted ? 'completed-step' : ''}`}>
                          <span className="step-badge">{st.num}</span>
                          <span className="step-label">{st.label}</span>
                        </div>
                        {stIdx < activeRole.steps.length - 1 && (
                          <div className="stepper-connector-line"></div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Section Bottom Tagline */}
        <div className="section-bottom-tagline">
          Verify transcripts. Record findings. Keep reviews traceable.
        </div>

      </div>

      <style jsx>{`
        .teams-section {
          background-color: #FFFFFF;
          padding: 85px 0 95px;
          border-bottom: 1px solid #E2E8F0;
        }

        .section-header {
          margin-bottom: 50px;
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
          padding: 4px 14px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(232, 90, 42, 0.2);
        }

        .section-title {
          font-family: var(--font-primary);
          font-size: clamp(2rem, 3vw, 2.75rem);
          font-weight: 800;
          color: #0A1C36;
          letter-spacing: -0.03em;
          line-height: 1.18;
          margin: 0 0 14px 0;
        }

        .title-row {
          display: block;
        }

        .section-subtitle.center-subtitle {
          max-width: 680px;
          margin: 0 auto;
          color: #64748B;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        /* 2-Column Layout Grid */
        .teams-layout-grid {
          display: grid;
          grid-template-columns: 440px 1fr;
          gap: 36px;
          align-items: flex-start;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Left Column: Role Selectors */
        .roles-list-col {
          display: flex;
          flex-direction: column;
        }

        .roles-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .role-item-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          border-radius: 12px;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          width: 100%;
        }

        .role-item-btn:hover {
          border-color: #CBD5E1;
          transform: translateX(3px);
          box-shadow: 0 4px 14px rgba(10, 28, 54, 0.06);
        }

        .role-item-btn.is-selected {
          border-color: #38BDF8;
          border-left: 4px solid #38BDF8;
          background: #F0F9FF;
          box-shadow: 0 6px 20px rgba(56, 189, 248, 0.15);
        }

        .role-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .text-cyan {
          color: #0284C7;
        }

        .text-slate {
          color: #0A1C36;
        }

        .text-chevron {
          color: #94A3B8;
        }

        .role-text-box {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .role-title {
          font-family: var(--font-primary);
          font-size: 0.98rem;
          font-weight: 700;
          color: #0A1C36;
          letter-spacing: -0.01em;
        }

        .is-selected .role-title {
          color: #0369A1;
        }

        .role-desc {
          font-family: var(--font-primary);
          font-size: 0.81rem;
          line-height: 1.45;
          color: #64748B;
        }

        .role-arrow {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .explore-workflows-wrap {
          margin-top: 18px;
          padding-left: 6px;
        }

        .explore-workflows-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-primary);
          font-size: 0.9rem;
          font-weight: 700;
          color: #E85A2A;
          text-decoration: none;
          transition: gap 0.2s ease;
        }

        .explore-workflows-link:hover {
          gap: 10px;
          color: #D0481B;
        }

        /* Right Column: Console Card */
        .workspace-console-card {
          background: #081B33;
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: 18px;
          padding: 28px 30px;
          box-shadow: 0 20px 50px rgba(10, 28, 54, 0.25);
          display: flex;
          flex-direction: column;
        }

        .console-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .console-title-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .text-cyan-glow {
          color: #38BDF8;
          filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.6));
        }

        .console-heading {
          font-family: var(--font-primary);
          font-size: 1.25rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .sample-preview-badge {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #E85A2A;
          background: rgba(232, 90, 42, 0.08);
          border: 1px solid rgba(232, 90, 42, 0.45);
          padding: 4px 12px;
          border-radius: var(--radius-full);
        }

        /* Audio Player Strip */
        .audio-player-strip {
          background: rgba(2, 6, 23, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 12px 18px;
          margin-top: 18px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .audio-play-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #0B192C;
          border: 1.5px solid rgba(56, 189, 248, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.2s ease;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.25);
        }

        .audio-play-btn:hover {
          background: #38BDF8;
          border-color: #38BDF8;
          transform: scale(1.08);
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.5);
        }

        .audio-track-title {
          font-family: var(--font-primary);
          font-size: 0.94rem;
          font-weight: 700;
          color: #FFFFFF;
          white-space: nowrap;
          min-width: 120px;
        }

        .player-waveform-container {
          flex: 1;
          height: 38px;
          position: relative;
          overflow: hidden;
        }

        .audio-timestamp {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 600;
          color: #94A3B8;
          white-space: nowrap;
        }

        /* Dialogue Transcript Card */
        .transcript-dialogue-card {
          background: rgba(2, 6, 23, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 18px 20px;
          margin-top: 16px;
        }

        .entry-mt {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .speaker-header-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .speaker-bullet {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .speaker-name {
          font-family: var(--font-primary);
          font-size: 0.85rem;
          font-weight: 700;
        }

        .speaker-time {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: #64748B;
        }

        .speaker-quote {
          font-family: var(--font-primary);
          font-size: 0.88rem;
          line-height: 1.55;
          color: #E2E8F0;
          margin: 0;
        }

        /* Review Summary Area */
        .review-summary-area {
          margin-top: 20px;
        }

        .review-summary-heading {
          font-family: var(--font-primary);
          font-size: 0.95rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 12px;
        }

        .summary-tags-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .summary-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: var(--radius-full);
          font-family: var(--font-primary);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.01em;
        }

        .pill-green {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #10B981;
        }

        .pill-blue {
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.4);
          color: #38BDF8;
        }

        .pill-orange {
          background: rgba(232, 90, 42, 0.12);
          border: 1px solid rgba(232, 90, 42, 0.4);
          color: #E85A2A;
        }

        /* Stepper Row */
        .workflow-stepper-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .stepper-node {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .step-badge {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1.5px solid #64748B;
          color: #94A3B8;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .active-step .step-badge {
          background: #0284C7;
          border-color: #38BDF8;
          color: #FFFFFF;
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
        }

        .completed-step .step-badge {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10B981;
          color: #10B981;
        }

        .step-label {
          font-family: var(--font-primary);
          font-size: 0.78rem;
          color: #94A3B8;
          font-weight: 500;
          white-space: nowrap;
        }

        .active-step .step-label {
          color: #FFFFFF;
          font-weight: 700;
        }

        .stepper-connector-line {
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.12);
          min-width: 16px;
        }

        /* Section Bottom Tagline */
        .section-bottom-tagline {
          text-align: center;
          margin-top: 45px;
          font-family: var(--font-primary);
          font-size: 1.05rem;
          font-weight: 800;
          color: #0A1C36;
          letter-spacing: -0.01em;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .teams-layout-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .roles-list-col {
            max-width: 100%;
          }
          .workflow-stepper-row {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 640px) {
          .audio-player-strip {
            flex-wrap: wrap;
            gap: 10px;
          }
          .player-waveform-container {
            width: 100%;
            order: 3;
          }
          .audio-timestamp {
            margin-left: auto;
          }
          .workflow-stepper-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .stepper-connector-line {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
