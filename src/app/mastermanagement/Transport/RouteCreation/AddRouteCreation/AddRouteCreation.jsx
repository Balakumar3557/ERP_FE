import React, { useState } from "react";

function AddRouteCreation({ onSubmit }) {
  const [formData, setFormData] = useState({
    routeName: "",
    numberOfStages: "",
    startPoint: "",
    endPoint: "",
    description: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Trigger onSubmit with formData
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Left column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="routeName" className="form-label">
                Route Name
              </label>
              <input
                type="text"
                className="form-control"
                id="routeName"
                name="routeName"
                value={formData.routeName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="startPoint" className="form-label">
                Start Point
              </label>
              <select
                className="form-select"
                id="startPoint"
                name="startPoint"
                value={formData.startPoint}
                onChange={handleChange}
                required
              >
                <option value="">Select a Start Point</option>
                <option value="Point A">Point A</option>
                <option value="Point B">Point B</option>
                <option value="Point C">Point C</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Right column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="numberOfStages" className="form-label">
                Enter Number of Stages
              </label>
              <input
                type="number"
                className="form-control"
                id="numberOfStages"
                name="numberOfStages"
                value={formData.numberOfStages}
                onChange={handleChange}
                min="1"
                max="50"
                placeholder="Enter the number of stages"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endPoint" className="form-label">
                End Point
              </label>
              <select
                className="form-select"
                id="endPoint"
                name="endPoint"
                value={formData.endPoint}
                onChange={handleChange}
                required
              >
                <option value="">Select an End Point</option>
                <option value="Point X">Point X</option>
                <option value="Point Y">Point Y</option>
                <option value="Point Z">Point Z</option>
                {/* Add more options as needed */}
              </select>
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
                required
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
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

export default AddRouteCreation;
