import React, { useState } from 'react';
import { Volume2, CreditCard, Smartphone, Check, ArrowRight, Play, VolumeX, ShieldCheck } from 'lucide-react';
import { BUSINESS_PRODUCTS } from '../../data/content';
import Modal from '../UI/Modal';
import './Business.css';

export default function BusinessSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundboxModal, setSoundboxModal] = useState(false);

  const product = BUSINESS_PRODUCTS[activeTab];

  const triggerSoundAlert = () => {
    setIsPlaying(true);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = "PhonePe par pachaas rupaye praapt hue";
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'hi-IN';
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlaying(false), 2000);
    }
  };

  return (
    <section id="business-section" className="section business-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">FOR MERCHANTS & ENTERPRISES</span>
          <h2 className="section-title">Empowering 3.5 Crore+ Indian Businesses</h2>
          <p className="section-subtitle">
            From kirana store Soundboxes to enterprise payment gateways—accept all payment modes effortlessly.
          </p>
        </div>

        {/* Business Products Tab Controller */}
        <div className="business-tabs-nav">
          {BUSINESS_PRODUCTS.map((item, idx) => (
            <button
              key={item.id}
              className={`business-tab-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Product Card Detail */}
        <div className="business-product-card animate-fade-in">
          <div className="business-card-left">
            <span className="product-badge">{product.badge}</span>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-tagline">{product.tagline}</p>

            <ul className="product-features-list">
              {product.features.map((feat, i) => (
                <li key={i}>
                  <Check size={18} className="check-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="product-actions">
              {product.id === 'soundbox' && (
                <button 
                  className="btn btn-primary"
                  onClick={triggerSoundAlert}
                  disabled={isPlaying}
                >
                  {isPlaying ? <VolumeX size={18} /> : <Play size={18} />}
                  <span>{isPlaying ? 'Playing Sound Alert...' : 'Test Soundbox Voice Demo'}</span>
                </button>
              )}
              <button 
                className="btn btn-outline"
                onClick={() => setSoundboxModal(true)}
              >
                <span>Get Merchant Solution</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="business-card-right">
            {product.id === 'soundbox' && (
              <div className="soundbox-graphic-box">
                <div className={`soundbox-speaker ${isPlaying ? 'pulsing' : ''}`}>
                  <Volume2 size={64} color="#ffffff" />
                  <span className="speaker-label">PhonePe Soundbox</span>
                </div>
                <div className="soundbox-alert-bubble">
                  <span className="bubble-text">"₹50 Received on PhonePe"</span>
                </div>
              </div>
            )}

            {product.id === 'gateway' && (
              <div className="gateway-graphic-box">
                <div className="gateway-preview-card">
                  <div className="gw-header">
                    <span>PhonePe Checkout</span>
                    <ShieldCheck size={16} color="#00c853" />
                  </div>
                  <div className="gw-amount">₹2,499.00</div>
                  <div className="gw-modes">
                    <span className="gw-mode-tag">UPI Express</span>
                    <span className="gw-mode-tag">Credit/Debit</span>
                    <span className="gw-mode-tag">Net Banking</span>
                  </div>
                </div>
              </div>
            )}

            {product.id === 'pos' && (
              <div className="pos-graphic-box">
                <div className="pos-preview-card">
                  <Smartphone size={56} color="#5f259f" />
                  <h4>Smart POS Printer</h4>
                  <div className="pos-chip">Tap & Pay Accepted</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Merchant Solution Request Modal */}
      <Modal
        isOpen={soundboxModal}
        onClose={() => setSoundboxModal(false)}
        title="Get PhonePe Solution for Your Business"
      >
        <div className="merchant-modal-body">
          <p className="merchant-modal-intro">
            Join over 35 Million merchants trusting PhonePe. Fill in your store details for an instant callback.
          </p>

          <form className="merchant-form" onSubmit={(e) => { e.preventDefault(); setSoundboxModal(false); }}>
            <label className="sim-label">Merchant / Business Name</label>
            <input type="text" className="sim-input" placeholder="e.g. Swastik Retail Store" defaultValue="Swastik General Store" />

            <label className="sim-label">Pincode / Location</label>
            <input type="text" className="sim-input" placeholder="e.g. 560001" defaultValue="560001 (Bengaluru)" />

            <label className="sim-label">Mobile Number</label>
            <input type="text" className="sim-input" placeholder="10-digit mobile number" defaultValue="9876543210" />

            <button type="submit" className="btn btn-primary sim-submit-btn">
              Submit Callback Request
            </button>
          </form>
        </div>
      </Modal>
    </section>
  );
}
