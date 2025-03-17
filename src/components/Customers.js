import React from 'react';
import '../styles/Customers.css';

const Customers = () => {
// customers image component
  return (
    <div className="customers-section">
      {/* Customers section */}
      <h2 className='stats-title'>The Customers</h2>
      <div className="customers-image-container">
        <img src={'/assets/images/customers/customers-img.avif'} alt="Customers" className="customers-image" />
      </div>
    </div>
  );
};

export default Customers;
