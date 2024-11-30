import React, { useState } from "react";

function VehicleEntryForm({ onOwnershipChange, onSubmit }) {
  const [formData, setFormData] = useState({
    vehicleNumber: "",
    vehicleType: "",
    vehicleMake: "",
    vehicleModel: "",
    registrationNo: "",
    capacity: "",
    ownership: "Owned",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "ownership") {
      onOwnershipChange(value); // Notify parent about ownership change
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vehicle Entry Form submitted with data: ", formData);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="vehicleNumber" className="form-label">
              Vehicle Number
            </label>
            <input
              type="text"
              className="form-control"
              id="vehicleNumber"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="vehicleType" className="form-label">
              Vehicle Type
            </label>
            <input
              type="text"
              className="form-control"
              id="vehicleType"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="vehicleMake" className="form-label">
              Vehicle Make
            </label>
            <input
              type="text"
              className="form-control"
              id="vehicleMake"
              name="vehicleMake"
              value={formData.vehicleMake}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="vehicleModel" className="form-label">
              Vehicle Model
            </label>
            <input
              type="text"
              className="form-control"
              id="vehicleModel"
              name="vehicleModel"
              value={formData.vehicleModel}
              onChange={handleChange}
              required
            />
          </div>
        
        
        
        </div>
        <div className="col-md-6">
       
        
          <div className="mb-3">
            <label htmlFor="registrationNo" className="form-label">
              Registration No.
            </label>
            <input
              type="text"
              className="form-control"
              id="registrationNo"
              name="registrationNo"
              value={formData.registrationNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="capacity" className="form-label">
              Capacity
            </label>
            <input
              type="number"
              className="form-control"
              id="capacity"
              name="capacity"
              value={formData.capacity}
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
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
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
      <div className="mb-3">
        <label htmlFor="ownership" className="form-label">
          Ownership
        </label>
        <select
          className="form-select"
          id="ownership"
          name="ownership"
          value={formData.ownership}
          onChange={handleChange}
        >
          <option value="Owned">Owned</option>
          <option value="Contracted">Contracted</option>
        </select>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary mt-4">
          Next
        </button>
      </div>
    </form>
  );
}

function DocumentationForm({ onBack, onSubmit }) {
  const [formData, setFormData] = useState({
    documentType: "",
    documentFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Documentation Form submitted with data: ", formData);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
    {/* Document Type */}
    <div className="row">
    <div className="col-md-6">
    <div className="mb-3">
 
      <label htmlFor="documentType" className="form-label">
        Document Type
      </label>
      <select
        className="form-select"
        id="documentType"
        name="documentType"
        value={formData.documentType}
        onChange={handleChange}
        required
      >
        <option value="">Select Document Type</option>
        <option value="vehicleRegistration">Vehicle Registration</option>
        <option value="insurancePolicy">Insurance Policy</option>
        <option value="roadPermit">Road Permit</option>
        <option value="pollutionCertificate">Pollution Under Control (PUC)</option>
        <option value="fitnessCertificate">Fitness Certificate</option>
        <option value="serviceRecord">Service Record</option>
        <option value="warranty">Warranty Document</option>
        <option value="taxReceipt">Tax Payment Receipt</option>
        <option value="driverLicense">Driver License</option>
        <option value="emergencyKit">Emergency Kit Certification</option>
        <option value="accidentHistory">Accident History</option>
        <option value="loadCertification">Load Certification</option>
      </select>
    </div>
  
    {/* Document File Upload */}
    <div className="mb-3">
      <label htmlFor="documentFile" className="form-label">
        Upload Document
      </label>
      <input
        type="file"
        className="form-control"
        id="documentFile"
        name="documentFile"
        onChange={handleChange}
        required
      />
    </div>
  </div>
  <div className="col-md-6">
    {/* Issued Date */}
    <div className="mb-3">
      <label htmlFor="issuedDate" className="form-label">
        Issued Date
      </label>
      <input
        type="date"
        className="form-control"
        id="issuedDate"
        name="issuedDate"
        value={formData.issuedDate}
        onChange={handleChange}
        required
      />
    </div>
  
    {/* Expiry Date */}
    <div className="mb-3">
      <label htmlFor="expiryDate" className="form-label">
        Expiry Date
      </label>
      <input
        type="date"
        className="form-control"
        id="expiryDate"
        name="expiryDate"
        value={formData.expiryDate}
        onChange={handleChange}
        required
      />
    </div>
    </div>
    </div>
  
    
  
    {/* Action Buttons */}
    <div className="d-flex justify-content-between">
      <button type="button" className="btn btn-secondary" onClick={onBack}>
        Back
      </button>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  </form>
  
  );
}

function ContractorDetailsForm({ onBack, onSubmit }) {
  const [formData, setFormData] = useState({
    contractorName: "",
    contractStartDate: "",
    contractEndDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contractor Details Form submitted with data: ", formData);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="contractorName" className="form-label">
          Contractor Name
        </label>
        <input
          type="text"
          className="form-control"
          id="contractorName"
          name="contractorName"
          value={formData.contractorName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contractStartDate" className="form-label">
          Contract Start Date
        </label>
        <input
          type="date"
          className="form-control"
          id="contractStartDate"
          name="contractStartDate"
          value={formData.contractStartDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contractEndDate" className="form-label">
          Contract End Date
        </label>
        <input
          type="date"
          className="form-control"
          id="contractEndDate"
          name="contractEndDate"
          value={formData.contractEndDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

function AddVehicleEntry() {
  const [activeTab, setActiveTab] = useState(0);
  const [ownership, setOwnership] = useState("Owned");

  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 0 ? "active" : ""}`}
            onClick={() => setActiveTab(0)}
          >
            Vehicle Entry
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 1 ? "active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            {ownership === "Owned" ? "Documentation" : "Contractor Details"}
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3">
        {activeTab === 0 && (
          <VehicleEntryForm
            onOwnershipChange={setOwnership}
            onSubmit={(data) => {
              console.log("Vehicle Data: ", data);
              setActiveTab(1);
            }}
          />
        )}
        {activeTab === 1 &&
          (ownership === "Owned" ? (
            <DocumentationForm
              onBack={() => setActiveTab(0)}
              onSubmit={(data) => {
                console.log("Documentation Data: ", data);
                alert("Vehicle Entry Completed!");
              }}
            />
          ) : (
            <ContractorDetailsForm
              onBack={() => setActiveTab(0)}
              onSubmit={(data) => {
                console.log("Contractor Data: ", data);
                alert("Vehicle Entry Completed!");
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default AddVehicleEntry;
