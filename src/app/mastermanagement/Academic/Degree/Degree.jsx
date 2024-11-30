import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddDegree from "./AddDegree/AddDegree";




const Degree = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };
    const authors = [
        {
          selectEducationLevel: "UG",
          noYears: "3",
          degreeName: "Bachelor of Science",
          degreeDescription: "An undergraduate program focusing on scientific principles.",
          status: "active",
        },
        {
          selectEducationLevel: "PG",
          noYears: "2",
          degreeName: "Master of Technology",
          degreeDescription: "A postgraduate program in advanced technical studies.",
          status: "active",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Education Level',
          column: 'selectEducationLevel'
        },
        {
          display_name: 'Number of Years',
          column: 'noYears'
        },
        {
          display_name: 'Degree Name',
          column: 'degreeName'
        },
        {
          display_name: 'Degree Description',
          column: 'degreeDescription'
        },
        {
          display_name: 'Status',
          column: 'status'
        }
      ];
      


  return (
    <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Degree</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Degree Table"}/>

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Degree</h4>
                        <AddDegree onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default Degree;
