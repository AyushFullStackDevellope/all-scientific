import React from "react";
import "../../styles/MarketMechanisms.css";

const cardsData = [
  { image: "/assets/images/Transperent-w-f-system.avif", text: "Transparent Workflow Systems" },
{ image: "/assets/images/ISO-img.avif", text: "ISO 9001:2016 (Future)" },
{ image: "/assets/images/investor-img.avif", text: "Investor Relations" },
{ image: "/assets/images/auditor-img.avif", text: "Auditors Legal" },
];

const MarketMechanisms = () => {
  return (
    <div>
      <div className="governance-wrapper">
        {/* {/ Banner Section /} */}
        <div className="governance-banner">
          <img src={"../assets/images/MarketMechanisms-img.avif"} alt="Governance" />
        </div>
        {/* {/ Cards Section /} */}
        <div className="governance-cards">
          {cardsData.map((card, index) => (
            <div className="governance-card" key={index}>
              <img src={card.image} alt={card.text} />
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketMechanisms;