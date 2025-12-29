import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";

// PAGE COMPONENTS
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <p>Copyright &#169; 2025 ThawZin Htun. All Rights Reserved.</p>
      </footer>
    </Router>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Logic to hide the name on the About page
  const isHome = location.pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "About", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop Nav */}
      <nav id="desktop-nav">
        {/* LOGO HIDDEN ON HOME */}
        {!isHome && <div className="logo">ThawZin Htun</div>}
        
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? "active" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger Nav */}
      <nav id="hamburger-nav">
        {/* LOGO HIDDEN ON HOME */}
        {!isHome && <div className="logo">ThawZin Htun</div>}
        
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} onClick={toggleMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;