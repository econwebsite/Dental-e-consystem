import React from 'react';
import './ScannerCompliance.css';

const ScannerCompliance = () => {
  const regulatoryItems = [
    {
      icon: '📋',
      title: 'EU MDR',
      certColor: '#00aeef',
      bgGradient: '#c9eaf1'
    },
    {
      icon: '📋',
      title: 'IEC 60601',
      certColor: '#344ea1',
      bgGradient: '#def9fc'
    }
  ];

  return (
    <div className="compliance-container">
      <div className="compliance-content">
        {/* Main Title and Description */}
        <div className="compliance-header" data-aos="fade-down" data-aos-duration="1500">
          <h2 className="compliance-title">Compliance & Quality</h2>
          <p className="compliance-description">
            Our solutions are designed and developed in compliance with global medical standards to ensure safety, reliability, and regulatory readiness.
          </p>
        </div>

        {/* Regulatory Compliance Section */}
        <div className="compliance-section">
          <div className="section-header" data-aos="fade-right" data-aos-duration="1500">
            <div className="section-line"></div>
            <h3 className="section-title">Regulatory Compliance</h3>
          </div>
          <div className="regulatory-cards-wrapper">
            {regulatoryItems.map((item, index) => (
              <div
                key={index}
                className="regulatory-certification-card"
                style={{ background: item.bgGradient }}
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay={index * 150}
              >
                <div className="cert-icon" style={{ borderColor: item.certColor }}>
                  {item.icon}
                </div>
                <h4 className="cert-title">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScannerCompliance;
