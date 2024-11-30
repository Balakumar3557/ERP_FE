import React, { useState } from "react";
import Genetable from '../../../layouts/Genetable/Genetable';
import AddTripEntry from "./AddTripEntry/AddTripEntry"; // Import AddTripEntry component
// import './TripEntry.css'; // Import custom CSS for modal styling

function TripEntry() {
    const [showModal, setShowModal] = useState(false);

    // Function to open the modal
    const handleAdd = () => setShowModal(true);

    // Function to close the modal
    const handleClose = () => setShowModal(false);

    // Function to handle submission of trip details
    const handleTripSubmit = (tripData) => {
        console.log("Trip Data Submitted:", tripData);
        // Add logic to save the data (e.g., API call)
        setShowModal(false); // Close modal after submission
    };

    // Sample data for the table
    const tripEntries = [
        {
            trip: "Trip 1",
            route: "Route 1",
            bus: "TN01AB1234",
            driver: "John Doe",
            tripDate: "2024-11-01",
            startTime: "08:00 AM",
            endTime: "10:00 AM",
            status: "Completed",
        },
        {
            trip: "Trip 2",
            route: "Route 2",
            bus: "TN01AB5678",
            driver: "Jane Smith",
            tripDate: "2024-11-02",
            startTime: "09:00 AM",
            endTime: "11:00 AM",
            status: "Scheduled",
        },
        // ... additional trip entries can be added here
    ];

    const column_table = [
        {
            display_name: 'Trip ID',
            column: 'trip'
        },
        {
            display_name: 'Route',
            column: 'route'
        },
        {
            display_name: 'Bus',
            column: 'bus'
        },
        {
            display_name: 'Driver',
            column: 'driver'
        },
        {
            display_name: 'Trip Date',
            column: 'tripDate'
        },
        {
            display_name: 'Start Time',
            column: 'startTime'
        },
        {
            display_name: 'End Time',
            column: 'endTime'
        },
        {
            display_name: 'Status',
            column: 'status'
        }
    ];

    return (
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Trip Management</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the trip entries in a table format */}
            <Genetable data={tripEntries} filterEnabled={false} column={column_table} Title={"Trip Table"} />

            {/* Custom Modal for adding trip details */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Trip Details</h4>
                        <AddTripEntry onSubmit={handleTripSubmit} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default TripEntry;
