import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
const App = () => {
  return (
    <CustomNavbar/>
  );
};

export default App;
