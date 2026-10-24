'use client';

import React from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Layers,
  Headphones,
  SlidersHorizontal,
  Building2,
  CalendarCheck
} from 'lucide-react';

/* Custom SVG Icons matching reference image motifs */
const MicRecordIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" x2="12" y1="19" y2="22" />
  </svg>
);

const TranscriptReviewIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const EnterpriseOrgIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const PLANS = [
  {
    step: 'Echo',
    num: '01',
    id: 'echo',
    name: 'Echo Plan',
    tagline: 'Organize Your Conversation Records',
    description: 'For smaller teams establishing a shared workspace for audio recordings and transcript reviews.',
    price: '$49',
    period: '/ Month',
    priceSubtext: 'Essential tools for conversation management',
    features: [
      'Audio uploads and conversation records',
      'Transcript storage and correction',
      'Search, tags, and categories',
      'Processing and review status tracking'
    ],
    buttonText: 'Discuss Echo',
    popular: false,
    theme: {
      accent: '#0284C7',
      ribbonLight: '#BAE6FD',
      ribbonDark: '#0284C7',
      numberColor: '#0284C7',
      badgeBg: '#0284C7'
    },
    iconComponent: MicRecordIcon
  },
  {
    step: 'Resonance',
    num: '02',
    id: 'resonance',
    name: 'Resonance Plan',
    tagline: 'Build A Structured Review Practice',
    description: 'For growing teams that need coordinated reviews, configurable analysis, and broader reporting.',
    price: '$149',
    period: '/ Month',
    priceSubtext: 'Expanded tools for teams and analysis',
    features: [
      'Everything in Echo',
      'Reviewer assignments and review history',
      'Configurable topics and keywords',
      'Analytics dashboards and reports',
      'Team access controls'
    ],
    buttonText: 'Discuss Resonance',
    popular: true,
    theme: {
      accent: '#E85A2A',
      ribbonLight: '#FED7AA',
      ribbonDark: '#EA580C',
      numberColor: '#C2410C',
      badgeBg: '#E85A2A'
    },
    iconComponent: TranscriptReviewIcon
  },
  {
    step: 'Sonata',
    num: '03',
    id: 'sonata',
    name: 'Sonata Plan',
    tagline: 'Adapt Dovell To Your Organization',
    description: 'For organizations with multiple departments, higher conversation volumes, or custom implementation needs.',
    price: 'Custom Pricing',
    period: '',
    priceSubtext: 'Tailored to organizational requirements',
    features: [
      'Everything in Resonance',
      'Department and team configuration',
      'Custom integration scoping',
      'Storage and processing configuration',
      'Implementation and support options'
    ],
    buttonText: 'Contact Sales',
    popular: false,
    theme: {
      accent: '#0A1C36',
      ribbonLight: '#CBD5E1',
      ribbonDark: '#1E293B',
      numberColor: '#0A1C36',
      badgeBg: '#0A1C36'
    },
    iconComponent: EnterpriseOrgIcon
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="bracket-tag">PLANS & PRICING</span>
          <h2 className="section-title">Choose a plan that fits your conversation workflow</h2>
          
          <div className="accent-lines center">
            <div className="accent-line-coral"></div>
            <div className="accent-line-blue"></div>
          </div>

          <p className="section-subtitle center-subtitle">
            Discuss a plan based on your recording volume, storage requirements, team size, and review needs.
          </p>
        </div>

        {/* 3-Column Plans Grid */}
        <div className="pricing-grid-3col">
          {PLANS.map((plan) => {
            const IconComponent = plan.iconComponent;

            return (
              <div 
                key={plan.id}
                className={`pricing-col-card ${plan.popular ? 'card-featured' : ''}`}
              >
                {/* Popular Choice Floating Ribbon */}
                {plan.popular && (
                  <div className="featured-top-badge">
                    <Sparkles size={13} />
                    <span>RECOMMENDED FOR GROWING TEAMS</span>
                  </div>
                )}

                {/* Card Header Graphic Block with Diagonal Ribbon, Center Emblem & Giant Number */}
                <div className="card-top-art">
                  <svg 
                    className="top-art-svg" 
                    viewBox="0 0 340 160" 
                    preserveAspectRatio="none" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon 
                      points="160,0 280,0 210,160 90,160" 
                      fill={plan.theme.ribbonLight} 
                    />
                    <polygon 
                      points="280,0 340,0 270,160 210,160" 
                      fill={plan.theme.ribbonDark} 
                      opacity="0.85" 
                    />
                  </svg>

                  <div 
                    className="icon-square-box"
                    style={{ backgroundColor: plan.theme.badgeBg }}
                  >
                    <IconComponent />
                  </div>

                  <div 
                    className="giant-num-display"
                    style={{ color: plan.theme.numberColor }}
                  >
                    {plan.num}
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="card-col-body">
                  <div className="tier-header-block">
                    <div className="step-row">
                      <span 
                        className="step-pill" 
                        style={{ 
                          color: plan.theme.accent,
                          backgroundColor: `${plan.theme.accent}14`,
                          borderColor: `${plan.theme.accent}33`
                        }}
                      >
                        {plan.step}
                      </span>
                    </div>

                    <div className="plan-tagline-kicker">{plan.tagline}</div>
                    <h3 className="plan-name-text">{plan.name}</h3>
                    <p className="plan-tagline-text">{plan.description}</p>
                  </div>

                  {/* Pricing Display Strip */}
                  <div className="price-box-strip">
                    <div className="price-amount-row">
                      <span className="price-big">{plan.price}</span>
                      {plan.period && <span className="price-period">{plan.period}</span>}
                    </div>
                    <span className="billing-term-note">{plan.priceSubtext}</span>
                  </div>

                  {/* Action CTA Button */}
                  <a 
                    href="#contact" 
                    className={plan.popular ? 'btn-coral-pill plan-action-btn' : 'btn-outline-pill plan-action-btn'}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight size={15} />
                  </a>

                  {/* Feature Checklist */}
                  <div className="card-features-list">
                    <span className="features-section-title">PROPOSED INCLUSIONS:</span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="feature-check-line">
                        <div className="check-bullet" style={{ color: plan.theme.accent }}>
                          <Check size={14} strokeWidth={2.8} />
                        </div>
                        <span className="feature-text">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Requirements Banner (replaces ROI guarantee) */}
        <div className="requirements-banner">
          <div className="requirements-icon-box">
            <SlidersHorizontal size={26} className="text-coral" />
          </div>
          <div className="requirements-text">
            <h4>Find The Right Plan For Your Team</h4>
            <p>
              Discuss your conversation volume, review workflows, processing requirements, and storage needs with our team to define a solution that fits your organization.
            </p>
          </div>
          <a href="#contact" className="btn-coral-pill banner-cta">
            <span>Schedule Scoping Session</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          background-color: var(--color-bg-light);
          position: relative;
        }

        .text-center {
          text-align: center;
        }

        .center-subtitle {
          margin-left: auto;
          margin-right: auto;
        }

        /* 3-Column Grid Layout */
        .pricing-grid-3col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 48px;
          margin-bottom: 40px;
          align-items: stretch;
        }

        .pricing-col-card {
          background: var(--color-white);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .pricing-col-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px -8px rgba(10, 28, 54, 0.14);
          border-color: #CBD5E1;
        }

        .pricing-col-card.card-featured {
          border-color: var(--color-coral);
          border-width: 2px;
          box-shadow: 0 20px 48px -6px rgba(232, 90, 42, 0.22);
          transform: translateY(-4px);
        }

        .pricing-col-card.card-featured:hover {
          transform: translateY(-8px);
        }

        .featured-top-badge {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-coral);
          color: #FFFFFF;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 5px 18px;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(232, 90, 42, 0.3);
          z-index: 10;
          white-space: nowrap;
        }

        /* Top Graphic Block in 3-Column Card */
        .card-top-art {
          position: relative;
          height: 150px;
          background: #F8FAFC;
          border-bottom: 1px solid #EDF2F7;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          overflow: hidden;
        }

        .top-art-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .icon-square-box {
          width: 62px;
          height: 62px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
          position: relative;
          z-index: 2;
        }

        .giant-num-display {
          position: relative;
          font-size: 6.8rem;
          font-weight: 900;
          letter-spacing: -0.06em;
          font-family: var(--font-primary), 'Plus Jakarta Sans', sans-serif;
          line-height: 1;
          user-select: none;
          z-index: 3;
          margin-right: -4px;
          mix-blend-mode: multiply;
        }

        /* 3-Col Card Body */
        .card-col-body {
          padding: 28px 26px 32px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .step-row {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .step-pill {
          display: inline-flex;
          align-items: center;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          border: 1px solid;
          font-family: var(--font-mono);
        }

        .plan-tagline-kicker {
          font-size: 0.82rem;
          font-weight: 700;
          color: #64748B;
          letter-spacing: 0.02em;
          margin-bottom: 6px;
          line-height: 1.35;
        }

        .plan-name-text {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--color-navy-primary);
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }

        .plan-tagline-text {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 20px;
          min-height: 52px;
        }

        /* Price Box Strip */
        .price-box-strip {
          padding: 16px 0;
          border-top: 1px solid #F1F5F9;
          border-bottom: 1px solid #F1F5F9;
          margin-bottom: 20px;
        }

        .price-amount-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
          flex-wrap: wrap;
        }

        .price-big {
          font-size: 2.1rem;
          font-weight: 800;
          color: var(--color-navy-primary);
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .price-period {
          font-size: 0.95rem;
          font-weight: 600;
          color: #64748B;
          font-family: var(--font-primary), sans-serif;
        }

        .billing-term-note {
          display: block;
          font-size: 0.78rem;
          color: #64748B;
          font-family: var(--font-mono);
          margin-top: 6px;
          line-height: 1.4;
        }

        .plan-action-btn {
          width: 100%;
          justify-content: center;
          padding: 11px 20px;
          font-size: 0.9rem;
          margin-bottom: 24px;
        }

        /* Features List */
        .card-features-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
        }

        .features-section-title {
          font-size: 0.76rem;
          font-weight: 700;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
          font-family: var(--font-mono);
        }

        .feature-check-line {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .check-bullet {
          margin-top: 2px;
          flex-shrink: 0;
        }

        .feature-text {
          font-size: 0.84rem;
          color: #334155;
          line-height: 1.4;
        }

        /* Requirements Banner */
        .requirements-banner {
          background: #FFFFFF;
          border: 1px solid var(--color-border-light);
          border-left: 4px solid var(--color-coral);
          border-radius: var(--radius-lg);
          padding: 24px 30px;
          display: flex;
          align-items: center;
          gap: 22px;
          box-shadow: var(--shadow-sm);
        }

        .requirements-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(232, 90, 42, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .requirements-text {
          flex: 1;
        }

        .requirements-text h4 {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--color-navy-primary);
          margin-bottom: 4px;
        }

        .requirements-text p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.45;
          margin: 0;
        }

        .banner-cta {
          flex-shrink: 0;
          padding: 10px 20px;
          font-size: 0.86rem;
        }

        @media (max-width: 992px) {
          .pricing-grid-3col {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }

          .requirements-banner {
            flex-direction: column;
            text-align: center;
          }

          .requirements-text {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
