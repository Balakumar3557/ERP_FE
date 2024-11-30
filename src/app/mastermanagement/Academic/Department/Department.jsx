import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddDepartment from "./AddDepartment/AddDepartment";




const Department = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };

    const authors = [
        {
          selectEducation: "UG",
          selectDegree: "B.Sc",
          departmentName: "Computer Science",
          departmentCode: "CS101",
          departmentDescription: "Focuses on computer systems and programming.",
          status: "active",
        },
        {
          selectEducation: "UG",
          selectDegree: "B.Com",
          departmentName: "Commerce",
          departmentCode: "COM202",
          departmentDescription: "Covers accounting, finance, and business studies.",
          status: "active",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Education Level',
          column: 'selectEducation'
        },
        {
          display_name: 'Degree',
          column: 'selectDegree'
        },
        {
          display_name: 'Department Name',
          column: 'departmentName'
        },
        {
          display_name: 'Department Code',
          column: 'departmentCode'
        },
        {
          display_name: 'Department Description',
          column: 'departmentDescription'
        },
        {
          display_name: 'Status',
          column: 'status'
        }
      ];
      

  return (
    <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Adding Department</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} />

             {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Department</h4>
                        <AddDepartment onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default Department
