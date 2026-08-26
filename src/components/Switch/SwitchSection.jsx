import React from 'react';
import { Train, Utensils, Plane, Film, ExternalLink } from 'lucide-react';
import { SWITCH_APPS } from '../../data/content';
import './Switch.css';

const switchIconMap = {
  Train, Utensils, Plane, Film
};

export default function SwitchSection() {
  return (
    <section className="section switch-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">PHONEPE SWITCH ECOSYSTEM</span>
          <h2 className="section-title">Your Favorite Apps Inside PhonePe</h2>
          <p className="section-subtitle">
            Book train tickets, order food, book flights & movie tickets without downloading separate apps.
          </p>
        </div>

        <div className="switch-grid">
          {SWITCH_APPS.map((app, idx) => {
            const IconComp = switchIconMap[app.icon] || Train;
            return (
              <div key={idx} className="switch-card">
                <div className="switch-top">
                  <div className="switch-icon-box">
                    <IconComp size={24} color="#5f259f" />
                  </div>
                  <span className="switch-cat">{app.category}</span>
                </div>
                <h3 className="switch-name">{app.name}</h3>
                <p className="switch-desc">{app.desc}</p>
                <div className="switch-footer">
                  <span>Open via PhonePe Switch</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
