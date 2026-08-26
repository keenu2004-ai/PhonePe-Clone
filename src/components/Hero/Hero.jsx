import React, { useState } from 'react';
import { Download, ShieldCheck, Zap, ArrowRight, QrCode, Smartphone, Coins, Volume2, CheckCircle2, Play, VolumeX } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenDownload }) {
  const [activeScreen, setActiveScreen] = useState('upi');
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Safe browser audio synthesizer simulation for PhonePe Soundbox voice alert demo
  const playSoundboxAlert = () => {
    setAudioPlaying(true);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance("PhonePe par ek hazar do sau pachas rupaye praapt hue");
      utterance.lang = 'hi-IN';
      utterance.rate = 0.95;
      utterance.onend = () => setAudioPlaying(false);
      utterance.onerror = () => setAudioPlaying(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setAudioPlaying(false), 2000);
    }
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Hero Content & CTAs */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <ShieldCheck size={16} />
            <span>50 CRORE+ REGISTERED USERS ACROSS INDIA</span>
          </div>

          <h1 className="hero-title animate-fade-in">
            India's Payments App <br />
            <span className="hero-title-highlight">Makes Progress Happen</span>
          </h1>

          <p className="hero-subtitle animate-fade-in">
            Fast, safe, and secure money transfers, mobile recharges, bill payments, 24K digital gold, insurance & merchant solutions—accepted everywhere.
          </p>

          <div className="hero-cta-group animate-fade-in">
            <button className="btn btn-primary hero-btn" onClick={onOpenDownload}>
              <Download size={18} />
              <span>Download App</span>
            </button>
            <a href="#business-section" className="btn btn-secondary hero-btn">
              <span>Explore Solutions</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-trust-metrics animate-fade-in">
            <div className="trust-metric-item">
              <span className="metric-num">500M+</span>
              <span className="metric-lbl">Users</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-metric-item">
              <span className="metric-num">35M+</span>
              <span className="metric-lbl">Merchants</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-metric-item">
              <span className="metric-num">45%+</span>
              <span className="metric-lbl">UPI Market Share</span>
            </div>
          </div>
        </div>

        {/* Right Column: Phone Mockup Frame & Screen Switcher */}
        <div className="hero-visual">
          {/* Floating Feature Badges */}
          <div className="floating-badge badge-top-left animate-float">
            <Zap size={16} color="#00c853" />
            <span>Instant 24x7 UPI</span>
          </div>

          <div className="floating-badge badge-bottom-right animate-float-reverse">
            <ShieldCheck size={16} color="#00b0ff" />
            <span>256-bit Encryption</span>
          </div>

          {/* Phone Frame */}
          <div className="phone-mockup-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              {/* Phone Status Bar */}
              <div className="phone-top-bar">
                <span>9:41</span>
                <span className="phone-brand-title">PhonePe</span>
                <span>5G 100%</span>
              </div>

              {/* Dynamic Screen Content */}
              {activeScreen === 'upi' && (
                <div className="screen-content animate-fade-in">
                  <div className="screen-header-card">
                    <span className="screen-card-subtitle">SCAN & PAY ANYWHERE</span>
                    <h4>UPI Money Transfer</h4>
                  </div>
                  <div className="qr-demo-wrapper">
                    <QrCode size={110} color="#5f259f" />
                    <div className="upi-id-pill">
                      <span>UPI ID: user@ybl</span>
                      <CheckCircle2 size={14} color="#00c853" />
                    </div>
                  </div>
                  <div className="screen-alert-success">
                    <CheckCircle2 size={18} color="#00c853" />
                    <div>
                      <div className="alert-bold">₹1,500 Paid Successfully</div>
                      <div className="alert-sub">Zero transaction fee</div>
                    </div>
                  </div>
                </div>
              )}

              {activeScreen === 'recharge' && (
                <div className="screen-content animate-fade-in">
                  <div className="screen-header-card">
                    <span className="screen-card-subtitle">RECHARGE & BILLS</span>
                    <h4>Mobile Unlimited Pack</h4>
                  </div>
                  <div className="recharge-plan-card">
                    <div className="plan-price">₹299</div>
                    <div className="plan-details">
                      <span>2 GB/Day • 28 Days</span>
                      <span>Unlimited Voice Calls</span>
                    </div>
                  </div>
                  <button className="screen-action-btn">Pay Now via UPI</button>
                </div>
              )}

              {activeScreen === 'gold' && (
                <div className="screen-content animate-fade-in">
                  <div className="screen-header-card gold-bg">
                    <span className="screen-card-subtitle">WEALTH HUB</span>
                    <h4>24K 99.99% Pure Gold</h4>
                  </div>
                  <div className="gold-stats-card">
                    <Coins size={36} color="#ffb300" />
                    <div className="gold-live-price">Live Rate: ₹7,250/gm</div>
                    <p className="gold-vault-desc">Stored in bank-grade MMTC-PAMP vaults</p>
                  </div>
                  <button className="screen-action-btn gold-btn">Buy Gold for ₹100</button>
                </div>
              )}

              {activeScreen === 'soundbox' && (
                <div className="screen-content animate-fade-in">
                  <div className="screen-header-card soundbox-bg">
                    <span className="screen-card-subtitle">BUSINESS SOUNDBOX</span>
                    <h4>Voice Alert Demo</h4>
                  </div>
                  <div className="soundbox-demo-box">
                    <Volume2 size={44} className={audioPlaying ? 'sound-wave-icon' : ''} color="#5f259f" />
                    <p className="soundbox-quote">"PhonePe par ₹1,250 praapt hue"</p>
                    <button 
                      className="btn btn-primary soundbox-play-btn"
                      onClick={playSoundboxAlert}
                      disabled={audioPlaying}
                    >
                      {audioPlaying ? <VolumeX size={16} /> : <Play size={16} />}
                      <span>{audioPlaying ? 'Playing Alert...' : 'Test Sound Alert'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Phone Tab Bar Switcher */}
              <div className="phone-screen-tabs">
                <button 
                  className={`tab-btn ${activeScreen === 'upi' ? 'active' : ''}`}
                  onClick={() => setActiveScreen('upi')}
                >
                  <QrCode size={16} />
                  <span>UPI</span>
                </button>
                <button 
                  className={`tab-btn ${activeScreen === 'recharge' ? 'active' : ''}`}
                  onClick={() => setActiveScreen('recharge')}
                >
                  <Smartphone size={16} />
                  <span>Bills</span>
                </button>
                <button 
                  className={`tab-btn ${activeScreen === 'gold' ? 'active' : ''}`}
                  onClick={() => setActiveScreen('gold')}
                >
                  <Coins size={16} />
                  <span>Gold</span>
                </button>
                <button 
                  className={`tab-btn ${activeScreen === 'soundbox' ? 'active' : ''}`}
                  onClick={() => setActiveScreen('soundbox')}
                >
                  <Volume2 size={16} />
                  <span>Audio</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
