import React, { useState } from 'react';

const AddFoodTypeName = () => {
  const [formData, setFormData] = useState({
    foodTypeName: "",
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
    console.log("Form Data:", formData);
    // Add your submission logic here
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="foodTypeName" className="form-label">Food Type Name</label>
          <input
            type="text"
            className="form-control"
            id="foodTypeName"
            name="foodTypeName"
            value={formData.foodTypeName}
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
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

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

        <div className="text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddFoodTypeName;
