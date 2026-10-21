'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Send,
  ShieldCheck,
  Headphones,
  FileCheck,
  Settings,
  Sparkles
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    department: '',
    volume: '500-2000',
    interest: 'Audio & Conversation Management',
    workflowNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.workEmail || !formData.fullName || !formData.company) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="contact-grid">
          {/* Left Info Column */}
          <div className="contact-left-info">
            <span className="bracket-tag">LET’S TALK ABOUT YOUR WORKFLOW</span>
            <h2 className="section-title">Bring clarity to your conversation records</h2>
            <p className="section-subtitle">
              Tell us how your team stores recordings, reviews transcripts, and tracks outcomes. We’ll discuss how Dovell can support your process.
            </p>

            <div className="contact-guarantees-list">
              <div className="guarantee-bullet">
                <div className="bullet-icon">
                  <Headphones size={20} />
                </div>
                <div>
                  <h4 className="bullet-title">A focused platform walkthrough</h4>
                  <p className="bullet-desc">Explore conversation management, transcript review, and reporting.</p>
                </div>
              </div>

              <div className="guarantee-bullet">
                <div className="bullet-icon">
                  <FileCheck size={20} />
                </div>
                <div>
                  <h4 className="bullet-title">A discussion of your requirements</h4>
                  <p className="bullet-desc">Identify the roles, review stages, and analysis your team needs.</p>
                </div>
              </div>

              <div className="guarantee-bullet">
                <div className="bullet-icon">
                  <Settings size={20} />
                </div>
                <div>
                  <h4 className="bullet-title">A practical implementation conversation</h4>
                  <p className="bullet-desc">Discuss processing services, storage, and potential integrations.</p>
                </div>
              </div>
            </div>

            {/* Compliance Badge Row */}
            <div className="compliance-row">
              <div className="compliance-badge">
                <ShieldCheck size={14} className="text-emerald" />
                <span>Enterprise Privacy Architecture</span>
              </div>
              <div className="compliance-badge">
                <ShieldCheck size={14} className="text-emerald" />
                <span>Configurable Access Controls</span>
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
                <h3 className="success-title">Request Received</h3>
                <p className="success-message">
                  Thank you for your interest in Dovell. Your demo request has been received. Our team will review your conversation workflow requirements and reach out to <strong>{formData.workEmail}</strong> shortly.
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
                  <h3 className="form-card-title">Request a Dovell Demo</h3>
                  <p className="form-card-subtitle">Share a few details so we can tailor the conversation to your team.</p>
                </div>

                <div className="form-fields-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Full Name *</label>
                    <input 
                      id="fullName"
                      type="text" 
                      required
                      placeholder="e.g. Maya Lin"
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
                      placeholder="e.g. maya@company.com"
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
                      placeholder="e.g. Acme Corporation"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="department">Team / Department</label>
                    <input 
                      id="department"
                      type="text" 
                      placeholder="e.g. Customer Support, QA, Operations"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="volume">Estimated Monthly Conversation Volume</label>
                    <select 
                      id="volume"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="form-input form-select"
                    >
                      <option value="fewer-than-500">Fewer than 500</option>
                      <option value="500-2000">500–2,000</option>
                      <option value="2001-10000">2,001–10,000</option>
                      <option value="more-than-10000">More than 10,000</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="interest">Primary Area of Interest</label>
                    <select 
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="form-input form-select"
                    >
                      <option value="Audio & Conversation Management">Audio & Conversation Management</option>
                      <option value="Transcript Review & Verification">Transcript Review & Verification</option>
                      <option value="Conversation Analytics">Conversation Analytics</option>
                      <option value="Quality Assurance Workflows">Quality Assurance Workflows</option>
                      <option value="Reporting & Outcome Tracking">Reporting & Outcome Tracking</option>
                      <option value="Enterprise Implementation">Enterprise Implementation</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="workflowNotes">Tell Us About Your Workflow — optional</label>
                    <textarea 
                      id="workflowNotes"
                      rows={3}
                      placeholder="Describe how you manage recordings today and what you would like to improve."
                      value={formData.workflowNotes}
                      onChange={(e) => setFormData({ ...formData, workflowNotes: e.target.value })}
                      className="form-input form-textarea"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn-coral-pill form-submit-btn">
                  <span>Request a Demo</span>
                  <Send size={15} />
                </button>

                <p className="form-privacy-note">
                  Please do not include recordings, transcripts, or sensitive customer information in this form.
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
          grid-template-columns: 1.05fr 1fr;
          gap: 56px;
          align-items: flex-start;
        }

        .contact-left-info {
          display: flex;
          flex-direction: column;
        }

        .contact-guarantees-list {
          display: flex;
          flex-direction: column;
          gap: 22px;
          margin-top: 32px;
          margin-bottom: 36px;
        }

        .guarantee-bullet {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .bullet-icon {
          color: var(--color-coral);
          background: rgba(232, 90, 42, 0.1);
          padding: 10px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bullet-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--color-navy-primary);
          line-height: 1.25;
        }

        .bullet-desc {
          font-size: 0.88rem;
          color: #64748B;
          margin-top: 4px;
          line-height: 1.45;
        }

        .text-emerald {
          color: #10B981;
        }

        .compliance-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 6px;
        }

        .compliance-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #334155;
          background: #EEF2F6;
          padding: 7px 14px;
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
          font-size: 1.45rem;
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
          padding: 13px;
          font-size: 0.95rem;
        }

        .form-privacy-note {
          font-size: 0.74rem;
          color: #94A3B8;
          text-align: center;
          margin-top: 14px;
          line-height: 1.4;
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
        }
      `}</style>
    </section>
  );
}
