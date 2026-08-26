import React, { useState } from 'react';
import { Send, Smartphone, Zap, Home, CreditCard, Navigation, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../../data/content';
import Modal from '../UI/Modal';
import './ServicesGrid.css';

const serviceIconMap = {
  Send, Smartphone, Zap, Home, CreditCard, Navigation
};

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">EVERYDAY FINANCIAL SERVICES</span>
          <h2 className="section-title">One App for All Your Daily Payment Needs</h2>
          <p className="section-subtitle">
            Experience fast, secure, and hassle-free transactions directly from your bank account with PhonePe.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service) => {
            const IconComp = serviceIconMap[service.icon] || Send;
            return (
              <div key={service.id} className="service-card" onClick={() => setSelectedService(service)}>
                {service.tag && <span className="service-tag">{service.tag}</span>}
                <div 
                  className="service-icon-box"
                  style={{ backgroundColor: service.bgColor, color: service.color }}
                >
                  <IconComp size={24} />
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.subtitle}</p>
                <div className="service-card-footer">
                  <span className="service-link-text">Try Simulation</span>
                  <ArrowRight size={16} className="service-arrow" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Service Simulation Modal */}
      {selectedService && (
        <Modal 
          isOpen={!!selectedService} 
          onClose={() => setSelectedService(null)} 
          title={selectedService.title}
        >
          <div className="service-modal-content">
            <div 
              className="service-modal-badge" 
              style={{ backgroundColor: selectedService.bgColor, color: selectedService.color }}
            >
              <CheckCircle2 size={24} />
              <span>Safe UI Interactive Simulation</span>
            </div>
            <p className="service-modal-desc">{selectedService.subtitle}</p>

            <div className="simulation-form">
              <label className="sim-label">Enter Mobile Number / Biller ID / UPI ID</label>
              <input type="text" className="sim-input" placeholder="e.g. 9876543210 or user@ybl" readOnly value="9876543210 (Demo Number)" />

              <label className="sim-label">Amount (₹)</label>
              <input type="number" className="sim-input" placeholder="Enter amount" defaultValue={500} readOnly />

              <div className="sim-upi-badge">
                <Send size={16} color="#5f259f" />
                <span>Linked Bank: State Bank of India (••4829)</span>
              </div>

              <button className="btn btn-primary sim-submit-btn" onClick={() => setSelectedService(null)}>
                Simulate Payment Success
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
