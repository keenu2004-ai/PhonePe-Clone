import React, { useState } from 'react';
import { Bike, Car, HeartPulse, ShieldCheck, ArrowRight } from 'lucide-react';
import { INSURANCE_ITEMS } from '../../data/content';
import Modal from '../UI/Modal';
import './Insurance.css';

const insuranceIconMap = {
  Bike, Car, HeartPulse, ShieldCheck
};

export default function InsuranceSection() {
  const [quoteModalItem, setQuoteModalItem] = useState(null);

  return (
    <section className="section insurance-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">INSURANCE FOR EVERYTHING YOU LOVE</span>
          <h2 className="section-title">Instant & Affordable Coverages</h2>
          <p className="section-subtitle">
            Zero paperwork, 100% digital policy issuance, and instant claim support across 15,000+ partner network hospitals & garages.
          </p>
        </div>

        <div className="insurance-grid">
          {INSURANCE_ITEMS.map((item) => {
            const IconComponent = insuranceIconMap[item.icon] || ShieldCheck;
            return (
              <div key={item.id} className="insurance-card">
                <div className="ins-header">
                  <div className="ins-icon-wrapper">
                    <IconComponent size={26} color="#5f259f" />
                  </div>
                  <span className="ins-price">{item.price}</span>
                </div>

                <h3 className="ins-title">{item.title}</h3>
                <p className="ins-desc">{item.desc}</p>

                <button className="btn btn-outline ins-btn" onClick={() => setQuoteModalItem(item)}>
                  <span>Get Instant Quote</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quote Simulation Modal */}
      {quoteModalItem && (
        <Modal
          isOpen={!!quoteModalItem}
          onClose={() => setQuoteModalItem(null)}
          title={`Get Instant ${quoteModalItem.title} Quote`}
        >
          <div className="quote-modal-body">
            <div className="quote-header-info">
              <span className="quote-tag">{quoteModalItem.price}</span>
              <p>{quoteModalItem.desc}</p>
            </div>

            <form className="quote-form" onSubmit={(e) => { e.preventDefault(); setQuoteModalItem(null); }}>
              <label className="sim-label">Vehicle Reg Number / Age</label>
              <input type="text" className="sim-input" placeholder="e.g. KA-01-EA-1234 or 28 Years" defaultValue="KA-05-MQ-9876" />

              <label className="sim-label">Pin Code</label>
              <input type="text" className="sim-input" placeholder="560001" defaultValue="560001" />

              <div className="quote-summary-card">
                <div className="summary-row">
                  <span>Base Premium:</span>
                  <span>₹1,499</span>
                </div>
                <div className="summary-row">
                  <span>NCB Discount (50%):</span>
                  <span className="gain">-₹750</span>
                </div>
                <div className="res-divider"></div>
                <div className="summary-row total-row">
                  <span>Final Payable:</span>
                  <span className="total">₹749 / year</span>
                </div>
              </div>

              <button type="submit" className="btn btn-primary sim-submit-btn">
                Simulate Policy Purchase
              </button>
            </form>
          </div>
        </Modal>
      )}
    </section>
  );
}
