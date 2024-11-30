import React, { useState } from 'react';

function PreviousEducationInformation() {
    
    const [qualificationLevel, setQualificationLevel] = useState('');

    
    const handleQualificationChange = (event) => {
        setQualificationLevel(event.target.value);
    };

    return (
        <div className="card mb-4">
            <div className="card-header pb-0">
                <h6>Previous Education Information</h6>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-control-label">Qualification Level</label>
                        <select 
                            className="form-control" 
                            value={qualificationLevel} 
                            onChange={handleQualificationChange}
                        >
                            <option value="">Select Qualification Level</option>
                            <option value="10th">10th</option>
                            <option value="12th">12th</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Postgraduate">Postgraduate</option>
                        </select>
                    </div>

                    {/* Conditionally render additional fields based on the selected qualification */}
                    {qualificationLevel === '10th' && (
                        <div className="col-md-6 mb-3">
                            <label className="form-control-label">Details for 10th</label>
                            <input type="text" className="form-control" placeholder="Details specific to 10th" />
                        </div>
                    )}

                    {qualificationLevel === '12th' && (
                        <div className="col-md-6 mb-3">
                            <label className="form-control-label">Details for 12th</label>
                            <input type="text" className="form-control" placeholder="Details specific to 12th" />
                        </div>
                    )}

                    {qualificationLevel === 'Diploma' && (
                        <div className="col-md-6 mb-3">
                            <label className="form-control-label">Details for Diploma</label>
                            <input type="text" className="form-control" placeholder="Details specific to Diploma" />
                        </div>
                    )}

                    {qualificationLevel === 'Undergraduate' && (
                        <div className="col-md-6 mb-3">
                            <label className="form-control-label">Details for Undergraduate</label>
                            <input type="text" className="form-control" placeholder="Details specific to Undergraduate" />
                        </div>
                    )}

                    {qualificationLevel === 'Postgraduate' && (
                        <div className="col-md-6 mb-3">
                            <label className="form-control-label">Details for Postgraduate</label>
                            <input type="text" className="form-control" placeholder="Details specific to Postgraduate" />
                        </div>
                    )}

                    <div className="col-md-6 mb-3">
                        <label className="form-control-label">School/College Name</label>
                        <input type="text" className="form-control" placeholder="Enter school/college name" />
                    </div>

                    {(qualificationLevel === '12th' || qualificationLevel === '10th') && (
                        <div className="col-md-6 mb-3">
                            <label className="form-control-label">Board</label>
                            <input type="text" className="form-control" placeholder="Board (e.g., CBSE, State Board)" />
                        </div>
                    )}

                    <div className="col-md-6 mb-3">
                        <label className="form-control-label">Year of Passing</label>
                        <input type="text" className="form-control" placeholder="Year of Passing" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-control-label">Percentage/Grade</label>
                        <input type="text" className="form-control" placeholder="Percentage or Grade" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-control-label">University Name</label>
                        <input type="text" className="form-control" placeholder="University Name" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-control-label">College Name</label>
                        <input type="text" className="form-control" placeholder="College Name" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-control-label">Branch Name</label>
                        <input type="text" className="form-control" placeholder="Branch Name" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreviousEducationInformation;
