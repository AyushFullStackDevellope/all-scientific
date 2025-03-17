import React from "react";
import "../../styles/TechSolutions.css";

const TechSolutions = () => {
  return (
    <div className="tech-container">
      <div className="image-box">
        <img
          src="https://static.wixstatic.com/media/cb6332_a9c9b9e133574cef864503f4f78dbb7e~mv2.jpg/v1/crop/x_132,y_0,w_960,h_816/fill/w_95,h_81,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%5BGetPaidStock_com%5D-662a7adddbd2d.jpg"
          alt="Scientist working"
          width="150"
        />
      </div>
      <div className="info-section">
        <h1>Connecting Technology</h1>
        <p className="solution-item">
          <a href="#">UtilizeCore</a>: Service Automation, Field force work order management
        </p>
        <p className="solution-item">
          <a href="#">Equip ID</a>: Equipment Intelligence (Asset Management)
        </p>
        <p className="solution-item">
          <a href="#">RepairPro-LogBook</a>: Technician Logbook
        </p>
        <p className="solution-item">
          <a href="#">Supplier Gauge</a>: Business Reviews Corrective Action Plans
        </p>
        <p className="solution-item">
          <a href="#">Remmcom</a>: Remote Monitoring (Runtime Meters Early Warning)
        </p>
      </div>
    </div>
  );
};

export default TechSolutions;
