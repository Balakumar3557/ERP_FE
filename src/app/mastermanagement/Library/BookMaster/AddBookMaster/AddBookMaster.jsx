import React, { useState } from "react";

const AddBookMaster = () => {
  const [formData, setFormData] = useState({
    libraryName: "",
    title: "",
    subTitle: "",
    noCopy: "",
    edition: "",
    isbnNo: "",
    price: "",
    billNo: "",
    publisher: "",
    noPages: "",
    year: "",
    sources: "",
    location: "",
    authorName: "",
    lostAmt: "",
    status: "available",
    description: "",
  });

  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => setActiveTab((prev) => prev + 1);
  const handlePrevious = () => setActiveTab((prev) => prev - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
   
  };

  
  const sections = [
    {
      heading: "Book Details",
      fields: [
        { id: "libraryName", label: "Select Library Name", type: "select", options: ["Library 1", "Library 2"] },
        { id: "title", label: "Select Title", type: "select", options: ["Title 1", "Title 2"] },
        { id: "subTitle", label: "Sub Title", type: "text", placeholder: "Enter Sub Title" },
        { id: "noCopy", label: "No Copy", type: "number", placeholder: "Enter Number of Copies" },
        { id: "edition", label: "Edition", type: "text", placeholder: "Enter Edition" },
        { id: "isbnNo", label: "ISBN No", type: "text", placeholder: "Enter ISBN No" },
      ],
    },
    {
      heading: "Publisher",
      fields: [
        { id: "price", label: "Price", type: "number", placeholder: "Enter Price" },
        { id: "location", label: "Location", type: "text", placeholder: "Enter Location" },
        { id: "publisher", label: "Publisher", type: "text", placeholder: "Enter Publisher" },
        { id: "noPages", label: "No Pages", type: "number", placeholder: "Enter Number of Pages" },
        { id: "year", label: "Year", type: "number", placeholder: "Enter Year" },
        { id: "sources", label: "Sources", type: "text", placeholder: "Enter Sources" },
      ],
    },
    {
      heading: "Source",
      fields: [
       
        { id: "authorName", label: "Author Name", type: "text", placeholder: "Enter Author Name" },
        { id: "lostAmt", label: "Lost Amount", type: "number", placeholder: "Enter Lost Amount" },
        { id: "status", label: "Status", type: "select", options: ["Available", "Not Available"] },
        { id: "description", label: "Description", type: "text", placeholder: "Enter Description" },
      ],
    },
  ];

  return (
    <div className="container mt-4">
      <div className="tabs mb-4">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`btn btn-${activeTab === index ? "primary" : "outline-primary"} mx-2`}
            onClick={() => setActiveTab(index)}
          >
            {section.heading}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          {sections[activeTab].fields.map((field) => (
            <div className="col-md-6 mb-3" key={field.id}>
              <label htmlFor={field.id} className="form-label">
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  className="form-select"
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required
                >
                  <option value="">{field.label}</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  className="form-control"
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  rows="3"
                  required
                />
              ) : (
                <input
                  type={field.type}
                  className="form-control"
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                />
              )}
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between">
          {activeTab > 0 && (
            <button type="button" className="btn btn-secondary" onClick={handlePrevious}>
              Previous
            </button>
          )}
          {activeTab < sections.length - 1 ? (
            <button type="button" className="btn btn-primary" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddBookMaster;
