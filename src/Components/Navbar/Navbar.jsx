import React from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Footer from "../Footer/Footer";

const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  const [dropdown, setDropdown] = React.useState(false);
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = () => {
    setDropdown(true);
  };
  const handleWorkClick = () => {
    setDropdown(!dropdown);
  };
  return (
    <nav className="n-wrapper">
      <div className="n-left">
        <i
          class={darkMode ? "fa-solid fa-toggle-on" : "fa-solid fa-toggle-off"}
        ></i>
      </div>

      <div className="n-right">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "menu active" : "menu"}>
          <li className="menu-item">
            <a href="/" className="menu-links" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className="menu-item">
            <a
              href="https://drive.google.com/file/d/1skRm4QfiugGtF-pMU6n5TW5dz6PDYQKf/view?usp=sharing"
              className="menu-links"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li className="menu-item work" onMouseEnter={onMouseEnter}>
            <div className="menu-links work" onClick={handleWorkClick}>
              <text>Work</text>
              <i
                className={dropdown ? "fas fa-angle-up" : "fas fa-angle-down"}
              />
            </div>
            {dropdown && <Dropdown className="dropdown-s" />}
          </li>
          <li className="menu-item">
            <a href="#contact" className="menu-links" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
