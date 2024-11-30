import React, { useState } from "react";
import Genetable from '../../../layouts/Genetable/Genetable';
import AddGrade from "./AddGrade/AddGrade";
import './Grade.css'; // Import custom CSS for modal styling

function Grade() {
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
        FromMark: "90",
        ToMark: "100",
        Grade: "A",
        GradePoint: "9",
        Description: "current",
        status: "active",
      },
      {
        FromMark: "90",
        ToMark: "100",
        Grade: "A",
        GradePoint: "9",
        Description: "current",
        status: "active",
      },
      // ... additional authors can be added here
    ];

    const column_table = [
        {
            display_name: 'From Mark',
            column: 'FromMark'
        },
        {
            display_name: 'To Mark',
            column: 'ToMark'
        },
        {
            display_name: 'Grade',
            column: 'Grade'
        },
        {
            display_name: 'Grade Point',
            column: 'GradePoint'
        },
        {
            display_name: 'Description',
            column: 'Description'
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
                <h2 className="h2 font-weight-bolder text-white mb-0">Grade Management</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Grade Table"}/>

            {/* Custom Modal for adding city allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Grade</h4>
                        <AddGrade onSubmit={handleCitySubmit} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Grade;
