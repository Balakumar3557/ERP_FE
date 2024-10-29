import React from 'react';

function PersonalDetails() {
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-md-12 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h4>Personal Details</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-control-label">Student ID</label>
                                        <input type="text" className="form-control" placeholder="Enter student ID" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-control-label">Upload Profile</label>
                                        <input type="file" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-control-label">First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-control-label">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-control-label">Date of Birth</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-control-label">Gender</label>
                                    <select className="form-control">
                                        <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-control-label">Blood Group</label>
                                    <select className="form-control">
                                        <option>Select Blood Group</option>
                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-control-label">Nationality</label>
                                    <input type="text" className="form-control" placeholder="Nationality" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-control-label">Religion</label>
                                    <input type="text" className="form-control" placeholder="Religion" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-control-label">Caste</label>
                                    <input type="text" className="form-control" placeholder="Caste" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-control-label">Aadhar Number</label>
                                    <input type="text" className="form-control" placeholder="Aadhar Number" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-control-label">Residential Type</label>
                                    <select className="form-control">
                                        <option>Select Residential Type</option>
                                        <option>Hostel</option>
                                        <option>Dayscholar</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalDetails;
