'use client';

import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Cpu, 
  Layers, 
  Zap, 
  Activity, 
  ArrowUpRight,
  TrendingDown,
  Clock,
  Gauge
} from 'lucide-react';

const ENGINES = [
  {
    id: 'slicing',
    tag: 'HARDWARE VIRTUALIZATION',
    dateBadge: 'SUB-10MS GRANULARITY',
    title: 'Dynamic GPU Slicing & Sub-Instance Virtualization',
    image: '/images/gpu-slicing.jpg',
    description: 'Fractional partitioning of physical NVIDIA H100/A100 silicon into micro-vGPUs. Bin-pack mixed batch jobs without memory leaks or compute starvation.',
    kpis: [
      { label: 'VRAM Granularity', value: '1.25 GB' },
      { label: 'Concurrency Boost', value: '3.4x' },
      { label: 'Compute Utilization', value: '94.8%' }
    ],
    highlight: 'Zero recompilation needed'
  },
  {
    id: 'caching',
    tag: 'INFERENCE ACCELERATION',
    dateBadge: '99.4% CACHE HIT RATE',
    title: 'Distributed KV-Cache Sharing & Context Compression',
    image: '/images/token-cache.jpg',
    description: 'Eliminates redundant pre-fill computations across chat sessions and agent loops by persisting attention key-value states in ultra-fast tiered memory.',
    kpis: [
      { label: 'TTFT Latency Cut', value: '-65%' },
      { label: 'Token Throughput', value: '+380%' },
      { label: 'Host RAM Paging', value: '3.2 ms' }
    ],
    highlight: 'vLLM & TensorRT-LLM Native'
  },
  {
    id: 'spot',
    tag: 'MULTI-CLOUD FINOPS',
    dateBadge: 'ZERO PREEMPTION DROPS',
    title: 'Autonomous Spot Fleet Arbitrage & Carbon Routing',
    image: '/images/cloud-mesh.jpg',
    description: 'Predicts cloud provider spot terminations 120 seconds in advance and migrates live model checkpoints across AWS, GCP, Azure, and CoreWeave seamlessly.',
    kpis: [
      { label: 'Cloud Cost Cut', value: '68%' },
      { label: 'Preemption Recovery', value: '< 2.4s' },
      { label: 'Carbon Avoidance', value: '34%' }
    ],
    highlight: 'Kubernetes & Slurm daemon'
  }
];

export default function FeatureEngines() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const scrollLeft = () => {
    setActiveCardIndex((prev) => (prev === 0 ? ENGINES.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setActiveCardIndex((prev) => (prev === ENGINES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="engines" className="engines-section section-padding">
      <div className="container">
        {/* Section Header with top-right carousel arrows (matching reference image layout) */}
        <div className="engines-header-row">
          <div className="header-left">
            <span className="bracket-tag">CORE ENGINES</span>
            <h2 className="section-title">INTELLIGENT COMPUTE SCHEDULING</h2>
            <p className="section-subtitle">
              Engineered for frontier AI labs and high-throughput production clusters. Replace brittle static allocations with autonomous, kernel-level orchestration.
            </p>
          </div>

          {/* Reference circular navigation buttons at the top right of cards */}
          <div className="header-right-controls">
            <button 
              onClick={scrollLeft} 
              className="circle-nav-btn"
              aria-label="Previous engine"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollRight} 
              className="circle-nav-btn"
              aria-label="Next engine"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 3 Cards Grid (matching reference image's 3-card layout) */}
        <div className="engines-grid">
          {ENGINES.map((engine, idx) => (
            <article 
              key={engine.id} 
              className={`engine-card ${activeCardIndex === idx ? 'card-focused' : ''}`}
              onMouseEnter={() => setActiveCardIndex(idx)}
            >
              {/* Card Image with Blue Tag Badge */}
              <div className="card-image-box">
                <img 
                  src={engine.image} 
                  alt={engine.title} 
                  className="card-img"
                  loading="lazy"
                />
                <span className="card-category-badge">{engine.tag}</span>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <div className="card-date-badge">
                  <Clock size={12} className="card-clock-icon" />
                  <span>{engine.dateBadge}</span>
                </div>

                <h3 className="card-title">{engine.title}</h3>

                <p className="card-description">
                  {engine.description}
                </p>

                {/* KPI metrics strip */}
                <div className="card-kpi-strip">
                  {engine.kpis.map((kpi, kIdx) => (
                    <div key={kIdx} className="kpi-item">
                      <span className="kpi-val">{kpi.value}</span>
                      <span className="kpi-lbl">{kpi.label}</span>
                    </div>
                  ))}
                </div>

                {/* Card Footer */}
                <div className="card-footer">
                  <span className="card-highlight-pill">
                    <Activity size={13} />
                    {engine.highlight}
                  </span>
                  <a href="#architecture" className="card-explore-link" aria-label={`Explore ${engine.title}`}>
                    <span>Specs</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Reference Bottom Center CTA flanked by dual accent lines */}
        <div className="engines-bottom-cta-wrapper">
          <div className="cta-flank-line left">
            <div className="flank-coral"></div>
            <div className="flank-blue"></div>
          </div>

          <a href="#architecture" className="btn-coral-pill bottom-discover-btn">
            DISCOVER FULL ARCHITECTURE
          </a>

          <div className="cta-flank-line right">
            <div className="flank-coral"></div>
            <div className="flank-blue"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .engines-section {
          background-color: #F8FAFC;
          position: relative;
        }

        .engines-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 44px;
        }

        .header-left {
          max-width: 780px;
        }

        .header-right-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* 3 Cards Grid */
        .engines-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 56px;
        }

        .engine-card {
          background: var(--color-white);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-light);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(10, 28, 54, 0.04);
        }

        .engine-card:hover, .engine-card.card-focused {
          transform: translateY(-6px);
          box-shadow: 0 20px 35px -8px rgba(10, 28, 54, 0.12);
          border-color: rgba(232, 90, 42, 0.4);
        }

        /* Card Image Box */
        .card-image-box {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          background-color: var(--color-navy-darkest);
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .engine-card:hover .card-img {
          transform: scale(1.08);
        }

        /* Blue category tag badge (directly matching the reference blue badges) */
        .card-category-badge {
          position: absolute;
          bottom: 14px;
          left: 16px;
          background: #3B82F6;
          color: var(--color-white);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 4px 12px;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.4);
          font-family: var(--font-mono);
        }

        /* Card Body */
        .card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-date-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #64748B;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
          font-family: var(--font-mono);
        }

        .card-clock-icon {
          color: var(--color-coral);
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 800;
          line-height: 1.3;
          color: var(--color-navy-primary);
          margin-bottom: 12px;
          min-height: 58px;
        }

        .card-description {
          font-size: 0.92rem;
          line-height: 1.55;
          color: #475569;
          margin-bottom: 20px;
          flex: 1;
        }

        /* KPI Strip */
        .card-kpi-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: #F1F5F9;
          border-radius: var(--radius-md);
          padding: 10px 12px;
          gap: 8px;
          margin-bottom: 18px;
        }

        .kpi-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .kpi-val {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-navy-primary);
          font-family: var(--font-mono);
        }

        .kpi-lbl {
          font-size: 0.65rem;
          font-weight: 600;
          color: #64748B;
          line-height: 1.1;
          margin-top: 2px;
        }

        /* Card Footer */
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #F1F5F9;
          padding-top: 14px;
        }

        .card-highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #0284C7;
          background: #E0F2FE;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
        }

        .card-explore-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--color-navy-primary);
          font-size: 0.82rem;
          font-weight: 700;
          transition: color 0.2s;
        }

        .card-explore-link:hover {
          color: var(--color-coral);
        }

        /* Bottom Center CTA with reference flanking dual lines */
        .engines-bottom-cta-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }

        .cta-flank-line {
          display: flex;
          flex-direction: column;
          gap: 3px;
          width: 140px;
        }

        .flank-coral {
          height: 2px;
          background-color: var(--color-coral);
          width: 100%;
        }

        .flank-blue {
          height: 2px;
          background-color: #93C5FD;
          width: 70%;
        }

        .cta-flank-line.right .flank-blue {
          margin-left: auto;
        }

        .bottom-discover-btn {
          font-size: 0.9rem;
          letter-spacing: 0.04em;
        }

        @media (max-width: 1024px) {
          .engines-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .engines-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .engines-grid {
            grid-template-columns: 1fr;
          }
          .cta-flank-line {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
