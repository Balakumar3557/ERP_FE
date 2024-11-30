import React, { useState } from "react";

const AddBookSubTitle = () => {
  const [formData, setFormData] = useState({
    title: "",
    subTitleName: "",
    status: "active",
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
        <div className="row">
         
          <div className="col-md-6 mb-3">
            <label htmlFor="title" className="form-label">
              Select Title
            </label>
            <select
              className="form-select"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            >
              <option value="">Choose Title</option>
              <option value="title1">Title 1</option>
              <option value="title2">Title 2</option>
              <option value="title3">Title 3</option>
            </select>
          </div>

          {/* Sub Title Name */}
          <div className="col-md-6 mb-3">
            <label htmlFor="subTitleName" className="form-label">
              Sub Title Name
            </label>
            <input
              type="text"
              className="form-control"
              id="subTitleName"
              name="subTitleName"
              value={formData.subTitleName}
              onChange={handleChange}
              placeholder="Enter Sub Title Name"
              required
            />
          </div>

          {/* Status */}
          <div className="col-md-6 mb-3">
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
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
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
              placeholder="Enter Description"
              required
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookSubTitle;
