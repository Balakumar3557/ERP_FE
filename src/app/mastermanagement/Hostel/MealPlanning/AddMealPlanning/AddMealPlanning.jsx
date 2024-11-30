import React, { useState } from 'react';

const AddMealPlanning = () => {
    const [formData, setFormData] = useState({
        day: "",
        variety: "",
        foodType: "",
        foodCategory: "",
        foodName: "",
        curry: "",
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
        console.log("Form Data:", formData);
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

                        {/* Field 2: Select Timing */}
                        <div className="mb-3">
                            <label htmlFor="foodCategory" className="form-label">Select Category</label>
                            <select
                                className="form-select"
                                id="foodCategory"
                                name="foodCategory"
                                value={formData.foodCategory}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose...</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="foodName" className="form-label">Select Food Name</label>
                            <select
                                className="form-select"
                                id="foodName"
                                name="foodName"
                                value={formData.foodName}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose...</option>
                                <option value="Paneer Butter Masala">Paneer Butter Masala</option>
                                <option value="Chicken Curry">Chicken Curry</option>
                                <option value="Gulab Jamun">Gulab Jamun</option>
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

                        {/* Field 4: Select Food Category */}
                        <div className="mb-3">
                            <label htmlFor="variety" className="form-label">Select Variety</label>
                            <select
                                className="form-select"
                                id="variety"
                                name="variety"
                                value={formData.variety}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose...</option>
                                <option value="Tiffin">Tiffin</option>
                                <option value="Rice">Rice</option>
                                <option value="Curry">Curry</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="curry" className="form-label">Select Curry</label>
                            <select
                                className="form-select"
                                id="curry"
                                name="curry"
                                value={formData.curry}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose...</option>
                                <option value="Sambar">Sambar</option>
                                <option value="Kuruma">Kuruma</option>
                                <option value="Gravy">Gravy</option>
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
                                <option value="Available">Available</option>
                                <option value="Unavailable">Unavailable</option>
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

export default AddMealPlanning;
