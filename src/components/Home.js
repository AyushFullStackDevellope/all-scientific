import React from 'react';
import '../styles/Home.css';

const MedicalServicesLandingPage = () => {
  return (
    <>
      <div id="home">
        <div className="content">
          <h1 className="main-heading">Medical Equipment Services</h1>
          <p className="subtitle">
            Serving Healthcare and Life Sciences Institutions
          </p>

          <ul className="services-list">
            <li>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-2"
              >
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path>
              </svg> 
              
                Bio-Medical & Laboratory Refrigeration
            </li>
            <li>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-2"
              >
                <path
                  d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"
                ></path>
                <path d="M8 7h6"></path>
                <path d="M8 11h8"></path>
              </svg>
              MRI & Medical Chillers
            </li>
            <li>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-2"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
              </svg>
              Temperature Controlled Research Equipment
            </li>
          </ul>

          <div className="service-types">
            <span className="service-type">
              <span className="highlight">★</span> Repairing
            </span>
            <span className="service-type">
              <span className="highlight">★</span> Maintaining
            </span>
            <span className="service-type">
              <span className="highlight">★</span> Calibrating
            </span>
            <span className="service-type">
              <span className="highlight">★</span> Installing
            </span>
          </div>

          <a href="#services" className="btn btn-primary btn-lg cta-button">
            Request Service
          </a>
        </div>
      </div>

      <div
        className="row mt-5"
        style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
      >
        <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">
            <h3>Service 24/7 <br /> 365</h3>
          </div>
          <div className="card-image">
            <img
              src="./assets/images/24-hours_edited.avif"
              alt="Service 24/7 365"
            />
          </div>
        </div>
        <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">
            <h3>Factory Trained Technicians</h3>
          </div>
          <div className="card-image">
            <img
              src="./assets/images/quality-control.avif"
              alt="Factory Trained Technicians"
            />
          </div>
        </div>
        <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">
            <h3>Fully Stocked Inventory</h3>
          </div>
          <div className="card-image">
            <img
              src="./assets/images/spare-parts.avif"
              alt="Fully Stocked Inventory"
            />
          </div>
        </div>
        <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">
            <h3>Proprietary Technology</h3>
          </div>
          <div className="card-image">
            <img
              src="./assets/images/management.avif"
              alt="Proprietary Technology"
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="./assets/images/home-img.avif"
              alt="Service Image"
              className="img-fluid rounded imgres"
              style={{ width: '30vw' }}
            />
          </div>
          <div className="col-md-6 text-align-left">
            <h1 style={{ textAlign: 'left' }}>
              <span style={{ color: 'rgb(255, 137, 26)', fontWeight: 'bold' }}>ALL</span>{' '}
              <span style={{ color: '#1e3a8a', fontWeight: 'bold' }}>Scientific Tech</span>
            </h1>
            <p style={{ textAlign: 'left' }}>
              Service 24/7 365 Fully Stocked Inventory Factory Trained Technicians Proprietary Technology ALL Scientific Tech is more than a service provider; we are a technologically advanced repair and maintenance partner. We provide comprehensive services to satisfy your laboratory's needs, ensuring efficiency, safety, and accuracy.
            </p>
            <br />
            <p style={{ textAlign: 'left' }}>
              In addition, we offer our customers an intelligent platform that enables real-time validation of completed work, Equipment Intelligence, and compliance reporting.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalServicesLandingPage;