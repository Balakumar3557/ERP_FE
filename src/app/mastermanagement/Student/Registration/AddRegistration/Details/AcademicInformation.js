import React from 'react';

function AcademicInformation() {
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-md-12 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h4>Academic Information</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Educational Type</label>
                                    <select className="form-control">
                                        <option>Select Educational Type</option>
                                        <option>Undergraduate</option>
                                        <option>Postgraduate</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Degree</label>
                                    <select className="form-control">
                                        <option>Select Degree</option>
                                        <option>Bachelor's</option>
                                        <option>Master's</option>
                                        <option>Ph.D.</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Department</label>
                                    <input type="text" className="form-control" placeholder="Department" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Academic Year (Batch)</label>
                                    <input type="text" className="form-control" placeholder="Academic Year" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Year</label>
                                    <input type="text" className="form-control" placeholder="Year" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Date of Admission</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Student Status</label>
                                    <select className="form-control">
                                        <option>Select Student Status</option>
                                        <option>Active</option>
                                        <option>Inactive</option>
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

export default AcademicInformation;
