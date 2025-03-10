import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Header.css";

const Header = ({ scrollToSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Toggle main menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdown when closing the menu
    if (isMenuOpen) {
      setIsDropdownOpen(false);
    }
  };

  // Toggle dropdown menu
  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Handle clicks outside the menu to close it
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle section navigation (Home page sections)
  const handleSectionNavigation = (sectionId) => {
    // Navigate to home page first
    navigate("/");
    setIsMenuOpen(false);
    setIsDropdownOpen(false);

    // Then scroll to section after a short delay
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // Navigate to different routes
  const handleNavigate = (e, path) => {
    e.preventDefault();
    navigate(path);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      {/* Logo with error handling */}
      <div className="logo">
        <img 
          src="../assets/images/all-logo.avif" 
          alt="Logo" 
        />
      </div>
      
      {/* Navigation Menu */}
      <nav className="nav-menu" ref={menuRef}>
        <ul className={isMenuOpen ? "show" : ""}>
          <li className="home-link">
            <a  onClick={(e) => { e.preventDefault(); handleSectionNavigation('main'); }}>
              Home
            </a>
          </li>
          <li className="services-link">
            <a href="#services"  onClick={(e) => { e.preventDefault(); handleSectionNavigation('services'); }}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavigate(e, "/our-technology")}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavigate(e, "/contact")}>
              Contact
            </a>
          </li>
          <li className="dropdown">
            {/* Dropdown toggle button */}
            <a  className="dropbtn" onClick={toggleDropdown}>
              More
            </a>
            {/* Dropdown content with controlled visibility */}
            <div className={`dropdown-content ${isDropdownOpen ? "show-dropdown" : ""}`}>
              <a
                href="#customers"  onClick={(e) => { e.preventDefault(); handleSectionNavigation('customers'); }}
              >
                Customers
              </a>
              <a href="#posts" onClick={(e) => { e.preventDefault(); handleSectionNavigation('posts'); }}>
                Posts
              </a>
              <a
                href="#agreement" onClick={(e) => { e.preventDefault(); handleSectionNavigation('agreement'); }}
              >
                Agreements
              </a>
              <a 
                href="#mri-chillers" 
                onClick={(e) => handleNavigate(e, "/mri-chillers")}
              >
                MRI Chillers
              </a>
              <a 
                href="#equipment-brands" 
                onClick={(e) => handleNavigate(e, "/equipment-brands")}
              >
                Equipment & Brands
              </a>
              <a
                href="#temp-control"
                onClick={(e) => handleNavigate(e, "/temp-control")}
              >
                Temp Controlled
              </a>
              <a 
                href="#our-technology" 
                onClick={(e) => handleNavigate(e, "/our-technology")}
              >
                Our Technology
              </a>
            </div>
          </li>
        </ul>
      </nav>
      
      {/* Hamburger Menu for mobile view */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;