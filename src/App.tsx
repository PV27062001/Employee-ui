import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ListAllEmployees}  from './Components/ListAllEmployees';
import { Navbar } from './Components/Navbar';
import { AddEmployee } from './addemployee/AddEmloyee';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ListAllEmployees />} />
        <Route path="/addEmployee" element={<AddEmployee/>}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
