import React from "react";
import "../../styles/TechnologyOverview.css";

const TechnologyOverview = () => {
  return (
    <div className="technology-wrapper">
      {/* Hero Section */}
      <div className="hero-banner"
      style={{
          backgroundImage: `url("/assets/images/Connnecting-technology-home.avif")`,
        }}
      >
        <h1>Connecting Technology</h1>
      </div>

      {/* Content Section */}
      <div className="content-wrapper">
        <p>
          ALL Scientific Tech's dedication to contemporary technology
          distinguishes it from its competitors, who are unable to modernize
          their service delivery platform due to a lack of funds, knowledge, and
          ambition.
        </p>
        <p>
          Steven Gotfried, the former CEO and founder of ServiceChannel, is the
          primary force behind the technology platform transformation at ALL
          Scientific Tech. Steven draws on his expertise and playbook to improve
          the technology platform of ALL Scientific Tech, thereby improving the
          efficacy of the workflow for the team and customers.
        </p>

        {/* Benefits Section */}
        <div className="benefits-wrapper">
          <h2>
            How this transformation benefits ALL Scientific Tech's customers:
          </h2>
          <ul>
            <li>
              <strong>Adherence to SLAs:</strong> Ensuring prompt and reliable
              service delivery.
            </li>
            <li>
              <strong>Reducing Equipment Downtime:</strong> Enhancing
              productivity and minimizing disruptions.
            </li>
            <li>
              <strong>Lowering Total Cost of Ownership:</strong> Optimizing
              maintenance costs and extending equipment life expectancy.
            </li>
            <li>
              <strong>Increasing Equipment Longevity:</strong> Keeping valuable
              assets in optimal condition longer.
            </li>
            <li>
              <strong>Enhancing Communication:</strong> Through direct system
              connectivity.
            </li>
            <li>
              <strong>Developing Partnerships:</strong> Expanding ALL Scientific
              Tech’s capabilities.
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <p className="summary-text">
          By leveraging technology, ALL Scientific Tech improves its service
          offerings, operational efficiency, and profitability. Our customers
          can trust that their critical equipment is in the hands of a company
          dedicated to excellence and continuous improvement.
        </p>
      </div>
    </div>
  );
};

export default TechnologyOverview;
