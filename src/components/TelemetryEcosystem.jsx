'use client';

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Cpu, 
  Cloud, 
  Server, 
  Activity, 
  Zap,
  Play,
  Pause
} from 'lucide-react';

const ECOSYSTEM_CATEGORIES = [
  {
    id: 'frameworks',
    name: 'AI Frameworks & Runtimes',
    items: [
      { name: 'vLLM', status: 'Deep eBPF Hook', speedup: '3.8x Throughput' },
      { name: 'PyTorch 2.4+', status: 'Native C++ Ext', speedup: 'Zero-Copy Slicing' },
      { name: 'TensorRT-LLM', status: 'Plugin Supported', speedup: '2.4x TTFT' },
      { name: 'Triton Server', status: 'Backend Module', speedup: 'Dynamic Batches' },
      { name: 'HuggingFace TGI', status: 'Verified Driver', speedup: '64% VRAM Cut' },
      { name: 'DeepSpeed', status: 'ZeRO-3 Compatible', speedup: 'Offload Accelerator' },
    ]
  },
  {
    id: 'hardware',
    name: 'Hardware Targets',
    items: [
      { name: 'NVIDIA H100 / H200 SXM5', status: 'HBM3 / NVLink 4', speedup: '900 GB/s Interconnect' },
      { name: 'NVIDIA Blackwell B200', status: 'Day-0 Support', speedup: 'FP4 Dynamic Slicing' },
      { name: 'NVIDIA A100 80GB PCIe', status: 'HBM2e / MIG 2.0', speedup: 'Fractional Micro-vGPU' },
      { name: 'NVIDIA L40S 48GB', status: 'Ada Lovelace', speedup: 'Fine-Tuning Optim' },
      { name: 'AMD Instinct MI300X', status: 'ROCm 6.2 Native', speedup: '192GB VRAM Tier' },
      { name: 'Google Cloud TPU v5e', status: 'XLA Compatible', speedup: 'Pod-Level Slicing' },
    ]
  },
  {
    id: 'clouds',
    name: 'Multi-Cloud Fabrics',
    items: [
      { name: 'Amazon Web Services (AWS)', status: 'EKS & EC2 Spot', speedup: '74% Discount Arbitrage' },
      { name: 'Google Cloud Platform (GCP)', status: 'GKE Autopilot', speedup: 'Dynamic A3 Nodes' },
      { name: 'Microsoft Azure', status: 'AKS & NDv5 InfiniBand', speedup: 'Sovereign Cluster' },
      { name: 'CoreWeave & Lambda', status: 'Bare-Metal Kubernetes', speedup: 'Sub-Second Cold Starts' },
      { name: 'RunPod & Crusoe', status: 'Decentralized Compute', speedup: 'Green AI Workloads' },
      { name: 'On-Premises Slurm', status: 'Bare-Metal HPC', speedup: 'Air-Gapped Telemetry' },
    ]
  }
];

const INITIAL_LOGS = [
  { time: '10:24:12', type: 'SLICE', text: 'Partitioned H100-Node-14 into 4x micro-vGPUs (12GB each) for Llama-3-8B concurrent infer.' },
  { time: '10:24:14', type: 'CACHE', text: 'Prompt fingerprint [0x8f2a] hit L2 distributed memory. Skipped 4,096 prefill tokens.' },
  { time: '10:24:16', type: 'SPOT', text: 'AWS Spot preemption alert on [us-east-1c-p5]. Live checkpoint streamed to node-09 in 380ms.' },
  { time: '10:24:19', type: 'MEMORY', text: 'Compacted fragmented VRAM on Triton pod #8. Reclaimed 14.8GB idle memory.' },
  { time: '10:24:22', type: 'GREEN', text: 'Shifted batch fine-tuning job to hydro-powered cluster (Oslo region). Carbon saved: 42kg.' }
];

export default function TelemetryEcosystem() {
  const [activeTab, setActiveTab] = useState('frameworks');
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [isLive, setIsLive] = useState(true);

  // Simulate streaming logs
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      const logGenerators = [
        { type: 'SLICE', text: `Repacked 8x A100 batch queues. Latency jitter reduced to < 1.4ms.` },
        { type: 'CACHE', text: `KV-Cache hit rate steady at 99.4% across 1,024 streaming user sessions.` },
        { type: 'OPTIM', text: `Detected 18GB idle VRAM on vLLM worker #3. Allocated to concurrent embeddings.` },
        { type: 'SPOT', text: `CoreWeave spot instance acquired at 68% discount. Ingesting inference batch.` }
      ];
      const randomItem = logGenerators[Math.floor(Math.random() * logGenerators.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      setLogs((prev) => [
        { time: timeStr, type: randomItem.type, text: randomItem.text },
        ...prev.slice(0, 5)
      ]);
    }, 3800);

    return () => clearInterval(interval);
  }, [isLive]);

  const currentCategory = ECOSYSTEM_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section className="ecosystem-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="bracket-tag">COMPATIBILITY MATRIX</span>
          <h2 className="section-title">INTEGRATES WITH YOUR EXISTING AI STACK</h2>
          <p className="section-subtitle center-subtitle">
            No proprietary lock-in. Dovell works natively with whatever frameworks, cloud providers, and hardware accelerators your engineering team chooses.
          </p>
        </div>

        <div className="ecosystem-layout-grid">
          {/* Left: Tabbed Ecosystem Grid */}
          <div className="matrix-pane">
            <div className="matrix-tabs">
              {ECOSYSTEM_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`matrix-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="matrix-cards-grid">
              {currentCategory?.items.map((item, idx) => (
                <div key={idx} className="matrix-card">
                  <div className="matrix-card-header">
                    <span className="matrix-item-name">{item.name}</span>
                    <CheckCircle2 size={16} className="text-emerald" />
                  </div>
                  <div className="matrix-card-status">{item.status}</div>
                  <div className="matrix-card-perf">
                    <Zap size={12} className="coral-icon" />
                    <span>{item.speedup}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live Telemetry Event Stream Console */}
          <div className="telemetry-stream-pane">
            <div className="stream-header">
              <div className="stream-title-group">
                <Terminal size={16} className="text-cyan" />
                <span className="stream-title">AUTONOMOUS OPTIMIZATION FEED</span>
              </div>
              <button 
                onClick={() => setIsLive(!isLive)}
                className="live-toggle-btn"
                title={isLive ? 'Pause Stream' : 'Resume Stream'}
              >
                {isLive ? <Pause size={12} /> : <Play size={12} />}
                <span>{isLive ? 'LIVE' : 'PAUSED'}</span>
              </button>
            </div>

            <div className="stream-logs-box">
              {logs.map((log, idx) => (
                <div key={idx} className="log-entry">
                  <span className="log-time">{log.time}</span>
                  <span className={`log-badge badge-${log.type.toLowerCase()}`}>{log.type}</span>
                  <span className="log-text">{log.text}</span>
                </div>
              ))}
            </div>

            <div className="stream-footer">
              <div className="stat-pill">
                <span className="lbl">Throughput:</span>
                <span className="val">28.4k tok/s</span>
              </div>
              <div className="stat-pill">
                <span className="lbl">Global VRAM Saved:</span>
                <span className="val text-green">14.8 TB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ecosystem-section {
          background-color: var(--color-white);
        }

        .text-center {
          text-align: center;
        }

        .center-subtitle {
          margin-left: auto;
          margin-right: auto;
        }

        .ecosystem-layout-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 32px;
          align-items: stretch;
        }

        /* Matrix Pane */
        .matrix-pane {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-xl);
          padding: 28px;
          display: flex;
          flex-direction: column;
        }

        .matrix-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          border-bottom: 1px solid #E2E8F0;
          padding-bottom: 12px;
          flex-wrap: wrap;
        }

        .matrix-tab-btn {
          font-size: 0.85rem;
          font-weight: 700;
          color: #64748B;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .matrix-tab-btn:hover {
          color: var(--color-navy-primary);
          background: #EEF2F6;
        }

        .matrix-tab-btn.active {
          background: var(--color-navy-primary);
          color: var(--color-white);
        }

        .matrix-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .matrix-card {
          background: var(--color-white);
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 16px;
          transition: all 0.2s ease;
        }

        .matrix-card:hover {
          border-color: #3B82F6;
          box-shadow: 0 6px 16px rgba(10, 28, 54, 0.05);
        }

        .matrix-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .matrix-item-name {
          font-size: 0.92rem;
          font-weight: 800;
          color: var(--color-navy-primary);
        }

        .text-emerald {
          color: #10B981;
        }

        .matrix-card-status {
          font-size: 0.75rem;
          color: #64748B;
          margin-bottom: 8px;
          font-family: var(--font-mono);
        }

        .matrix-card-perf {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-coral);
          font-family: var(--font-mono);
        }

        .coral-icon {
          color: var(--color-coral);
        }

        /* Telemetry Stream Pane */
        .telemetry-stream-pane {
          background: #0A1C36;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(255, 255, 255, 0.12);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 15px 35px rgba(10, 28, 54, 0.2);
        }

        .stream-header {
          background: #061121;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stream-title-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .text-cyan {
          color: var(--color-cyan);
        }

        .stream-title {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 700;
          color: #E2E8F0;
          letter-spacing: 0.08em;
        }

        .live-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
          border: 1px solid #10B981;
          border-radius: var(--radius-full);
          padding: 3px 10px;
          font-size: 0.68rem;
          font-weight: 700;
          font-family: var(--font-mono);
          transition: all 0.2s;
        }

        .stream-logs-box {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          overflow-y: auto;
          min-height: 280px;
        }

        .log-entry {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          line-height: 1.45;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .log-time {
          color: #64748B;
          flex-shrink: 0;
        }

        .log-badge {
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 0.62rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .badge-slice {
          background: rgba(0, 194, 255, 0.2);
          color: #00C2FF;
        }

        .badge-cache {
          background: rgba(16, 185, 129, 0.2);
          color: #10B981;
        }

        .badge-spot {
          background: rgba(232, 90, 42, 0.2);
          color: #E85A2A;
        }

        .badge-memory {
          background: rgba(168, 85, 247, 0.2);
          color: #C084FC;
        }

        .badge-green {
          background: rgba(34, 197, 94, 0.2);
          color: #4ADE80;
        }

        .badge-optim {
          background: rgba(234, 179, 8, 0.2);
          color: #FACC15;
        }

        .log-text {
          color: #CBD5E1;
        }

        .stream-footer {
          background: #061121;
          padding: 12px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.74rem;
        }

        .stat-pill {
          display: flex;
          gap: 6px;
        }

        .stat-pill .lbl {
          color: #64748B;
        }

        .stat-pill .val {
          color: var(--color-white);
          font-weight: 700;
        }

        .text-green {
          color: #10B981;
        }

        @media (max-width: 992px) {
          .ecosystem-layout-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .matrix-cards-grid {
            grid-template-columns: 1fr;
          }
          .stream-footer {
            flex-direction: column;
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
}
