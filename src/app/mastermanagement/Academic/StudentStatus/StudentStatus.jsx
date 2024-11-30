import React, { useState } from "react";
import Genetable from '../../../layouts/Genetable/Genetable';
import AddStudentStatus from "./AddStudentStatus/AddStudentStatus";// Import AddRoomAllocation component
import './StudentStatus'; // Import custom CSS for modal styling

function StudentStatus() {
    const [showModal, setShowModal] = useState(false);

    // Function to open the modal
    const handleAdd = () => setShowModal(true);
    
    // Function to close the modal
    const handleClose = () => setShowModal(false);

    // Function to handle submission of city allocation
    const handleStudentStatusSubmit = (roomData) => {
        console.log("City Data Submitted:", roomData);
        // Here you can add logic to save the data (e.g., API call)
        setShowModal(false); // Close modal after submission
    };

    // Sample data for the table
    const authors = [
        {
            studentstatus: "John Michael",
           
            status: "Online",
            
            description: "team",
        },
        {
            studentstatus: "John Michael",
           
            status: "Online",
            
            description: "team",
        },
        // ... additional authors can be added here
    ];

    const column_table = [
        {
            display_name: 'student status',
            column: 'studentstatus'
        },
       
        {
            display_name: 'status',
            column: 'status'
        },
        {
            display_name: 'Description',
            column: 'description'
        }
    ];

    return (
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">student status</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"student status Table"}/>

            {/* Custom Modal for adding city allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add student status</h4>
                        <AddStudentStatus onSubmit={handleStudentStatusSubmit} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default StudentStatus;
