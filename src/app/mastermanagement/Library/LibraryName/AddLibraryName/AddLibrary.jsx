import React, { useState } from 'react';

const AddLibrary = () => {
  const [formData, setFormData] = useState({
    libraryName: "",
    status: "",
    description: "",
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
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
     
        <div className="mb-3">
          <label htmlFor="libraryName" className="form-label">Library Name</label>
          <input
            type="text"
            className="form-control"
            id="libraryName"
            name="libraryName"
            value={formData.libraryName}
            onChange={handleChange}
            required
          />
        </div>

       
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            className="form-select"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        {/* Field 3: Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddLibrary;
