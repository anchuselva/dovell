'use client';

import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Mic, 
  FileText, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  Upload,
  UserCheck,
  TrendingUp,
  Tag
} from 'lucide-react';

const CAPABILITIES = [
  {
    id: 'management',
    category: 'CONVERSATION MANAGEMENT',
    badge: 'CENTRALIZED RECORDS',
    title: 'Keep every conversation in context',
    image: '/graphics/core-capa-1.png',
    description: 'Upload audio recordings and organize them with conversation details, team assignments, categories, and outcomes. Keep the original recording connected to its transcript and review history.',
    supportingLabels: [
      { label: 'Audio Uploads', icon: Upload },
      { label: 'Conversation Metadata', icon: Tag },
      { label: 'Processing Status', icon: CheckCircle2 }
    ],
    bottomLabel: 'One workspace for your voice records',
    link: 'Explore Conversation Management',
    href: '#workspace'
  },
  {
    id: 'review',
    category: 'TRANSCRIPT REVIEW',
    badge: 'HUMAN VERIFICATION',
    title: 'Review transcripts with confidence',
    image: '/graphics/core-capa-2.png',
    description: 'Review generated or imported transcripts, correct wording, and track verification status. Help reviewers distinguish automated output from content checked by a person.',
    supportingLabels: [
      { label: 'Transcript Corrections', icon: FileText },
      { label: 'Verification Status', icon: UserCheck },
      { label: 'Review History', icon: CheckCircle2 }
    ],
    bottomLabel: 'Clear ownership throughout the review process',
    link: 'Explore Transcript Review',
    href: '#workspace'
  },
  {
    id: 'analytics',
    category: 'CONVERSATION ANALYTICS',
    badge: 'CONFIGURABLE ANALYSIS',
    title: 'Find patterns across your conversations',
    image: '/graphics/core-capa-3.png',
    description: 'Use configured analysis services to identify topics, keywords, and sentiment indicators. Combine those results with team tags and recorded outcomes to explore communication trends.',
    supportingLabels: [
      { label: 'Topic Analysis', icon: BarChart3 },
      { label: 'Keyword Tracking', icon: Tag },
      { label: 'Outcome Reporting', icon: TrendingUp }
    ],
    bottomLabel: 'Automated indicators with review context',
    link: 'Explore Conversation Analytics',
    href: '#workspace'
  }
];

export default function FeatureEngines() {
  const [activeCard, setActiveCard] = useState(0);

  const nextSlide = () => {
    setActiveCard((prev) => (prev + 1) % CAPABILITIES.length);
  };

  const prevSlide = () => {
    setActiveCard((prev) => (prev - 1 + CAPABILITIES.length) % CAPABILITIES.length);
  };

  return (
    <section id="capabilities" className="capabilities-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="bracket-tag">CORE CAPABILITIES</span>
          <h2 className="section-title">BRING STRUCTURE TO COMPLEX COMMUNICATIONS</h2>
          
          <div className="accent-lines center">
            <div className="accent-line-coral"></div>
            <div className="accent-line-blue"></div>
          </div>

          <p className="section-subtitle center-subtitle">
            Organize conversation records with searchable metadata, configurable classifications, and traceable review histories that simplify day-to-day operations.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="capabilities-grid">
          {CAPABILITIES.map((card, idx) => (
            <div 
              key={card.id} 
              className={`capability-card ${activeCard === idx ? 'highlighted' : ''}`}
              onClick={() => setActiveCard(idx)}
            >
              {/* Card Image Banner */}
              <div className="card-image-wrapper">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="card-media-img"
                />
                <div className="card-overlay-gradient"></div>
                <div className="card-top-strip">
                  <span className="card-category-pill">{card.category}</span>
                  <span className="card-badge-pill">{card.badge}</span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.description}</p>

                {/* 3 Supporting Labels */}
                <div className="supporting-labels-list">
                  {card.supportingLabels.map((item, sIdx) => {
                    const Icon = item.icon;
                    return (
                      <div key={sIdx} className="supporting-item">
                        <Icon size={14} className="support-icon text-coral" />
                        <span className="support-label">{item.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Label and Link */}
                <div className="card-footer-strip">
                  <span className="bottom-note">{card.bottomLabel}</span>
                  <a href="#workspace" className="card-action-link">
                    <span>{card.link}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Action Button */}
        <div className="section-cta-wrap text-center">
          <a href="#how-it-works" className="btn-coral-pill section-main-btn">
            <span>Explore All Features</span>
            <ArrowRight size={15} />
          </a>
        </div>

      </div>

      <style jsx>{`
        .capabilities-section {
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
          font-size: clamp(1.8rem, 2.8vw, 2.6rem);
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

        /* 3-Card Grid */
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 54px;
        }

        .capability-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(10, 28, 54, 0.05);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .capability-card:hover {
          transform: translateY(-6px);
          border-color: #CBD5E1;
          box-shadow: 0 16px 36px rgba(10, 28, 54, 0.12);
        }

        .card-image-wrapper {
          position: relative;
          width: 100%;
          height: 190px;
          overflow: hidden;
          background: #0A1C36;
        }

        .card-media-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .capability-card:hover .card-media-img {
          transform: scale(1.06);
        }

        .card-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10, 28, 54, 0.3) 0%, rgba(10, 28, 54, 0.85) 100%);
        }

        .card-top-strip {
          position: absolute;
          top: 14px;
          left: 14px;
          right: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 2;
        }

        .card-category-pill {
          background: rgba(10, 28, 54, 0.85);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.2);
          letter-spacing: 0.04em;
        }

        .card-badge-pill {
          background: #E85A2A;
          color: #FFFFFF;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          padding: 4px 9px;
          border-radius: var(--radius-full);
          letter-spacing: 0.04em;
        }

        .card-body {
          padding: 26px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-title {
          font-family: var(--font-primary);
          font-size: 1.25rem;
          font-weight: 800;
          color: #0A1C36;
          line-height: 1.3;
          margin-bottom: 12px;
        }

        .card-desc {
          font-size: 0.94rem;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 22px;
          flex: 1;
        }

        /* Supporting Labels */
        .supporting-labels-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
          padding: 14px;
          background: #F8FAFC;
          border-radius: 12px;
          border: 1px solid #EEF2F6;
          margin-bottom: 20px;
        }

        .supporting-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #1E293B;
        }

        .text-coral {
          color: #E85A2A;
        }

        /* Bottom Strip */
        .card-footer-strip {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 14px;
          border-top: 1px solid #F1F5F9;
        }

        .bottom-note {
          font-size: 0.76rem;
          font-weight: 600;
          color: #64748B;
        }

        .card-action-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #0A1C36;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .card-action-link:hover {
          color: #E85A2A;
          transform: translateX(3px);
        }

        /* Section Main CTA */
        .section-cta-wrap {
          display: flex;
          justify-content: center;
        }

        .section-main-btn {
          font-family: var(--font-primary);
          background: #0A1C36;
          color: #FFFFFF;
          padding: 14px 34px;
          font-size: 0.94rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 6px 20px rgba(10, 28, 54, 0.18);
          transition: all 0.25s ease;
        }

        .section-main-btn:hover {
          background: #E85A2A;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(232, 90, 42, 0.35);
        }

        @media (max-width: 1024px) {
          .capabilities-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto 40px;
          }
        }
      `}</style>
    </section>
  );
}
