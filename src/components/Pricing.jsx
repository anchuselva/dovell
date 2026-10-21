'use client';

import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  LayoutGrid,
  ListFilter
} from 'lucide-react';

/* Custom SVG Icons matching reference image motifs (Briefcase, Vault, Credit Cards/Sovereign) */
const BriefcaseMoneyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="3" ry="3" />
    <path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" />
    <circle cx="12" cy="14" r="3.2" strokeWidth="1.6" />
    <path d="M12 12.2v3.6M10.8 13.2h2.4a.9.9 0 0 1 .9.9v0a.9.9 0 0 1-.9.9h-2.4" strokeWidth="1.3" />
  </svg>
);

const SafeVaultIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3.5" />
    <circle cx="12" cy="12" r="4.6" />
    <circle cx="12" cy="12" r="1.6" fill="#FFFFFF" />
    <path d="M12 7.4v1.2M12 15.4v1.2M7.4 12h1.2M15.4 12h1.2" strokeWidth="2" />
    <circle cx="18" cy="7.5" r="1.1" fill="#FFFFFF" />
  </svg>
);

const CreditCardsIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="8" width="17" height="13" rx="2" />
    <path d="M2 12h17" strokeWidth="2" />
    <rect x="4" y="15" width="3" height="2" rx="0.5" fill="#FFFFFF" />
    <path d="M6 5h14a2 2 0 0 1 2 2v10" />
    <path d="M8 8h13" strokeWidth="1.4" />
  </svg>
);

const TIERS = [
  {
    step: 'Step One',
    num: '01',
    id: 'developer',
    name: 'Developer Fleet',
    tagline: 'Ideal for AI startups and research labs testing initial inference workflows with zero code modification.',
    monthlyPrice: 499,
    annualPrice: 399,
    gpuLimit: 'Up to 16 GPUs (H100 / A100)',
    features: [
      'Dynamic GPU slicing (1.25GB sub-slice granularity)',
      'Basic vLLM & PyTorch eBPF driver integration',
      'Local NVMe KV-cache persistence & TTFT boost',
      'Single Kubernetes cluster deployment'
    ],
    ctaText: 'Deploy Developer Fleet',
    popular: false,
    theme: {
      accent: '#0284C7',
      ribbonLight: '#7DD3FC',
      ribbonDark: '#0284C7',
      numberColor: '#0369A1',
      badgeBg: '#0284C7'
    },
    iconComponent: BriefcaseMoneyIcon
  },
  {
    step: 'Step Two',
    num: '02',
    id: 'production',
    name: 'Production Cluster',
    tagline: 'Engineered for high-throughput LLM serving, agent loops, and continuous LoRA fine-tuning pipelines.',
    monthlyPrice: 1499,
    annualPrice: 1199,
    gpuLimit: 'Up to 64 GPUs across multi-node',
    features: [
      'Full distributed KV-cache sharing across global nodes',
      'Autonomous VRAM memory compaction & OOM prevention',
      'Multi-cluster Kubernetes & Slurm daemon support',
      'Standard 99.95% daemon availability SLA'
    ],
    ctaText: 'Deploy Production Cluster',
    popular: true,
    theme: {
      accent: '#E85A2A',
      ribbonLight: '#FDBA74',
      ribbonDark: '#EA580C',
      numberColor: '#9A3412',
      badgeBg: '#E85A2A'
    },
    iconComponent: SafeVaultIcon
  },
  {
    step: 'Step Three',
    num: '03',
    id: 'enterprise-custom',
    name: 'Enterprise & Sovereign Mesh',
    tagline: 'Tailored multi-cloud spot arbitrage, air-gapped on-premises Slurm superclusters, and bespoke kernel compiler tuning.',
    monthlyPrice: null,
    annualPrice: null,
    gpuLimit: 'Unlimited GPUs & Custom Sizing',
    features: [
      'Sub-second multi-cloud spot preemption recovery (< 380ms)',
      'Air-gapped on-premise Slurm deployment & custom CUDA kernel tuning',
      'SOC 2 Type II, HIPAA & ISO 27001 verified data isolation',
      '24/7 Dedicated Principal Systems Architect & guaranteed 3x ROI SLA'
    ],
    ctaText: 'Contact Enterprise Advisory',
    popular: false,
    theme: {
      accent: '#0A1C36',
      ribbonLight: '#94A3B8',
      ribbonDark: '#1E293B',
      numberColor: '#0A1C36',
      badgeBg: '#0A1C36'
    },
    iconComponent: CreditCardsIcon
  }
];

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [layoutMode, setLayoutMode] = useState('grid'); // 'grid' (website 3-column layout) or 'strip' (horizontal)

  return (
    <section id="pricing" className="pricing-section section-padding">
      <div className="container">
        {/* Section Header adhering to website theme layout */}
        <div className="section-header text-center">
          <span className="bracket-tag">TARIFICATION COMPUTE</span>
          <h2 className="section-title">TRANSPARENT PRICING BACKED BY GUARANTEED ROI</h2>
          
          {/* Website Signature Dual Accent Lines */}
          <div className="accent-lines center">
            <div className="accent-line-coral"></div>
            <div className="accent-line-blue"></div>
          </div>

          <p className="section-subtitle center-subtitle">
            Every dollar invested in Dovell returns an average of <strong>$4.80 in cloud compute savings</strong>.
          </p>

          {/* Controls Bar: Billing Switcher & Layout Toggle */}
          <div className="controls-row">
            {/* Billing Switcher Toggle */}
            <div className="billing-toggle-container">
              <span className={`billing-label ${!annualBilling ? 'active' : ''}`}>Monthly</span>
              <button 
                type="button"
                onClick={() => setAnnualBilling(!annualBilling)}
                className={`toggle-switch ${annualBilling ? 'checked' : ''}`}
                aria-label="Toggle annual or monthly billing"
              >
                <span className="toggle-thumb"></span>
              </button>
              <span className={`billing-label ${annualBilling ? 'active' : ''}`}>
                Annual
                <span className="discount-badge">Save 20% + 2 Months Free</span>
              </span>
            </div>

            {/* Layout Mode Switcher */}
            <div className="layout-switcher-pill">
              <button 
                type="button"
                onClick={() => setLayoutMode('grid')}
                className={`layout-btn ${layoutMode === 'grid' ? 'active' : ''}`}
                title="Website Theme 3-Column Layout"
                aria-label="3-Column Grid View"
              >
                <LayoutGrid size={15} />
                <span>3-Column Grid</span>
              </button>
              <button 
                type="button"
                onClick={() => setLayoutMode('strip')}
                className={`layout-btn ${layoutMode === 'strip' ? 'active' : ''}`}
                title="Horizontal Strip Infographic Layout"
                aria-label="Horizontal Strip View"
              >
                <ListFilter size={15} />
                <span>Horizontal Strips</span>
              </button>
            </div>
          </div>
        </div>

        {/* 1. Website Theme 3-Column Layout (Default) */}
        {layoutMode === 'grid' && (
          <div className="pricing-grid-3col">
            {TIERS.map((tier) => {
              const price = tier.monthlyPrice 
                ? (annualBilling ? tier.annualPrice : tier.monthlyPrice)
                : null;
              const IconComponent = tier.iconComponent;

              return (
                <div 
                  key={tier.id}
                  className={`pricing-col-card ${tier.popular ? 'card-featured' : ''}`}
                >
                  {/* Popular Choice Floating Ribbon */}
                  {tier.popular && (
                    <div className="featured-top-badge">
                      <Sparkles size={13} />
                      <span>MOST POPULAR CHOICE</span>
                    </div>
                  )}

                  {/* Card Header Graphic Block with Diagonal Ribbon, Center Emblem & Giant Number */}
                  <div className="card-top-art">
                    {/* Diagonal ribbon SVG matching reference geometry */}
                    <svg 
                      className="top-art-svg" 
                      viewBox="0 0 340 160" 
                      preserveAspectRatio="none" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Primary diagonal ribbon band */}
                      <polygon 
                        points="160,0 280,0 210,160 90,160" 
                        fill={tier.theme.ribbonLight} 
                      />
                      {/* Secondary darker diagonal facet for 3D ribbon depth */}
                      <polygon 
                        points="280,0 340,0 270,160 210,160" 
                        fill={tier.theme.ribbonDark} 
                        opacity="0.85" 
                      />
                    </svg>

                    {/* Elevated Center/Left Emblem Badge */}
                    <div 
                      className="icon-square-box"
                      style={{ backgroundColor: tier.theme.badgeBg }}
                    >
                      <IconComponent />
                    </div>

                    {/* Giant Number overlapping diagonal ribbon */}
                    <div 
                      className="giant-num-display"
                      style={{ color: tier.theme.numberColor }}
                    >
                      {tier.num}
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="card-col-body">
                    <div className="step-row">
                      <span className="step-label" style={{ color: tier.theme.accent }}>
                        {tier.step}
                      </span>
                      <span className="gpu-limit-pill">{tier.gpuLimit}</span>
                    </div>

                    <h3 className="plan-name-text">{tier.name}</h3>
                    <p className="plan-tagline-text">{tier.tagline}</p>

                    {/* Pricing Display Strip */}
                    <div className="price-box-strip">
                      {price !== null ? (
                        <>
                          <div className="price-amount-row">
                            <span className="currency-mark">$</span>
                            <span className="price-big">{price}</span>
                            <span className="period-mark">/ month</span>
                          </div>
                          <span className="billing-term-note">
                            {annualBilling ? 'Billed annually ($' + (price * 12) + '/yr)' : 'Billed monthly'}
                          </span>
                        </>
                      ) : (
                        <div className="custom-pricing-tag">
                          <span className="custom-quote-badge">CUSTOM ENTERPRISE</span>
                          <span className="custom-price-text">Tailored Fleet Sizing</span>
                          <span className="billing-term-note">Air-gapped & Dedicated SLA</span>
                        </div>
                      )}
                    </div>

                    {/* Action CTA Button */}
                    <a 
                      href="#contact" 
                      className={tier.popular ? 'btn-coral-pill plan-action-btn' : 'btn-outline-pill plan-action-btn'}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight size={15} />
                    </a>

                    {/* Feature Checklist */}
                    <div className="card-features-list">
                      <span className="features-section-title">Included Capabilities:</span>
                      {tier.features.map((feat, fIdx) => (
                        <div key={fIdx} className="feature-check-line">
                          <div className="check-bullet" style={{ color: tier.theme.accent }}>
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
        )}

        {/* 2. Horizontal Strip Layout (Infographic Match) */}
        {layoutMode === 'strip' && (
          <div className="pricing-stacked-list">
            {TIERS.map((tier) => {
              const price = tier.monthlyPrice 
                ? (annualBilling ? tier.annualPrice : tier.monthlyPrice)
                : null;
              const IconComponent = tier.iconComponent;

              return (
                <div 
                  key={tier.id}
                  className={`pricing-horizontal-card ${tier.popular ? 'card-featured' : ''}`}
                >
                  {/* Popular Pill Badge */}
                  {tier.popular && (
                    <div className="featured-top-badge">
                      <Sparkles size={13} />
                      <span>MOST POPULAR CHOICE</span>
                    </div>
                  )}

                  {/* Left Section: Step heading, plan details, checklist & pricing/CTA */}
                  <div className="card-left-content">
                    <div className="card-header-line">
                      <h3 className="step-title" style={{ color: tier.theme.accent }}>
                        {tier.step}
                      </h3>
                      <span className="title-sep">•</span>
                      <h4 className="plan-name-badge">{tier.name}</h4>
                      <span className="gpu-limit-pill">{tier.gpuLimit}</span>
                    </div>

                    <p className="plan-description-text">{tier.tagline}</p>

                    {/* Feature Checklist */}
                    <div className="card-features-grid">
                      {tier.features.map((feat, fIdx) => (
                        <div key={fIdx} className="feature-check-line">
                          <div className="check-bullet" style={{ color: tier.theme.accent }}>
                            <Check size={14} strokeWidth={2.8} />
                          </div>
                          <span className="feature-text">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing & CTA Action Strip */}
                    <div className="card-action-strip">
                      <div className="pricing-display">
                        {price !== null ? (
                          <>
                            <span className="currency-mark">$</span>
                            <span className="price-big">{price}</span>
                            <span className="period-mark">/ month</span>
                          </>
                        ) : (
                          <div className="custom-pricing-tag">
                            <span className="custom-quote-badge">CUSTOM QUOTE</span>
                            <span className="custom-price-text">Tailored Fleet Sizing</span>
                          </div>
                        )}
                      </div>

                      <a 
                        href="#contact" 
                        className={tier.popular ? 'btn-coral-pill plan-action-btn' : 'btn-outline-pill plan-action-btn'}
                      >
                        <span>{tier.ctaText}</span>
                        <ArrowRight size={15} />
                      </a>
                    </div>
                  </div>

                  {/* Middle Section: Elevated Icon Box */}
                  <div className="card-middle-icon">
                    <div 
                      className="icon-square-box"
                      style={{ backgroundColor: tier.theme.badgeBg }}
                    >
                      <IconComponent />
                    </div>
                  </div>

                  {/* Right Section: Signature Diagonal Ribbon with Giant Numerals */}
                  <div className="card-right-graphic">
                    <svg 
                      className="diagonal-ribbon-svg" 
                      viewBox="0 0 300 220" 
                      preserveAspectRatio="none" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon 
                        points="105,0 245,0 155,220 15,220" 
                        fill={tier.theme.ribbonLight} 
                      />
                      <polygon 
                        points="245,0 300,0 210,220 155,220" 
                        fill={tier.theme.ribbonDark} 
                        opacity="0.85" 
                      />
                    </svg>

                    <div 
                      className="giant-num-display"
                      style={{ color: tier.theme.numberColor }}
                    >
                      {tier.num}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 30-Day Guarantee Banner */}
        <div className="guarantee-ribbon">
          <div className="guarantee-icon-box">
            <ShieldCheck size={28} className="text-coral" />
          </div>
          <div className="guarantee-text">
            <h4>Our 30-Day 3x ROI Guarantee</h4>
            <p>
              If your team does not achieve at least 3x your subscription cost in documented cloud GPU savings within the first 30 days of production deployment, you pay absolutely nothing.
            </p>
          </div>
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

        .center-subtitle strong {
          color: var(--color-coral);
        }

        /* Controls Row */
        .controls-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        /* Billing Switcher */
        .billing-toggle-container {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: var(--color-white);
          padding: 8px 20px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border-light);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
        }

        .billing-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #64748B;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .billing-label.active {
          color: var(--color-navy-primary);
        }

        .discount-badge {
          font-size: 0.68rem;
          font-weight: 700;
          color: #0284C7;
          background: #E0F2FE;
          padding: 3px 8px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
        }

        .toggle-switch {
          width: 48px;
          height: 26px;
          border-radius: 13px;
          background: #CBD5E1;
          position: relative;
          cursor: pointer;
          transition: background 0.25s ease;
        }

        .toggle-switch.checked {
          background: var(--color-coral);
        }

        .toggle-thumb {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--color-white);
          transition: transform 0.25s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .toggle-switch.checked .toggle-thumb {
          transform: translateX(22px);
        }

        /* Layout Switcher Pill */
        .layout-switcher-pill {
          display: inline-flex;
          align-items: center;
          background: var(--color-white);
          padding: 4px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border-light);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
        }

        .layout-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          color: #64748B;
          transition: all 0.2s ease;
        }

        .layout-btn.active {
          background: var(--color-navy-primary);
          color: #FFFFFF;
        }

        .layout-btn:not(.active):hover {
          color: var(--color-navy-primary);
        }

        /* ========================================================= */
        /* 1. Website Theme 3-Column Grid Layout                     */
        /* ========================================================= */
        .pricing-grid-3col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 48px;
          margin-bottom: 50px;
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
          transform: translateY(-10px);
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
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .step-label {
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .gpu-limit-pill {
          background: #F1F5F9;
          color: #475569;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-light);
        }

        .plan-name-text {
          font-size: 1.35rem;
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
        }

        .currency-mark {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--color-navy-primary);
        }

        .price-big {
          font-size: 2.3rem;
          font-weight: 900;
          color: var(--color-navy-primary);
          font-family: var(--font-mono);
          line-height: 1;
        }

        .period-mark {
          font-size: 0.86rem;
          color: #64748B;
          margin-left: 6px;
        }

        .billing-term-note {
          display: block;
          font-size: 0.76rem;
          color: #94A3B8;
          font-family: var(--font-mono);
          margin-top: 4px;
        }

        .custom-pricing-tag {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .custom-quote-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 800;
          color: #0A1C36;
          background: #E2E8F0;
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          width: fit-content;
        }

        .custom-price-text {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-navy-primary);
          letter-spacing: -0.01em;
        }

        .plan-action-btn {
          width: 100%;
          justify-content: center;
          padding: 11px 20px;
          font-size: 0.9rem;
          margin-bottom: 24px;
        }

        .card-features-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
        }

        .features-section-title {
          font-size: 0.76rem;
          font-weight: 800;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 4px;
        }

        .feature-check-line {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .check-bullet {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .feature-text {
          font-size: 0.84rem;
          color: #334155;
          font-weight: 500;
          line-height: 1.45;
        }

        /* ========================================================= */
        /* 2. Horizontal Strip Layout                                */
        /* ========================================================= */
        .pricing-stacked-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 48px;
          margin-bottom: 50px;
          max-width: 1120px;
          margin-left: auto;
          margin-right: auto;
        }

        .pricing-horizontal-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid rgba(10, 28, 54, 0.08);
          box-shadow: 0 10px 28px -4px rgba(10, 28, 54, 0.06);
          display: grid;
          grid-template-columns: 1fr auto 270px;
          align-items: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          min-height: 205px;
        }

        .pricing-horizontal-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 42px -6px rgba(10, 28, 54, 0.12);
          border-color: #CBD5E1;
        }

        .pricing-horizontal-card.card-featured {
          border-color: var(--color-coral);
          box-shadow: 0 16px 36px -4px rgba(232, 90, 42, 0.18);
        }

        .pricing-horizontal-card .featured-top-badge {
          left: 40px;
          transform: none;
        }

        .card-left-content {
          padding: 34px 28px 34px 38px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 2;
        }

        .card-header-line {
          display: flex;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
        }

        .step-title {
          font-family: var(--font-primary), 'Plus Jakarta Sans', sans-serif;
          font-size: 1.55rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .title-sep {
          color: #CBD5E1;
        }

        .plan-name-badge {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--color-navy-primary);
          margin: 0;
        }

        .plan-description-text {
          font-size: 0.92rem;
          color: #64748B;
          line-height: 1.55;
          max-width: 660px;
          margin: 0;
        }

        .card-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 24px;
          margin-top: 4px;
          margin-bottom: 6px;
        }

        .card-action-strip {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 6px;
          flex-wrap: wrap;
        }

        .pricing-display {
          display: flex;
          align-items: baseline;
        }

        .card-middle-icon {
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .card-right-graphic {
          position: relative;
          width: 270px;
          height: 100%;
          min-height: 205px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          overflow: hidden;
        }

        .diagonal-ribbon-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .card-right-graphic .giant-num-display {
          font-size: clamp(6.8rem, 8.5vw, 8.2rem);
          margin-right: 18px;
        }

        /* Guarantee Ribbon */
        .guarantee-ribbon {
          background: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-left: 4px solid var(--color-coral);
          border-radius: var(--radius-lg);
          padding: 24px 28px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 8px 24px rgba(10, 28, 54, 0.04);
          max-width: 1120px;
          margin-left: auto;
          margin-right: auto;
        }

        .guarantee-icon-box {
          flex-shrink: 0;
        }

        .text-coral {
          color: var(--color-coral);
        }

        .guarantee-text h4 {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--color-navy-primary);
          margin-bottom: 4px;
        }

        .guarantee-text p {
          font-size: 0.92rem;
          color: #64748B;
          line-height: 1.5;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .pricing-grid-3col {
            grid-template-columns: 1fr;
            max-width: 520px;
            margin-left: auto;
            margin-right: auto;
          }
          .pricing-horizontal-card {
            grid-template-columns: 1fr auto 200px;
          }
          .card-right-graphic {
            width: 200px;
          }
        }

        @media (max-width: 768px) {
          .pricing-horizontal-card {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .card-middle-icon {
            display: none;
          }
          .card-left-content {
            padding: 28px 20px;
          }
          .card-features-grid {
            grid-template-columns: 1fr;
          }
          .card-right-graphic {
            width: 100%;
            height: 120px;
            min-height: 120px;
            justify-content: flex-end;
            padding-right: 24px;
          }
        }
      `}</style>
    </section>
  );
}
