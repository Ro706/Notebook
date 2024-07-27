import React from 'react';
import Navbar from './components/Navbar'; // Corrected path
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Switch

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/users" element={<Users />} /> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;
