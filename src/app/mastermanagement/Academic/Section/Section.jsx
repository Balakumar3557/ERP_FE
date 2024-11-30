import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddSection from "./AddSection/AddSection";
 



const Section = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };
    const authors = [
        {
          sectionName: "A Section",
          sectionDescription: "This section includes the fundamentals of programming and problem-solving.",
          status: "active",
        },
        {
          sectionName: "B Section",
          sectionDescription: "Focused on advanced algorithms and data structures for complex problem solving.",
          status: "active",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Section Name',
          column: 'sectionName'
        },
        {
          display_name: 'Section Description',
          column: 'sectionDescription'
        },
        {
          display_name: 'Status',
          column: 'status'
        }
      ];
      

  return (
    <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Section</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Section"}/>

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Section</h4>
                        <AddSection onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default Section
