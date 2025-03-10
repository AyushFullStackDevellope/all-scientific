import React from 'react';
import '../styles/Agreement.css';
import { Box, Wrench, Clipboard } from './common/AgreementIcons.js';
import { agreementData } from '../constants/AgreementData.js';

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
