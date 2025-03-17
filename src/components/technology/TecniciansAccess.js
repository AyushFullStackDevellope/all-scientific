import React from "react";
import "../../styles/TechnicianAccess.css";
// import CertifiedImage from "../Assets/Images/certified.avif";


const TechAccess = () => {
  return (
    <div className="tech-main-container">
      {/* Header Section */}
      <header className="tech-header">
        <img src={"/assets/images/equip_image.png"} alt="Equip ID Logo" className="tech-logo" />
        <p className="tech-tagline">Giving Your Equipment a Voice</p>
      </header>
      
      {/* Title Section */}
      <h2 className="tech-title">Tagnicians Install the Equip ID Tag</h2>
      
      {/* Content Section */}
      <div className="tech-content">
        <img src={ "/assets/images/Technician-working.avif"} alt="Technician Working" className="tech-image" />
        <div className="tech-certification">
          <img src={ "/assets/images/"} alt="Certified Tagnician" className="tech-certified-image" />
          <p>
            <a href="#" className="tech-scientific-link">All Scientific</a>'s technicians are trained to install Equip ID
            Tags on Laboratory Refrigeration, MRI Chillers, and research equipment.
          </p>
        </div>
      </div>
      
      {/* Access Section */}
      <h2 className="tech-sub-title">TECHNICIAN ACCESS</h2>
      <div className="tech-access-section">
        <div className="tech-category tech-offsite">OFFSITE</div>
        <div className="tech-category tech-onsite">ONSITE</div>
      </div>
      
      {/* Access Grid Section */}
      <div className="tech-access-grid">
        {/* Preview Access Card */}
        <div className="tech-access-item">
          <img src={"/assets/images/Preview.avif"} alt="Preview" className="tech-access-icon" />
          <h3 className="tech-access-title">PREVIEW</h3>
          <p>Call avoidance support, suggests tools and skills required</p>
        </div>
        
        {/* Connect Access Card */}
        <div className="tech-access-item">
          <img src={"/assets/images/Connect.avif"} alt="Connect" className="tech-access-icon" />
          <h3 className="tech-access-title">CONNECT</h3>
          <p>Service technician connects to equipment intelligence</p>
        </div>
        
        {/* Verify Access Card */}
        <div className="tech-access-item">
          <img src={"/assets/images/Verify.avif"} alt="Verify" className="tech-access-icon" />
          <h3 className="tech-access-title">VERIFY</h3>
          <p>Service technician is authorized to repair</p>
        </div>
        
        {/* Access Capability Card */}
        <div className="tech-access-item">
          <img src={"/assets/images/Access.avif"} alt="Access" className="tech-access-icon" />
          <h3 className="tech-access-title">ACCESS</h3>
          <p>Equipment intelligence delivered based on user’s role</p>
        </div>
        
        {/* Repair Capability Card */}
        <div className="tech-access-item">
          <img src={"/assets/images/Repair.avif"} alt="Repair" className="tech-access-icon" />
          <h3 className="tech-access-title">REPAIR</h3>
          <p>Service technician proceeds with repair</p>
        </div>
      </div>
    </div>
  );
};


export default TechAccess;
