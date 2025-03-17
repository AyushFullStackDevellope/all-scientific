import React from "react";
import "../../styles/UpdatedEquipment.css"; 


const EquipmentIntelligence = () => {
  return (
    <div className="intelligence-container">
      <header className="intelligence-header">
        <div className="intelligence-logo">
          <img src={ "/assets/images/equip_image.png"} alt="Equip ID Logo" />
          <p className="tagline">Giving Your Equipment a Voice</p>
        </div>
        <h1>Components Of Equipment Intelligence</h1>
      </header>
      
      <div className="intelligence-content-wrapper">
        <div className="intelligence-section intelligence-core">
          <h2>CORE</h2>
          <p>Equipment data, warranty, manuals & technical documentation from OEM.</p>
        </div>
        <div className="intelligence-section intelligence-content">
          <h2>CONTENT</h2>
          <p>Supportive content, benchmarks & alerts from web; repair history, performance measurements from service company CRM systems.</p>
        </div>
        
        <div className="intelligence-center">
          <img src={ "/assets/images/circal_image.avif"} alt="Equip ID" />
        </div>
        
        <div className="intelligence-section intelligence-classroom">
          <h2>CLASSROOM</h2>
          <p>On-demand technician upskilling, certification & training.</p>
        </div>
        <div className="intelligence-section intelligence-compliance">
          <h2>COMPLIANCE</h2>
          <p>Equipment owner task lists; insurer & regulatory compliance requirements.</p>
        </div>
      </div>
    </div>
  );
};

export default EquipmentIntelligence;
