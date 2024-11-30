import React, { useState } from "react";
import Genetable from '../../../layouts/Genetable/Genetable';
import AddTripChangeEntry from "./AddTripChangeEntry/AddTripChangeEntry"; // Import AddTripChangeEntry component
// import './TripChangeEntry.css'; // Import custom CSS for modal styling

function TripChangeEntry() {
    const [showModal, setShowModal] = useState(false);

    // Function to open the modal
    const handleAdd = () => setShowModal(true);

    // Function to close the modal
    const handleClose = () => setShowModal(false);

    // Function to handle submission of trip change details
    const handleTripChangeSubmit = (tripChangeData) => {
        console.log("Trip Change Data Submitted:", tripChangeData);
        // Add logic to save the data (e.g., API call)
        setShowModal(false); // Close modal after submission
    };

    // Sample data for the table
    const tripChangeEntries = [
        {
            trip: "Trip 1",
            newDriver: "Alice Johnson",
            newBus: "TN01XY1234",
            reason: "Driver unavailable",
            status: "Approved",
        },
        {
            trip: "Trip 2",
            newDriver: "Bob Smith",
            newBus: "TN02AB5678",
            reason: "Bus maintenance",
            status: "Pending",
        },
        // ... additional trip change entries can be added here
    ];

    const column_table = [
        {
            display_name: 'Trip',
            column: 'trip'
        },
        {
            display_name: 'New Driver',
            column: 'newDriver'
        },
        {
            display_name: 'New Bus',
            column: 'newBus'
        },
        {
            display_name: 'Reason for Change',
            column: 'reason'
        },
        {
            display_name: 'Status',
            column: 'status'
        }
    ];

    return (
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Trip Change Management</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the trip change entries in a table format */}
            <Genetable data={tripChangeEntries} filterEnabled={false} column={column_table} Title={"Trip Change Table"} />

            {/* Custom Modal for adding trip change details */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Trip Change Details</h4>
                        <AddTripChangeEntry onSubmit={handleTripChangeSubmit} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default TripChangeEntry;
