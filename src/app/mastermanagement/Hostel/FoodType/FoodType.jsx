import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddFoodTypeName from "./AddFoodType/AddFoodTypeName";



const FoodType = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };
   
    const authors = [
        {
          foodTypeName: "Vegan",
          status: "active",
          description: "A diet that excludes all animal products and focuses on plant-based foods.",
        },
        {
          foodTypeName: "Non-Vegetarian",
          status: "inactive",
          description: "A diet that includes meat, poultry, and seafood along with plant-based foods.",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Food Type Name',
          column: 'foodTypeName'
        },
        {
          display_name: 'Status',
          column: 'status'
        },
        {
          display_name: 'Description',
          column: 'description'
        }
      ];
      


  return (
    <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Food Type </h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Food Type Table"}/>

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add FoodType</h4>
                        <AddFoodTypeName onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default FoodType;
