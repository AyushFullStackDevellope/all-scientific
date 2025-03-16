import React from "react";
import "../styles/BioSafety.css";
import { useNavigate } from "react-router-dom";
import { services } from "../constants/BiosafetyData.js";


/**
 * BioSafetyComponent - Enhanced component for displaying biosafety services
 * Features improved layout, animations, and visual elements
 */
  // Function to handle navigation to the request service page
  const BioSafetyComponent = () => {
    // Move useNavigate hook inside the component function
    const navigate = useNavigate();
  
    const handleRequestService = () => {
      navigate("/contact"); // Navigate to the request-service route
    };

    return (
        <div className="biosafety-page">
            
            {/* Hero Section */}
            <div className="biosafety-hero">
                <div className="hero-content">
                    <h1 className="hero-title">BioSafety Solutions</h1>
                    <p className="hero-subtitle">Ensuring Laboratory Safety and Compliance</p>
                </div>
            </div>
            
            <div className="biosafety-container">
                {/* Page Title Section with improved styling */}
                <div className="page-title">
                    <h1>Certification - Repair - Maintenance</h1>
                    <p className="title-description">
                        Professional services for your critical laboratory equipment
                    </p>
                </div>

                {/* Services Grid Section */}
                <div className="services-grid">
                    {services.map((service) => (
                        <div className="service-item" key={service.id}>
                            <div className="image-container">
                                <img
                                    src={service.image}
                                    alt={service.alt}
                                    className="service-image"
                                />
                                <div className={`service-overlay ${service.alignment}-aligned`}>
                                    <h2 className="service-title">{service.title}</h2>
                                </div>
                                <div className="service-hover-info">
                                    <div className="info-content">
                                        <h3>{service.title}</h3>
                                        <p>Expert maintenance and certification to ensure optimal performance and safety compliance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Added Call-to-Action Section */}
                <div className="cta-section">
                    <h2>Ready to ensure your lab's safety and compliance?</h2>
                    <p>Our team of certified technicians is ready to help with all your biosafety needs.</p>
                    <button className="cta-button-bio" onClick={handleRequestService}>Contact Us Today</button>
                </div>
            </div> 
        </div>
    );
};

export default BioSafetyComponent;