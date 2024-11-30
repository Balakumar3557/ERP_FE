import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddBookSubTitle from "./AddBookSubTitle/AddBookSubTitle";

const BookSubTitle = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };
  
    const authors = [
        {
          title: "Introduction to JavaScript",
          subTitleName: "Basics and Syntax",
          status: "active",
          description: "A beginner's guide to learning JavaScript, covering basic syntax and structures.",
        },
        {
          title: "Advanced Python Programming",
          subTitleName: "Object-Oriented Concepts",
          status: "active",
          description: "An advanced course focused on object-oriented programming concepts in Python.",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Title',
          column: 'title'
        },
        {
          display_name: 'Subtitle Name',
          column: 'subTitleName'
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
                <h2 className="h2 font-weight-bolder text-white mb-0">Book Sub Title</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Book Sub Title Table"}/>

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Sub Book Title</h4>
                        <AddBookSubTitle onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default BookSubTitle;

