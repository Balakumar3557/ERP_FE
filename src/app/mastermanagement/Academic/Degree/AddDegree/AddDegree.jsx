import React, { useState } from 'react'

const AddDegree = () => {

  const [formData, setFormData] = useState({
    selectEducationLevel: "UG",
    noYears: "",
    degreeName: "",
    degreeDescription: "",
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
    console.log("Degreedata:", formData);

  };

  return (




    <div className="container">
      <form onSubmit={handleSubmit}>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="selectEducationLevel" className="form-label">Select Educational Level</label>
              <select
                className="form-select"
                id="selectEducationLevel"
                name="selectEducationLevel"
                value={formData.selectEducationLevel}
                onChange={handleChange}
              >
                <option value="UG">UG</option>
                <option value="PG">PG</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="noYears" className="form-label">Enter the No Years</label>
              <input
                type="text"
                className="form-control"
                id="noYears"
                name="noYears"
                value={formData.noYears}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="degreeName" className="form-label">Department Name</label>
              <input
                type="text"
                className="form-control"
                id="degreeName"
                name="degreeName"
                value={formData.degreeName}
                onChange={handleChange}
                required
              />
            </div>



            <div className="mb-3">
              <label htmlFor="degreeDescription" className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                id="degreeDescription"
                name="degreeDescription"
                value={formData.degreeDescription}
                onChange={handleChange}
                required
              />
            </div>
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
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddDegree