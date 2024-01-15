import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dialog.css';
import './UpdateDisplay.css';

interface UpdateEmployeeProps {
  employeeId: number;
  onClose: () => void;
}

const UpdateEmployee: React.FC<UpdateEmployeeProps> = ({ employeeId, onClose }) => {
  const [employee, setEmployee] = useState({
    id: employeeId,
    name: '',
    department: '',
    phoneNumber: '',
    dateOfBirth: '', 
  });

  const[updatedStatus,setUpdatedStatus] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/getby/${employeeId}`)
      .then(response => {
        setEmployee(response.data);
      });
  }, [employeeId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.put(`http://localhost:8080/api/v1/updateEmployee?id=${employee.id}`, employee);
      console.log('Employee updated:', response.data);
      setUpdatedStatus(true);
    } catch (error) {
      console.error('Error updating employee:', error);
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="dialog-overlay">
      <div className="dialog-box">
        <div className="update-employee-container">
          <h2>Update Employee</h2>
          <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Department:
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={employee.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Date of Birth:
            <input
              type="text"
              name="dateOfBirth"
              value={employee.dateOfBirth}
              onChange={handleChange}
            />
          </label>
          <br />
            <button type="submit" disabled={loading}>Update Employee</button>
            <button type="button" onClick={onClose} disabled={loading}>Cancel</button>

          </form>
          {updatedStatus && (
          <div className="update-display-overlay">
            <div className={`update-display ${updatedStatus ? 'success' : 'failure'}`}>
              {updatedStatus ? 'Employee updated successfully!' : 'Error updating employee. Please try again.'}
            </div>
          </div>
        )}
        </div>
        
      </div>
        
    </div>
  );
};

export default UpdateEmployee;
