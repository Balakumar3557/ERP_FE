import React, { useState } from "react";

function AddTripEntry({ onSubmit }) {
  const [formData, setFormData] = useState({
    trip: "",
    route: "",
    bus: "",
    driver: "",
    tripDate: "",
    startTime: "",
    endTime: "",
    status: "Scheduled",
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
                Trip Id
              </label>
              <input
                type="text"
                className="form-control"
                id="trip"
                name="trip"
                value={formData.trip}
                onChange={handleChange}
                required
             />
                
            
            </div>
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
                <option value="Route 3">Route 3</option>
                {/* Add more routes as needed */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="bus" className="form-label">
                Bus
              </label>
              <select
                className="form-select"
                id="bus"
                name="bus"
                value={formData.bus}
                onChange={handleChange}
                required
              >
                <option value="">Select Bus</option>
                <option value="TN01AB1234">TN01AB1234</option>
                <option value="TN01AB5678">TN01AB5678</option>
                {/* Add more buses as needed */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="driver" className="form-label">
                Driver
              </label>
              <select
                className="form-select"
                id="driver"
                name="driver"
                value={formData.driver}
                onChange={handleChange}
                required
              >
                <option value="">Select Driver</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
                {/* Add more drivers as needed */}
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

          {/* Right column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="tripDate" className="form-label">
                Trip Date
              </label>
              <input
                type="date"
                className="form-control"
                id="tripDate"
                name="tripDate"
                value={formData.tripDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="startTime" className="form-label">
                Start Time
              </label>
              <input
                type="time"
                className="form-control"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endTime" className="form-label">
                End Time
              </label>
              <input
                type="time"
                className="form-control"
                id="endTime"
                name="endTime"
                value={formData.endTime}
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
                <option value="Scheduled">Scheduled</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
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

export default AddTripEntry;
