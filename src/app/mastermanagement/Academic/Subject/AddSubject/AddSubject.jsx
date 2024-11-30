import React, { useState } from "react";

function AddSubject() {
  const [formData, setFormData] = useState({
    selectdegree: "",
    selectdepartment: "",
    selectsemester: "",
    SubjectCode: "",
    SubjectName: "",
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
              <label htmlFor="selectdegree" className="form-label">
              select  degree
              </label>
              <select
                className="form-select"
                id="selectdegree"
                name="selectdegree"
                value={formData.StateName}
                onChange={handleChange}
              >
                <option value="active"></option>
                <option value="inactive"></option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="selectdepartment" className="form-label">
              select department
              </label>
              <select
                className="form-select"
                id="selectdepartment"
                name="selectdepartment"
                value={formData.StateName}
                onChange={handleChange}
              >
                <option value="active"></option>
                <option value="inactive"></option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="selectsemester" className="form-label">
              select semester
              </label>
              <select
                className="form-select"
                id="selectsemester"
                name="selectsemester"
                value={formData.StateName}
                onChange={handleChange}
              >
                <option value="active"></option>
                <option value="inactive"></option>
              </select>
            </div>

           
           
          </div>

          {/* Right column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="SubjectCode">Subject Code</label>
              <input
                type="text"
                className="form-control"
                id="SubjectCode"
                name="SubjectCode"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="SubjectName">Subject Name</label>
              <input
                type="text"
                className="form-control"
                id="SubjectName"
                name="SubjectName"
                value={formData.visitorName}
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

export default AddSubject;
