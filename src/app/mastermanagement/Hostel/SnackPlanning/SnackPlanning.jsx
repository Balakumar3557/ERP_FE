import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddSnackPlanning from "./AddSnackPlanning/AddSnackPlanning";


const SnackPlanning = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };
    

    const authors = [
        {
          day: "Monday",
          foodType: "Vegetarian",
          snackName: "Fruit Salad",
          description: "A refreshing mix of seasonal fruits, perfect for a light snack.",
          status: "active",
        },
        {
          day: "Thursday",
          foodType: "Non-Vegetarian",
          snackName: "Chicken Wings",
          description: "Spicy chicken wings served with a side of creamy dip.",
          status: "active",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Day',
          column: 'day'
        },
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
                <h2 className="h2 font-weight-bolder text-white mb-0">Snack Planning</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

           
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Snack Planning Table"}/>

           
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Snack Planning</h4>
                        <AddSnackPlanning onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default SnackPlanning;
