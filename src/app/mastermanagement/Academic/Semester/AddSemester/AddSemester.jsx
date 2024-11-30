import React, { useState } from "react";

function AddSemester() {
  const [formData, setFormData] = useState({
    SelectYear: "",
    SemesterNo: "",
    StartDate: "",
    EndDate: "",
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
              <label htmlFor="SelectYear" className="form-label">
                Select Year
              </label>
              <select
                className="form-select"
                id="SelectYear"
                name="SelectYear"
                value={formData.StateName}
                onChange={handleChange}
              >
                <option value="active">2024-2025</option>
                <option value="inactive">2025-2026</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="SemesterNo" className="form-label">
                Semester No
              </label>
              <input
                type="text"
                className="form-control"
                id="SemesterNo"
                name="SemesterNo"
                value={formData.CityName}
                onChange={handleChange}
                required
              />
              {formErrors.CityName && (
                <div className="text-danger">{formErrors.CityName}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="StartDate" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                className="form-control"
                id="StartDate"
                name="StartDate"
                value={formData.CityName}
                onChange={handleChange}
                required
              />
              {formErrors.CityName && (
                <div className="text-danger">{formErrors.CityName}</div>
              )}
            </div>
          </div>
          {/* Right column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="EndDate" className="form-label">
                End Date
              </label>
              <input
                type="date"
                className="form-control"
                id="EndDate"
                name="EndDate"
                value={formData.CityName}
                onChange={handleChange}
                required
              />
              {formErrors.CityName && (
                <div className="text-danger">{formErrors.CityName}</div>
              )}
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
              {formErrors.Description && (
                <div className="text-danger">{formErrors.Description}</div>
              )}
            </div>
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

export default AddSemester;
