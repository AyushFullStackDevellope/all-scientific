import React from "react";
import "../../styles/ExperienceSection.css"; // Ensure you create this CSS file


const ExperienceSection = () => {
  return (
    <div>
      <div className="exp-container">
        <div className="exp-content">
          <img
            src={("/assets/images/experience-img.avif")}
            alt="Lab Equipment"
            className="exp-image"
          />
          <div className="exp-text">
            <h2>
              <span className="exp-highlight">Over</span>{" "}
              <span className="exp-bold-blue">75 Years</span>
            </h2>
            <p className="exp-services-title">Providing services for</p>
            <ul className="exp-services-list">
              <li>Bio-Medical / Laboratory Refrigeration</li>
              <li>MRI Chillers</li>
              <li>Research Equipment</li>
            </ul>
            <p className="exp-since-text">
              <span className="exp-since-highlight">Since 1948,</span> our goal
              has been to keep laboratory equipment in peak working order,
              ensuring optimal performance for its entire lifespan.
            </p>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default ExperienceSection;
