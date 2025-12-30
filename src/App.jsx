import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";

// PAGE COMPONENTS
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// NAVBAR COMPONENT (Extracted for clarity)
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
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
      <nav id="desktop-nav">
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

      <nav id="hamburger-nav">
        {!isHome && <div className="logo">ThawZin Htun</div>}
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span><span></span><span></span>
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

// MAIN APP COMPONENT
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

export default App;