import React from "react";
import "../styles/LogBook.css";
import RepairProLogo from "../Assets/Images/Repairprologbook_logo.avif";

const LogBookPage = () => {
  return (
    <div className="logbook-container">
      {/* Header */}
      <header className="logbook-header">
        <img src={RepairProLogo} alt="RepairPro-LogBook Logo" className="logbook-logo" />
        <p className="logbook-intro">
          <a href="#">AI Scientific</a> has created an essential tool for laboratory repair technicians in the
          RepairProLogBook application for easy access to their skills, experience, work, and technical/professional
          data support.
        </p>
        <h1 className="logbook-title">Track, Manage, Succeed - Showcase Your Expertise.</h1>
        <p>
          Welcome to <a href="https://www.repairprologbook.com">RepairProLogBook</a>, the premier application designed
          for laboratory repair technicians.
        </p>
      </header>

      {/* Technician Section */}
      <section className="technician-section">
        <h2 className="section-title">Technicians:</h2>
        <h3 className="sub-title">Build Your Professional Resume</h3>
        <p><strong>Seamless Time Tracking:</strong> Easily log hours spent repairing and maintaining laboratory equipment. Specify the make, model, and type of equipment and record detailed records on each task.</p>

        <h3 className="sub-title">Detailed Record Keeping</h3>
        <p>Maintain comprehensive records of your work Track:</p>
        <ul className="list">
          <li>Equipment types and models</li>
          <li>Repair and maintenance tasks</li>
          <li>Time spent on various tasks</li>
          <li>Specific challenges and solutions</li>
        </ul>

        <h3 className="sub-title">Automated Resume Generation</h3>
        <p>Your work history becomes a dynamic resume, generating professional summaries highlighting:</p>
        <ul className="list">
          <li>Task hours worked on different models and makes</li>
          <li>Specific skills and tasks performed</li>
          <li>Certifications and training completed</li>
        </ul>

        <h3 className="sub-title">Showcase Your Skills</h3>
        <p>Impress potential employers with a detailed, verifiable record of your expertise. Highlight your experience with specific equipment and demonstrate your commitment to quality and precision in your work.</p>
      </section>

      {/* Company Owners Section */}
      <section className="company-section">
        <h2 className="section-title">Company Owners:</h2>
        <p>Demonstrate your team's expertise and skills, aggregate data from all technicians.</p>

        <h3 className="sub-title">Data-Backed Insights:</h3>
        <ul className="list">
          <li>Identify strengths and areas for improvement</li>
          <li>Allocate resources effectively</li>
          <li>Track technician development progress</li>
        </ul>

        <h3 className="sub-title">Highlight Your Technicians' Skills:</h3>
        <p>Leverage the aggregated data to showcase your team's expertise to clients. Demonstrate:</p>
        <ul className="list">
          <li>Task and hours spent on various repairs and models</li>
          <li>Time-based comparisons on work profiles</li>
          <li>Success timelines and case studies from past repairs or maintenance</li>
        </ul>

        <h3 className="sub-title">Build Customer Trust:</h3>
        <p>Show prospective and current customers the depth of your team's knowledge and experience. Use detailed reports to illustrate your technicians' qualifications and the high service standards you provide.</p>
      </section>

      {/* Summary Section */}
      <section className="summary-section">
        <h2 className="section-title">Summary</h2>
        <h3 className="sub-title">Key Features:</h3>
        <ul className="list">
          <li><strong>Seamless tracking:</strong> Easily log and access data anytime, anywhere.</li>
          <li><strong>Detailed Reporting:</strong> Generate data on repairs for industry technicians and business owners.</li>
          <li><strong>Data Security:</strong> Encrypted logs to protect key technical information.</li>
          <li><strong>Resume Generation:</strong> Export logs and experience history as professional summaries.</li>
          <li><strong>Business Insights:</strong> Track team performance, allowing you to focus on data-driven decisions.</li>
          <li><strong>Customer Confidence:</strong> Provides accurate job records for accountability and proof of services.</li>
          <li><strong>Compliance:</strong> Ensure work meets industry standards and regulations.</li>
          <li><strong>Team Optimization:</strong> Monitor efficiency and allocate resources accordingly.</li>
          <li><strong>Stronger Client Relationships:</strong> Build stronger relationships with employers and clients with a verifiable work history of your team.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="logbook-footer">
        <p><a href="https://repairprologbook.com/">www.repairinglogbook.com</a></p>
      </footer>
    </div>
  );
};

export default LogBookPage;
