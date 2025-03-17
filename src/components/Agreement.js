import React, { useState } from "react";
import { agreementData } from "../constants/AgreementData";
import "../styles/Agreement.css";

const AnimatedAgreementsComponent = () => {
  const [selectedAgreement, setSelectedAgreement] = useState(null);

  const handleLearnMore = (agreement) => {
    setSelectedAgreement(agreement);
    // Scroll to top when opening detailed view
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    // Animate out before setting to null
    setSelectedAgreement(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render a content section based on the data structure
  const renderContentSection = (section, index) => {
    return (
      <div key={index} className="section-container">
        {section.heading && <h4>{section.heading}</h4>}
        {section.text && <p>{section.text}</p>}

        {section.features &&
          (section.listType === "ordered" ? (
            <ol className="agreement-features">
              {section.features.map((feature, fIndex) => (
                <li key={fIndex}>
                  {typeof feature === "string" ? (
                    feature
                  ) : (
                    <>
                      {feature.title && <strong>{feature.title}</strong>}
                      {feature.description && <p>{feature.description}</p>}
                      {feature.subFeatures && (
                        <ul className="sub-features">
                          {feature.subFeatures.map((subFeature, sfIndex) => (
                            <li key={sfIndex}>{subFeature}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ol>
          ) : (
            <ul className="agreement-features">
              {section.features.map((feature, fIndex) => (
                <li key={fIndex}>
                  {typeof feature === "string" ? (
                    feature
                  ) : (
                    <>
                      {feature.title && <strong>{feature.title}</strong>}
                      {feature.description && <p>{feature.description}</p>}
                    </>
                  )}
                </li>
              ))}
            </ul>
          ))}

        {section.conclusion && <p>{section.conclusion}</p>}
      </div>
    );
  };
  // Render the component

  return (
    <div>
      <div className="agreements-section">
        {selectedAgreement && (
          <div
            className="hero-section"
            style={{
              backgroundImage: `url(${selectedAgreement.details.heroSection.image})`,
            }}
          >
            <div className="hero-overlay">
              <h1>{selectedAgreement.details.heroSection.text}</h1>
            </div>
          </div>
        )}
        {!selectedAgreement ? (
          <>
            <div className="section-title">
              <h2>Our Agreements</h2>
              <p>
                Learn more about our service agreements and commitments to our
                clients
              </p>
            </div>
            <div className="agreement-cards">
              {agreementData.map((agreement, index) => (
                <div
                  key={agreement.id}
                  className="agreement-card-container"
                  style={{
                    animation: "fadeIn 0.5s ease-out forwards",
                    animationDelay: `${index * 0.15}s`,
                    opacity: 0,
                  }}
                >
                  <div className="agreement-card">
                    <div className="card-logo">
                      <img
                        src={agreement.logo}
                        alt={`${agreement.title} logo`}
                      />
                    </div>
                    <h3 className="card-title">{agreement.title}</h3>
                    <button
                      className="learn-btn"
                      onClick={() => handleLearnMore(agreement)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // DETAILED AGREEMENT VIEW
          // Render the detailed agreement content
          <div className="detailed-agreement-content">
            <div className={`${selectedAgreement.id}-content`}>
              <div className="content-wrapper">
                <h2>{selectedAgreement.details.subtitle}</h2>
                <h3>{selectedAgreement.title}</h3>

                <div className="description-text">
                  <p>{selectedAgreement.details.description}</p>
                </div>

                {selectedAgreement.details.contentSections.map(
                  (section, index) => renderContentSection(section, index)
                )}
              </div>
            </div>
            {/* BACK BUTTON */}
            <div className="button-container">
              <button onClick={handleBack} className="back-btn">
                Back to Agreements
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedAgreementsComponent;
