import React from 'react';
import '../styles/BioMed.css';
import { serviceCategories, serviceFeatures } from '../constants/BiomedData';

/**
 * BioMedComponent - Responsive component for a biomedical laboratory refrigeration service
 * Displays services, features, and support options for lab equipment
 */
const BioMedComponent = () => {

    return (
        <div className="biomed-page">
            {/* Hero section with background image */}
            <div className="hero-section-bio"
                style={{ backgroundImage: `url('/assets/images/biomed-hero.avif')` }}>
                <div className="hero-content-bio">
                    <h1>Biomedical - Laboratory<br />Refrigeration - Freezers</h1>
                </div>
            </div>
            
            {/* Service categories section */}
            <div className="service-categories-container">
                <div className="service-categories">
                    {serviceCategories.slice(0, 4).map(category => (
                        <div key={category.id} className="service-category">
                            <div className="category-image">
                                <img src={category.image} alt={category.label} />
                            </div>
                            <h3>{category.label}</h3>
                        </div>
                    ))}
                </div>
                
                <div className="service-categories">
                    {serviceCategories.slice(4, 8).map(category => (
                        <div key={category.id} className="service-category">
                            <div className="category-image">
                                <img src={category.image} alt={category.label} />
                            </div>
                            <h3>{category.label}</h3>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Repair depot section with background image */}
            <div className="repair-depot-section"
                style={{ backgroundImage: `url('/assets/images/biomed-herobg.avif')` }}>
                <h2>Pickup / Repair Depot Service</h2>
                
                <div className="feature-boxes">
                    {serviceFeatures.map(feature => (
                        <div key={feature.id} className="feature-box">
                            <div className="feature-icon">
                                <img src={feature.icon} alt={feature.title} />
                            </div>
                            <h3>{feature.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BioMedComponent;