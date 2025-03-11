import React from "react";
import "../styles/TempControll.css";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
import { equipmentData } from "../constants/TempControlltems.js";

/**
 * TempControll Component
 * 
 * A responsive component that displays information about temperature-controlled
 * laboratory equipment services including CO2 Incubators and Centrifuges.
 * The layout adapts based on screen size for optimal viewing on all devices.
 */
const TempControll = () => {
  // Equipment service data


  return (
    <div className="temp-controll-container">
      {/* Header Component */}
      <Header />

      {/* Hero Banner Section */}
      <div className="hero-banner">
        <div className="banner-content">
          <h1>Temperature Controlled Laboratory Equipment</h1>
        </div>
      </div>

      {/* Equipment Sections */}
      {equipmentData.map((equipment, index) => (
        <section 
          key={equipment.id} 
          className={`equipment-section ${index % 2 === 0 ? 'bg-light' : 'bg-dark'}`}
        >
          <div className="equipment-container">
            {/* Image column - Order changes based on index for visual variety */}
            <div className={`equipment-image ${index % 2 === 1 ? 'order-right' : 'order-left'}`}>
              <img 
                src={equipment.image} 
                alt={equipment.altText} 
                className="rounded-image"
              />
            </div>

            {/* Content column */}
            <div className="equipment-content">
              <h2>{equipment.title}</h2>
              <h3>{equipment.subtitle}</h3>
              <p>{equipment.description}</p>
              {/* <button className="service-button">Request Service</button> */}
            </div>
          </div>
        </section>
      ))}

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default TempControll;