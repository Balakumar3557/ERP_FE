import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddSnackName from "./AddSnackName/AddSnackName";



const SnackName = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };
   

    const authors = [
        {
          foodType: "Vegetarian",
          snackName: "Veg Sandwich",
          description: "A healthy sandwich filled with fresh vegetables and sauces.",
          status: "active",
        },
        {
          foodType: "Non-Vegetarian",
          snackName: "Chicken Tenders",
          description: "Crispy chicken tenders served with a side of dipping sauce.",
          status: "active",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Food Type',
          column: 'foodType'
        },
        {
          display_name: 'Snack Name',
          column: 'snackName'
        },
        {
          display_name: 'Description',
          column: 'description'
        },
        {
          display_name: 'Status',
          column: 'status'
        }
      ];
      



  return (
    <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Snack Name</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Hostel Creation Table"}/>

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add SnackName</h4>
                        <AddSnackName onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default SnackName;
