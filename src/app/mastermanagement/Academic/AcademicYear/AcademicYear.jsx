import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddAcademicYear from "./AddAcademicYear/AddAcademicYear";
import './AcademicYear.css'

const AcademicYear = () => {
    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
    };

    const authors = [
        {
            yearName: "2023",
            yearDescription: "Focused on technology advancements and sustainability.",
            status: "active",
        },
        {
            yearName: "2024",
            yearDescription: "A year for global innovation and breakthroughs.",
            status: "active",
        },
    ];

    const column_table = [
        {
            display_name: 'Year Name',
            column: 'yearName'
        },
        {
            display_name: 'Year Description',
            column: 'yearDescription'
        },
        {
            display_name: 'Status',
            column: 'status'
        }
    ];

    return (
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Academic Year</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} Page={2} column={column_table}  Title={"Academic Year Table"} />

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Academic Year</h4>
                        <AddAcademicYear onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default AcademicYear;
