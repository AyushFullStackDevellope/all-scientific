import React from "react";
import "../styles/TechnicianAccess.css";
import equipLogo from "../Assets/Images/equip_image.png";
import techImage from "../Assets/Images/Technician-working.avif"; 
import PreviewImage from "../Assets/Images/Preview.avif";
import ConnectImage from "../Assets/Images/Connect.avif";
import VerifyImage from "../Assets/Images/Verify.avif";
import AccessImage from "../Assets/Images/Access.avif";
import RepairImage from "../Assets/Images/Repair.avif";
import CertifiedImage from "../Assets/Images/certified.avif";


const TechAccess = () => {
  return (
    <div className="tech-main-container">
      <header className="tech-header">
        <img src={equipLogo} alt="Equip ID Logo" className="tech-logo" />
        <p className="tech-tagline">Giving Your Equipment a Voice</p>
      </header>
      
      <h2 className="tech-title">Tagnicians Install the Equip ID Tag</h2>
      <div className="tech-content">
        <img src={techImage} alt="Technician Working" className="tech-image" />
        <div className="tech-certification">
          <img src={CertifiedImage} alt="Certified Tagnician" className="tech-certified-image" />
          <p>
            <a href="#" className="tech-scientific-link">All Scientific</a>'s technicians are trained to install Equip ID
            Tags on Laboratory Refrigeration, MRI Chillers, and research equipment.
          </p>
        </div>
      </div>
      
      <h2 className="tech-sub-title">TECHNICIAN ACCESS</h2>
      <div className="tech-access-section">
        <div className="tech-category tech-offsite">OFFSITE</div>
        <div className="tech-category tech-onsite">ONSITE</div>
      </div>
      
      <div className="tech-access-grid">
        <div className="tech-access-item">
          <img src={PreviewImage} alt="Preview" className="tech-access-icon" />
          <h3 className="tech-access-title">PREVIEW</h3>
          <p>Call avoidance support, suggests tools and skills required</p>
        </div>
        <div className="tech-access-item">
          <img src={ConnectImage} alt="Connect" className="tech-access-icon" />
          <h3 className="tech-access-title">CONNECT</h3>
          <p>Service technician connects to equipment intelligence</p>
        </div>
        <div className="tech-access-item">
          <img src={VerifyImage} alt="Verify" className="tech-access-icon" />
          <h3 className="tech-access-title">VERIFY</h3>
          <p>Service technician is authorized to repair</p>
        </div>
        <div className="tech-access-item">
          <img src={AccessImage} alt="Access" className="tech-access-icon" />
          <h3 className="tech-access-title">ACCESS</h3>
          <p>Equipment intelligence delivered based on user’s role</p>
        </div>
        <div className="tech-access-item">
          <img src={RepairImage} alt="Repair" className="tech-access-icon" />
          <h3 className="tech-access-title">REPAIR</h3>
          <p>Service technician proceeds with repair</p>
        </div>
      </div>
    </div>
  );
};

export default TechAccess;
