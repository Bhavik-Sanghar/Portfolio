import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.App.css'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      </Routes>
    </Router>
  );
};

export default App;
