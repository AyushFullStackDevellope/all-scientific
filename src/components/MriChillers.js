import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MriChillers.css";
import Footer from "./common/Footer.js";
import Header from "./common/Header.js";

const ProjectCard = ({ projectData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = projectData.images;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="project-card">
      <div className="carousel-container">
        <div className="carousel">
          <img
            src={images[currentSlide]}
            alt={`${projectData.location} slide ${currentSlide + 1}`}
            className="carousel-image"
          />
          <div className="carousel-controls">
            <button className="carousel-control prev" onClick={prevSlide}>
              ‹
            </button>
            <button className="carousel-control next" onClick={nextSlide}>
              ›
            </button>
          </div>
        </div>
        <div className="project-info">
          <h3 className="project-location">{projectData.location}</h3>
        </div>
      </div>
    </div>
  );
};

const MriChillerProjects = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      location: "2905 Flatbush Ave Brooklyn NYC",
      images: [
        "/assets/images/mri-carousel-one.avif",
        "/assets/images/mri-carousel-two.avif",
        "/assets/images/card-one-3.avif",
        "/assets/images/mri-carousel-four.avif",
        "/assets/images/mri-carousel-five.avif",
        "/assets/images/mri-carousel-six.avif",
        "/assets/images/mri-carousel-seven.avif",
      ],
    },
    {
      id: 2,
      location: "3250 Westchester Ave Bronx NYC",
      images: [
        "/assets/images/card-two-1.avif",
        "/assets/images/card-two-2.avif",
        "/assets/images/card-two-3.avif",
      ],
    },
    {
      id: 3,
      location: "1230 Ave R Brooklyn NYC",
      images: [
        "/assets/images/mri-carousel-sixteen.avif",
        "/assets/images/mri-carousel-seventeen.avif",
        "/assets/images/card-three-3.avif",
        "/assets/images/mri-carousel-nineteen.webp",
        "/assets/images/mri-carousel-twenty.webp",
        "/assets/images/mri-carousel-21.webp",
        "/assets/images/card-three-6.avif",
        "/assets/images/mri-carousel-23.webp",
      ],
    },
    {
      id: 4,
      location: "9 Bond Street Brooklyn NYC",
      images: [
        "/assets/images/mri-carousel-22.webp",
        "/assets/images/mri-carousel-23.webp",
        "/assets/images/mri-carousel-24.webp",
        "/assets/images/mri-carousel-25.webp",
        "/assets/images/mri-carousel-26.webp",
        "/assets/images/mri-carousel-27.webp",
        "/assets/images/mri-carousel-28.webp",
        "/assets/images/mri-carousel-29.webp",
        "/assets/images/mri-carousel-30.webp",
      ],
    },
  ];

  const services = [
    { id: 1, title: "Chiller Installation Expertise" },
    { id: 2, title: "Chiller Fabrication Shop" },
    { id: 3, title: "Chiller Preventative Maintenance" },
    { id: 4, title: "Chiller Repair Service" },
    { id: 5, title: "Chiller No Load / Full Load Startup" },
  ];

  const benefits = [
    "Maintains precise temperature control for optimal MRI performance",
    "Prevents costly helium loss & dangerous magnet quench situations",
    "Redundant systems ensure continuous operation during maintenance",
    "Energy-efficient design for reduced operational costs",
    "Quiet operation to maintain a comfortable patient environment",
    "99.9% uptime for uninterrupted MRI scanning operations",
  ];

  return (
    <div className="projects-container">
      <Header />
      <div className="hero-section">
        <h1 className="hero-title">MRI Chiller Installation Projects</h1>
        <p className="hero-subtitle">
          Specialized cooling solutions for medical imaging environments
        </p>
      </div>

      <section className="content-section">
        <div className="info-section">
          <h2 className="section-title">Why MRI Chillers Are Essential</h2>
          <p className="info-text">
            When patient care requires medical imaging, it is essential that the
            equipment is fully functional and supported by a reliable cooling
            system. Utilizing a chiller is crucial for cooling and maintaining
            the specific temperatures of MRI components.
          </p>

          <p className="info-text">
            One of the key functions of the chiller is to cool the coldhead, an
            important mechanical component that recondenses helium gas back into
            a liquid after it has cooled the MRI magnet. This process prevents
            helium from evaporating, keeps the magnet at the required
            temperature, and helps avoid magnet quench.
          </p>
        </div>

        <div className="benefits-section">
          <h2 className="section-title">Key Benefits</h2>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index} className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="system-diagram-section">
          <h2 className="section-title">Repair - Maintenance - Installation</h2>
          <div className="diagram-container">
            <img
              src="/assets/images/mri-chillers-dig.avif"
              alt="MRI Chiller System Diagram"
              className="system-diagram"
            />
          </div>
        </div>

        <div className="services-section">
          <h2 className="section-title">Our Complete Chiller Services</h2>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">➤</div>
                <h3 className="service-title">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="project-cards-section">
          <h2 className="section-title">MRI Chiller Installation Projects</h2>
          <div className="project-cards-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} projectData={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MriChillerProjects;
