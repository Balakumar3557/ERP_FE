import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddTitle from "./AddBookTitle/AddBookTitle";

const BookTitle = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };
   
    const authors = [
        {
          titleName: "The Great Gatsby",
          description: "A novel set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream.",
          status: "active",
        },
        {
          titleName: "To Kill a Mockingbird",
          description: "A powerful story of racial injustice and moral growth in the American South during the 1930s.",
          status: "active",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Title Name',
          column: 'titleName'
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
                <h2 className="h2 font-weight-bolder text-white mb-0">Book Title</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Book Title Table"}/>

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Book Title</h4>
                        <AddTitle onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default BookTitle;

