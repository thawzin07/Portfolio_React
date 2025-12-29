import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <div className="logo">ThawZin Htun</div>
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
        <div className="logo">ThawZin Htun</div>
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
};

export default Navbar;