'use client';

import React, { useState } from 'react';
import { 
  Clock, 
  Users, 
  Headphones, 
  ArrowRight, 
  Sliders, 
  FileCheck
} from 'lucide-react';
import WaveformSlider from './WaveformSlider';
import VoiceSignalRunningCanvas from './VoiceSignalRunningCanvas';

export default function RoiCalculator() {
  // Input fields (defaulting to the exact values in the user's screenshot: 2,500 / 8 min / 28% / 12 min)
  const [conversationsPerMonth, setConversationsPerMonth] = useState(2500);
  const [avgRecordingLength, setAvgRecordingLength] = useState(8); // minutes
  const [reviewPercentage, setReviewPercentage] = useState(28); // %
  const [reviewTimePerConv, setReviewTimePerConv] = useState(12); // minutes

  // Calculated Results
  const totalRecordedHours = Math.round((conversationsPerMonth * avgRecordingLength) / 60);
  const selectedForReviewCount = Math.round(conversationsPerMonth * (reviewPercentage / 100));
  const estimatedReviewHours = Math.round((selectedForReviewCount * reviewTimePerConv) / 60);
  const equivalentReviewerDays = Math.round(estimatedReviewHours / 8);


  // Workload scale factor (reacts dynamically as sliders move)
  const workloadRatio = Math.min(1.5, Math.max(0.55, estimatedReviewHours / 140));

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

        {/* Interactive Estimator Card (2-Column Layout matching screenshot) */}
        <div className="calculator-card">
          <div className="calculator-grid">
            
            {/* Left Controls: Input Panel (White Card) */}
            <div className="calc-inputs-pane">
              <div className="pane-header">
                <Sliders size={18} className="text-coral" />
                <h3 className="pane-title">Your Conversation Volume</h3>
              </div>

              {/* Slider 1: Conversations per Month */}
              <WaveformSlider 
                id="slider-conv-month"
                label="Conversations per Month"
                value={conversationsPerMonth}
                valueDisplay={conversationsPerMonth.toLocaleString()}
                min={200}
                mid={10000}
                max={25000}
                step={100}
                minLabel="200"
                midLabel="10,000"
                maxLabel="25,000+"
                onChange={setConversationsPerMonth}
              />

              {/* Slider 2: Average Recording Length — minutes */}
              <WaveformSlider 
                id="slider-rec-length"
                label="Average Recording Length — minutes"
                value={avgRecordingLength}
                valueDisplay={`${avgRecordingLength} min`}
                min={1}
                mid={30}
                max={60}
                step={1}
                minLabel="1 min"
                midLabel="30 min"
                maxLabel="60 min"
                onChange={setAvgRecordingLength}
              />

              {/* Slider 3: Conversations Selected for Review */}
              <WaveformSlider 
                id="slider-review-pct"
                label="Conversations Selected for Review"
                value={reviewPercentage}
                valueDisplay={`${reviewPercentage}%`}
                min={1}
                mid={50}
                max={100}
                step={1}
                minLabel="1% sample"
                midLabel="50% sample"
                maxLabel="100% full review"
                onChange={setReviewPercentage}
              />

              {/* Slider 4: Average Review Time per Selected Conversation */}
              <WaveformSlider 
                id="slider-review-time"
                label="Average Review Time per Selected Conversation"
                value={reviewTimePerConv}
                valueDisplay={`${reviewTimePerConv} min`}
                min={2}
                mid={20}
                max={45}
                step={1}
                minLabel="2 min"
                midLabel="20 min"
                maxLabel="45 min"
                onChange={setReviewTimePerConv}
              />
            </div>

            {/* Right Pane: Estimated Monthly Review Workload (Dark Navy Card) */}
            <div className="calc-results-pane">
              
              {/* Header Tag */}
              <div className="results-header-tag">
                <Clock size={15} className="text-cyan" />
                <span>ESTIMATED MONTHLY REVIEW WORKLOAD</span>
              </div>

              {/* Main Metric: Estimated Review Hours */}
              <div className="main-metric-box">
                <span className="metric-title">Estimated Review Hours</span>
                <div className="metric-huge-number">
                  <span className="huge-digits">{estimatedReviewHours.toLocaleString()}</span>
                  <span className="metric-sub-unit">hours / mo</span>
                </div>
                <p className="metric-note">
                  Required to review {selectedForReviewCount.toLocaleString()} conversations with complete verification.
                </p>
              </div>

              {/* 3 Supporting Results Row */}
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

              {/* ========================================================================= */}
              {/* VOICE SIGNAL PREVIEW GRAPH (MATCHING USER SCREENSHOT & MEASUREMENTS)      */}
              {/* ========================================================================= */}
              <div className="voice-signal-preview-box">
                <div className="preview-box-header">
                  <div className="preview-header-left">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 10v4" />
                      <path d="M6 6v12" />
                      <path d="M10 3v18" />
                      <path d="M14 7v10" />
                      <path d="M18 5v14" />
                      <path d="M22 10v4" />
                    </svg>
                    <span className="preview-title">VOICE SIGNAL PREVIEW</span>
                  </div>
                  <span className="preview-note">Illustrative waveform</span>
                </div>

                {/* Animated Waveform Stage reacting to measurement sliders */}
                <div className="preview-waveform-canvas">
                  <VoiceSignalRunningCanvas workloadRatio={workloadRatio} />
                </div>
              </div>

              {/* Primary Action Button */}
              <div className="calc-cta-row">
                <a href="#contact" className="btn-coral-pill calc-main-cta">
                  <span>DISCUSS YOUR REVIEW WORKFLOW</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Footnote */}
              <p className="calc-footnote">
                <span>* Estimates use the values you enter. Actual review time depends on recording quality, conversation complexity, and your review process.</span>
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
          box-shadow: 0 16px 45px rgba(10, 28, 54, 0.08);
          overflow: hidden;
          max-width: 1200px;
          margin: 0 auto;
        }

        .calculator-grid {
          display: grid;
          grid-template-columns: 1.06fr 0.94fr;
        }

        /* Left Pane */
        .calc-inputs-pane {
          padding: 44px 42px;
          border-right: 1px solid #E2E8F0;
        }

        .pane-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 34px;
          padding-bottom: 16px;
          border-bottom: 1px solid #F1F5F9;
        }

        .pane-title {
          font-family: var(--font-primary);
          font-size: 1.3rem;
          font-weight: 800;
          color: #0A1C36;
        }

        .slider-group {
          margin-bottom: 28px;
        }

        .slider-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .field-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: #1E293B;
        }

        .slider-value-pill {
          font-family: var(--font-mono);
          background: #EEF2F6;
          border: 1px solid #CBD5E1;
          color: #0A1C36;
          font-size: 0.86rem;
          font-weight: 800;
          padding: 3px 14px;
          border-radius: var(--radius-full);
        }

        .theme-slider {
          width: 100%;
          height: 6px;
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
          font-family: var(--font-primary);
          font-weight: 500;
        }

        /* Right Results Pane */
        .calc-results-pane {
          background: #061121;
          padding: 40px 36px;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
        }

        .results-header-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #38BDF8;
          margin-bottom: 20px;
        }

        .main-metric-box {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 22px 24px;
          margin-bottom: 20px;
        }

        .metric-title {
          font-size: 0.86rem;
          color: #94A3B8;
          font-weight: 600;
          display: block;
          margin-bottom: 6px;
        }

        .metric-huge-number {
          font-family: var(--font-primary);
          display: flex;
          align-items: baseline;
          gap: 10px;
        }

        .huge-digits {
          font-size: clamp(2.6rem, 3.8vw, 3.6rem);
          font-weight: 900;
          color: #38BDF8;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .metric-sub-unit {
          font-size: 1.05rem;
          color: #CBD5E1;
          font-weight: 600;
        }

        .metric-note {
          font-size: 0.82rem;
          color: #CBD5E1;
          margin-top: 10px;
          line-height: 1.45;
        }

        /* Supporting 3 results */
        .supporting-results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }

        .sub-metric-card {
          background: rgba(255, 255, 255, 0.035);
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
          margin-bottom: 3px;
        }

        .sub-lbl {
          font-size: 0.72rem;
          color: #94A3B8;
          line-height: 1.35;
        }

        /* ========================================================================= */
        /* VOICE SIGNAL PREVIEW BOX (MATCHING USER SCREENSHOT)                       */
        /* ========================================================================= */
        .voice-signal-preview-box {
          background: rgba(10, 28, 54, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 14px 16px;
          margin-bottom: 22px;
        }

        .preview-box-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .preview-header-left {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .preview-title {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 800;
          color: #38BDF8;
          letter-spacing: 0.06em;
        }

        .preview-note {
          font-size: 0.68rem;
          color: #64748B;
        }

        .preview-waveform-canvas {
          position: relative;
          height: 72px;
          background: rgba(2, 6, 23, 0.9);
          border-radius: 8px;
          border: 1px solid rgba(56, 189, 248, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* CTA Button */
        .calc-main-cta {
          background: #E85A2A;
          color: #FFFFFF;
          width: 100%;
          padding: 14px;
          font-size: 0.92rem;
          font-weight: 800;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: all 0.25s ease;
          box-shadow: 0 6px 20px rgba(232, 90, 42, 0.35);
        }

        .calc-main-cta:hover {
          background: #D0481B;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(232, 90, 42, 0.45);
        }

        .calc-footnote {
          font-size: 0.72rem;
          color: #64748B;
          line-height: 1.5;
          margin-top: 14px;
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
