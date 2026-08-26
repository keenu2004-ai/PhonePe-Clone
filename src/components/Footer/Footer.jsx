import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Globe, Share2, MessageCircle, Mail, ShieldAlert } from 'lucide-react';
import { FOOTER_LINKS } from '../../data/content';
import './Footer.css';

export default function Footer() {
  const [openMobileCol, setOpenMobileCol] = useState(null);

  const toggleMobileCol = (colKey) => {
    setOpenMobileCol(openMobileCol === colKey ? null : colKey);
  };

  return (
    <footer className="footer-root">
      <div className="container">
        {/* Main Footer Link Grid */}
        <div className="footer-grid">
          {/* Column 1: Branding & Intro */}
          <div className="footer-col brand-col">
            <Link to="/" className="navbar-logo footer-logo">
              <div className="logo-badge">
                <span className="logo-pe">pe</span>
              </div>
              <span className="logo-brand text-white">PhonePe</span>
            </Link>

            <p className="footer-brand-desc">
              India's leading fintech platform simplifying payments, recharges, investments, insurance, and merchant commerce for over 50 Crore users.
            </p>

            <div className="footer-social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Globe size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Share2 size={18} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><MessageCircle size={18} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Mail size={18} /></a>
            </div>
          </div>

          {/* Desktop & Mobile Accordion Link Columns */}
          <div className="footer-col">
            <div className="col-header-wrapper" onClick={() => toggleMobileCol('general')}>
              <h4 className="col-title">General</h4>
              <ChevronDown size={16} className={`mobile-acc-arrow ${openMobileCol === 'general' ? 'open' : ''}`} />
            </div>
            <ul className={`footer-link-list ${openMobileCol === 'general' ? 'mobile-open' : ''}`}>
              {FOOTER_LINKS.general.map((link, idx) => (
                <li key={idx}><Link to={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <div className="col-header-wrapper" onClick={() => toggleMobileCol('business')}>
              <h4 className="col-title">Business</h4>
              <ChevronDown size={16} className={`mobile-acc-arrow ${openMobileCol === 'business' ? 'open' : ''}`} />
            </div>
            <ul className={`footer-link-list ${openMobileCol === 'business' ? 'mobile-open' : ''}`}>
              {FOOTER_LINKS.business.map((link, idx) => (
                <li key={idx}><Link to={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <div className="col-header-wrapper" onClick={() => toggleMobileCol('services')}>
              <h4 className="col-title">Services</h4>
              <ChevronDown size={16} className={`mobile-acc-arrow ${openMobileCol === 'services' ? 'open' : ''}`} />
            </div>
            <ul className={`footer-link-list ${openMobileCol === 'services' ? 'mobile-open' : ''}`}>
              {FOOTER_LINKS.services.map((link, idx) => (
                <li key={idx}><Link to={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <div className="col-header-wrapper" onClick={() => toggleMobileCol('legal')}>
              <h4 className="col-title">Legal & Security</h4>
              <ChevronDown size={16} className={`mobile-acc-arrow ${openMobileCol === 'legal' ? 'open' : ''}`} />
            </div>
            <ul className={`footer-link-list ${openMobileCol === 'legal' ? 'mobile-open' : ''}`}>
              {FOOTER_LINKS.legal.map((link, idx) => (
                <li key={idx}><Link to={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer Warning */}
        <div className="footer-disclaimer-box">
          <ShieldAlert size={20} className="disc-alert-icon" />
          <p>
            <strong>Educational Recreation Disclaimer:</strong> This website is an independent frontend recreation built for portfolio & educational purposes. It is not affiliated with, endorsed by, or representing PhonePe Internet Private Limited. No financial transactions, payments, or personal credential collection occurs on this site.
          </p>
        </div>

        {/* Copyright & Sub-bar */}
        <div className="footer-bottom-bar">
          <span>© {new Date().getFullYear()} PhonePe Educational Recreation. All Rights Reserved.</span>
          <span>Designed with React, Vite & Vanilla CSS</span>
        </div>
      </div>
    </footer>
  );
}
