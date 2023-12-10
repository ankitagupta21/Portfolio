import React from "react";
import "./Footer.css";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="f-wrapper" id="contact">
      <div className="f-top">
        <p className="f-heading">Contact Me.</p>
        <p className="f-para">
          Get in touch or send me an email directly on{" "}
          <b>iankitagupta02@gmail.com</b>.
        </p>
      </div>

      <div className="s-icons">
        <a
          href="https://www.linkedin.com/in/ankitagupta21/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="s-icon" />
        </a>
        <a
          href="https://github.com/ankitagupta21"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareGithub className="s-icon" />
        </a>
        <a
          href="https://www.instagram.com/ankitagupta_20/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagramSquare className="s-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
