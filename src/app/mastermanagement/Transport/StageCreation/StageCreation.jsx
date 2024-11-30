import React, { useState } from "react";
import Genetable from '../../../layouts/Genetable/Genetable';
import AddStageCreation from "./AddStageCreation/AddStageCreation";
// import './StageCreation.css';

function StageCreation() {
    const [showModal, setShowModal] = useState(false);

    // Function to open the modal
    const handleAdd = () => setShowModal(true);
    
    // Function to close the modal
    const handleClose = () => setShowModal(false);

    // Function to handle submission of stage creation
    const handleStageSubmit = (stageData) => {
        console.log("Stage Data Submitted:", stageData);
        // Add logic to save data (e.g., API call)
        setShowModal(false); // Close modal after submission
    };

    // Sample data for the table
    const stages = [
        {
            route: "Route 1",
            stageName: "Stage A",
            stageOrder: "1",
            status: "Active",
        },
        {
            route: "Route 2",
            stageName: "Stage B",
            stageOrder: "2",
            status: "Inactive",
        },
        // Additional data can be added here
    ];

    const column_table = [
        { display_name: 'Route', column: 'route' },
        { display_name: 'Stage Name', column: 'stageName' },
        { display_name: 'Stage Order', column: 'stageOrder' },
        { display_name: 'Status', column: 'status' },
    ];

    return (
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Stage Management</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New Stage
                </button>
            </div>

            {/* Display the stages in a table format */}
            <Genetable data={stages} filterEnabled={false} column={column_table} Title={"Stage Table"} />

            {/* Modal for adding stage creation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Stage</h4>
                        <AddStageCreation onSubmit={handleStageSubmit} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default StageCreation;
