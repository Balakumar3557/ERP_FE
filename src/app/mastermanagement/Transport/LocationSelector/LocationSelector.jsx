import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import AddLocationSelector from "./AddLocationSelector/AddLocationSelector"; // Import AddLocationCreation component

function LocationSelector() {
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const handleAdd = () => setShowModal(true);

  // Function to close the modal
  const handleClose = () => setShowModal(false);

  // Function to handle submission of location data
  const handleLocationSubmit = (locationData) => {
    console.log("Location Data Submitted:", locationData);
    // Add logic to save the data (e.g., API call or state update)
    setShowModal(false); // Close modal after submission
  };

  // Sample data for the table
  const locations = [
    {
      locationName: "Location A",
      startPoint: "Point 1",
      endPoint: "Point 5",
      stages: "Point 2, Point 3, Point 4",
      description: "Test location route",
      status: "Active",
    },
  ];
  

  const column_table = [
    { display_name: "Location Name", column: "locationName" },
    { display_name: "Start Point", column: "startPoint" },
    { display_name: "End Point", column: "endPoint" },
    { display_name: "Stages", column: "stages" },
    { display_name: "Description", column: "description" },
    { display_name: "Status", column: "status" },
  ];

  return (
    <div className="container-fluid py-6">
      <div className="d-flex justify-content-between align-items-center mb-2 px-4">
        <h2 className="h2 font-weight-bolder text-white mb-0">Location Management</h2>
        <button className="btn btn-light text-dark" onClick={handleAdd}>
          Add New Location
        </button>
      </div>

      {/* Display the locations in a table format */}
      <Genetable
        data={locations}
        filterEnabled={false}
        column={column_table}
        Title={"Location Table"}
      />

      {/* Custom Modal for adding location */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="modal-close" onClick={handleClose}>
              &times;
            </span>
            <h4>Add Location</h4>
            <AddLocationSelector onSubmit={handleLocationSubmit} />
          </div>
        </div>
      )}
    </div>
  );
}

export default LocationSelector;
