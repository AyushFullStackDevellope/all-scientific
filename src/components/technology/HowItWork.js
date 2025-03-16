import React from "react";
import "../styles/HowItWork.css";
import EquipIdLogo from "../Assets/Images/equip_image.png";
import DashboardImage from "../Assets/Images/Dashboard.avif";
import MobileImage from "../Assets/Images/mobiles.avif";

const HowItWork = () => {
  return (
    <div className="equip-dashboard">
      {/* Header Section */}
      <header className="equip-header">
        <img src={EquipIdLogo} alt="Equip ID Logo" className="equip-logo-img" />
        <span className="equip-subtitle">Giving Your Equipment a Voice</span>
      </header>

      {/* Title */}
      <h1 className="equip-title">How it Works</h1>
      <p className="equip-description">INTELLIGENCE DASHBOARD / REPORTS</p>

      {/* Content Section */}
      <div className="equip-section-container">
        <div className="equip-section">
          <h2 className="equip-section-title">Dashboard</h2>
          <p>
            Provide laboratory personnel access to repair, maintenance, and
            calibration work orders.
          </p>

          <h2 className="equip-section-title">Reports</h2>
          <ul className="equip-list">
            <li>Compliance</li>
            <li>Exception</li>
            <li>Analytics</li>
            <li>Spend</li>
            <li>Warranties</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="equip-image-container">
          <img
            src={DashboardImage}
            alt="Dashboard"
            className="equip-main-image"
          />
        </div>
      </div>

      {/* Footer Text */}
      <p className="equip-footer-text">
        Tapping a T.A.G. delivers critical Equipment intelligence directly to a
        customer or service technician
      </p>

      {/* Mobile Screens */}
      <div className="equip-images">
        <img src={MobileImage} alt="Mobile Screen 1" className="equip-image" />
      </div>
    </div>
  );
};

export default HowItWork;