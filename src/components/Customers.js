import React from 'react';
import '../styles/Customers.css';

const Customers = () => {

  return (
    <div className="customers-section">
      <h2>The Customers</h2>
      <div className="customers-image-container">
        <img src={'/assets/images/customers-img.avif'} alt="Customers" className="customers-image" />
      </div>
    </div>
  );
};

export default Customers;
