import React from "react";
import "../../styles/Locations.css";
import { locations } from "../../constants/LocationsData.js";


const Locations = () => {
  return (
    <section className="new-locations-section">
      <div className="new-locations-container">
        <h2 className="new-locations-title">Our Locations</h2>
        <p className="new-locations-subtitle">Find us across the East Coast</p>

        <div className="new-locations-content">
          <div className="new-map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6956001061324!2d-73.99275288459394!3d40.73639987932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c262bfc2cfaf15%3A0xd89870db81f47b21!2s1804%20Plaza%20Ave%2C%20New%20Hyde%20Park%2C%20NY%2011040%2C%20USA!5e0!3m2!1sen!2sus!4v1643809147143!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="new-locations-list">
            <h3 className="new-list-header">Office & Facility Locations</h3>
            {locations.map((loc, index) => (
              <div key={index} className="new-location-item">
                <div className="new-location-icon-wrapper">
                  <img
                    src={"/assets/icons/location-icon.jpg"}
                    alt="Location Icon"
                    className="new-location-icon"
                  />
                </div>
                <div className="new-location-info">
                  <h4 className="new-location-title">{loc.title}</h4>
                  <p className="new-location-address">{loc.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
