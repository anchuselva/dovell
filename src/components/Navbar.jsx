'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Dovell Platform', href: '#' },
    { id: 'engines', label: 'Knowledge Graph', href: '#engines' },
    { id: 'autopilot', label: 'GPU Mesh', href: '#showcase' },
    { id: 'roi', label: 'Simulateur ROI', href: '#calculator' },
    { id: 'infos', label: 'Tarifs & Offres', href: '#pricing' },
  ];

  return (
    <header className="ref-header-wrapper">
      <nav className={`ref-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="ref-nav-container">
          {/* Left: Signature Bracketed Circle Logo */}
          <a href="#" className="ref-brand-logo" aria-label="Dovell Home">
            <div className="ref-logo-icon-box">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 34 34" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="ref-logo-svg"
              >
                {/* Top-left corner bracket */}
                <path d="M 9 3 L 3 3 L 3 9" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="square" />
                {/* Bottom-left corner bracket */}
                <path d="M 3 25 L 3 31 L 9 31" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="square" />
                {/* Top-right corner bracket */}
                <path d="M 25 3 L 31 3 L 31 9" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="square" />
                {/* Bottom-right corner bracket */}
                <path d="M 31 25 L 31 31 L 25 31" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="square" />
                {/* Inner white circle */}
                <circle cx="17" cy="17" r="7.5" stroke="#FFFFFF" strokeWidth="2" />
                {/* Center glowing dot */}
                <circle cx="17" cy="17" r="2.8" fill="#38BDF8" />
              </svg>
            </div>

            <div className="ref-logo-text-group">
              <span className="ref-logo-title">DOVELL</span>
              <span className="ref-logo-subtitle">Enterprise Knowledge &amp; GPU Platform</span>
            </div>
          </a>

          {/* Right: Exactly 5 Clean Navigation Links (matching reference screenshot) */}
          <div className="ref-desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveNav(link.id)}
                className={`ref-nav-item ${activeNav === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="ref-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="ref-mobile-dropdown">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`ref-mobile-item ${activeNav === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <style jsx>{`
        .ref-header-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }

        .ref-navbar {
          background-color: #0A2240;
          height: 72px;
          display: flex;
          align-items: center;
          transition: background-color 0.25s ease, box-shadow 0.25s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ref-navbar.scrolled {
          background-color: rgba(10, 34, 64, 0.96);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }

        .ref-nav-container {
          width: 100%;
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Brand Logo */
        .ref-brand-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
        }

        .ref-logo-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ref-logo-text-group {
          display: flex;
          flex-direction: column;
        }

        .ref-logo-title {
          font-size: 1.32rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          line-height: 1.1;
        }

        .ref-logo-subtitle {
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: #7EC8E3;
          margin-top: 2px;
        }

        /* Desktop Navigation Links */
        .ref-desktop-links {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .ref-nav-item {
          color: #E2E8F0;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          position: relative;
          padding: 8px 0;
          transition: color 0.2s ease;
        }

        .ref-nav-item:hover {
          color: #FFFFFF;
        }

        /* Active underline indicator matching reference style */
        .ref-nav-item.active {
          color: #FFFFFF;
          font-weight: 600;
        }

        .ref-nav-item.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #38BDF8;
          border-radius: 2px;
        }

        /* Mobile Controls */
        .ref-mobile-toggle {
          display: none;
          color: #FFFFFF;
          cursor: pointer;
          background: none;
          border: none;
        }

        .ref-mobile-dropdown {
          display: none;
        }

        @media (max-width: 900px) {
          .ref-desktop-links {
            display: none;
          }

          .ref-mobile-toggle {
            display: block;
          }

          .ref-mobile-dropdown {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 72px;
            left: 0;
            right: 0;
            background: #0A2240;
            padding: 20px 32px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
            gap: 16px;
          }

          .ref-mobile-item {
            color: #E2E8F0;
            font-size: 1.05rem;
            font-weight: 500;
            text-decoration: none;
            padding: 6px 0;
          }

          .ref-mobile-item.active {
            color: #38BDF8;
            font-weight: 700;
          }
        }
      `}</style>
    </header>
  );
}
