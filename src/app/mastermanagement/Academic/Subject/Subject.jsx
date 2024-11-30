import React, { useState } from "react";
import Genetable from '../../../layouts/Genetable/Genetable';
import AddSubject from "./AddSubject/AddSubject";// Import AddRoomAllocation component
import './Subject.css'; // Import custom CSS for modal styling

function Subject() {
    const [showModal, setShowModal] = useState(false);

    // Function to open the modal
    const handleAdd = () => setShowModal(true);
    
    // Function to close the modal
    const handleClose = () => setShowModal(false);

    // Function to handle submission of city allocation
    const handleCitySubmit = (roomData) => {
        console.log("City Data Submitted:", roomData);
        // Here you can add logic to save the data (e.g., API call)
        setShowModal(false); // Close modal after submission
    };

    // Sample data for the table
    const authors = [
        {
            degree: "BE",
            department: "Cse",
            semester: "1st",
            SubjectCode: "101",
            SubjectName: "maths",
            status: "active",
            description: "current",
        },
        {
           
            degree: "BE",
            department: "Cse",
            semester: "1st",
            SubjectCode: "101",
            SubjectName: "maths",
            status: "active",
            description: "current",
        },
        // ... additional authors can be added here
    ];

    const column_table = [
        {
            display_name: 'degree',
            column: 'degree'
        },
        {
            display_name: 'department',
            column: 'department'
        },
        {
            display_name: 'semester',
            column: 'semester'
        },
        {
            display_name: 'SubjectCode',
            column: 'SubjectCode'
        },
        {
            display_name: 'SubjectName',
            column: 'SubjectName'
        },
        {
            display_name: 'Description',
            column: 'description'
        }
        ,
       
        {
            display_name: 'status',
            column: 'status'
        }
    ];

    return (
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Subject Management</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Subject Table"}/>

            {/* Custom Modal for adding city allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Subject</h4>
                        <AddSubject onSubmit={handleCitySubmit} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Subject;
