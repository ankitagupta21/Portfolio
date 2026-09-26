import React from "react";
import "./Web.css";
import "../../../App.css";
import wd from "../../../img/wd.png";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const Web = () => {
  const location = useLocation();
  const path = location.pathname;
  const hide = path === "/explore/WebDevelopment" ? "hide" : "more";
  return (
    <div className="container">
      <div className="w-left">
        <div className="s-heading w-heading">Web Development</div>
        <img src={wd} className="w-image" alt="" />
      </div>
      <div className="w-right">
        <div className="box1">
          <div className="box2">
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="green"></div>
          </div>
          <div className="para">
            Frontend work in React.js at GoodLives, cutting page load time by
            10%.
          </div>
          <div className="para">
            Full-stack apps with Spring Boot, Node.js, React, PostgreSQL, and
            MongoDB, from REST APIs to Dockerized services.
          </div>
        </div>
        <div className={hide}>
          <Link to="/explore/WebDevelopment">Show More</Link>
        </div>
      </div>
    </div>
  );
};

export default Web;
