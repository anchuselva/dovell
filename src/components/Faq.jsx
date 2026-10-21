'use client';

import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  ArrowRight,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';

const FAQ_ITEMS = [
  {
    id: 1,
    numStr: '01',
    category: 'OVERVIEW & CAPABILITIES',
    shortCategory: 'Core Purpose',
    question: 'What does Dovell help teams do?',
    answer: 'Dovell brings audio recordings, transcripts, conversation details, analysis records, and review activity into one workspace. Teams can search interactions, document findings, and track outcomes.',
    stats: ['Centralized Audio', 'Searchable Transcripts', 'Traceable Outcomes'],
    specId: 'FAQ-01'
  },
  {
    id: 2,
    numStr: '02',
    category: 'TRANSCRIPTION & PROCESSING',
    shortCategory: 'Automated Transcription',
    question: 'Does Dovell automatically transcribe recordings?',
    answer: 'Automated transcription depends on the processing service configured for your workspace. Existing transcripts can also be stored and reviewed alongside conversation records.',
    stats: ['Configured Engines', 'Import Existing Transcripts', 'Multi-Format'],
    specId: 'FAQ-02'
  },
  {
    id: 3,
    numStr: '03',
    category: 'TRANSCRIPT REVIEW & QA',
    shortCategory: 'Corrections & QA',
    question: 'Can reviewers correct transcripts?',
    answer: 'Yes. Transcript review and correction are core parts of the workflow. Review status helps teams distinguish generated content from human-verified transcripts.',
    stats: ['Human Verification', 'Inline Corrections', 'Audit History'],
    specId: 'FAQ-03'
  },
  {
    id: 4,
    numStr: '04',
    category: 'CONVERSATION ANALYTICS',
    shortCategory: 'Analytics Scope',
    question: 'What conversation analysis does Dovell support?',
    answer: 'The scope includes configurable topic, keyword, and sentiment analysis records. Automated analysis depends on the configured services, supported languages, and available recording quality.',
    stats: ['Topic Detection', 'Keyword Tracking', 'Sentiment Indicators'],
    specId: 'FAQ-04'
  },
  {
    id: 5,
    numStr: '05',
    category: 'SEARCH & ORGANIZATION',
    shortCategory: 'Search & Tags',
    question: 'Can we search and categorize conversations?',
    answer: 'Yes. Teams can organize records using conversation details, categories, tags, review statuses, and outcomes, then use search and filters to find relevant interactions.',
    stats: ['Metadata Filtering', 'Custom Category Tags', 'Outcome Tracking'],
    specId: 'FAQ-05'
  },
  {
    id: 6,
    numStr: '06',
    category: 'SECURITY & GOVERNANCE',
    shortCategory: 'Access Control',
    question: 'How is team access managed?',
    answer: 'User access controls determine who can view and work with conversation records. The permission structure should be configured around your organization’s roles and review responsibilities.',
    stats: ['Role-Based Access', 'Departmental Scopes', 'Review Ownership'],
    specId: 'FAQ-06'
  }
];

export default function Faq() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevQuestion = () => {
    setActiveIdx((prev) => (prev === 0 ? FAQ_ITEMS.length - 1 : prev - 1));
  };

  const nextQuestion = () => {
    setActiveIdx((prev) => (prev === FAQ_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const current = FAQ_ITEMS[activeIdx];

  return (
    <section id="faq" className="speech-faq-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="faq-header-wrapper">
          <div className="header-badge">
            <span className="bracket-tag">FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="faq-main-title">
            Get to know Dovell
          </h2>

          <div className="accent-lines center">
            <div className="accent-line-coral"></div>
            <div className="accent-line-blue"></div>
          </div>

          <p className="faq-main-subtitle">
            Answers about conversation records, transcription, analysis, and team reviews.
          </p>

          {/* Segmented Topic Filter Pills */}
          <div className="topic-track-wrapper">
            <div className="topic-track-pill">
              {FAQ_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`topic-tab-btn ${activeIdx === idx ? 'active' : ''}`}
                  aria-selected={activeIdx === idx}
                >
                  <span className="tab-num">{item.numStr}</span>
                  <span className="tab-label">{item.shortCategory}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Speech Bubble Conversation Container */}
        <div className="speech-bubbles-stage">
          {/* Refined Navigation & Status Bar */}
          <div className="stage-controls-bar">
            <div className="scenario-indicator">
              <span className="spec-badge-pill">{current.specId}</span>
              <span className="indicator-title">{current.category}</span>
            </div>

            {/* Circular Orange Navigation Buttons < > */}
            <div className="arrow-controls-group">
              <button 
                onClick={prevQuestion} 
                className="circle-nav-btn bubble-btn"
                aria-label="Previous question"
                title="Previous Question"
              >
                <ChevronLeft size={19} />
              </button>
              <button 
                onClick={nextQuestion} 
                className="circle-nav-btn bubble-btn"
                aria-label="Next question"
                title="Next Question"
              >
                <ChevronRight size={19} />
              </button>
              <span className="counter-text">
                0{activeIdx + 1} / 0{FAQ_ITEMS.length}
              </span>
            </div>
          </div>

          <div className="bubbles-dialogue-column">
            {/* 1. Top Speech Bubble: QUESTION */}
            <div className="speech-bubble-wrapper question-wrapper">
              <div className="speech-badge question-badge">
                QUESTION {current.numStr}
              </div>

              <div className="speech-bubble-body question-bubble">
                <h3 className="bubble-question-text">
                  {current.question}
                </h3>
              </div>

              <div className="speech-tail tail-bottom-left">
                <svg viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 36 0 C 24 6 12 18 0 28 C 10 18 20 8 36 8 Z" fill="#FFFFFF" />
                </svg>
              </div>
            </div>

            {/* 2. Bottom Speech Bubble: ANSWER */}
            <div className="speech-bubble-wrapper answer-wrapper">
              <div className="speech-badge answer-badge">
                ANSWER
              </div>

              <div className="speech-bubble-body answer-bubble">
                <p className="bubble-answer-text">
                  {current.answer}
                </p>

                {/* Sub-KPI stats strip */}
                <div className="answer-stats-strip">
                  {current.stats.map((stat, sIdx) => (
                    <span key={sIdx} className="stat-pill-item">
                      <span className="stat-bullet"></span>
                      {stat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="speech-tail tail-bottom-right">
                <svg viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 0 C 12 6 24 18 36 28 C 26 18 16 8 0 8 Z" fill="#E0F2FE" />
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Consultation Ribbon at Bottom */}
          <div className="dialogue-footer-cta">
            <div className="footer-cta-left">
              <Sparkles size={18} className="text-coral" />
              <span>Have a specific conversation workflow in mind?</span>
            </div>
            <a href="#contact" className="btn-coral-pill footer-action-btn">
              <span>Talk to Our Team</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .speech-faq-section {
          background-color: var(--color-navy-primary);
          background-image: 
            radial-gradient(circle at 15% 20%, rgba(232, 90, 42, 0.12) 0%, transparent 45%),
            radial-gradient(circle at 85% 80%, rgba(0, 194, 255, 0.12) 0%, transparent 45%);
          color: var(--color-white);
          position: relative;
          overflow: hidden;
        }

        .faq-header-wrapper {
          text-align: center;
          max-width: 860px;
          margin: 0 auto 36px auto;
        }

        .header-badge {
          margin-bottom: 12px;
        }

        .faq-main-title {
          font-size: 2.3rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .faq-main-subtitle {
          font-size: 1.05rem;
          color: #94A3B8;
          line-height: 1.6;
          margin-top: 18px;
          margin-bottom: 28px;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Sleek Segmented Topic Filter Pills */
        .topic-track-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 24px;
        }

        .topic-track-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          padding: 6px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          flex-wrap: wrap;
        }

        .topic-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: transparent;
          border: 1px solid transparent;
          color: #94A3B8;
          padding: 7px 16px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.22s ease;
          white-space: nowrap;
        }

        .tab-num {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 800;
          opacity: 0.7;
        }

        .tab-label {
          letter-spacing: 0.01em;
        }

        .topic-tab-btn:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.09);
        }

        .topic-tab-btn.active {
          background: var(--color-coral);
          color: #FFFFFF;
          font-weight: 700;
          box-shadow: 0 4px 14px rgba(232, 90, 42, 0.4);
        }

        .topic-tab-btn.active .tab-num {
          opacity: 1;
        }

        /* Speech Bubbles Stage */
        .speech-bubbles-stage {
          max-width: 860px;
          margin: 0 auto;
        }

        /* Navigation & Status Bar */
        .stage-controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
        }

        .scenario-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .spec-badge-pill {
          background: var(--color-coral);
          color: #FFFFFF;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: var(--radius-sm);
          letter-spacing: 0.05em;
        }

        .indicator-title {
          font-family: var(--font-primary);
          font-size: 0.92rem;
          font-weight: 700;
          color: #F1F5F9;
          letter-spacing: 0.04em;
        }

        .arrow-controls-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bubble-btn {
          width: 36px;
          height: 36px;
        }

        .counter-text {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
          color: #93C5FD;
          margin-left: 6px;
        }

        /* Dialogue Column */
        .bubbles-dialogue-column {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 36px;
        }

        .speech-bubble-wrapper {
          position: relative;
          width: 100%;
        }

        .speech-badge {
          position: absolute;
          z-index: 5;
          top: -14px;
          color: #FFFFFF;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 6px 22px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          text-transform: uppercase;
        }

        .question-badge {
          right: 48px;
          background: var(--color-coral);
          box-shadow: 0 4px 14px rgba(232, 90, 42, 0.4);
        }

        .answer-badge {
          left: 48px;
          background: #0284C7;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.4);
        }

        /* Bubble Bodies */
        .speech-bubble-body {
          border-radius: 46px;
          position: relative;
          z-index: 2;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s ease;
        }

        /* Question Bubble */
        .question-bubble {
          background: #FFFFFF;
          color: var(--color-navy-primary);
          padding: 42px 48px;
          border-bottom-left-radius: 12px;
        }

        .bubble-question-text {
          font-size: 1.55rem;
          font-weight: 800;
          color: var(--color-navy-primary);
          line-height: 1.35;
          margin: 0;
          letter-spacing: -0.01em;
        }

        /* Answer Bubble */
        .answer-bubble {
          background: #E0F2FE;
          color: var(--color-navy-primary);
          padding: 42px 48px;
          border-bottom-right-radius: 12px;
          border: 1px solid rgba(147, 197, 253, 0.5);
        }

        .bubble-answer-text {
          font-size: 1.12rem;
          line-height: 1.65;
          color: #0F274B;
          font-weight: 500;
          margin: 0 0 18px 0;
        }

        .answer-stats-strip {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          padding-top: 14px;
          border-top: 1px solid rgba(10, 28, 54, 0.12);
        }

        .stat-pill-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FFFFFF;
          color: #0369A1;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          border: 1px solid #BAE6FD;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }

        .stat-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-coral);
        }

        /* Speech Tails */
        .speech-tail {
          position: absolute;
          width: 36px;
          height: 28px;
          z-index: 1;
        }

        .tail-bottom-left {
          bottom: -22px;
          left: 20px;
        }

        .tail-bottom-right {
          bottom: -22px;
          right: 20px;
        }

        /* Footer CTA */
        .dialogue-footer-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-lg);
          padding: 16px 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-cta-left {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #E2E8F0;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .text-coral {
          color: var(--color-coral);
        }

        .footer-action-btn {
          font-size: 0.88rem;
          padding: 10px 24px;
        }

        @media (max-width: 768px) {
          .faq-main-title {
            font-size: 1.75rem;
          }
          .topic-track-pill {
            border-radius: var(--radius-lg);
            padding: 8px;
          }
          .question-bubble, .answer-bubble {
            padding: 32px 24px;
            border-radius: 28px;
          }
          .bubble-question-text {
            font-size: 1.2rem;
          }
          .bubble-answer-text {
            font-size: 0.95rem;
          }
          .question-badge {
            right: 20px;
          }
          .answer-badge {
            left: 20px;
          }
          .stage-controls-bar {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }
          .dialogue-footer-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
