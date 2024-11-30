import React, { useState } from 'react';

const AddRoomManagement = () => {
    const [formData, setFormData] = useState({
        hostelName: "",
        floor: "",
        roomNumber: "",
        student: "",
        status: "",
        description: "",
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
        console.log("Form Data:", formData);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="hostelName" className="form-label">Select Hostel Name</label>
                            <select
                                className="form-select"
                                id="hostelName"
                                name="hostelName"
                                value={formData.hostelName}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose...</option>
                                <option value="Hostel A">Hostel A</option>
                                <option value="Hostel B">Hostel B</option>
                                <option value="Hostel C">Hostel C</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="roomNumber" className="form-label">Select Room Number</label>
                            <select
                                className="form-select"
                                id="roomNumber"
                                name="roomNumber"
                                value={formData.roomNumber}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose...</option>
                                <option value="101">101</option>
                                <option value="102">102</option>
                                <option value="103">103</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input
                                className="form-control"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                               
                                required
                            />
                        </div>
                     
                    </div>
                    <div className='col-md-6'>
                    <div className="mb-3">
                            <label htmlFor="floor" className="form-label">Select Floor</label>
                            <select
                                className="form-select"
                                id="floor"
                                name="floor"
                                value={formData.floor}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        {/* Field 4: Select Student */}
                        <div className="mb-3">
                            <label htmlFor="student" className="form-label">Select Student</label>
                            <select
                                className="form-select"
                                id="student"
                                name="student"
                                value={formData.student}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose...</option>
                                <option value="John Doe">John Doe</option>
                                <option value="Jane Smith">Jane Smith</option>
                                <option value="Michael Lee">Michael Lee</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Status</label>
                            <select
                                className="form-select"
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose...</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                  
                </div>
          
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddRoomManagement;
