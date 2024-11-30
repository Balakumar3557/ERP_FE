import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddEducationalLevel from "./AddEducationalLevel/AddEducationalLevel";




const EducationalLevel = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };

    const authors = [
        {
          educationLevelName: "Undergraduate",
          educationDescription: "Basic degree program focusing on core subjects and practical knowledge.",
          status: "active",
        },
        {
          educationLevelName: "Postgraduate",
          educationDescription: "Advanced studies focusing on specialization and research in a particular field.",
          status: "active",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Education Level Name',
          column: 'educationLevelName'
        },
        {
          display_name: 'Education Description',
          column: 'educationDescription'
        },
        {
          display_name: 'Status',
          column: 'status'
        }
      ];
       

   


  return (
    <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Educational Level</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Educational Level"} />

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add EducationalLevel</h4>
                        <AddEducationalLevel onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default EducationalLevel
