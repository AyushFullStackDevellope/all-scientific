import React from 'react';
import '../styles/Agreement.css';

// SVG Icons (existing icons remain the same)
const Box = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const Wrench = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const Clipboard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
  </svg>
);

const AgreementCard = ({ icon: Icon, title, details }) => {
  return (
    <div className="agreement-card">
      <div className="card-header">
        <div className="card-icon">
          <Icon />
        </div>
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-details">
        {details.map((detail, index) => (
          <div key={index} className="card-detail">
            <span className="card-detail-icon">▶</span>
            <p>{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Agreement = () => {
  const agreementData = [
    {
      icon: Clipboard,
      title: "Equip ID Included",
      details: [
        "Equipment Manuals",
        "Advanced Service Automation Platform",
        "Comprehensive Asset Management",
        "Information Hot Spots",
        "Manufacturer Bulletins",
        "Technician Assistance Videos",
      ]
    },
    {
      icon: Box,
      title: "Labor",
      details: [
        "Labor Only: Technician Labor for all service events included"
      ]
    },
    {
      icon: Wrench,
      title: "RPM Planned Maintenance ",
      details: [
        "Planned Maintenance: Technician labor plus all maintenance material"
      ]
    },
    {
      icon: Box,
      title: "Labor and Material",
      details: [
        "Labor and Material: Technician labor plus all material used on service events"
      ]
    },
  ];

  return (
    <div className="agreements-container">
      <div className="container">
        <div className="section-header">
          <h2 className="agreements-title">Customer Agreements</h2>
          <p className="agreements-subtitle">
            Comprehensive Service Solutions Tailored to Your Needs
          </p>
        </div>
        <div className="agreements-grid">
          {agreementData.map((agreement, index) => (
            <AgreementCard 
              key={index}
              icon={agreement.icon}
              title={agreement.title}
              details={agreement.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agreement;