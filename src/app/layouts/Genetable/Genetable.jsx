import React, { useState } from "react";
import Modal from "./Modal/Modal"; // Import Modal component
import "./Genetable.css"; // Custom styles if needed for further responsive adjustments

function Genetable({ data, filterEnabled, filterDateColumn, column, Title, Page,preview }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterColumn, setFilterColumn] = useState("name");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(Page);
    const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
    const [viewData, setViewData] = useState(null); // State to store data to be displayed in the modal

    const handleEdit = (authorName) => {
        console.log(`Edit ${authorName}`);
    };

    const handleView = (item) => {
        setViewData(item); // Set the data for the modal
        setModalVisible(true); // Show the modal
    };

    const handleCloseModal = () => {
        setModalVisible(false); // Close the modal
    };

    const filteredData = data.filter((item) => {
        if (!filterEnabled) return true;

        const valueToCheck = item[filterColumn]?.toLowerCase() || "";
        const matchesSearchTerm = valueToCheck.includes(searchTerm.toLowerCase());

        let matchesDateRange = true;
        if (filterDateColumn) {
            const employedDateParts = item.employedDate.split("/");
            const employedDate = new Date(`${employedDateParts[2]}-${employedDateParts[1]}-${employedDateParts[0]}`);
            const startDateObj = startDate ? new Date(startDate) : null;
            const endDateObj = endDate ? new Date(endDate) : null;

            matchesDateRange =
                (!startDateObj || employedDate >= startDateObj) &&
                (!endDateObj || employedDate <= endDateObj);
        }

        return matchesSearchTerm && matchesDateRange;
    });

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <div className="card mb-8">
                        <div className="card-header pb-0 text-center">
                            <h6 className="my-3">{Title}</h6>

                            {filterEnabled && (
                                <div className="row mb-3 justify-content-center">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <label htmlFor="filterColumn" className="form-label">Filter By</label>
                                        <select
                                            id="filterColumn"
                                            className="form-select"
                                            value={filterColumn}
                                            onChange={(e) => setFilterColumn(e.target.value)}
                                        >
                                            {column.map((col, index) => (
                                                <option key={index} value={col.column}>{col.display_name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label htmlFor="searchTerm" className="form-label">Search</label>
                                        <input
                                            id="searchTerm"
                                            type="text"
                                            placeholder={`Search by ${filterColumn}...`}
                                            className="form-control"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>

                                    {filterDateColumn && (
                                        <>
                                            <div className="col-12 col-md-6 col-lg-3 mt-2 mt-md-0">
                                                <label htmlFor="startDate" className="form-label">Start Date</label>
                                                <input
                                                    id="startDate"
                                                    type="date"
                                                    className="form-control"
                                                    value={startDate}
                                                    onChange={(e) => setStartDate(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-3 mt-2 mt-md-0">
                                                <label htmlFor="endDate" className="form-label">End Date</label>
                                                <input
                                                    id="endDate"
                                                    type="date"
                                                    className="form-control"
                                                    value={endDate}
                                                    onChange={(e) => setEndDate(e.target.value)}
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Table View */}
                        <div className="table-responsive">
                            <table className="table align-items-center mb-0 text-center">
                                <thead className="text-start">
                                    <tr>
                                        {column.map((col, index) => (
                                            <th key={index}>{col.display_name}</th>
                                        ))}
                                        <th>Actions</th>
                                        {preview && (
                                        <th >Preview</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-center text-start">
                                    {currentData.map((item, index) => (
                                        <tr key={index}>
                                            {/* Displaying each column's data */}
                                            {column.map((col, colIndex) => (
                                                <td key={colIndex}>{item[col.column]}</td>
                                            ))}

                                            {/* Action Buttons (e.g., Edit) */}
                                            <td>
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() => handleEdit(item.name)}
                                                >
                                                    Edit
                                                </button>
                                            </td>

                                            {/* Conditionally Render "View" Button */}
                                            {preview && (
                                                <td>
                                                    <button
                                                        className="btn btn-info btn-sm ms-2"
                                                        onClick={() => handleView(item)}
                                                    >
                                                        View
                                                    </button>
                                                </td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                        
                        

                        {/* Pagination Controls */}
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between w-100 my-4">
                            {/* Previous Button */}
                            <button
                                className="btn btn-secondary mb-2 mb-md-0"
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>

                            {/* Page Info */}
                            <span className="my-2 mx-1 text-center text-md-start">
                                Page {currentPage} of {totalPages}
                            </span>

                            {/* Next Button */}
                            <button
                                className="btn btn-secondary mb-2 mb-md-0"
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Component */}
            <Modal show={modalVisible} data={viewData} onClose={handleCloseModal} />
        </div>
    );
}

export default Genetable;
