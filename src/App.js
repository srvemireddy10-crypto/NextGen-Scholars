import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Archive from './pages/Archive';
import Submit from './pages/Submit';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = () => setSidebarOpen(!sidebarOpen);
  const closeMenu = () => setSidebarOpen(false);

  return (
    <Router>
      <header className="header">
        <div className="logo">NextGen Scholars</div>
        <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
      </header>
      <nav className={`sidebar${sidebarOpen ? ' open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/submit" onClick={closeMenu}>Submit</Link>
        <Link to="/archive" onClick={closeMenu}>Archive</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </nav>
      <div className={`overlay${sidebarOpen ? ' show' : ''}`} onClick={closeMenu}></div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App; 