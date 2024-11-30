import React, { useState } from "react";
import Genetable from '../../../layouts/Genetable/Genetable';
import AddRouteCreation from "./AddRouteCreation/AddRouteCreation"; // Import AddRouteCreation component
// import './RouteCreation.css'; // Import custom CSS for modal styling

function RouteCreation() {
    const [showModal, setShowModal] = useState(false);

    // Function to open the modal
    const handleAdd = () => setShowModal(true);
    
    // Function to close the modal
    const handleClose = () => setShowModal(false);

    // Function to handle submission of route data
    const handleRouteSubmit = (routeData) => {
        console.log("Route Data Submitted:", routeData);
        // Here you can add logic to save the data (e.g., API call)
        setShowModal(false); // Close modal after submission
    };

    // Sample data for the table
    const routes = [
        {
            routeName: "Route 1",
            startPoint: "Location A",
            endPoint: "Location B",
            numberOfStages:"8",
            description: "Primary route",
            status: "Active",
        },
        // ... additional route data can be added here
    ];

    const column_table = [
        { display_name: 'Route Name', column: 'routeName' },
        { display_name: 'Start Point', column: 'startPoint' },
        { display_name: 'End Point', column: 'endPoint' },
        { display_name: 'Number Of Stages', column: 'numberOfStages' },
        { display_name: 'Description', column: 'description' },
        { display_name: 'Status', column: 'status' },
    ];

    return (
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Route Management</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New Route
                </button>
            </div>

            {/* Display the routes in a table format */}
            <Genetable data={routes} filterEnabled={false} column={column_table} Title={"Route Table"} />

            {/* Custom Modal for adding route */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Route</h4>
                        <AddRouteCreation onSubmit={handleRouteSubmit} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default RouteCreation;
