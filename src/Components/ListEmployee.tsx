import { useEffect, useState } from "react";
import { Employee } from "./ListAllEmployees";
import axios from "axios";
import "./ListEmployee.css"; 

export function ListEmployee() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [expandedEmployeeId, setExpandedEmployeeId] = useState<number | null>(null);

  useEffect(() => {
    axios.get<Employee[]>('http://localhost:8080/api/v1/sortedemployee')
      .then(response => {
        const employeesWithValidDates = response.data.map(employee => ({
          ...employee,
          dateOfBirth: new Date(employee.dateOfBirth),
        }));
        setEmployees(employeesWithValidDates);
      });
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString();
  };

  const toggleExpand = (employeeId: number) => {
    setExpandedEmployeeId((prevId) => (prevId === employeeId ? null : employeeId));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Employee List</h1>
      <div className="row">
        {/* Left side: List of Employees */}
        <div className="col-md-6">
          <div className="employee-list">
            {employees.map(employee => (
              <div className="card mb-4" key={employee.id}>
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="employee-name">{employee.name}</span>
                    <i
                      className={`fas fa-arrow-right ${expandedEmployeeId === employee.id ? 'expanded' : ''}`}
                      onClick={() => toggleExpand(employee.id)}
                    ></i>
                  </h5>
                  <p className="card-text">Date of Birth: {formatDate(employee.dateOfBirth)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Details about the selected Employee */}
        <div className="col-md-6">
          {employees.map(employee => (
            <div key={employee.id}>
              {expandedEmployeeId === employee.id && (
                <div className="card">
                  <div className="card-body">
                    <p>Department: {employee.department}</p>
                    <p>Phone Number: {employee.phoneNumber}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}