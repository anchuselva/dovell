'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  DollarSign, 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Leaf, 
  Clock, 
  Layers,
  ChevronRight
} from 'lucide-react';

const GPU_OPTIONS = [
  { name: 'NVIDIA H100 80GB SXM5', hourlyRate: 3.40, vram: '80GB HBM3' },
  { name: 'NVIDIA A100 80GB PCIe', hourlyRate: 2.20, vram: '80GB HBM2e' },
  { name: 'NVIDIA L40S 48GB', hourlyRate: 1.35, vram: '48GB GDDR6' },
  { name: 'NVIDIA GH200 Grace Hopper', hourlyRate: 4.80, vram: '96GB HBM3 + 480GB' },
];

const CLOUD_PROVIDERS = [
  { id: 'aws', name: 'AWS (p5.48xlarge / p4d)' },
  { id: 'gcp', name: 'GCP (a3-highgpu / a2)' },
  { id: 'azure', name: 'Azure (NDv5 / NDv4)' },
  { id: 'coreweave', name: 'CoreWeave / Lambda' },
];

export default function RoiCalculator() {
  const [gpuCount, setGpuCount] = useState(64);
  const [selectedGpuIndex, setSelectedGpuIndex] = useState(0);
  const [provider, setProvider] = useState('aws');
  const [baselineUtil, setBaselineUtil] = useState(35); // 35% average baseline

  const selectedGpu = GPU_OPTIONS[selectedGpuIndex];
  const hoursPerYear = 8760;

  // Unoptimized cost: 100% active allocation at hourly rate
  const rawAnnualCost = gpuCount * selectedGpu.hourlyRate * hoursPerYear;

  // With Dovell, utilization jumps to ~88%, meaning you need fewer instances or save ~64%
  const savingsPercent = 0.64; 
  const annualSavings = rawAnnualCost * savingsPercent;
  const optimizedAnnualCost = rawAnnualCost - annualSavings;
  const monthlySavings = annualSavings / 12;
  const unlockedGpuHours = Math.round((annualSavings / selectedGpu.hourlyRate));
  const carbonOffsetTons = Math.round(gpuCount * 1.8 * savingsPercent);

  return (
    <section id="calculator" className="calculator-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="bracket-tag">FINOPS ROI SIMULATOR</span>
          <h2 className="section-title">REAL-TIME CLUSTER SAVINGS CALCULATOR</h2>
          <p className="section-subtitle center-subtitle">
            Estimate your exact annual cloud spend reduction by shifting from static instance over-provisioning to Dovell's dynamic kernel bin-packing.
          </p>
        </div>

        <div className="calculator-card">
          <div className="calculator-grid">
            {/* Left Controls */}
            <div className="calc-inputs-pane">
              <h3 className="pane-title">
                <Calculator size={18} className="coral-icon" />
                <span>Configure Your AI Infrastructure</span>
              </h3>

              {/* GPU Slider */}
              <div className="input-group">
                <div className="input-header">
                  <label htmlFor="gpuSlider" className="input-label">Number of Active GPUs</label>
                  <span className="input-badge">{gpuCount} GPUs</span>
                </div>
                <input 
                  id="gpuSlider"
                  type="range" 
                  min="8" 
                  max="512" 
                  step="8"
                  value={gpuCount}
                  onChange={(e) => setGpuCount(Number(e.target.value))}
                  className="calc-range-slider"
                />
                <div className="range-ticks">
                  <span>8</span>
                  <span>64</span>
                  <span>128</span>
                  <span>256</span>
                  <span>512</span>
                </div>
              </div>

              {/* GPU Type Radio/Cards */}
              <div className="input-group">
                <label className="input-label">Accelerator Architecture</label>
                <div className="gpu-picker-grid">
                  {GPU_OPTIONS.map((gpu, idx) => (
                    <button
                      key={gpu.name}
                      type="button"
                      onClick={() => setSelectedGpuIndex(idx)}
                      className={`gpu-option-btn ${selectedGpuIndex === idx ? 'active' : ''}`}
                    >
                      <span className="gpu-opt-name">{gpu.name}</span>
                      <span className="gpu-opt-meta">${gpu.hourlyRate.toFixed(2)}/hr • {gpu.vram}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cloud Provider Select */}
              <div className="input-group">
                <label className="input-label">Primary Cloud Environment</label>
                <div className="provider-tabs">
                  {CLOUD_PROVIDERS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setProvider(p.id)}
                      className={`provider-tab ${provider === p.id ? 'active' : ''}`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Baseline Utilization Slider */}
              <div className="input-group">
                <div className="input-header">
                  <label htmlFor="utilSlider" className="input-label">Estimated Current Idle VRAM</label>
                  <span className="input-badge text-coral">{100 - baselineUtil}% Idle / Wasted</span>
                </div>
                <input 
                  id="utilSlider"
                  type="range" 
                  min="15" 
                  max="65" 
                  step="5"
                  value={baselineUtil}
                  onChange={(e) => setBaselineUtil(Number(e.target.value))}
                  className="calc-range-slider coral-slider"
                />
              </div>
            </div>

            {/* Right Results Dashboard */}
            <div className="calc-results-pane">
              <div className="results-badge">
                <Sparkles size={14} />
                <span>PROJECTED ANNUAL SAVINGS</span>
              </div>

              <div className="savings-hero-number">
                ${Math.round(annualSavings).toLocaleString()}
                <span className="savings-sub-period">/ year saved</span>
              </div>

              <div className="savings-monthly-note">
                Equivalent to <strong>${Math.round(monthlySavings).toLocaleString()} / month</strong> back in your engineering budget
              </div>

              {/* Comparison Visual Bars */}
              <div className="cost-comparison-box">
                <div className="comparison-bar-row">
                  <div className="comp-labels">
                    <span>Unoptimized Cloud Spend:</span>
                    <span className="cost-old">${Math.round(rawAnnualCost).toLocaleString()}/yr</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill bar-red" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className="comparison-bar-row">
                  <div className="comp-labels">
                    <span className="text-cyan">With Dovell Slicing & Cache:</span>
                    <span className="cost-new">${Math.round(optimizedAnnualCost).toLocaleString()}/yr</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill bar-cyan" style={{ width: '36%' }}></div>
                  </div>
                </div>
              </div>

              {/* Secondary Impact Metrics */}
              <div className="secondary-impact-grid">
                <div className="impact-card">
                  <Clock size={16} className="impact-icon blue" />
                  <span className="impact-val">+{unlockedGpuHours.toLocaleString()}</span>
                  <span className="impact-lbl">Free GPU Hours Unlocked</span>
                </div>
                <div className="impact-card">
                  <Leaf size={16} className="impact-icon green" />
                  <span className="impact-val">{carbonOffsetTons} Tons</span>
                  <span className="impact-lbl">CO2 Emissions Avoided</span>
                </div>
              </div>

              {/* CTA button */}
              <div className="calc-action-row">
                <a href="#contact" className="btn-coral-pill calc-cta-btn">
                  <span>CLAIM YOUR AUDIT & POC</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .calculator-section {
          background-color: var(--color-white);
        }

        .text-center {
          text-align: center;
        }

        .center-subtitle {
          margin-left: auto;
          margin-right: auto;
        }

        .calculator-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-xl);
          box-shadow: 0 15px 35px -5px rgba(10, 28, 54, 0.08);
          overflow: hidden;
        }

        .calculator-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
        }

        /* Inputs Pane */
        .calc-inputs-pane {
          padding: 44px;
          border-right: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .pane-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-navy-primary);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .coral-icon {
          color: var(--color-coral);
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .input-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .input-label {
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--color-navy-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .input-badge {
          background: var(--color-navy-primary);
          color: var(--color-white);
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
          padding: 3px 12px;
          border-radius: var(--radius-full);
        }

        .calc-range-slider {
          width: 100%;
          accent-color: #0A1C36;
          cursor: pointer;
          height: 8px;
        }

        .calc-range-slider.coral-slider {
          accent-color: var(--color-coral);
        }

        .range-ticks {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #94A3B8;
        }

        .gpu-picker-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .gpu-option-btn {
          text-align: left;
          padding: 12px 14px;
          border-radius: var(--radius-md);
          border: 1px solid #CBD5E1;
          background: #F8FAFC;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
        }

        .gpu-option-btn:hover {
          border-color: #0A1C36;
          background: #F1F5F9;
        }

        .gpu-option-btn.active {
          border-color: var(--color-navy-primary);
          background: #EFF6FF;
          box-shadow: 0 0 0 2px var(--color-navy-primary);
        }

        .gpu-opt-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-navy-primary);
        }

        .gpu-opt-meta {
          font-size: 0.72rem;
          color: #64748B;
          font-family: var(--font-mono);
          margin-top: 3px;
        }

        .provider-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .provider-tab {
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 600;
          background: #F1F5F9;
          color: #475569;
          border: 1px solid #E2E8F0;
          transition: all 0.2s ease;
        }

        .provider-tab.active {
          background: var(--color-navy-primary);
          color: var(--color-white);
          border-color: var(--color-navy-primary);
        }

        /* Results Pane */
        .calc-results-pane {
          background: #0A1C36;
          color: var(--color-white);
          padding: 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .results-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--color-cyan);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .savings-hero-number {
          font-size: 3.4rem;
          font-weight: 900;
          color: #FFFFFF;
          font-family: var(--font-mono);
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .savings-sub-period {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-coral);
          margin-left: 8px;
        }

        .savings-monthly-note {
          font-size: 0.95rem;
          color: #94A3B8;
          margin-top: 10px;
          margin-bottom: 28px;
        }

        .savings-monthly-note strong {
          color: var(--color-cyan);
        }

        .cost-comparison-box {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-md);
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 28px;
        }

        .comparison-bar-row {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .comp-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          font-family: var(--font-mono);
        }

        .cost-old {
          color: #F87171;
          font-weight: 700;
        }

        .cost-new {
          color: var(--color-cyan);
          font-weight: 700;
        }

        .bar-track {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 4px;
        }

        .bar-red {
          background: #EF4444;
        }

        .bar-cyan {
          background: linear-gradient(90deg, #00C2FF, #10B981);
        }

        .secondary-impact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 30px;
        }

        .impact-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
        }

        .impact-icon.blue {
          color: #60A5FA;
        }

        .impact-icon.green {
          color: #34D399;
        }

        .impact-val {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-white);
          font-family: var(--font-mono);
          margin-top: 4px;
        }

        .impact-lbl {
          font-size: 0.68rem;
          color: #94A3B8;
          line-height: 1.2;
          margin-top: 2px;
        }

        .calc-action-row {
          display: flex;
        }

        .calc-cta-btn {
          width: 100%;
          padding: 14px 20px;
          font-size: 0.95rem;
        }

        @media (max-width: 992px) {
          .calculator-grid {
            grid-template-columns: 1fr;
          }
          .calc-inputs-pane {
            border-right: none;
            border-bottom: 1px solid #E2E8F0;
            padding: 30px 24px;
          }
          .calc-results-pane {
            padding: 30px 24px;
          }
          .savings-hero-number {
            font-size: 2.6rem;
          }
        }

        @media (max-width: 640px) {
          .gpu-picker-grid {
            grid-template-columns: 1fr;
          }
          .secondary-impact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
