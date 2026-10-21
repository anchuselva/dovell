'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  Lock,
  Sparkles,
  Server
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    fleetSize: '16-64',
    workloadType: 'inference',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.workEmail || !formData.fullName) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="contact-grid">
          {/* Left Info Column */}
          <div className="contact-left-info">
            <span className="bracket-tag">TECHNICAL ADVISORY</span>
            <h2 className="section-title">DEPLOY DOVELL ON YOUR CLUSTER</h2>
            <p className="section-subtitle">
              Schedule a 1-on-1 architecture review with our systems engineers. We will analyze your active GPU telemetry, establish baseline idle memory, and execute an air-tight 14-day POC.
            </p>

            <div className="contact-guarantees-list">
              <div className="guarantee-bullet">
                <div className="bullet-icon">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="bullet-title">Rapid 90-Second Deployment</h4>
                  <p className="bullet-desc">No code refactoring or container downtime required.</p>
                </div>
              </div>

              <div className="guarantee-bullet">
                <div className="bullet-icon">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="bullet-title">Mutual Enterprise NDA</h4>
                  <p className="bullet-desc">Strict confidentiality guaranteed before inspecting cluster specs.</p>
                </div>
              </div>

              <div className="guarantee-bullet">
                <div className="bullet-icon">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="bullet-title">Dedicated Systems Architect</h4>
                  <p className="bullet-desc">Direct private Slack channel with our core eBPF engineering team.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="direct-channels-grid">
              <div className="channel-box">
                <Mail size={18} className="text-coral" />
                <div className="channel-info">
                  <span className="ch-label">Enterprise Inquiries</span>
                  <a href="mailto:architects@dovell.ai" className="ch-val">architects@dovell.ai</a>
                </div>
              </div>

              <div className="channel-box">
                <Phone size={18} className="text-cyan" />
                <div className="channel-info">
                  <span className="ch-label">Engineering Hotline</span>
                  <span className="ch-val">+1 (415) 890-GPU1</span>
                </div>
              </div>
            </div>

            <div className="compliance-row">
              <div className="compliance-badge">
                <ShieldCheck size={14} className="text-emerald" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="compliance-badge">
                <Lock size={14} className="text-emerald" />
                <span>Zero Data Retention</span>
              </div>
              <div className="compliance-badge">
                <Server size={14} className="text-emerald" />
                <span>ISO 27001</span>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon-wrapper">
                  <CheckCircle2 size={44} className="text-emerald" />
                </div>
                <h3 className="success-title">Pilot Request Confirmed!</h3>
                <p className="success-message">
                  Thank you, <strong>{formData.fullName}</strong>. A Principal Systems Architect from Dovell has received your request for <strong>{formData.company}</strong> ({formData.fleetSize} GPUs). We will reach out to <strong>{formData.workEmail}</strong> within 2 business hours with your license token and schedule your telemetry review.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-pill reset-btn"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-header">
                  <h3 className="form-card-title">Schedule Cluster POC & Audit</h3>
                  <p className="form-card-subtitle">Receive an automated waste audit report and 14-day production trial key.</p>
                </div>

                <div className="form-fields-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Full Name *</label>
                    <input 
                      id="fullName"
                      type="text" 
                      required
                      placeholder="e.g. Dr. Maya Lin"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="workEmail">Work Email *</label>
                    <input 
                      id="workEmail"
                      type="email" 
                      required
                      placeholder="e.g. maya@company.ai"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company / Organization *</label>
                    <input 
                      id="company"
                      type="text" 
                      required
                      placeholder="e.g. Neural Scale Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="fleetSize">Current GPU Fleet Size</label>
                    <select 
                      id="fleetSize"
                      value={formData.fleetSize}
                      onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                      className="form-input form-select"
                    >
                      <option value="1-16">1 to 16 GPUs (Testing)</option>
                      <option value="16-64">16 to 64 GPUs (Scaling)</option>
                      <option value="64-256">64 to 256 GPUs (Production)</option>
                      <option value="256+">256+ GPUs (Enterprise Supercluster)</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="workloadType">Primary AI Workload Focus</label>
                    <select 
                      id="workloadType"
                      value={formData.workloadType}
                      onChange={(e) => setFormData({ ...formData, workloadType: e.target.value })}
                      className="form-input form-select"
                    >
                      <option value="inference">High-Throughput LLM / Agent Inference (vLLM, TensorRT)</option>
                      <option value="training">Distributed Deep Learning & Multi-Node Training (Slurm/PyTorch)</option>
                      <option value="finetuning">Domain Model Fine-Tuning & LoRA Checkpointing</option>
                      <option value="spot">Multi-Cloud Spot Instance Cost Arbitrage</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="message">Cluster Infrastructure Details (Optional)</label>
                    <textarea 
                      id="message"
                      rows={3}
                      placeholder="Tell us about your hardware accelerators (e.g. H100 SXM5, A100), cloud environment (AWS EKS, CoreWeave), or specific latency targets..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input form-textarea"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn-coral-pill form-submit-btn">
                  <span>REQUEST CLUSTER POC & AUDIT</span>
                  <Send size={16} />
                </button>

                <p className="form-privacy-note">
                  🔒 We protect your data. Strictly zero telemetry egress without permission.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: #F8FAFC;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: flex-start;
        }

        .contact-left-info {
          display: flex;
          flex-direction: column;
        }

        .contact-guarantees-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 32px;
          margin-bottom: 36px;
        }

        .guarantee-bullet {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .bullet-icon {
          color: #10B981;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .bullet-title {
          font-size: 1rem;
          font-weight: 800;
          color: var(--color-navy-primary);
          line-height: 1.2;
        }

        .bullet-desc {
          font-size: 0.88rem;
          color: #64748B;
          margin-top: 3px;
        }

        .direct-channels-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 28px;
        }

        .channel-box {
          background: var(--color-white);
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .text-coral {
          color: var(--color-coral);
        }

        .text-cyan {
          color: var(--color-cyan);
        }

        .text-emerald {
          color: #10B981;
        }

        .channel-info {
          display: flex;
          flex-direction: column;
        }

        .ch-label {
          font-size: 0.72rem;
          color: #64748B;
          font-family: var(--font-mono);
        }

        .ch-val {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--color-navy-primary);
        }

        .compliance-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .compliance-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #334155;
          background: #EEF2F6;
          padding: 6px 12px;
          border-radius: var(--radius-full);
          border: 1px solid #E2E8F0;
        }

        /* Form Card */
        .contact-form-card {
          background: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-xl);
          padding: 38px;
          box-shadow: 0 15px 35px -5px rgba(10, 28, 54, 0.08);
        }

        .form-header {
          margin-bottom: 24px;
        }

        .form-card-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-navy-primary);
          line-height: 1.2;
        }

        .form-card-subtitle {
          font-size: 0.88rem;
          color: #64748B;
          margin-top: 6px;
        }

        .form-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-bottom: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group.full-width {
          grid-column: span 2;
        }

        .form-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-navy-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .form-input {
          padding: 11px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid #CBD5E1;
          font-size: 0.9rem;
          color: var(--color-navy-primary);
          background: #F8FAFC;
          transition: all 0.2s;
          font-family: inherit;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--color-coral);
          background: var(--color-white);
          box-shadow: 0 0 0 3px rgba(232, 90, 42, 0.15);
        }

        .form-select {
          cursor: pointer;
        }

        .form-textarea {
          resize: vertical;
        }

        .form-submit-btn {
          width: 100%;
          padding: 14px;
          font-size: 0.95rem;
        }

        .form-privacy-note {
          font-size: 0.75rem;
          color: #94A3B8;
          text-align: center;
          margin-top: 14px;
        }

        /* Success State */
        .form-success-state {
          padding: 40px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .success-icon-wrapper {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .success-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--color-navy-primary);
          margin-bottom: 12px;
        }

        .success-message {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          max-width: 440px;
          margin-bottom: 24px;
        }

        .reset-btn {
          font-size: 0.88rem;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-fields-grid {
            grid-template-columns: 1fr;
          }
          .form-group.full-width {
            grid-column: span 1;
          }
          .direct-channels-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
