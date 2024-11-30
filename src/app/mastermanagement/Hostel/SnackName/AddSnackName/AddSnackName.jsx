import React, { useState } from 'react';

const AddSnackName = () => {
  const [formData, setFormData] = useState({
    foodType: "",
    snackName: "",
    description: "",
    status: "",
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
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      
        <div className="mb-3">
          <label htmlFor="foodType" className="form-label">Select Food Type</label>
          <select
            className="form-select"
            id="foodType"
            name="foodType"
            value={formData.foodType}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Vegan">Vegan</option>
          </select>
        </div>

      
        <div className="mb-3">
          <label htmlFor="snackName" className="form-label">Snack Name</label>
          <input
            type="text"
            className="form-control"
            id="snackName"
            name="snackName"
            value={formData.snackName}
            onChange={handleChange}
            required
          />
        </div>

        
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
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
            
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddSnackName;