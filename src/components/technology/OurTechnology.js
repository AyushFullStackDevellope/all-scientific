import React from "react";
import "../../styles/OurTechnology.css";

const OurTechnology = () => {
  return (
    <div className="container">
      <div className="hero-section"
      style={{ backgroundImage: `url(${("/assets/images/Connnecting-technology-home.avif")})` }}>
        <h1>Connecting Technology</h1>
      </div>
      <div className="content">
        <p>
          ALL Scientific Tech's dedication to contemporary technology
          distinguishes it from its competitors, who are unable to modernize
          their service delivery platform due to a lack of funds, knowledge,
          and ambition.
        </p>
        <p>
          Steven Gotfried, the former CEO and founder of ServiceChannel, is the
          primary force behind the technology platform transformation at ALL
          Scientific Tech. Steven draws on his expertise and playbook to
          improve the technology platform of ALL Scientific Tech thereby
          improving the efficacy of the workflow for the team and customers.
        </p>
        <h3>
          This transformation directly benefits All Scientific Tech's customers
          by:
        </h3>
        <ul>
          <li>
            Adherence to Service Level Agreements (SLAs): Ensuring prompt and
            reliable service delivery.
          </li>
          <li>
            Reducing Equipment Downtime: Enhancing productivity and minimizing
            disruptions.
          </li>
          <li>
            Lowering Total Cost of Ownership: Optimizing maintenance costs and
            extending equipment life expectancy.
          </li>
          <li>
            Increasing Equipment Longevity: ensuring valuable assets remain in
            optimal condition for longer.
          </li>
          <li>
            Enhancing communication through direct system connectivity.
          </li>
          <li>
            Developing partnerships with exciting companies to extend ALL
            Scientific Tech’s internal and external capabilities.
          </li>
        </ul>
        <p>
          By leveraging technology, ALL Scientific Tech improves its service
          offerings, operational efficiency, and profitability and boosts its
          overall capabilities. Our customers can trust that their critical
          equipment is in the hands of a company dedicated to excellence and
          continuous improvement, ensuring their peace of mind.
        </p>
      </div>

    </div>
  );
};

export default OurTechnology;