import React from "react";
import "../../styles/EthosPartnership.css";

const EthosPartnership = () => {
  return (
    <div className="ethos-container">
      <h2 className="ethos-title">Ethos Partnership</h2>
      {/* New Section */}
      <div className="ethos-cards">
        <div className="ethos-card">
          <img
            src={"/assets/images/about/mergers.avif"}
            alt="Mergers"
            className="ethos-icon"
          />
          <h3>Mergers & Acquisition</h3>
          <p>Sourcing, Financing, and Transition</p>
        </div>

        <div className="ethos-card">
          <img
            src={"/assets/images/about/expertise.avif"}
            alt="Expertise"
            className="ethos-icon"
          />
          <h3>Expertise & Guidance</h3>
          <p>Strategic guidance and operational expertise</p>
        </div>

        <div className="ethos-card">
          <img
            src={"/assets/images/about/networking.avif"}
            alt="Network"
            className="ethos-icon"
          />
          <h3>Network & Connections</h3>
          <p>Extensive networks and connections</p>
        </div>
      </div>
    </div>
  );
};

export default EthosPartnership;
