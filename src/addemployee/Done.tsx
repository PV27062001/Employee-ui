import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./Done.css"; 

const Done = () => {
  return (
    <div className="done-container">
      <FaCheckCircle className="tick-icon" />
      <p className="success-message">Employee added successfully!</p>
    </div>
  );
};

export default Done;
