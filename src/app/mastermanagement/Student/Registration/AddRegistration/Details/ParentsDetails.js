import React from 'react';

function ParentsDetails() {
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-md-12 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h4>Parents Details</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Father's Name</label>
                                    <input type="text" className="form-control" placeholder="Father's Name" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Father's Mobile No</label>
                                    <input type="tel" className="form-control" placeholder="Father's Mobile No" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Father's Occupation</label>
                                    <input type="text" className="form-control" placeholder="Father's Occupation" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Mother's Name</label>
                                    <input type="text" className="form-control" placeholder="Mother's Name" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Mother's Mobile No</label>
                                    <input type="tel" className="form-control" placeholder="Mother's Mobile No" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Mother's Occupation</label>
                                    <input type="text" className="form-control" placeholder="Mother's Occupation" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Guardian's Name</label>
                                    <input type="text" className="form-control" placeholder="Guardian's Name" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Guardian's Mobile No</label>
                                    <input type="tel" className="form-control" placeholder="Guardian's Mobile No" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Guardian's Relation</label>
                                    <input type="text" className="form-control" placeholder="Relation" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParentsDetails;
