import React, { useState } from "react";

function AddDriverDetails({ onSubmit }) {
  const [formData, setFormData] = useState({
    driverID: "",
    fullName: "",
    dateOfBirth: "",
    photo: "",
    mobileNumber: "",
    alternateContactNumber: "",
    emailAddress: "",
    permanentAddress: "",
    emergencyContact: "",
    licenseNumber: "",
    licenseType: "",
    licenseExpiryDate: "",
    issuingAuthority: "",
    employmentStartDate: "",
    employmentStatus: "Active",
    workSchedule: "",
    experience: "",
    policeVerificationStatus: "Not Verified",
    trainingCertification: "",
    medicalFitness: "",
    panAadharNumber: "",
    languagesKnown: "",
    bloodGroup: "",
    bankAccountDetails: "",
    description: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    onSubmit(formData); // Pass form data to parent
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${currentStep === 1 ? "active" : ""}`}
            onClick={() => setCurrentStep(1)}
          >
            Personal Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${currentStep === 2 ? "active" : ""}`}
            onClick={() => setCurrentStep(2)}
          >
            License & Experience
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${currentStep === 3 ? "active" : ""}`}
            onClick={() => setCurrentStep(3)}
          >
            Employment Details
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${currentStep === 4 ? "active" : ""}`}
            onClick={() => setCurrentStep(4)}
          >
            Final Details
          </button>
        </li>
      </ul>

      <form onSubmit={handleSubmit}>
        <div className="tab-content mt-3">
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="row">
              {/* Left column */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="driverID" className="form-label">
                    Driver ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="driverID"
                    name="driverID"
                    value={formData.driverID}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="CurrentAddress" className="form-label">
                    Current Address
                  </label>
                  <textarea
                    className="form-control"
                    id="CurrentAddress"
                    name="CurrentAddress"
                    value={formData.CurrentAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="photo" className="form-label">
                    Photo
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="photo"
                    name="photo"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailAddress" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="alternateContactNumber"
                    className="form-label"
                  >
                    Alternate Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="alternateContactNumber"
                    name="alternateContactNumber"
                    value={formData.alternateContactNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="permanentAddress" className="form-label">
                    Permanent Address
                  </label>
                  <textarea
                    className="form-control"
                    id="permanentAddress"
                    name="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: License Details */}
          {currentStep === 2 && (
            <div className="row">
              {/* Left column */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="licenseNumber" className="form-label">
                    License Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="licenseNumber"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="licenseType" className="form-label">
                    License Type
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="licenseType"
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="licenseExpiryDate" className="form-label">
                    License Expiry Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="licenseExpiryDate"
                    name="licenseExpiryDate"
                    value={formData.licenseExpiryDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="licenseDocument" className="form-label">
                    License Document
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="licenseDocument"
                    name="licenseDocument"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="experience" className="form-label">
                    Experience (years)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="experienceInstitution" className="form-label">
                    Experience Institution
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="experienceInstitution"
                    name="experienceInstitution"
                    value={formData.experienceInstitution}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Employment Details */}
          {currentStep === 3 && (
            <>
              <div className="mb-3">
                <label htmlFor="employmentStartDate" className="form-label">
                  Employment Start Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="employmentStartDate"
                  name="employmentStartDate"
                  value={formData.employmentStartDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="employmentStatus" className="form-label">
                  Employment Status
                </label>
                <select
                  className="form-control"
                  id="employmentStatus"
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="workSchedule" className="form-label">
                  Work Schedule
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="workSchedule"
                  name="workSchedule"
                  value={formData.workSchedule}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {/* Step 5: Final Details */}
          {currentStep === 4 && (
            <div className="row">
              {/* Left column */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="languagesKnown" className="form-label">
                    Languages Known
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="languagesKnown"
                    name="languagesKnown"
                    value={formData.languagesKnown}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="panAadharNumber" className="form-label">
                    PAN Card / Aadhar Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="panAadharNumber"
                    name="panAadharNumber"
                    value={formData.panAadharNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dateOfBirth" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bloodGroup" className="form-label">
                    Blood Group
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bloodGroup"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="medicalFitness" className="form-label">
                    Medical Fitness
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="medicalFitness"
                    name="medicalFitness"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="panAadharNumber" className="form-label">
                    PAN Card / Aadhar Number
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="panAadharNumber"
                    name="panAadharNumber"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bankAccountDetails" className="form-label">
                    Bank Account Details
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bankAccountDetails"
                    name="bankAccountDetails"
                    value={formData.bankAccountDetails}
                    onChange={handleChange}
                  />
                </div>

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
                  />
                </div>
              </div>
            </div>
          )}

          <div className="d-flex justify-content-between">
            {currentStep > 1 && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={prevStep}
              >
                Previous
              </button>
            )}
            {currentStep < 4 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={nextStep}
              >
                Next
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDriverDetails;
