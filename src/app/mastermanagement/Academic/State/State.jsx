import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddState from "./AddState/AddState";




const State= () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };

   
    const authors = [
        {
          stateName: "California",
          stateDescription: "A state on the west coast of the United States, known for its technology and entertainment industries.",
          status: "active",
        },
        {
          stateName: "Texas",
          stateDescription: "A large state in the southern U.S., known for its energy industry and diverse culture.",
          status: "active",
        },
      ];
      
      const column_table = [
        {
          display_name: 'State Name',
          column: 'stateName'
        },
        {
          display_name: 'State Description',
          column: 'stateDescription'
        },
        {
          display_name: 'Status',
          column: 'status'
        }
      ];
      

  return (
    <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">State</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"State Table"}/>

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add State</h4>
                        <AddState onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default State
