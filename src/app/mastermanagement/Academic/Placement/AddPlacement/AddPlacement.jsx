import React, { useState } from "react";

function AddPlacement() {
  const [formData, setFormData] = useState({
    Companyname: "",
    Personname: "",
    Address: "",
    ContactNumber: "",
    Email: "",
    status: "",
    Description: "",
  
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or API call here with formData
    console.log("Form submitted with data: ", formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Left column */}
          <div className="col-md-6">
           
            <div className="mb-3">
              <label htmlFor="Companyname">Company name</label>
              <input
                type="text"
                className="form-control"
                id="Companyname"
                name="Companyname"
                value={formData.employeeName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Personname">Person name</label>
              <input
                type="text"
                className="form-control"
                id="Personname"
                name="Personname"
                value={formData.employeeName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                className="form-control"
                id="Address"
                name="Address"
                value={formData.employeeName}
                onChange={handleChange}
                required
              />
            </div>
            
          </div>

         

          {/* Right column */}
          <div className="col-md-6">
          
            <div className="mb-3">
              <label htmlFor="ContactNumber">Contact Number</label>
              <input
                type="tel"
                className="form-control"
                id="ContactNumber"
                name="ContactNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                className="form-control"
                id="Email"
                name="Email"
                value={formData.visitorEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                className="form-select"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
           
          </div>
          <div className="mb-3">
              <label htmlFor="Description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="Description"
                name="Description"
                value={formData.Description}
                onChange={handleChange}
                required
              />
            </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPlacement;
