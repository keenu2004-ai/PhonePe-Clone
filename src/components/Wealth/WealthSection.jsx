import React, { useState } from 'react';
import { Coins, TrendingUp, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';
import { WEALTH_DATA } from '../../data/content';
import './Wealth.css';

export default function WealthSection() {
  const [monthlyAmount, setMonthlyAmount] = useState(5000);
  const [investmentYears, setInvestmentYears] = useState(5);
  const [returnRate, setReturnRate] = useState(12);

  // SIP Return Math Formula: P * [({1 + i}^n - 1) / i] * (1 + i)
  const calculateSIP = () => {
    const P = Number(monthlyAmount);
    const i = Number(returnRate) / 12 / 100;
    const n = Number(investmentYears) * 12;

    const totalInvested = P * n;
    const futureValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const estReturns = futureValue - totalInvested;

    return {
      totalInvested: Math.round(totalInvested),
      estReturns: Math.round(estReturns),
      totalValue: Math.round(futureValue)
    };
  };

  const sipResult = calculateSIP();

  return (
    <section className="section wealth-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">WEALTH & INVESTMENTS</span>
          <h2 className="section-title">Grow Your Savings Effortlessly</h2>
          <p className="section-subtitle">
            Invest in 24K pure digital gold starting at ₹1, or build long-term wealth with top-rated Mutual Funds.
          </p>
        </div>

        {/* Wealth Highlights Grid */}
        <div className="wealth-grid">
          {/* 24K Gold Card */}
          <div className="wealth-card gold-card">
            <div className="wealth-card-top">
              <div className="wealth-icon-box gold-icon">
                <Coins size={28} />
              </div>
              <span className="badge-gold">99.99% PURE</span>
            </div>
            <h3 className="wealth-title">{WEALTH_DATA.gold.title}</h3>
            <p className="wealth-desc">{WEALTH_DATA.gold.description}</p>
            <ul className="wealth-bullets">
              {WEALTH_DATA.gold.highlights.map((h, i) => (
                <li key={i}>
                  <ShieldCheck size={16} color="#ffb300" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="gold-action-bar">
              <span className="gold-price-tag">Live Rate: ₹7,250 / gram</span>
              <button className="btn btn-primary gold-cta">Buy Gold @ ₹1</button>
            </div>
          </div>

          {/* Mutual Funds Card */}
          <div className="wealth-card mf-card">
            <div className="wealth-card-top">
              <div className="wealth-icon-box mf-icon">
                <TrendingUp size={28} />
              </div>
              <span className="mf-tag">ZERO COMMISSION</span>
            </div>
            <h3 className="wealth-title">Mutual Funds & SIPs</h3>
            <p className="wealth-desc">Expert-curated funds tailored for tax saving, high growth & safety.</p>

            <div className="mf-list">
              {WEALTH_DATA.mutualFunds.map((fund, idx) => (
                <div key={idx} className="mf-item">
                  <div>
                    <div className="mf-name">{fund.title}</div>
                    <div className="mf-cat">{fund.category} • {fund.risk}</div>
                  </div>
                  <div className="mf-return">{fund.return}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive SIP Return Calculator */}
        <div className="sip-calculator-card">
          <div className="calc-header">
            <div className="calc-title-box">
              <Calculator size={24} color="#5f259f" />
              <h3>Interactive SIP Return Calculator</h3>
            </div>
            <span className="demo-indicator">Financial Math Demo</span>
          </div>

          <div className="calc-grid">
            {/* Input Controls */}
            <div className="calc-inputs">
              <div className="input-group">
                <div className="label-row">
                  <span>Monthly SIP Amount</span>
                  <span className="val-display">₹{monthlyAmount.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(e.target.value)}
                  className="sip-slider"
                />
              </div>

              <div className="input-group">
                <div className="label-row">
                  <span>Investment Tenure</span>
                  <span className="val-display">{investmentYears} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={investmentYears}
                  onChange={(e) => setInvestmentYears(e.target.value)}
                  className="sip-slider"
                />
              </div>

              <div className="input-group">
                <div className="label-row">
                  <span>Expected Return Rate (p.a.)</span>
                  <span className="val-display">{returnRate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="0.5"
                  value={returnRate}
                  onChange={(e) => setReturnRate(e.target.value)}
                  className="sip-slider"
                />
              </div>
            </div>

            {/* Results Display */}
            <div className="calc-results">
              <div className="res-row">
                <span className="res-label">Invested Amount:</span>
                <span className="res-value">₹{sipResult.totalInvested.toLocaleString()}</span>
              </div>
              <div className="res-row">
                <span className="res-label">Estimated Wealth Gain:</span>
                <span className="res-value gain">+₹{sipResult.estReturns.toLocaleString()}</span>
              </div>
              <div className="res-divider"></div>
              <div className="res-row total-row">
                <span className="res-label">Total Projected Value:</span>
                <span className="res-value total">₹{sipResult.totalValue.toLocaleString()}</span>
              </div>

              <button className="btn btn-primary start-sip-btn">
                <span>Start SIP on PhonePe</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
