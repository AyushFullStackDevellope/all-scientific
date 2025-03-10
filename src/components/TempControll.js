import React from "react";
import "../styles/TempControll.css";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";

/**
 * TempControll Component
 * 
 * A responsive component that displays information about temperature-controlled
 * laboratory equipment services including CO2 Incubators and Centrifuges.
 * The layout adapts based on screen size for optimal viewing on all devices.
 */
const TempControll = () => {
  // Equipment service data
  const equipmentData = [
    {
      id: "co2-incubators",
      title: "CO2 Incubators",
      subtitle: "Repair - Maintain - Calibrate",
      description: "Performing planned maintenance on CO₂ incubators is crucial to ensuring optimal cell culture conditions, preventing contamination, and maintaining consistent temperature, humidity, and CO₂ levels. Regular maintenance helps prevent the buildup of bacteria, fungi, and other contaminants that could compromise research or clinical results. It also ensures that sensors, filters, and humidification systems function correctly, reducing the risk of equipment failure and costly downtime. By following a scheduled maintenance plan, laboratories can extend the lifespan of their incubators, improve experimental reproducibility, and comply with industry standards and regulatory requirements.",
      image: "../../assets/images/temp-one.avif", // Update with actual path
      altText: "CO2 Incubator with cell culture plates"
    },
    {
      id: "centrifuge",
      title: "Centrifuge",
      subtitle: "Repair - Maintain - Calibrate",
      description: "Performing planned maintenance and calibration on a centrifuge is essential to ensure accurate, reliable, and safe operation. Regular maintenance helps prevent mechanical failures, imbalances, and excessive wear on critical components such as rotors, bearings, and seals, reducing the risk of costly downtime or equipment damage. Calibration ensures that the centrifuge operates at the correct speed and force, which is crucial for obtaining reproducible results in laboratory processes. Proper upkeep also enhances user safety by minimizing the risk of rotor failure, which can lead to hazardous situations. By following a scheduled maintenance and calibration plan, laboratories can maintain compliance with industry regulations, extend the lifespan of the equipment, and improve overall experimental accuracy.",
      image: "../../assets/images/temp-two.avif", // Update with actual path
      altText: "Laboratory centrifuge with sample tubes"
    }
  ];

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