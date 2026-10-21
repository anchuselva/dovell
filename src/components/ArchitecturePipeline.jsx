'use client';

import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  Layers, 
  Cpu, 
  ArrowRight, 
  Workflow, 
  ShieldCheck, 
  Zap,
  Server
} from 'lucide-react';

const PIPELINE_STEPS = [
  {
    step: '01',
    title: 'eBPF Intercept & Driver Hook',
    tag: 'KERNEL LEVEL',
    desc: 'Lightweight kernel probe monitors CUDA calls (cudaMalloc, cudaLaunchKernel) with zero latency impact and zero code changes.',
    badge: '< 0.08ms overhead'
  },
  {
    step: '02',
    title: 'Tensor Profiling & Dynamic Slicing',
    tag: 'VIRTUALIZATION',
    desc: 'Neural profiler predicts exact VRAM needs per forward pass, bin-packing concurrent requests into fractional GPU slices.',
    badge: '1.25GB Granularity'
  },
  {
    step: '03',
    title: 'Tiered KV-Cache Persistence',
    tag: 'MEMORY HIERARCHY',
    desc: 'Caches common prefix attention tokens across high-speed NVMe and host DDR5 memory, eliminating redundant prefill computation.',
    badge: '99.4% Cache Hit'
  },
  {
    step: '04',
    title: 'Spot Arbitrage & Node Failover',
    tag: 'FINOPS ORCHESTRATION',
    desc: 'Detects cloud spot termination signals 120 seconds in advance, live-migrating tensor checkpoints to standby instances with zero downtime.',
    badge: '100% Zero-Loss'
  }
];

const CODE_EXAMPLES = {
  helm: `# 1. Add Dovell Helm repository
helm repo add dovell https://charts.dovell.ai
helm repo update

# 2. Deploy daemonset to your GPU Kubernetes cluster
helm install dovell-daemon dovell/gpu-autopilot \\
  --namespace dovell-system \\
  --create-namespace \\
  --set cluster.name="prod-gpu-us-east" \\
  --set licenseKey="dovell_live_98374a98f" \\
  --set optimization.kvCacheTiering=true \\
  --set optimization.slicingGranularity="auto"`,

  slurm: `#!/bin/bash
#SBATCH --job-name=llm-train-dovell
#SBATCH --nodes=4
#SBATCH --gres=gpu:8
#SBATCH --partition=h100-spot

# Launch Dovell user-space daemon wrapper
module load cuda/12.4 dovell-daemon

# Run multi-node PyTorch training with zero code changes
dovell-run torchrun \\
  --nproc_per_node=8 \\
  --nnodes=4 \\
  train_deepseek_v3.py --config config.yaml`,

  docker: `# Dockerfile / Compose integration
FROM vllm/vllm-openai:latest

# Inject Dovell autonomous runtime shim
RUN curl -sSL https://get.dovell.ai | bash

ENV DOVELL_ENABLE_SLICING=1
ENV DOVELL_KV_TIERING=nvme,ddr5

ENTRYPOINT ["dovell-exec", "python3", "-m", "vllm.entrypoints.openai.api_server"]`
};

export default function ArchitecturePipeline() {
  const [activeTab, setActiveTab] = useState('helm');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(CODE_EXAMPLES[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="architecture" className="architecture-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="bracket-tag">UNDER THE HOOD</span>
          <h2 className="section-title">HOW DOVELL OPTIMIZES AT THE HARDWARE LAYER</h2>
          <p className="section-subtitle center-subtitle">
            Operating beneath frameworks like PyTorch, vLLM, and Triton, Dovell optimizes GPU hardware allocations transparently with micro-second precision.
          </p>
        </div>

        {/* 4 Step Pipeline Grid */}
        <div className="pipeline-steps-grid">
          {PIPELINE_STEPS.map((item, idx) => (
            <div key={idx} className="step-card">
              <div className="step-top-row">
                <span className="step-number">{item.step}</span>
                <span className="step-tag-pill">{item.tag}</span>
              </div>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-desc">{item.desc}</p>
              <div className="step-badge-row">
                <span className="step-highlight-badge">{item.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Deployment Code Showcase */}
        <div className="code-showcase-box">
          <div className="code-header">
            <div className="code-tabs">
              <button 
                onClick={() => setActiveTab('helm')}
                className={`code-tab-btn ${activeTab === 'helm' ? 'active' : ''}`}
              >
                Kubernetes Helm
              </button>
              <button 
                onClick={() => setActiveTab('slurm')}
                className={`code-tab-btn ${activeTab === 'slurm' ? 'active' : ''}`}
              >
                Slurm Cluster Script
              </button>
              <button 
                onClick={() => setActiveTab('docker')}
                className={`code-tab-btn ${activeTab === 'docker' ? 'active' : ''}`}
              >
                Docker / vLLM Shim
              </button>
            </div>

            <button onClick={copyCode} className="copy-btn" aria-label="Copy installation command">
              {copied ? (
                <>
                  <Check size={14} className="text-green" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Config</span>
                </>
              )}
            </button>
          </div>

          <div className="code-terminal-body">
            <pre className="code-pre">
              <code>{CODE_EXAMPLES[activeTab]}</code>
            </pre>
          </div>

          <div className="code-footer-bar">
            <div className="terminal-status-left">
              <span className="pulse-dot"></span>
              <span>Compatible with Linux x86_64, aarch64, CUDA 11.8 - 12.6+</span>
            </div>
            <a href="#contact" className="terminal-cta-link">
              <span>Read Deployment Guide</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .architecture-section {
          background-color: #F8FAFC;
        }

        .text-center {
          text-align: center;
        }

        .center-subtitle {
          margin-left: auto;
          margin-right: auto;
        }

        /* 4 Step Pipeline */
        .pipeline-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 50px;
        }

        .step-card {
          background: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-coral);
          box-shadow: 0 12px 28px rgba(10, 28, 54, 0.08);
        }

        .step-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .step-number {
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--color-coral);
          font-family: var(--font-mono);
          line-height: 1;
        }

        .step-tag-pill {
          font-size: 0.65rem;
          font-weight: 700;
          background: #EEF2F6;
          color: #475569;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
        }

        .step-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--color-navy-primary);
          line-height: 1.3;
          margin-bottom: 10px;
        }

        .step-desc {
          font-size: 0.85rem;
          color: #64748B;
          line-height: 1.5;
          margin-bottom: 16px;
          flex: 1;
        }

        .step-badge-row {
          padding-top: 10px;
          border-top: 1px solid #F1F5F9;
        }

        .step-highlight-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          color: #0369A1;
          background: #E0F2FE;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
        }

        /* Code Showcase Box */
        .code-showcase-box {
          background: #0A1C36;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.12);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(10, 28, 54, 0.2);
        }

        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #061121;
          padding: 12px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .code-tabs {
          display: flex;
          gap: 8px;
        }

        .code-tab-btn {
          font-size: 0.82rem;
          font-weight: 600;
          color: #94A3B8;
          padding: 6px 14px;
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }

        .code-tab-btn:hover {
          color: var(--color-white);
        }

        .code-tab-btn.active {
          background: var(--color-navy-card);
          color: var(--color-cyan);
          border: 1px solid rgba(0, 194, 255, 0.3);
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: #CBD5E1;
          background: rgba(255, 255, 255, 0.08);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          background: rgba(255, 255, 255, 0.16);
          color: var(--color-white);
        }

        .text-green {
          color: #10B981;
        }

        .code-terminal-body {
          padding: 24px;
          overflow-x: auto;
        }

        .code-pre {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          line-height: 1.6;
          color: #E2E8F0;
          margin: 0;
        }

        .code-footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #061121;
          padding: 12px 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.78rem;
        }

        .terminal-status-left {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #94A3B8;
          font-family: var(--font-mono);
        }

        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 6px #10B981;
        }

        .terminal-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--color-coral);
          font-weight: 600;
          transition: color 0.2s;
        }

        .terminal-cta-link:hover {
          color: #FF7043;
        }

        @media (max-width: 992px) {
          .pipeline-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .pipeline-steps-grid {
            grid-template-columns: 1fr;
          }
          .code-header {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }
          .code-footer-bar {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
