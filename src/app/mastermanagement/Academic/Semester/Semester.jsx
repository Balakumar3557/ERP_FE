import React, { useState } from "react";
import Genetable from '../../../layouts/Genetable/Genetable';
import AddSemester from "./AddSemester/AddSemester"; // Import AddRoomAllocation component
import './Semester.css'; // Import custom CSS for modal styling

function Semester() {
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
            Year: "2024-2025",
            SemesterNo: "2",
            StartDate:"1-01-2024",
            EndDate:"31-12-2024",
            Description: "curent",
            status: "active",
        },
        {
            Year: "2024-2025",
            SemesterNo: "2",
            StartDate:"1-01-2024",
            EndDate:"31-12-2024",
            Description: "curent",
            status: "active",
        },
        // ... additional authors can be added here
    ];

    const column_table = [
        {
            display_name: 'Year',
            column: 'Year'
        },
        {
            display_name: 'Semester No',
            column: 'SemesterNo'
        },
       
        
        {
            display_name: 'Start Date',
            column: 'StartDate'
        }
        ,
        {
            display_name: 'End Date',
            column: 'EndDate'
        }
        ,
        {
            display_name: 'status',
            column: 'status'
        }
        ,
        {
            display_name: 'Description',
            column: 'Description'
        }
    ];

    return (
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Semester Management</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Semester Table"}/>

            {/* Custom Modal for adding city allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Semester</h4>
                        <AddSemester onSubmit={handleCitySubmit} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Semester;
