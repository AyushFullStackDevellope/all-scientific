import React, { useState } from 'react';
import '../styles/ReqServices.css';
import Header from './common/Header';
import Footer from './common/Footer';
import TextField from './common/TextField';
import TextArea from './common/TextArea';
import Button from './common/Button';
import Title from './common/Title';

// Service request form component
const ReqServices = () => {
  const [formData, setFormData] = useState({
    locationName: '',
    labName: '',
    floorRoom: '',
    address: '',
    cityStateZip: '',
    firstName: '',
    lastName: '',
    email: '',
    officePhone: '',
    cellPhone: '',
    alternateCell: '',
    manufacturer1: '',
    modelNumber1: '',
    serialNumber1: '',
    manufacturer2: '',
    modelNumber2: '',
    serialNumber2: '',
    comments: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Service request submitted successfully!");
  };

  return (
    <div className="req-services-container">
      <Header />
      <div className="req-services">
        <div className="req-services-form-container">
          <Title level={2}>Request Service Form</Title>
          <form onSubmit={handleSubmit}>
            {/* Location Details */}
            <div className="form-row">
              <TextField label="Location Name" name="locationName" value={formData.locationName} onChange={handleChange} required />
              <TextField label="Lab Name" name="labName" value={formData.labName} onChange={handleChange} />
              <TextField label="Floor / Room" name="floorRoom" value={formData.floorRoom} onChange={handleChange} />
            </div>

            {/* Address Details */}
            <div className="form-row">
              <TextField label="Address" name="address" value={formData.address} onChange={handleChange} required className="wide" />
              <TextField label="City, State, Zip" name="cityStateZip" value={formData.cityStateZip} onChange={handleChange} required className="wide" />
            </div>

            {/* Personal Information */}
            <div className="form-row">
              <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
              <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <TextField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required className="full-width" />
            </div>

            {/* Contact Numbers */}
            <div className="form-row">
              <TextField label="Office Phone" name="officePhone" value={formData.officePhone} onChange={handleChange} />
              <TextField label="Cell Phone" name="cellPhone" value={formData.cellPhone} onChange={handleChange} />
              <TextField label="Alternate Cell" name="alternateCell" value={formData.alternateCell} onChange={handleChange} />
            </div>

            {/* Equipment Details */}
            <div className="equipment-section">
              <Title level={3}>Equipment Details</Title>
              <div className="form-row">
                <TextField label="Manufacturer #1" name="manufacturer1" value={formData.manufacturer1} onChange={handleChange} />
                <TextField label="Model #" name="modelNumber1" value={formData.modelNumber1} onChange={handleChange} />
                <TextField label="Serial #" name="serialNumber1" value={formData.serialNumber1} onChange={handleChange} />
              </div>
              <div className="form-row">
                <TextField label="Manufacturer #2" name="manufacturer2" value={formData.manufacturer2} onChange={handleChange} />
                <TextField label="Model #" name="modelNumber2" value={formData.modelNumber2} onChange={handleChange} />
                <TextField label="Serial #" name="serialNumber2" value={formData.serialNumber2} onChange={handleChange} />
              </div>
            </div>

            {/* Additional Comments */}
            <div className="form-row">
              <TextArea label="Comments" name="comments" value={formData.comments} onChange={handleChange} className="full-width" />
            </div>

            {/* Submit Button */}
            <div className="form-row">
              <Button type="submit" className="submit-button">Submit Request</Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReqServices;
