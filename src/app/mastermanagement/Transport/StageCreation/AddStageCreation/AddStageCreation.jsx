import React, { useState } from "react";

function AddStageCreation({ onSubmit }) {
  const [formData, setFormData] = useState({
    route: "",
    stageName: "",
    stageOrder: "",
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
    // Perform validation or API call here with formData
    console.log("Form submitted with data: ", formData);
    onSubmit(formData); // Call the parent function with the form data
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="route" className="form-label">
                Route
              </label>
              <select
                className="form-select"
                id="route"
                name="route"
                value={formData.route}
                onChange={handleChange}
                required
              >
                <option value="">Select Route</option>
                <option value="Route 1">Route 1</option>
                <option value="Route 2">Route 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="stageName" className="form-label">
                Stage Name
              </label>
              <select
                className="form-select"
                id="stageName"
                name="stageName"
                value={formData.stageName}
                onChange={handleChange}
                required
              >
                <option value="">Select a Stage</option>
                <option value="Stage 1">Stage 1</option>
                <option value="Stage 2">Stage 2</option>
                <option value="Stage 3">Stage 3</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="stageOrder" className="form-label">
                Stage Order
              </label>
              <select
                className="form-select"
                id="stageOrder"
                name="stageOrder"
                value={formData.stageOrder}
                onChange={handleChange}
                required
              >
                <option value="">Select Stage Order </option>
                <option value="1">1</option>
                <option value="2">2</option>
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
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
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

export default AddStageCreation;
