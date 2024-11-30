import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddDesignation from "./AddDesignation/AddDesignation";




const Designation= () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };

    const authors = [
        {
          designationName: "Software Engineer",
          designationDescription: "Responsible for designing, developing, and maintaining software.",
          status: "active",
        },
        {
          designationName: "Project Manager",
          designationDescription: "Oversees project planning, execution, and completion.",
          status: "active",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Designation Name',
          column: 'designationName'
        },
        {
          display_name: 'Designation Description',
          column: 'designationDescription'
        },
        {
          display_name: 'Status',
          column: 'status'
        }
      ];
      
    

   
  return (
    <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Designation</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} Page={2} column={column_table} Title={"Designation Table"} />

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Designation</h4>
                        <AddDesignation onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default Designation;
