import React from "react";
import "../styles/EquipIdOne.css";
import equipLogo from "../Assets/Images/equip_image.png";
import EquipmentImage from "../Assets/Images/equipment.avif";


const EquipIDSectionOne = () => {
  return (
    <div className="equip-container">
      <div className="equip-sidebar">
        <img src={equipLogo} alt="Equip ID Logo" className="logo" />
        <p className="tagline">Giving Your Equipment a Voice</p>
      </div>
      <div className="equip-content">
        <p className="description">
          ALL Scientific subscribes to Equip ID to deliver equipment-specific
          data and supportive content{" "}
          <span className="highlight">(Equipment Intelligence)</span> to
          customers and service technicians. ALL Scientific's technicians are
          certified Tagnicians, enabling them to install Equip ID Tags.
        </p>
        <p className="bold-text">
          The Right Intelligence to the Right Person at the Right Time optimizes
          compliance, inspection, testing, maintenance, and repair services for
          critical laboratory equipment.
        </p>
        <img src={EquipmentImage} alt="Equipment" className="equipment-image" />
      </div>
    </div>

  );
};

export default EquipIDSectionOne;
