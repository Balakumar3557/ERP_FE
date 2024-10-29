import React, { useState } from 'react';
import PersonalDetails from './Details/PersonalDetails';
import AcademicInformation from './Details/AcademicInformation';
import ContactInformation from './Details/ContactInformation';
import ParentsDetails from './Details/ParentsDetails';
import PreviousEducationInformation from './Details/PreviousEducationInformation';

const steps = [
    { component: <PersonalDetails /> },
    { component: <AcademicInformation /> },
    { component: <ContactInformation /> },
    { component: <ParentsDetails /> },
    { component: <PreviousEducationInformation /> }
];

function AddRegistration({ onClose }) {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
       
    };

    return (
        <div className="container">
            <h2 className="h2 font-weight-bolder text-white m-4">Add Registration</h2>
            <form onSubmit={handleSubmit}>
                {steps[currentStep].component}
                <div className="button-group">
                    {currentStep > 0 && (
                        <button
                            className="btn btn-light text-dark m-4"
                            type="button"
                            onClick={prevStep}
                        >
                            Previous
                        </button>
                    )}
                    {currentStep < steps.length - 1 ? (
                        <button
                            className="btn btn-light text-dark m-4"
                            type="button"
                            onClick={nextStep}
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            className="btn btn-primary m-4"
                            type="submit"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
          
        </div>
    );
}

export default AddRegistration;
