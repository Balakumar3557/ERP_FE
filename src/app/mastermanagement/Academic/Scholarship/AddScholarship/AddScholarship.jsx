import React, { useState } from "react";

function AddScholarship() {
  const [formData, setFormData] = useState({
    ScholarshipName: "",
    Amount: "",
    Description: "",
    status: "active",
  });

  const [formErrors, setFormErrors] = useState({}); // State for form errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    // State Name validation
    if (!formData.StateName.trim()) {
      errors.StateName = "State name is required.";
    }
    
    // CityName Number validation
    if (!formData.CityName.trim()) {
        errors.CityName = "City name is required.";
      }

    // Allocation Description validation
    if (!formData.Description) {
      errors.Description = "Description  is required.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("City Data:", formData);
      // Add code here to handle form submission, like sending data to an API.
      // Reset form after successful submission
      setFormData({
        ScholarshipName: "",
        Amount: "",
        Description: "",
        status: "active",
      });
      setFormErrors({});
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      

        <div className="mb-3">
          <label htmlFor="ScholarshipName" className="form-label">Scholarship Name</label>
          <input
            type="text"
            className="form-control"
            id="ScholarshipName"
            name="ScholarshipName"
            value={formData.CityName}
            onChange={handleChange}
            required
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="Amount" className="form-label">Amount</label>
          <input
            type="text"
            className="form-control"
            id="Amount"
            name="Amount"
            value={formData.CityName}
            onChange={handleChange}
            required
          />
         
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
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

        <div className="mb-3">
          <label htmlFor="Description" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            required
          />
          {formErrors.Description && (
            <div className="text-danger">{formErrors.Description}</div>
          )}
        </div>

      

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddScholarship;
