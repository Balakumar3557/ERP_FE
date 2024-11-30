import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddMealPlanning from "./AddMealPlanning/AddMealPlanning";



const MealPlanning = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };
    const authors = [
        {
          day: "Monday",
          foodCategory: "Breakfast",
          foodType: "Vegetarian",
          variety: "Tiffin",
          foodName: "Idli",
          curry: "Sambar",
          description: "Soft steamed rice cakes served with flavorful lentil soup.",
          status: "active",
        },
        {
          day: "Friday",
          foodCategory: "dinner",
          foodType: "Non-Vegetarian",
          variety: "Rice",
          foodName: "Chicken Biryani",
          curry: "Raita",
          description: "Aromatic spiced rice dish with tender chicken, served with yogurt sauce.",
          status: "active",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Day',
          column: 'day'
        },
        {
          display_name: 'Food Category',
          column: 'foodCategory'
        },
        {
          display_name: 'Food Type',
          column: 'foodType'
        },
        {
          display_name: 'Variety',
          column: 'variety'
        },
        {
          display_name: 'Food Name',
          column: 'foodName'
        },
        {
          display_name: 'Curry',
          column: 'curry'
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
                <h2 className="h2 font-weight-bolder text-white mb-0">Meal Planning</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Meal Planning Table"}/>

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add MealPlanning</h4>
                        <AddMealPlanning onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default MealPlanning;
