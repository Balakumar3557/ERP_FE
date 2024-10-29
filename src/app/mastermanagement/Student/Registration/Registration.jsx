import React from "react";
import './Registration.css';
import Genetable from "../../../layouts/Genetable/Genetable";
import { Link } from "react-router-dom";

function Registration() {
    const authors = [
        {
            Student_name: "John Michael",
            email: "john@creative-tim.com",
            role: "Manager",
            organization: "Organization",
            status: "Online",
            employedDate: "23/10/2024",
            imgSrc: "../assets/img/team-2.jpg",
        },
        {
            Student_name: "Alexa Liras",
            email: "alexa@creative-tim.com",
            role: "Programmer",
            organization: "Developer",
            status: "Offline",
            employedDate: "29/10/2024",
            imgSrc: "../assets/img/team-3.jpg",
        },
        // ... additional authors can be added here
    ];

    const column_table = [
        { display_name: 'Name', column: 'Student_name' },
        { display_name: 'Email', column: 'email' },
        { display_name: 'Role', column: 'role' },
        { display_name: 'Organization', column: 'organization' },
        { display_name: 'Status', column: 'status' },
        { display_name: 'Employed Date', column: 'employedDate' }
    ];

    return (
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Registration</h2>
                <Link to="/adm/Student/Add-Registration">
                    <button className="btn btn-light text-dark">
                        Add New
                    </button>
                </Link>
            </div>

            <Genetable
                data={authors}
                filterEnabled={true}
                filterDateColumn={false}
                column={column_table}
                Title={"Registration"}
            />
        </div>
    );
}

export default Registration;
