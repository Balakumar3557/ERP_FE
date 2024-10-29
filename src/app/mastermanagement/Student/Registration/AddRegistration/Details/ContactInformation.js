import React from 'react';

function ContactInformation() {
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-md-12 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h4>Contact Information</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Email Address</label>
                                    <input type="email" className="form-control" placeholder="Enter email address" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Alternate Email Address</label>
                                    <input type="email" className="form-control" placeholder="Enter alternate email" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Mobile Number</label>
                                    <input type="tel" className="form-control" placeholder="Enter mobile number" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Alternate Mobile Number</label>
                                    <input type="tel" className="form-control" placeholder="Enter alternate mobile number" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Permanent Address</label>
                                    <input type="text" className="form-control" placeholder="Enter permanent address" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Address Line 1</label>
                                    <input type="text" className="form-control" placeholder="Enter address line 1" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">Country</label>
                                    <input type="text" className="form-control" placeholder="Enter country" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-control-label">State</label>
                                    <input type="text" className="form-control" placeholder="Enter state" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInformation;
