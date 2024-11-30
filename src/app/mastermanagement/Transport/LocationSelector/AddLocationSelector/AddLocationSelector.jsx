import React, { useState } from "react";

function AddLocationSelector({ onSubmit }) {
  const [formData, setFormData] = useState({
    location: "",
    startPoint: "",
    endPoint: "",
    stages: [""], // Initialize with one empty stage
    description: "", // New field
    status: "", // New field
  });

  // Handle input changes for location, startPoint, endPoint, description, and status
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle dynamic stage changes
  const handleStageChange = (index, value) => {
    const updatedStages = [...formData.stages];
    updatedStages[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      stages: updatedStages,
    }));
  };

  // Add a new stage field
  const addStage = () => {
    setFormData((prevData) => ({
      ...prevData,
      stages: [...prevData.stages, ""],
    }));
  };

  // Remove a stage field
  const removeStage = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      stages: prevData.stages.filter((_, i) => i !== index),
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    onSubmit(formData); // Pass data to the parent component
  };

  return (
    <div className="container mt-4">
      <form
        onSubmit={handleSubmit}
        className="overflow-auto border-none p-4"
        style={{ maxHeight: "500px" }} // Set max height for scrolling
      >
        <div className="row">
          {/* Location Input */}
          <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Start Point */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="startPoint" className="form-label">
                Start Point
              </label>
              <input
                type="text"
                className="form-control"
                id="startPoint"
                name="startPoint"
                value={formData.startPoint}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* End Point */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="endPoint" className="form-label">
                End Point
              </label>
              <input
                type="text"
                className="form-control"
                id="endPoint"
                name="endPoint"
                value={formData.endPoint}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        
        <div className="col-md-6">
        {/* Description */}
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
        {/* Status */}
        <div className="col-md-6">
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

        {/* Dynamic Stages */}
        <div className="row">
          <div className="col-md-12">
            <label className="form-label">Stages</label>
            {formData.stages.map((stage, index) => (
              <div key={index} className="mb-3 d-flex align-items-center">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder={`Stage ${index + 1}`}
                  value={stage}
                  onChange={(e) => handleStageChange(index, e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeStage(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={addStage}
            >
              Add Another Stage
            </button>
            <button type="submit" className="btn btn-primary ">
            Submit
          </button>
          </div>
          </div>
        </div>

        {/* Submit Button */}
        
          
      
      </form>
    </div>
  );
}

export default AddLocationSelector;
