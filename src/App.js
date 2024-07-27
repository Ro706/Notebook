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
        <Routes> {/* Changed from Switch to Routes */}
          <Route path="/" element={<Home />} /> {/* Updated syntax */}
          <Route path="/about" element={<About />} /> {/* Updated syntax */}
          <Route path="/users" element={<Users />} /> {/* Updated syntax */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
