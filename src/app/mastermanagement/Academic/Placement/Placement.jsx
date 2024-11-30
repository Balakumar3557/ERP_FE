import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import './Placement.css';
import AddPlacement from "./AddPlacement/AddPlacement";

function Placement(){

    const [showModal, setShowModal] = useState(false);

    // Function to open the modal
    const handleAdd = () => setShowModal(true);
    
    // Function to close the modal
    const handleClose = () => setShowModal(false);

    const authors = [
      {
        Companyname: "igt",
        Personname: "senthilan",
        Address: "madhuravoyal",
        ContactNumber: "7550020903",
        Email: "senthilan@gmail.com",
        status: "offline",
        Description: "current",
      },
      {
        Companyname: "igt",
        Personname: "senthilan",
        Address: "madhuravoyal",
        ContactNumber: "7550020903",
        Email: "senthilan@gmail.com",
        status: "offline",
        Description: "current",
      },
      // ... additional authors can be added here
    ];

    const column_table = [
        {
            display_name: 'Company Name',
            column: 'Companyname'
        },
        {
            display_name: 'Person Name',
            column: 'Personname'
        },
        {
            display_name: 'Address',
            column: 'Address'
        },
        {
            display_name: 'Contact Number',
            column: 'ContactNumber'
        }
        ,
        {
            display_name: 'Email',
            column: 'Email'
        },
        {
            display_name: 'status',
            column: 'status'
        },
        {
            display_name: 'Description',
            column: 'Description'
        }
    ];

    return(
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Placement Management</h2>
                <button className="btn btn-light text-dark"  onClick={handleAdd}>
                    Add New
                </button>
            </div>

            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Placement Table"}/>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Placement</h4>
                        <AddPlacement/>
                    </div>
                </div>
            )}

        </div>
    )

}

export default Placement;