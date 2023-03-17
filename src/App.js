import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Doctor from "./Pages/Doctor";
import Patient from "./Pages/Patient";
import DoctorPatient from "./Pages/DoctorPatient";
import SignUp from "./Pages/SignUp";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/doctor" element={<Doctor/>} />
        <Route path="/my_patients" element={<DoctorPatient/>} />
        <Route path="/patient" element={<Patient/>} />
      </Routes>
    </Router>
  );
}

export default App;
