import React from "react";
import "../styles/ServiceAutomation.css";
import automationLogo from "../Assets/Images/utilizecore-logo.avif";

const AutomationServices = () => {
  return (
    <div className="automation-wrapper">
      <div className="automation-image-container">
        <img src={automationLogo} alt="Automation Service" className="automation-logo" />
      </div>
      <div className="automation-content">
        <h2 className="automation-title">Connecting Technology</h2>
        <ul className="automation-list">
          <li><span className="automation-highlight">➤ UtilizeCore:</span> Service Automation, Field force work order management</li>
          <li><span className="automation-highlight">➤ Equip ID:</span> Equipment Intelligence (Asset Management)</li>
          <li><span className="automation-highlight">➤ RepairPro-LogBook:</span> Technician Logbook</li>
          <li><span className="automation-highlight">➤ Supplier Gauge:</span> Business Reviews Corrective Action Plans</li>
          <li><span className="automation-highlight">➤ Remmcom:</span> Remote Monitoring (Runtime Meters Early Warning)</li>
        </ul>
      </div>
    </div>
  );
};

export default AutomationServices;
