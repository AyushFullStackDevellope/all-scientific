import React, { useState } from 'react';
import '../styles/ReqServices.css';
import Header from './common/Header';
import Footer from './common/Footer';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle form submission, like sending data to an API
    console.log('Form submitted:', formData);
    // Add your API call or other submission logic here
  };

  return (
    <div className="req-services-container">
      <div className="req-services">
        <Header />
        <div className="req-services-header">
          <h1>Request Service</h1>
        </div>

        <div className="req-services-form-container">
          <h2>Service Request Form</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="locationName">Location Name</label>
                <input
                  type="text"
                  id="locationName"
                  name="locationName"
                  value={formData.locationName}
                  onChange={handleChange}
                  required
                  placeholder="Enter location name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="labName">Lab Name</label>
                <input
                  type="text"
                  id="labName"
                  name="labName"
                  value={formData.labName}
                  onChange={handleChange}
                  placeholder="Enter lab name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="floorRoom">Floor / Room</label>
                <input
                  type="text"
                  id="floorRoom"
                  name="floorRoom"
                  value={formData.floorRoom}
                  onChange={handleChange}
                  placeholder="Enter floor/room"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group wide">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Enter street address"
                />
              </div>

              <div className="form-group wide">
                <label htmlFor="cityStateZip">City, State, Zip</label>
                <input
                  type="text"
                  id="cityStateZip"
                  name="cityStateZip"
                  value={formData.cityStateZip}
                  onChange={handleChange}
                  required
                  placeholder="City, State, Zip"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter first name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter email address"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="officePhone">Office Phone</label>
                <input
                  type="tel"
                  id="officePhone"
                  name="officePhone"
                  value={formData.officePhone}
                  onChange={handleChange}
                  placeholder="(xxx) xxx-xxxx"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cellPhone">Cell Phone</label>
                <input
                  type="tel"
                  id="cellPhone"
                  name="cellPhone"
                  value={formData.cellPhone}
                  onChange={handleChange}
                  placeholder="(xxx) xxx-xxxx"
                />
              </div>

              <div className="form-group">
                <label htmlFor="alternateCell">Alternate Cell</label>
                <input
                  type="tel"
                  id="alternateCell"
                  name="alternateCell"
                  value={formData.alternateCell}
                  onChange={handleChange}
                  placeholder="(xxx) xxx-xxxx"
                />
              </div>
            </div>

            {/* Equipment details section */}
            <div className="equipment-section">
              <h3>Equipment Details</h3>
              
              {/* First equipment details */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="manufacturer1">Manufacturer #1</label>
                  <input
                    type="text"
                    id="manufacturer1"
                    name="manufacturer1"
                    value={formData.manufacturer1}
                    onChange={handleChange}
                    placeholder="Enter manufacturer"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="modelNumber1">Model #</label>
                  <input
                    type="text"
                    id="modelNumber1"
                    name="modelNumber1"
                    value={formData.modelNumber1}
                    onChange={handleChange}
                    placeholder="Enter model number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="serialNumber1">Serial #</label>
                  <input
                    type="text"
                    id="serialNumber1"
                    name="serialNumber1"
                    value={formData.serialNumber1}
                    onChange={handleChange}
                    placeholder="Enter serial number"
                  />
                </div>
              </div>

              {/* Second equipment details */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="manufacturer2">Manufacturer #2</label>
                  <input
                    type="text"
                    id="manufacturer2"
                    name="manufacturer2"
                    value={formData.manufacturer2}
                    onChange={handleChange}
                    placeholder="Enter manufacturer"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="modelNumber2">Model #</label>
                  <input
                    type="text"
                    id="modelNumber2"
                    name="modelNumber2"
                    value={formData.modelNumber2}
                    onChange={handleChange}
                    placeholder="Enter model number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="serialNumber2">Serial #</label>
                  <input
                    type="text"
                    id="serialNumber2"
                    name="serialNumber2"
                    value={formData.serialNumber2}
                    onChange={handleChange}
                    placeholder="Enter serial number"
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="comments">Comments</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Please provide any additional details about your service request"
                />
              </div>
            </div>

            <div className="form-row">
              <button type="submit" className="submit-button">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default ReqServices;