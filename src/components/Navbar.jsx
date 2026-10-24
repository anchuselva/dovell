'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('platform');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'platform', label: 'Platform', href: '#platform' },
    { id: 'features', label: 'Features', href: '#capabilities' },
    { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
    { id: 'solutions', label: 'Solutions', href: '#solutions' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="ref-header-wrapper">
      <nav className={`ref-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="ref-nav-container">
          {/* Left: Official Dovell Brand Logo */}
          <a href="#" className="ref-brand-logo" aria-label="Dovell Home">
            <img 
              src="/graphics/logo.svg" 
              alt="DOVELL" 
              className="ref-logo-brand-img"
              height={52}
            />
          </a>

          {/* Center: Navigation Links */}
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

          {/* Right: Actions (Secondary Link: Sign In, Primary Button: Request a Demo) */}
          <div className="ref-actions-group">
            <a href="#contact" className="ref-signin-link">
              Sign In
            </a>
            <a href="#contact" className="ref-cta-btn">
              <span>Request a Demo</span>
              <ArrowRight size={14} />
            </a>
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
            <div className="ref-mobile-actions">
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="ref-mobile-signin"
              >
                Sign In
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="ref-cta-btn mobile-cta"
              >
                Request a Demo
              </a>
            </div>
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
          height: 78px;
          display: flex;
          align-items: center;
          transition: background-color 0.25s ease, box-shadow 0.25s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ref-navbar.scrolled {
          background-color: rgba(10, 34, 64, 0.98);
          backdrop-filter: blur(14px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.28);
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
          text-decoration: none;
        }

        .ref-logo-brand-img {
          height: 52px;
          width: auto;
          max-width: 200px;
          object-fit: contain;
          display: block;
          transition: transform 0.2s ease;
        }

        .ref-brand-logo:hover .ref-logo-brand-img {
          transform: scale(1.03);
        }

        /* Desktop Navigation Links */
        .ref-desktop-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .ref-nav-item {
          font-family: var(--font-primary);
          color: #E2E8F0;
          font-size: 0.92rem;
          font-weight: 500;
          text-decoration: none;
          position: relative;
          padding: 8px 0;
          transition: color 0.2s ease;
        }

        .ref-nav-item:hover {
          color: #FFFFFF;
        }

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
          height: 2.5px;
          background: #38BDF8;
          border-radius: 2px;
        }

        /* Right Actions */
        .ref-actions-group {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .ref-signin-link {
          font-family: var(--font-primary);
          color: #E2E8F0;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .ref-signin-link:hover {
          color: #38BDF8;
        }

        .ref-cta-btn {
          font-family: var(--font-primary);
          background: #E85A2A;
          color: #FFFFFF;
          font-size: 0.88rem;
          font-weight: 700;
          padding: 9px 20px;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(232, 90, 42, 0.35);
        }

        .ref-cta-btn:hover {
          background: #D0481B;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(232, 90, 42, 0.45);
        }

        /* Mobile Toggle */
        .ref-mobile-toggle {
          display: none;
          color: #FFFFFF;
        }

        .ref-mobile-dropdown {
          display: none;
        }

        @media (max-width: 1024px) {
          .ref-desktop-links,
          .ref-actions-group {
            display: none;
          }

          .ref-mobile-toggle {
            display: block;
          }

          .ref-mobile-dropdown {
            display: flex;
            flex-direction: column;
            background: #0A2240;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding: 20px 32px 30px;
            gap: 16px;
          }

          .ref-mobile-item {
            color: #E2E8F0;
            font-size: 1rem;
            font-weight: 500;
            padding: 8px 0;
            text-decoration: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .ref-mobile-item.active {
            color: #38BDF8;
            font-weight: 700;
          }

          .ref-mobile-actions {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 10px;
          }

          .ref-mobile-signin {
            color: #E2E8F0;
            font-weight: 600;
            text-align: center;
            padding: 10px;
          }

          .mobile-cta {
            justify-content: center;
            width: 100%;
            padding: 12px;
          }
        }
      `}</style>
    </header>
  );
}
