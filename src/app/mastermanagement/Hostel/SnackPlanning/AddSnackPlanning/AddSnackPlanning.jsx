import React, { useState } from 'react';

const AddSnackPlanning = () => {
    const [formData, setFormData] = useState({
        day: "",
        foodType: "",
        snackName: "",
        description: "",
        status: "",
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
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="day" className="form-label">Select Day</label>
                            <select
                                className="form-select"
                                id="day"
                                name="day"
                                value={formData.day}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose...</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                        </div>

                        {/* Field 2: Select Food Type */}
                        <div className="mb-3">
                            <label htmlFor="foodType" className="form-label">Select Food Type</label>
                            <select
                                className="form-select"
                                id="foodType"
                                name="foodType"
                                value={formData.foodType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose...</option>
                                <option value="Vegetarian">Vegetarian</option>
                                <option value="Non-Vegetarian">Non-Vegetarian</option>
                            </select>
                        </div>
                    </div>
                    {/* Field 3: Snack Name */}
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="snackName" className="form-label">Snack Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="snackName"
                                name="snackName"
                                value={formData.snackName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Field 4: Description */}
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
                    {/* Field 5: Status */}
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
                            <option value="Available">Available</option>
                            <option value="Unavailable">Unavailable</option>
                        </select>
                    </div>

                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddSnackPlanning;
