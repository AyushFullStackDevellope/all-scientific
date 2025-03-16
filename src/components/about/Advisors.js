import React from "react";
import "../../styles/Advisors.css"; // Ensure this path is correct
import { advisors } from "../../constants/AdivsorsData.js";


const Advisors = () => {
  return (
    <div className="advisors-container">
      <h2 className="ethos-title">Advisors</h2>
      <div className="advisors-grid">
        {advisors.map((advisor, index) => (
          <div key={index} className="advisor-card">
            <img src={advisor.image} alt={advisor.name} className="advisor-image" />
            <p className="advisor-name">{advisor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advisors;