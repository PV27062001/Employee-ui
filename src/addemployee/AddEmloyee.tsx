import React, { useState } from "react";
import axios from "axios";
import { Employee } from "../Components/ListAllEmployees";
import './Calender.css'; // Import the CSS file
import CalendarComponent from "./Calender";

export function AddEmployee() {
  const [newEmployee, setNewEmployee] = useState<Employee>({
    id: 0,
    name: "",
    department: "",
    phoneNumber: "",
    dateOfBirth: new Date(),
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setNewEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/v1/add', newEmployee);
  };

  return (
    <div className="form-container"> 
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> 
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newEmployee.name}
            onChange={handleInputChange}
            className="input-field" 
            required
          />
        </div>
        <div className="form-group"> 
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={newEmployee.department}
            onChange={handleInputChange}
            className="input-field" 
            required
          />
        </div>
        <div className="form-group"> 
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={newEmployee.phoneNumber}
            onChange={handleInputChange}
            className="input-field" 
            required
          />
        </div>
       
          <CalendarComponent/>

        <button type="submit" className="submit-button">Add Employee</button>   
      </form>
    </div>
  );
}
