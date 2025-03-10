import React from "react";
import "../styles/About.css";
import ExperienceSection from "./Component.js";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";

export default class AboutHome extends React.Component {
  render() {
    return (
      <div className="about-home">
        <Header />
        <div className="about-banner">
          <div className="about-overlay">
            <h1 className="about-title">About Us</h1>
            <h2 className="about-subtitle">
              Building Strong & Healthy Relationships
            </h2>
            <p className="about-text">
              At All Scientific, we go beyond repairs. Our mission is to support
              the scientific community by ensuring that faulty equipment never
              hinders critical research. We are committed to delivering
              high-quality service and solutions that make a difference.
            </p>
            <button className="about-btn">Learn More</button>
          </div>
        </div>
      
        <ExperienceSection />
        <Footer />
      </div>
     
    );
  }
}