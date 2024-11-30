import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddLibrary from "./AddLibraryName/AddLibrary";

const LibraryName = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };
    const authors = [
        {
          libraryName: "Central City Library",
          status: "active",
          description: "A large public library offering a wide range of books, magazines, and digital resources.",
        },
        {
          libraryName: "Westside Study Hub",
          status: "inactive",
          description: "A smaller library focused on academic resources, particularly for college students.",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Library Name',
          column: 'libraryName'
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
                <h2 className="h2 font-weight-bolder text-white mb-0">LibraryName</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"LibraryName Table"}/>

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add LibraryName</h4>
                        <AddLibrary onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default LibraryName;

