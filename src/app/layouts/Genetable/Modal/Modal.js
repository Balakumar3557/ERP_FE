import React from "react";
import "./Modal.css"; // Add custom styles for the modal here

function Modal({ show, data, onClose }) {
    if (!show) return null; // Don't render the modal if show is false

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="btn btn-close" onClick={onClose}>X</button>
                <h5 className="modal-title">Details</h5>
                <div className="modal-body">
                    {Object.keys(data).map((key, index) => (
                        <p key={index} className="modal-item">
                            <strong>{key}:</strong> {data[key]}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Modal;
