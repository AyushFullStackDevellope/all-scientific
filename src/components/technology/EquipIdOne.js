import React from "react";
import "../../styles/EquipIdOne.css";


const EquipmentSection = () => {
  return (
    <div className="equipment-wrapper">
      <div className="equipment-sidebar">
        <img src={"/assets/images/equip_image.png"} alt="Equip Logo" className="equipment-logo" />
        <h2 className="tagline">Empowering Equipment with Intelligence</h2>
      </div>
      <div className="equipment-content">
        <p className="description">
          ALL Scientific provides equipment-specific data and support through 
          Equip ID. Our certified technicians install Equip ID Tags, ensuring 
          seamless tracking and maintenance.
        </p>
        <p className="highlight-text">
          The right information, at the right time, for optimized equipment 
          maintenance and compliance.
        </p>
        <img src={"/assets/images/equipment.avif"} alt="Equipment" className="equipment-image" />
      </div>
    </div>
  );
};

export default EquipmentSection;
