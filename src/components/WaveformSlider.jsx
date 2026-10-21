'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';

// Exact 44-bar vocal speech waveform profile matching the user's reference image
const WAVEFORM_BAR_HEIGHTS = [
  8, 10, 12, 14,             // Low intro
  18, 24, 30, 36, 38, 36, 30, 24, // Spindle 1 (left burst)
  18, 14, 12, 14, 16,        // Valley 1
  20, 26, 32, 38, 44, 42, 36, 28, 20, 16, // Spindle 2 (dominant central crest)
  14, 12, 14, 18,            // Valley 2
  22, 28, 34, 36, 32, 26, 20, // Spindle 3 (right crest)
  16, 12, 10, 8, 6, 6        // Trailing out
];

export default function WaveformSlider({
  label,
  value,
  valueDisplay,
  min,
  mid,
  max,
  step = 1,
  minLabel,
  midLabel,
  maxLabel,
  onChange,
  id
}) {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Convert value to percentage (0 to 1)
  const getPctFromValue = useCallback((val) => {
    if (mid !== undefined) {
      if (val <= mid) {
        return ((val - min) / (mid - min)) * 0.5;
      } else {
        return 0.5 + ((val - mid) / (max - mid)) * 0.5;
      }
    }
    return (val - min) / (max - min);
  }, [min, mid, max]);

  // Convert percentage (0 to 1) to value
  const getValueFromPct = useCallback((pct) => {
    const clampedPct = Math.max(0, Math.min(1, pct));
    let rawVal;
    if (mid !== undefined) {
      if (clampedPct <= 0.5) {
        rawVal = min + (clampedPct / 0.5) * (mid - min);
      } else {
        rawVal = mid + ((clampedPct - 0.5) / 0.5) * (max - mid);
      }
    } else {
      rawVal = min + clampedPct * (max - min);
    }
    const stepped = Math.round(rawVal / step) * step;
    return Math.min(max, Math.max(min, stepped));
  }, [min, mid, max, step]);

  const currentPct = getPctFromValue(value);

  // Handle pointer interaction (click & drag)
  const handlePointerDown = (e) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    trackRef.current.setPointerCapture(e.pointerId);

    const rect = trackRef.current.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const newVal = getValueFromPct(pct);
    onChange(newVal);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const newVal = getValueFromPct(pct);
    onChange(newVal);
  };

  const handlePointerUp = (e) => {
    if (isDragging && trackRef.current) {
      try {
        trackRef.current.releasePointerCapture(e.pointerId);
      } catch (err) {
        // Ignore if already released
      }
      setIsDragging(false);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    let delta = 0;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      delta = step;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      delta = -step;
    } else if (e.key === 'PageUp') {
      delta = step * 5;
    } else if (e.key === 'PageDown') {
      delta = -step * 5;
    } else if (e.key === 'Home') {
      onChange(min);
      e.preventDefault();
      return;
    } else if (e.key === 'End') {
      onChange(max);
      e.preventDefault();
      return;
    }

    if (delta !== 0) {
      e.preventDefault();
      const newVal = Math.min(max, Math.max(min, value + delta));
      onChange(newVal);
    }
  };

  const numBars = WAVEFORM_BAR_HEIGHTS.length;

  return (
    <div className="waveform-slider-group">
      {/* Top Header Row: Label on Left, Value Pill on Right */}
      <div className="slider-header-row">
        <label htmlFor={id} className="slider-field-title">
          {label}
        </label>
        <span className="slider-val-pill" aria-live="polite">
          {valueDisplay}
        </span>
      </div>

      {/* Interactive Waveform Track */}
      <div 
        ref={trackRef}
        id={id}
        role="slider"
        aria-label={label}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={valueDisplay}
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        className={`waveform-track-container ${isDragging ? 'is-dragging' : ''}`}
      >
        {/* Waveform Bars Container */}
        <div className="waveform-bars-track">
          {WAVEFORM_BAR_HEIGHTS.map((heightPx, idx) => {
            const barNormX = idx / (numBars - 1);
            const isActive = barNormX <= currentPct;

            return (
              <span 
                key={idx}
                className={`wf-bar ${isActive ? 'wf-bar-active' : 'wf-bar-inactive'}`}
                style={{
                  height: `${heightPx}px`
                }}
              />
            );
          })}
        </div>

        {/* Circular Orange Slider Thumb Handle */}
        <div 
          className="waveform-thumb-handle"
          style={{
            left: `${currentPct * 100}%`
          }}
        >
          <span className="thumb-bead"></span>
        </div>
      </div>

      {/* Bottom Range Limits (Left, Center, Right) */}
      <div className="slider-limits-row" aria-hidden="true">
        <span className="limit-left">{minLabel}</span>
        <span className="limit-mid">{midLabel}</span>
        <span className="limit-right">{maxLabel}</span>
      </div>

      <style jsx>{`
        .waveform-slider-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 26px;
          user-select: none;
        }

        .waveform-slider-group:last-child {
          margin-bottom: 8px;
        }

        /* Top Header Row */
        .slider-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          gap: 16px;
        }

        .slider-field-title {
          font-family: var(--font-primary);
          font-size: 1.04rem;
          font-weight: 700;
          color: #0A1C36;
          letter-spacing: -0.01em;
          cursor: pointer;
        }

        .slider-val-pill {
          font-family: var(--font-primary);
          font-size: 0.95rem;
          font-weight: 700;
          color: #0A1C36;
          background: #EDF5FD;
          border: 1px solid #DCE8F6;
          padding: 4px 16px;
          border-radius: var(--radius-full);
          white-space: nowrap;
          box-shadow: 0 1px 2px rgba(10, 28, 54, 0.04);
        }

        /* Waveform Track Container */
        .waveform-track-container {
          position: relative;
          width: 100%;
          height: 52px;
          display: flex;
          align-items: center;
          cursor: pointer;
          touch-action: none;
          outline: none;
          border-radius: 6px;
          padding: 0 4px;
        }

        .waveform-track-container:focus-visible {
          box-shadow: 0 0 0 2px #38BDF8;
        }

        .waveform-track-container.is-dragging {
          cursor: grabbing;
        }

        /* Bars Row */
        .waveform-bars-track {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          pointer-events: none;
        }

        .wf-bar {
          display: inline-block;
          width: 3.8px;
          border-radius: 9999px;
          transition: background-color 0.15s ease, transform 0.15s ease;
        }

        /* Left of thumb: Vibrant Orange / Coral */
        .wf-bar-active {
          background-color: #E85A2A;
          box-shadow: 0 0 4px rgba(232, 90, 42, 0.4);
        }

        /* Right of thumb: Electric Cyan / Sky Blue */
        .wf-bar-inactive {
          background-color: #38BDF8;
          opacity: 0.92;
        }

        /* Slider Thumb Handle */
        .waveform-thumb-handle {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 3;
          transition: transform 0.08s ease;
        }

        .thumb-bead {
          width: 14.5px;
          height: 14.5px;
          border-radius: 50%;
          background: #E85A2A;
          box-shadow: 0 0 8px rgba(232, 90, 42, 0.7), 0 2px 4px rgba(0, 0, 0, 0.22);
          border: 2px solid #FFFFFF;
          transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.15s ease;
        }

        .waveform-track-container:hover .thumb-bead,
        .waveform-track-container.is-dragging .thumb-bead {
          transform: scale(1.2);
          box-shadow: 0 0 12px rgba(232, 90, 42, 0.9), 0 3px 6px rgba(0, 0, 0, 0.28);
        }

        /* Bottom Range Limits */
        .slider-limits-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 6px;
          font-family: var(--font-primary);
          font-size: 0.82rem;
          font-weight: 500;
          color: #8A9FB4;
          letter-spacing: -0.01em;
          pointer-events: none;
        }

        .limit-left {
          text-align: left;
        }

        .limit-mid {
          text-align: center;
        }

        .limit-right {
          text-align: right;
        }

        @media (max-width: 640px) {
          .slider-field-title {
            font-size: 0.95rem;
          }
          .slider-val-pill {
            font-size: 0.88rem;
            padding: 3px 12px;
          }
          .wf-bar {
            width: 3px;
          }
          .waveform-thumb-handle {
            width: 18px;
            height: 18px;
          }
          .thumb-bead {
            width: 13px;
            height: 13px;
          }
          .slider-limits-row {
            font-size: 0.76rem;
          }
        }
      `}</style>
    </div>
  );
}
