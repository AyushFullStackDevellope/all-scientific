import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OurTechnology.css"; 

const OurTechnology = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="our-technology-container">
      <div className="header-section">
        <button className="back-button" onClick={handleBackClick}>Back to Home</button>
        <h1>Our Technology</h1>
      </div>
      
      <div className="content-section">
        <div className="tech-intro">
          <h2>Innovative Cooling Solutions</h2>
          <p>
            At the heart of our business is a commitment to developing and implementing 
            cutting-edge temperature control technologies that deliver reliability, 
            efficiency, and precision across various applications.
          </p>
        </div>
        
        <div className="tech-features">
          <div className="feature">
            <h3>Advanced Control Systems</h3>
            <p>
              Our proprietary control systems utilize predictive algorithms to maintain 
              optimal temperatures while minimizing energy usage and wear on components.
            </p>
          </div>
          
          <div className="feature">
            <h3>Remote Monitoring</h3>
            <p>
              All our systems include cloud-based monitoring capabilities, allowing for 
              real-time performance tracking, predictive maintenance, and instant alerts.
            </p>
          </div>
          
          <div className="feature">
            <h3>Sustainable Design</h3>
            <p>
              Our equipment is designed with environmental responsibility in mind, 
              using eco-friendly refrigerants and energy-efficient components.
            </p>
          </div>
        </div>
        
        <div className="tech-innovation">
          <h2>Research & Development</h2>
          <p>
            Our dedicated R&D team continuously works on developing new solutions 
            to address the evolving challenges in temperature control across medical, 
            laboratory, and industrial applications. We invest significantly in 
            innovation to stay at the forefront of cooling technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTechnology;