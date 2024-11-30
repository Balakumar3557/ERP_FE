import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddRoomCreation from "./AddRoomCreation/AddRoomCreation";



const RoomCreation = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };
   
    const authors = [
        {
          hostelName: "Greenwood Hostel",
          selectFloor: "3rd Floor",
          roomNumber: "305",
          noOfBeds: "4",
          facility: "Wi-Fi, AC, Heater",
          description: "A spacious room with all modern amenities for a comfortable stay.",
          status: "active",
        },
        {
          hostelName: "Riverdale Hostel",
          selectFloor: "2nd Floor",
          roomNumber: "201",
          noOfBeds: "3",
          facility: "Wi-Fi, Fan, Refrigerator",
          description: "A cozy room with basic facilities and a peaceful environment.",
          status: "active",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Hostel Name',
          column: 'hostelName'
        },
        {
          display_name: 'Floor',
          column: 'selectFloor'
        },
        {
          display_name: 'Room Number',
          column: 'roomNumber'
        },
        {
          display_name: 'Number of Beds',
          column: 'noOfBeds'
        },
        {
          display_name: 'Facility',
          column: 'facility'
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
                <h2 className="h2 font-weight-bolder text-white mb-0">Room Creation</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Room Creation Table"}/>

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Rooms</h4>
                        <AddRoomCreation onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default RoomCreation;
