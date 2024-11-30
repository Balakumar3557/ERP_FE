import React, { useState } from "react";

function AddTripChangeEntry({ onSubmit }) {
  const [formData, setFormData] = useState({
    trip: "",
    newDriver: "",
    newBus: "",
    reason: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data: ", formData);
    onSubmit(formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Left column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="trip" className="form-label">
                Trip
              </label>
              <select
                className="form-select"
                id="trip"
                name="trip"
                value={formData.trip}
                onChange={handleChange}
                required
              >
                <option value="">Select Trip</option>
                <option value="Trip 1">Trip 1</option>
                <option value="Trip 2">Trip 2</option>
                {/* Add more trips as needed */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="newDriver" className="form-label">
                New Driver
              </label>
              <select
                className="form-select"
                id="newDriver"
                name="newDriver"
                value={formData.newDriver}
                onChange={handleChange}
                required
              >
                <option value="">Select New Driver</option>
                <option value="Alice Johnson">Alice Johnson</option>
                <option value="Bob Smith">Bob Smith</option>
                {/* Add more drivers as needed */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="newBus" className="form-label">
                New Bus
              </label>
              <select
                className="form-select"
                id="newBus"
                name="newBus"
                value={formData.newBus}
                onChange={handleChange}
                required
              >
                <option value="">Select New Bus</option>
                <option value="TN01XY1234">TN01XY1234</option>
                <option value="TN02AB5678">TN02AB5678</option>
                {/* Add more buses as needed */}
              </select>
            </div>
          </div>

          {/* Right column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="reason" className="form-label">
                Reason for Change
              </label>
              <input
                type="text"
                className="form-control"
                id="reason"
                name="reason"
                value={formData.reason}
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
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
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

export default AddTripChangeEntry;
