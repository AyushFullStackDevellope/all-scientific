import React from "react";
import "../styles/About.css"; // Ensure this path is correct
import ExperienceSection from "./ExperienceSection";
import EthosPartnership from "./EthosPartnership";
import EthosBoard from "./EthosBoard";
import ManagementTeam from "./ManagementTeam";
import Advisors from "./Advisors";
// import MarketMechanisms from "./MarketMechanisms";
import Locations from "./Locations";

const AboutHome = () => {
  return (
    <div>
      <div className="about-banner">
        <div className="about-overlay fade-in">
          <h1 className="about-title">About Us</h1>
          <h2 className="about-subtitle">
            Building Strong & Healthy Relationships
          </h2>
          <p className="about-text">
            At All Scientific, we go beyond repairs. Our mission is to support
            the scientific community by ensuring faulty equipment never hinders
            critical research. We are committed to delivering high-quality
            service and solutions that make a difference.
          </p>
          <button className="about-btn glow-effect">Learn More</button>
        </div>
      </div>

      <ExperienceSection />
      <EthosPartnership />
      <EthosBoard />
      <ManagementTeam />
      <Advisors />
      {/* <MarketMechanisms /> */}
      <Locations/>
    </div>
  );
};

export default AboutHome;
