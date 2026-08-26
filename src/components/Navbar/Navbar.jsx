import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Download, Volume2, CreditCard, Smartphone, QrCode, Coins, TrendingUp, Percent, Car, Activity, Shield } from 'lucide-react';
import { NAVIGATION_DATA } from '../../data/content';
import Modal from '../UI/Modal';
import './Navbar.css';

// Icon map for mega-menus
const iconMap = {
  Volume2, CreditCard, Smartphone, QrCode, Coins, TrendingUp, Percent, Car, Activity, Shield
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState(null);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleMobileCategory = (id) => {
    setExpandedMobileCategory(expandedMobileCategory === id ? null : id);
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" aria-label="PhonePe Homepage">
            <div className="logo-badge">
              <span className="logo-pe">pe</span>
            </div>
            <div className="logo-text-group">
              <span className="logo-brand">PhonePe</span>
              <span className="logo-tagline">INDIA'S PAYMENTS APP</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            <ul className="nav-list">
              {NAVIGATION_DATA.links.map((link) => {
                const hasMega = link.megaMenu && link.megaMenu.length > 0;
                return (
                  <li 
                    key={link.id} 
                    className="nav-item"
                    onMouseEnter={() => hasMega && setActiveDropdown(link.id)}
                    onMouseLeave={() => hasMega && setActiveDropdown(null)}
                  >
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                      {link.label}
                      {hasMega && <ChevronDown size={14} className="dropdown-arrow" />}
                    </NavLink>

                    {/* Mega Menu Dropdown */}
                    {hasMega && activeDropdown === link.id && (
                      <div className="mega-menu animate-fade-in">
                        <div className="mega-menu-grid">
                          {link.megaMenu.map((item, idx) => {
                            const IconComponent = iconMap[item.icon] || CreditCard;
                            return (
                              <Link key={idx} to={link.path} className="mega-item">
                                <div className="mega-icon-wrapper">
                                  <IconComponent size={20} />
                                </div>
                                <div className="mega-text">
                                  <span className="mega-title">{item.title}</span>
                                  <span className="mega-desc">{item.desc}</span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Right CTA */}
          <div className="navbar-actions">
            <button 
              className="btn btn-primary nav-download-btn"
              onClick={() => setDownloadModalOpen(true)}
            >
              <Download size={16} />
              <span>Download App</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Dedicated Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
                <div className="logo-badge">
                  <span className="logo-pe">pe</span>
                </div>
                <span className="logo-brand">PhonePe</span>
              </Link>
              <button 
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mobile-nav" aria-label="Mobile Navigation">
              <ul className="mobile-nav-list">
                {NAVIGATION_DATA.links.map((link) => {
                  const hasMega = link.megaMenu && link.megaMenu.length > 0;
                  const isExpanded = expandedMobileCategory === link.id;

                  return (
                    <li key={link.id} className="mobile-nav-item">
                      {hasMega ? (
                        <div>
                          <button 
                            className="mobile-nav-accordion-trigger"
                            onClick={() => toggleMobileCategory(link.id)}
                            aria-expanded={isExpanded}
                          >
                            <span>{link.label}</span>
                            <ChevronDown size={18} className={`accordion-icon ${isExpanded ? 'rotated' : ''}`} />
                          </button>
                          {isExpanded && (
                            <div className="mobile-accordion-body">
                              {link.megaMenu.map((sub, idx) => {
                                const SubIcon = iconMap[sub.icon] || CreditCard;
                                return (
                                  <Link key={idx} to={link.path} className="mobile-subitem" onClick={() => setMobileMenuOpen(false)}>
                                    <SubIcon size={18} className="mobile-sub-icon" />
                                    <div>
                                      <div className="mobile-sub-title">{sub.title}</div>
                                      <div className="mobile-sub-desc">{sub.desc}</div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ) : (
                        <NavLink 
                          to={link.path}
                          className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </NavLink>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mobile-drawer-footer">
              <button 
                className="btn btn-primary mobile-download-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDownloadModalOpen(true);
                }}
              >
                <Download size={18} />
                <span>Download App Now</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Download QR Code Modal */}
      <Modal 
        isOpen={downloadModalOpen} 
        onClose={() => setDownloadModalOpen(false)} 
        title="Get the Official PhonePe App"
      >
        <div className="download-modal-content">
          <div className="modal-qr-placeholder">
            <QrCode size={140} color="#5f259f" />
            <p className="qr-hint">Scan with your phone camera to download</p>
          </div>
          <div className="store-buttons">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="store-btn">
              <span className="store-tag">GET IT ON</span>
              <span className="store-name">Google Play</span>
            </a>
            <a href="https://apple.com" target="_blank" rel="noopener noreferrer" className="store-btn">
              <span className="store-tag">DOWNLOAD ON THE</span>
              <span className="store-name">App Store</span>
            </a>
          </div>
          <p className="modal-disclaimer">Compatible with Android 7.0+ and iOS 13.0+</p>
        </div>
      </Modal>
    </>
  );
}
