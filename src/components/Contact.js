import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Contact.css";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
import { faqItems } from "../constants/ContactItems.js";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page-container">
    {/* Header Section */}
    <Header />
    // In Contact.js - Add this within your component

    {/* Main Contact Section */}
    <div className="contact-container">
      <div className="header-section">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            We'd love to hear from you. Please fill out the form or use the
            contact information below.
          </p>

          {/* <div className="info-item">
            <i className="icon phone-icon"></i>
            <span>718 - 756-8100</span>
          </div>
          
          <div className="info-item">
            <i className="icon email-icon"></i>
            <span>sales@alscientific.com</span>
          </div> */}
          <h4>
            <i className="fas fa-address-book"></i> Contact Info
          </h4>
          <p>
            <i className="fas fa-envelope"></i> Email:{" "}
            <a href="mailto:sales@alscientific.com">sales@alscientific.com</a>
          </p>
          <p>
            <i className="fas fa-phone"></i> Phone:{" "}
            <a href="tel:(718) 756 - 8100"> (718) 756 - 8100</a>
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>

            <span> 89 5th Avenue New York City, New York,10003</span>
          </p>

          <div className="business-hours">
            <h3>Locations :</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              <span>
                {" "}
                New York / New Hyde Park - Repair/Depot: 1804 Plaza AvenueNew
                Hyde Park, New York 11040
              </span>
            </p>

            <p>
              <i className="fas fa-map-marker-alt"></i>
              <span>
                {" "}
                New Jersey / Holmdel - Repair/Depot 2139 HWY 35 Holmdel, New
                Jersey 07733
              </span>
            </p>

            <p>
              <i className="fas fa-map-marker-alt"></i>
              <span>
                {" "}
                Pennsylvania / Philadelphia - Repair/Depot 3500 Scotts Lane
                Philadephia, Pennsylvania 19129
              </span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

    {/* Custom FAQ Section */}
    <div
      className="faq-section"
      style={{
        maxWidth: "1200px",
        margin: "3rem auto",
        padding: "0 2rem",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "#0056b3",
        }}
      >
        Frequently Asked Questions
      </h2>

      <div className="faq-container" style={{ width: "100%" }}>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="faq-item"
            style={{
              marginBottom: "1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div
              className="faq-question"
              onClick={() => toggleFaq(index)}
              style={{
                padding: "1rem",
                backgroundColor:
                  activeIndex === index ? "#0056b3" : "#f5f5f5",
                color: activeIndex === index ? "white" : "#333",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "background-color 0.3s ease",
              }}
            >
              {item.question}
              <span style={{ fontWeight: "bold" }}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div
                className="faq-answer"
                style={{
                  padding: "1rem",
                  backgroundColor: "white",
                  lineHeight: "1.6",
                  color: "#555",
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </div>
  );
};

export default Contact;
