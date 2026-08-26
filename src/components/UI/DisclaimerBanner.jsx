import React, { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';
import './DisclaimerBanner.css';

export default function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="disclaimer-banner" role="region" aria-label="Educational Disclaimer">
      <div className="container disclaimer-content">
        <div className="disclaimer-text">
          <AlertCircle size={16} className="disclaimer-icon" />
          <span>
            <strong>UNOFFICIAL EDUCATIONAL RECREATION:</strong> This website is a frontend portfolio demonstration. It does not process real payments or collect financial data.
          </span>
        </div>
        <button 
          className="disclaimer-close" 
          onClick={() => setDismissed(true)} 
          aria-label="Dismiss disclaimer banner"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
