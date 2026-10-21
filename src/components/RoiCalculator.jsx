'use client';

import React, { useState } from 'react';
import { 
  Clock, 
  Users, 
  Headphones, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  HelpCircle,
  FileCheck
} from 'lucide-react';

export default function RoiCalculator() {
  // Input fields
  const [conversationsPerMonth, setConversationsPerMonth] = useState(2500);
  const [avgRecordingLength, setAvgRecordingLength] = useState(8); // minutes
  const [reviewPercentage, setReviewPercentage] = useState(20); // %
  const [reviewTimePerConv, setReviewTimePerConv] = useState(12); // minutes

  // Calculated Results
  const totalRecordedHours = Math.round((conversationsPerMonth * avgRecordingLength) / 60);
  const selectedForReviewCount = Math.round(conversationsPerMonth * (reviewPercentage / 100));
  const estimatedReviewHours = Math.round((selectedForReviewCount * reviewTimePerConv) / 60);
  const equivalentReviewerDays = Math.round(estimatedReviewHours / 8);

  return (
    <section id="calculator" className="calculator-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="bracket-tag">REVIEW WORKLOAD ESTIMATOR</span>
          <h2 className="section-title">UNDERSTAND THE SCALE OF YOUR CONVERSATION REVIEW WORKLOAD</h2>
          
          <div className="accent-lines center">
            <div className="accent-line-coral"></div>
            <div className="accent-line-blue"></div>
          </div>

          <p className="section-subtitle center-subtitle">
            Estimate how many hours your team spends reviewing voice interactions each month. Use the result to plan review capacity and discuss your Dovell requirements.
          </p>
        </div>

        {/* Interactive Estimator Card */}
        <div className="calculator-card">
          <div className="calculator-grid">
            
            {/* Left Controls: Input Panel */}
            <div className="calc-inputs-pane">
              <div className="pane-header">
                <Sliders size={18} className="text-coral" />
                <h3 className="pane-title">Your Conversation Volume</h3>
              </div>

              {/* Slider 1: Conversations per Month */}
              <div className="slider-group">
                <div className="slider-label-row">
                  <span className="field-title">Conversations per Month</span>
                  <span className="slider-value-pill">{conversationsPerMonth.toLocaleString()}</span>
                </div>
                <input 
                  type="range"
                  min="200"
                  max="25000"
                  step="100"
                  value={conversationsPerMonth}
                  onChange={(e) => setConversationsPerMonth(Number(e.target.value))}
                  className="theme-slider"
                />
                <div className="slider-range-limits">
                  <span>200</span>
                  <span>10,000</span>
                  <span>25,000+</span>
                </div>
              </div>

              {/* Slider 2: Average Recording Length — minutes */}
              <div className="slider-group">
                <div className="slider-label-row">
                  <span className="field-title">Average Recording Length — minutes</span>
                  <span className="slider-value-pill">{avgRecordingLength} min</span>
                </div>
                <input 
                  type="range"
                  min="1"
                  max="60"
                  step="1"
                  value={avgRecordingLength}
                  onChange={(e) => setAvgRecordingLength(Number(e.target.value))}
                  className="theme-slider"
                />
                <div className="slider-range-limits">
                  <span>1 min</span>
                  <span>30 min</span>
                  <span>60 min</span>
                </div>
              </div>

              {/* Slider 3: Conversations Selected for Review — percentage */}
              <div className="slider-group">
                <div className="slider-label-row">
                  <span className="field-title">Conversations Selected for Review</span>
                  <span className="slider-value-pill">{reviewPercentage}%</span>
                </div>
                <input 
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={reviewPercentage}
                  onChange={(e) => setReviewPercentage(Number(e.target.value))}
                  className="theme-slider"
                />
                <div className="slider-range-limits">
                  <span>1% sample</span>
                  <span>50% sample</span>
                  <span>100% full review</span>
                </div>
              </div>

              {/* Slider 4: Average Review Time per Selected Conversation — minutes */}
              <div className="slider-group">
                <div className="slider-label-row">
                  <span className="field-title">Average Review Time per Selected Conversation</span>
                  <span className="slider-value-pill">{reviewTimePerConv} min</span>
                </div>
                <input 
                  type="range"
                  min="2"
                  max="45"
                  step="1"
                  value={reviewTimePerConv}
                  onChange={(e) => setReviewTimePerConv(Number(e.target.value))}
                  className="theme-slider"
                />
                <div className="slider-range-limits">
                  <span>2 min</span>
                  <span>20 min</span>
                  <span>45 min</span>
                </div>
              </div>
            </div>

            {/* Right Pane: Estimated Monthly Review Workload */}
            <div className="calc-results-pane">
              
              <div className="results-header-tag">
                <Clock size={15} className="text-cyan" />
                <span>ESTIMATED MONTHLY REVIEW WORKLOAD</span>
              </div>

              {/* Main Metric: Estimated Review Hours */}
              <div className="main-metric-box">
                <span className="metric-title">Estimated Review Hours</span>
                <div className="metric-huge-number">
                  {estimatedReviewHours.toLocaleString()}
                  <span className="metric-sub-unit">hours / mo</span>
                </div>
                <p className="metric-note">
                  Required to review {selectedForReviewCount.toLocaleString()} conversations with complete verification.
                </p>
              </div>

              {/* 3 Supporting Results */}
              <div className="supporting-results-grid">
                
                <div className="sub-metric-card">
                  <div className="sub-metric-icon">
                    <Headphones size={16} />
                  </div>
                  <span className="sub-val">{totalRecordedHours.toLocaleString()} hrs</span>
                  <span className="sub-lbl">Total Recorded Audio Hours</span>
                </div>

                <div className="sub-metric-card">
                  <div className="sub-metric-icon">
                    <FileCheck size={16} />
                  </div>
                  <span className="sub-val">{selectedForReviewCount.toLocaleString()}</span>
                  <span className="sub-lbl">Conversations for Review</span>
                </div>

                <div className="sub-metric-card">
                  <div className="sub-metric-icon">
                    <Users size={16} />
                  </div>
                  <span className="sub-val">{equivalentReviewerDays} days</span>
                  <span className="sub-lbl">8-Hour Reviewer Days</span>
                </div>

              </div>

              {/* Primary Action Button */}
              <div className="calc-cta-row">
                <a href="#contact" className="btn-coral-pill calc-main-cta">
                  <span>Discuss Your Review Workflow</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Footnote */}
              <p className="calc-footnote">
                <HelpCircle size={13} className="text-muted" />
                <span>
                  Estimates use the values you enter. Actual review time depends on recording quality, conversation complexity, and your review process.
                </span>
              </p>

            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        .calculator-section {
          background-color: #F8FAFC;
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

        /* Calculator Card */
        .calculator-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          box-shadow: 0 12px 40px rgba(10, 28, 54, 0.08);
          overflow: hidden;
          max-width: 1200px;
          margin: 0 auto;
        }

        .calculator-grid {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
        }

        /* Left Pane */
        .calc-inputs-pane {
          padding: 44px 40px;
          border-right: 1px solid #E2E8F0;
        }

        .pane-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid #F1F5F9;
        }

        .pane-title {
          font-family: var(--font-primary);
          font-size: 1.25rem;
          font-weight: 800;
          color: #0A1C36;
        }

        .slider-group {
          margin-bottom: 26px;
        }

        .slider-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .field-title {
          font-size: 0.92rem;
          font-weight: 600;
          color: #1E293B;
        }

        .slider-value-pill {
          font-family: var(--font-mono);
          background: #F1F5F9;
          border: 1px solid #CBD5E1;
          color: #0A1C36;
          font-size: 0.84rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: var(--radius-full);
        }

        .theme-slider {
          width: 100%;
          height: 7px;
          border-radius: 4px;
          background: #E2E8F0;
          outline: none;
          accent-color: #E85A2A;
          cursor: pointer;
        }

        .slider-range-limits {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: #94A3B8;
          margin-top: 6px;
        }

        /* Right Results Pane */
        .calc-results-pane {
          background: #0A1C36;
          padding: 44px 38px;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .results-header-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #38BDF8;
          margin-bottom: 22px;
        }

        .main-metric-box {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .metric-title {
          font-size: 0.88rem;
          color: #94A3B8;
          font-weight: 600;
          display: block;
          margin-bottom: 8px;
        }

        .metric-huge-number {
          font-family: var(--font-primary);
          font-size: clamp(2.4rem, 3.8vw, 3.4rem);
          font-weight: 900;
          color: #38BDF8;
          line-height: 1.1;
          display: flex;
          align-items: baseline;
          gap: 10px;
        }

        .metric-sub-unit {
          font-size: 1rem;
          color: #94A3B8;
          font-weight: 500;
        }

        .metric-note {
          font-size: 0.82rem;
          color: #CBD5E1;
          margin-top: 10px;
          line-height: 1.5;
        }

        /* Supporting 3 results */
        .supporting-results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 28px;
        }

        .sub-metric-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px 12px;
          display: flex;
          flex-direction: column;
        }

        .sub-metric-icon {
          color: #E85A2A;
          margin-bottom: 6px;
        }

        .sub-val {
          font-family: var(--font-primary);
          font-size: 1.15rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 4px;
        }

        .sub-lbl {
          font-size: 0.72rem;
          color: #94A3B8;
          line-height: 1.35;
        }

        .calc-main-cta {
          background: #E85A2A;
          color: #FFFFFF;
          width: 100%;
          padding: 14px;
          font-size: 0.94rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 6px 20px rgba(232, 90, 42, 0.35);
        }

        .calc-main-cta:hover {
          background: #D0481B;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(232, 90, 42, 0.45);
        }

        .calc-footnote {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.74rem;
          color: #64748B;
          line-height: 1.5;
          margin-top: 18px;
        }

        @media (max-width: 1024px) {
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
        }
      `}</style>
    </section>
  );
}
