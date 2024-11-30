import React, { useState } from "react";
import './AddAcademicYear.css'
const AddAcademicYear = () => {
  const [formData, setFormData] = useState({
    yearName: "",
    yearDescription: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("yearData:", formData);
  };

  return (
    <div className="container py-4">
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="yearName" className="form-label">Year Name</label>
            <input
              type="text"
              className="form-control"
              id="yearName"
              name="yearName"
              value={formData.yearName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="yearDescription" className="form-label">Year Description</label>
            <input
              type="text"
              className="form-control"
              id="yearDescription"
              name="yearDescription"
              value={formData.yearDescription}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
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
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100 w-md-auto">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAcademicYear;


