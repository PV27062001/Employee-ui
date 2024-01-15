import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPencilAlt } from 'react-icons/fa';
import './Style.css';
import UpdateEmployee from '../editEmployee/UpdateEmployee';
import { ListAll } from './LIstAll';

export interface Employee {
  id: number;
  name: string;
  department: string;
  phoneNumber: string;
  dateOfBirth: Date;
}

export function ListAllEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    axios.get<Employee[]>('http://localhost:8080/api/v1/getall')
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

  const handleEditEmployee = (employeeId: number) => {
    setSelectedEmployeeId(employeeId);
    setIsUpdating(true);
  };

  const handleCloseDetails = () => {
    setSelectedEmployeeId(null);
    setIsUpdating(false);
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

                <FaPencilAlt className="edit-icon" onClick={() => handleEditEmployee(employee.id)} />
              </div>
            </div>
          </div>
        ))}
      </div>

    {/* <ListAll></ListAll> */}
      {/* Render UpdateEmployee as an overlay when updating */}
      {isUpdating && selectedEmployeeId !== null && (
      <div className={`dialog-box active`}>
      <UpdateEmployee employeeId={selectedEmployeeId} onClose={handleCloseDetails} />
        </div>
      )}
    </div>
  );
}
