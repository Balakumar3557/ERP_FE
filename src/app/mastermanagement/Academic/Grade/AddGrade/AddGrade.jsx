import React, { useState } from "react";

function AddGrade() {
  const [formData, setFormData] = useState({
    FromMark: "",
    ToMark: "",
    Grade: "",
    GradePoint: "",
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
        StateName: "",
        CityName: "",
        Description: "",
        status: "active",
      });
      setFormErrors({});
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <div className="row">
          {/* Left column */}
          <div className="col-md-6">  
      <div className="mb-3">
          <label htmlFor="FromMark" className="form-label">From Mark</label>
          <input
            type="text"
            className="form-control"
            id="FromMark"
            name="FromMark"
            value={formData.CityName}
            onChange={handleChange}
            required
          />
          {formErrors.CityName && (
            <div className="text-danger">{formErrors.CityName}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="ToMark" className="form-label">To Mark</label>
          <input
            type="text"
            className="form-control"
            id="ToMark"
            name="ToMark"
            value={formData.CityName}
            onChange={handleChange}
            required
          />
          {formErrors.CityName && (
            <div className="text-danger">{formErrors.CityName}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor=" Grade" className="form-label">Grade</label>
          <input
            type="text"
            className="form-control"
            id="Grade"
            name="Grade"
            value={formData.CityName}
            onChange={handleChange}
            required
          />
          {formErrors.CityName && (
            <div className="text-danger">{formErrors.CityName}</div>
          )}
        </div>
        </div>
        <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="GradePoint" className="form-label">Grade Point</label>
          <input
            type="text"
            className="form-control"
            id="GradePoint"
            name="GradePoint"
            value={formData.CityName}
            onChange={handleChange}
            required
          />
          {formErrors.CityName && (
            <div className="text-danger">{formErrors.CityName}</div>
          )}
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
</div>
</div>
      

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddGrade;
