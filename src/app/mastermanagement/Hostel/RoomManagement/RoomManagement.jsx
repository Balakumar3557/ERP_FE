import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddRoomManagement from "./AddRoomManagement/AddRoomManagement";



const RoomManagement = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };
    const authors = [
        {
          hostelName: "Sunrise Hostel",
          floor: "1st Floor",
          roomNumber: "101",
          student: "John Doe",
          status: "active",
          description: "A spacious room with comfortable bedding and modern amenities.",
        },
        {
          hostelName: "Moonlight Hostel",
          floor: "2nd Floor",
          roomNumber: "202",
          student: "Alice Smith",
          status: "inactive",
          description: "A quiet room with a scenic view, perfect for a peaceful stay.",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Hostel Name',
          column: 'hostelName'
        },
        {
          display_name: 'Floor',
          column: 'floor'
        },
        {
          display_name: 'Room Number',
          column: 'roomNumber'
        },
        {
          display_name: 'Student',
          column: 'student'
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
                <h2 className="h2 font-weight-bolder text-white mb-0">Room Management</h2>
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
                        <h4>Add Student</h4>
                        <AddRoomManagement onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default RoomManagement;
