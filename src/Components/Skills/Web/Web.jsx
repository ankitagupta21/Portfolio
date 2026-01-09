import React from "react";
import "./Web.css";
import "../../../App.css";
import wd from "../../../img/wd.png";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const Web = () => {
  const location = useLocation();
  const path = location.pathname;
  const hide = path === "/work/WebDevelopment" ? "hide" : "more";
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
            Experience (at a startup) in building, and implementing web
            application with React.js.
          </div>
          <div className="para">
            Build web applications using MERN stack and Flask framework.
          </div>
        </div>
        <div className={hide}>
          <Link to="/work/WebDevelopment">Show More</Link>
        </div>
      </div>
    </div>
  );
};

export default Web;
