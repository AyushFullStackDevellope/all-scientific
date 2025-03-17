import React from "react";
import "../../styles/SupplierGauge.css";

const SupplierGauge = () => {
  return (
    <div className="supplier-container">
      {/* Header Section */}
      <header className="supplier-header">
        <img src={ "/assets/images/SupplierGauge_logo.avif"} alt="Supplier Gauge Logo" className="supplier-logo" />
        <h1 className="supplier-title">Simplifying Business Reviews, Amplifying Success</h1>
        <p className="supplier-subtitle">
          <strong>
            ALL Scientific Partners with Supplier Gauge to enable Interactive Customer Business Reviews.
          </strong>
        </p>
      </header>

      {/* Introduction */}
      <section className="supplier-intro">
        <p>
          Welcome to Supplier Gauge Application – the ultimate tool for optimizing contractor and customer business reviews.
        </p>
        <p>
          Our product provides an adaptable question-and-answer template tailored to your needs, creating a structured and
          effective review process.
        </p>
        <p>
          Leverage the power of Microsoft Teams to easily conduct comprehensive reviews whether weekly, semiannual, quarterly,
          or monthly.
        </p>
      </section>

      {/* Features & Benefits Section */}
      <section className="supplier-section">
        <h2 className="section-title">Features & Benefits</h2>
        <p>
          <strong>Customizable Q&A Templates:</strong> Standardized and flexible question-and-answer templates that adapt based
          on customer service and equipment type.
        </p>
      </section>

      {/* Seamless Online Environment */}
      <section className="supplier-section">
        <h2 className="section-title">Seamless Online Environment</h2>
        <p>Utilize Microsoft Teams for real-time meetings, document sharing, and scheduling.</p>
        <ul className="supplier-list">
          <li>Video Conferencing for efficient discussion</li>
          <li>Task & Scheduling Manager for tracking progress</li>
          <li>Secure document sharing for easy report access</li>
        </ul>
      </section>

      {/* In-Depth Reviews */}
      <section className="supplier-section">
        <h2 className="section-title">In-Depth Reviews</h2>
        <p>Consolidate feedback and data analysis to enhance contractor performance.</p>
      </section>

      {/* Contractor & Customer Section */}
      <section className="supplier-section">
        <h2 className="section-title">Contractor</h2>
        <ul className="supplier-list">
          <li>Service Level Agreement</li>
          <li>Detailed Statement of Work</li>
        </ul>

        <h2 className="section-title">Customer</h2>
        <ul className="supplier-list">
          <li>Track number of service requests</li>
          <li>Analyze satisfaction scores and feedback</li>
          <li>Ensure payment alignments and approvals</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="supplier-footer">
        <p>
          <a href="https://www.suppliergauge.com" target="_blank" rel="noopener noreferrer">
            www.suppliergauge.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default SupplierGauge;
