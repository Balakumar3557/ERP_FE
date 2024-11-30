import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddFoodName from "./AddFoodName/AddFoodName";



const FoodName = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };
   
    const authors = [
        {
          foodType: "Vegetarian",
          foodCategory: "Main Course",
          foodName: "Vegetable Curry",
        },
        {
          foodType: "Non-Vegetarian",
          foodCategory: "Appetizer",
          foodName: "Chicken Wings",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Food Type',
          column: 'foodType'
        },
        {
          display_name: 'Food Category',
          column: 'foodCategory'
        },
        {
          display_name: 'Food Name',
          column: 'foodName'
        }
      ];
      

  return (
    <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">FoodName</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"FoodName Table"}/>

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add FoodName</h4>
                        <AddFoodName onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default FoodName;
