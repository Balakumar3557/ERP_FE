import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddVehicleEntry from "./AddVehicleEntry/AddVehicleEntry"; // Import AddVehicleEntry component

function VehicleEntry() {
    const [showModal, setShowModal] = useState(false);

    // Function to open the modal
    const handleAdd = () => setShowModal(true);

    // Function to close the modal
    const handleClose = () => setShowModal(false);

    // Function to handle submission of vehicle entry
    const handleVehicleSubmit = (vehicleData) => {
        console.log("Vehicle Data Submitted:", vehicleData);
        // Logic to save the data (e.g., API call) can be added here
        setShowModal(false); // Close modal after submission
    };

    // Sample data for the table
    const vehicleEntries = [
        {
            vehicleNumber: "TN01ZC5678",
            capacity: "20",
            vehicleType: "Mini Bus",
            vehicleMake: "Ford",
            vehicleModel: "Transit",
            registrationNo: "REG12345",
            status: "Active",
            ownership: "Owned",
            contractorName: "",
            contractStartDate: "",
            contractEndDate: "",
            documentType: "Insurance",
            uploadFile: "insurance_doc.pdf",
        },
        {
            vehicleNumber: "TN02XY1234",
            capacity: "50",
            vehicleType: "Coach",
            vehicleMake: "Volvo",
            vehicleModel: "B11R",
            registrationNo: "REG67890",
            status: "Inactive",
            ownership: "Contracted",
            contractorName: "John Doe",
            contractStartDate: "2023-01-01",
            contractEndDate: "2023-12-31",
        },
    ];

    // Column configuration for the table
    const column_table = [
        { display_name: "Vehicle Number", column: "vehicleNumber" },
        { display_name: "Capacity", column: "capacity" },
        { display_name: "Vehicle Type", column: "vehicleType" },
        { display_name: "Ownership", column: "ownership" },
        { display_name: "Vehicle Make", column: "vehicleMake" },
        { display_name: "Vehicle Model", column: "vehicleModel" },
        { display_name: "Registration No", column: "registrationNo" },
        { display_name: "Status", column: "status" },
        { display_name: "Contractor Name", column: "contractorName" },
        { display_name: "Contract Start Date", column: "contractStartDate" },
        { display_name: "Contract End Date", column: "contractEndDate" },
        { display_name: "Document Type", column: "documentType" },
        { display_name: "Uploaded File", column: "uploadFile" },
    ];

    return (
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Vehicle Management</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the vehicle entries in a table format */}
            <Genetable
                data={vehicleEntries}
                filterEnabled={true}
                column={column_table}
                Title={"Vehicle Table"}
                Page={2}
            />

            {/* Custom Modal for adding vehicle entry */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>
                            &times;
                        </span>
                        <h4>Add Vehicle Entry</h4>
                        <AddVehicleEntry onSubmit={handleVehicleSubmit} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default VehicleEntry;
