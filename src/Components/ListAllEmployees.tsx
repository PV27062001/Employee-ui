import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Style.css';

export interface Employee {
  id: number;
  name: string;
  department: string;
  phoneNumber: string;
  dateOfBirth: Date; 
}

export function ListAllEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    axios.get<Employee[]>('http://localhost:8080/api/v1/getall')
      .then(response => {
        // Assuming dateOfBirth is received as a string in the format 'YYYY-MM-DD'
        const employeesWithValidDates = response.data.map(employee => ({
          ...employee,
          dateOfBirth: new Date(employee.dateOfBirth), // Convert the string to a Date object
        }));
        setEmployees(employeesWithValidDates);
      });
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(); // Format the date to a string
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Employee List</h1>
      <div className="row">
        {employees.map(employee => (
          <div className="col-lg-6 mb-4" key={employee.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{employee.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{employee.department}</h6>
                <p className="card-text">Phone: {employee.phoneNumber}</p>
                <p className="card-text">Date of Birth: {formatDate(employee.dateOfBirth)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
