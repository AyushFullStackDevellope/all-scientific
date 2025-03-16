import React from "react";
import "../styles/RulesRegulations.css";
import utilizeCoreLogo from "../Assets/Images/UtilizeCore-Logo-Blue.svg"; // Replace with actual logo path
import utilizeCoreFlow from "../Assets/Images/screen-mode.avif"; // Replace with actual flow image
import { FaFileInvoice, FaChartBar, FaCogs, FaClipboardList, FaDollarSign, FaWrench, FaNetworkWired, FaEye } from "react-icons/fa";

const UtilizeCoreSection = () => {
  return (
    <div className="utilizecore-container">
      {/* Left Side - Logo & Text */}
      <div className="utilizecore-left">
        <img src={utilizeCoreLogo} alt="UtilizeCore Logo" className="logo" />
        <p>
          <strong>All Scientific Tech</strong> subscribes to UtilizeCore's best-in-class
          cloud-based service management technology to assist its operations team
          in providing expedited repair and maintenance services, seamless customer
          communication, and comprehensive analytics and billing to their clientele.
        </p>
        <ul>
          <li><FaClipboardList /> Work requests</li>
          <li><FaFileInvoice /> Proposals</li>
          <li><FaDollarSign /> Invoices</li>
          <li><FaWrench /> Warranties</li>
          <li><FaCogs /> Lifetime spend</li>
          <li><FaChartBar /> Analytics</li>
          <li><FaEye /> Reporting</li>
          <li><FaNetworkWired /> API Connectivity</li>
        </ul>
        <p>
          <strong>ALL Scientific Tech</strong> adheres to all rules and regulations
          required by the Authority Having Jurisdiction (AHJ), providing our
          customers with reliable and trustworthy service.
        </p>
      </div>
      
      {/* Right Side - Technology Flow Image */}
      <div className="utilizecore-right">
        <img src={utilizeCoreFlow} alt="UtilizeCore Flow" className="flow-image" />
        <div className="utilizecore-icons">
          <div className="icon-text"><FaClipboardList /> Send Service Requests</div>
          <div className="icon-text"><FaWrench /> Track Work Orders</div>
          <div className="icon-text"><FaDollarSign /> Pay Invoices</div>
          <div className="icon-text"><FaEye /> Streamline Inspections</div>
          <div className="icon-text"><FaCogs /> Access Equipment Profiles</div>
          <div className="icon-text"><FaChartBar /> Track Warranty Status</div>
        </div>
      </div>
    </div>
  );
};

export default UtilizeCoreSection;