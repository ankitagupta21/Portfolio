import React from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = React.useState(false);
  const [click, setClick] = React.useState(false);
  const iconRef = React.useRef();
  const workRef = React.useRef();
  const dropdownMenuRef = React.useRef();

  window.addEventListener("click", (e) => {
    if (
      iconRef.current &&
      !iconRef.current.contains(e.target) &&
      !workRef.current.contains(e.target)
    ) {
      setClick(false);
    }
    if (
      dropdownMenuRef.current &&
      !dropdownMenuRef.current.contains(e.target)
    ) {
      console.log(dropdownMenuRef.current);
      setDropdown(false);
    }
  });
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

      <div className="n-right">
        <div className="menu-icon" onClick={handleClick} ref={iconRef}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "menu active" : "menu"} ref={dropdownMenuRef}>
          <li className="menu-item">
            <Link to="/" className="menu-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="menu-item">
            <a
              href="https://drive.google.com/file/d/1skRm4QfiugGtF-pMU6n5TW5dz6PDYQKf/view?usp=sharing"
              className="menu-links"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li
            className="menu-item work"
            onClick={handleWorkClick}
            onMouseEnter={onMouseEnter}
            ref={workRef}
          >
            <div className="menu-links work">
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
