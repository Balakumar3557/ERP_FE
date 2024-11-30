import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddHostelName from "./AddHostelName/AddHostelName";



const HostelCreation = () => {

    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
       
    };
   

    const authors = [
        {
          hostelName: "Sunrise Hostel",
          genderForHostel: "Male",
          noOfFloors: "5",
          description: "A well-maintained hostel with modern facilities for male students.",
          status: "active",
        },
        {
          hostelName: "Moonlight Hostel",
          genderForHostel: "Female",
          noOfFloors: "3",
          description: "A secure and comfortable hostel for female students.",
          status: "active",
        },
      ];
      
      const column_table = [
        {
          display_name: 'Hostel Name',
          column: 'hostelName'
        },
        {
          display_name: 'Gender for Hostel',
          column: 'genderForHostel'
        },
        {
          display_name: 'Number of Floors',
          column: 'noOfFloors'
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
                <h2 className="h2 font-weight-bolder text-white mb-0">Hostel Creation</h2>
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
                        <h4>Add HostelName</h4>
                        <AddHostelName onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
  )
}

export default HostelCreation;
