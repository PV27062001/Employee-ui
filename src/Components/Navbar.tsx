import React from 'react';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Employee Record</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">List All Employees</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addEmployee">Add Employee</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/listEmployee">List EMployee</a>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
