import React from "react";
import "../../styles/IntegrationwithParts.css";

const IntegrationParts = () => {
  return (
    <div className="suppliers-container">
      {/* Header Section */}
      <header className="suppliers-header">
        <img src={"/assets/images/equip_image.png"} alt="Equip ID Logo" className="suppliers-logo" />
        <span className="suppliers-tagline">Giving Your Equipment a Voice</span>
      </header>

      {/* Title & Subtitle */}
      <h1 className="suppliers-title">Integration with Parts Suppliers</h1>
      <p className="suppliers-subtitle">
        PREVIEW MODE SUGGESTS PARTS REQUIRED AND NEAREST SUPPLIERS
      </p>

      {/* Content Section */}
      <div className="suppliers-content">
        {/* Mobile Screens */}
        <div className="suppliers-mobile-images">
          <img
            src={"/assets/images/mobiles.avif"}
            alt="Mobile Screen 1"
            className="mobile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default IntegrationParts;
