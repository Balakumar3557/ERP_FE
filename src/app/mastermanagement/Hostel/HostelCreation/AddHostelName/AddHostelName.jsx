import React, { useState } from 'react'

const AddHostelName = () => {

    const [formData, setFormData] = useState({
        hostelName: "",
        genderForHostel: "",
        noOfFloors: "",
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
                            <label htmlFor="genderForHostel" className="form-label">Gender For Hostel</label>
                            <select
                                className="form-select"
                                id="genderForHostel"
                                name="genderForHostel"
                                value={formData.genderForHostel}
                                onChange={handleChange}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="noOfFloors" className="form-label">No of Floors</label>
                            <input
                                type="text"
                                className="form-control"
                                id="noOfFloors"
                                name="noOfFloors"
                                value={formData.noOfFloors}
                                onChange={handleChange}
                                required
                            />
                        </div>



                        <div className="mb-3">
                            <label htmlFor="  description" className="form-label">Description</label>
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

export default AddHostelName;