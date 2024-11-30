import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddDriverDetails from "./AddDriverDetails/AddDriverDetails"; // Import AddDriverEntry component

function DriverDetails() {
    const [showModal, setShowModal] = useState(false);

    // Function to open the modal
    const handleAdd = () => setShowModal(true);

    // Function to close the modal
    const handleClose = () => setShowModal(false);

    // Function to handle submission of driver entry
    const handleDriverSubmit = (driverData) => {
        console.log("Driver Data Submitted:", driverData);
        // Logic to save the data (e.g., API call) can be added here
        setShowModal(false); // Close modal after submission
    };

    // Sample data for the table
    const driverEntries = [
        {
            driverID: "D001",
            fullName: "John Doe",
            photo: "photo1.jpg",
            mobileNumber: "9876543210",
            alternateContactNumber: "9123456789",
            emailAddress: "johndoe@example.com",
            permanentAddress: "123 Main Street, Cityville",
            currentAddress: "456 Another Street, Townsville",
            licenseNumber: "LIC12345",
            licenseType: "LMV",
            licenseExpiryDate: "2025-12-31",
            Uploadlicence: "license_doc.pdf",
            experience: "5 years",
            ExperienceInstitution: "XYZ Transport Services",
            employmentStartDate: "2020-01-01",
            employmentStatus: "Active",
            workSchedule: "Day Shift",
            languagesKnown: "English, Tamil",
            medicalFitness: "Fit",
            panAadharNumber: "ABC123456D",
            UploadpanAadharNumber: "panaadhar_doc.pdf",
            bloodGroup: "O+",
            dateOfBirth: "1990-05-15",
            Description: "Experienced and reliable driver.",
        },
    ];

    // Table columns configuration
    const column_table = [
        { display_name: "Driver ID", column: "driverID" },
        { display_name: "Full Name", column: "fullName" },
        { display_name: "Photo", column: "photo" },
        { display_name: "Mobile Number", column: "mobileNumber" },
        { display_name: "Alternate Contact", column: "alternateContactNumber" },
        { display_name: "Email Address", column: "emailAddress" },
        { display_name: "Permanent Address", column: "permanentAddress" },
        { display_name: "Current Address", column: "currentAddress" },
        { display_name: "License Number", column: "licenseNumber" },
        { display_name: "License Type", column: "licenseType" },
        { display_name: "License Expiry", column: "licenseExpiryDate" },
        { display_name: "Uploaded License", column: "Uploadlicence" },
        { display_name: "Experience", column: "experience" },
        { display_name: "Experience Institution", column: "ExperienceInstitution" },
        { display_name: "Employment Start Date", column: "employmentStartDate" },
        { display_name: "Employment Status", column: "employmentStatus" },
        { display_name: "Work Schedule", column: "workSchedule" },
        { display_name: "Languages Known", column: "languagesKnown" },
        { display_name: "Medical Fitness", column: "medicalFitness" },
        { display_name: "PAN/Aadhar Number", column: "panAadharNumber" },
        { display_name: "Uploaded PAN/Aadhar", column: "UploadpanAadharNumber" },
        { display_name: "Blood Group", column: "bloodGroup" },
        { display_name: "Date of Birth", column: "dateOfBirth" },
        { display_name: "Description", column: "Description" },
    ];

    return (
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Driver Management</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the driver entries in a table format */}
            <Genetable
                data={driverEntries}
                filterEnabled={false}
                column={column_table}
                Title={"Driver Table"}
            />

            {/* Custom Modal for adding driver entry */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>
                            &times;
                        </span>
                        <h4>Add Driver Entry</h4>
                        <AddDriverDetails onSubmit={handleDriverSubmit} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default DriverDetails;
