import React, { useState } from 'react'

const AddRoomCreation = () => {

    const [formData, setFormData] = useState({
        hostelName: "",
        selectFloor: "",
        roomNumber: "",
        noOfBeds: "",
        facility: "",
        description: "",
        status: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Degreedata:", formData);

    };

    return (

        <div className="container">
            <form onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col-md-6">

                        <div className="mb-3">
                            <label htmlFor="hostelName" className="form-label">Hostel Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="hostelName"
                                name="hostelName"
                                value={formData.hostelName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="roomNumber" className="form-label">Room Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="roomNumber"
                                name="roomNumber"
                                value={formData.roomNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="facility" className="form-label">Facility(Ac/Non-Ac)</label>
                            <input
                                type="text"
                                className="form-control"
                                id="facility"
                                name="facility"
                                value={formData.facility}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        
                    <div className="mb-3">
                            <label htmlFor="selectFloor" className="form-label">Select Floor</label>
                            <select
                                className="form-select"
                                id="selectFloor"
                                name="selectFloor"
                                value={formData.selectFloor}
                                onChange={handleChange}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                       
                        <div className="mb-3">
                            <label htmlFor="noOfBeds" className="form-label">No of Beds</label>
                            <input
                                type="text"
                                className="form-control"
                                id="noOfBeds"
                                name="noOfBeds"
                                value={formData.noOfBeds}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="  description"
                                name="  description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                  
               
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select
                        className="form-select"
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>

            </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default AddRoomCreation;