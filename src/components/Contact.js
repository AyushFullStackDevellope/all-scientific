import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Contact.css";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
import { faqItems } from "../constants/ContactItems.js";
import Text from "./common/Text.js";
import InputField from "./common/InputFields.js";
import Button from "./common/Button";

const Contact = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  // State for FAQ toggle
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
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

  // Toggle FAQ visibility
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page-container">
      <Header />

      {/* Contact Section */}
      <div className="contact-container">
        <div className="header-section">
          <h1>Contact Us</h1>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <Text>We'd love to hear from you. Please fill out the form or use the contact information below.</Text>

            <h4>
              <i className="fas fa-address-book"></i> Contact Info
            </h4>
            <Text><i className="fas fa-envelope"></i> Email: <a href="mailto:sales@alscientific.com">sales@alscientific.com</a></Text>
            <Text><i className="fas fa-phone"></i> Phone: <a href="tel:(718) 756 - 8100">(718) 756 - 8100</a></Text>
            <Text><i className="fas fa-map-marker-alt"></i> 89 5th Avenue, New York City, NY 10003</Text>

            <div className="business-hours">
              <h3>Locations:</h3>
              <Text><i className="fas fa-map-marker-alt"></i> New York - 1804 Plaza Ave, New Hyde Park, NY 11040</Text>
              <Text><i className="fas fa-map-marker-alt"></i> New Jersey - 2139 HWY 35, Holmdel, NJ 07733</Text>
              <Text><i className="fas fa-map-marker-alt"></i> Pennsylvania - 3500 Scotts Lane, Philadelphia, PA 19129</Text>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <InputField label="Name" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              <InputField label="Email" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              <InputField label="Phone" type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              <InputField label="Company" type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
              </div>

              <Button type="submit" className="submit-button">Send Message</Button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                {item.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
