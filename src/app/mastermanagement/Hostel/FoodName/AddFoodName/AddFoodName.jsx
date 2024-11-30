import React, { useState } from 'react';

const AddFoodName = () => {
  const [formData, setFormData] = useState({
    foodType: "",
    foodCategory: "",
    foodName: "",
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
      <div className="row"> 
      <div className="col-md-6">
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
            <option value="">Choose Food Type</option>
            <option value="veg">Vegetarian</option>
            <option value="nonVeg">Non-Vegetarian</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="foodName" className="form-label">Food Name</label>
          <input
            type="text"
            className="form-control"
            id="foodName"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            placeholder="Enter food name"
            required
          />
        </div>
       
</div>
<div className="col-md-6">
       
        <div className="mb-3">
          <label htmlFor="foodCategory" className="form-label">Select Food Category</label>
          <select
            className="form-select"
            id="foodCategory"
            name="foodCategory"
            value={formData.foodCategory}
            onChange={handleChange}
            required
          >
            <option value="">Choose Food Category</option>
            <option value="Tiffin">Tiffin</option>
            <option value="Rice">Rice</option>
            <option value="Curry">Curry</option>
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
           
            placeholder="Enter description"
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
            required
          >
            <option value="">Select Status</option>
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
  );
};

export default AddFoodName;
