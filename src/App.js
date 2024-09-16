import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState'; // Correctly cased import

const App = () => {
  return (
    <div>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
};

export default App;
