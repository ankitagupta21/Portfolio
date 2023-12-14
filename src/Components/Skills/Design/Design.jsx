import React from "react";
import "./Design.css";
import design from "../../../img/design.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Design = () => {
  const location = useLocation();
  const path = location.pathname;
  const hide = path === "/work/UIUXDesign" ? "hide" : "more";

  return (
    <div className="container">
      <div className="d-left">
        <div className="s-heading d-heading">UI/UX Design</div>
        <img src={design} className="d-image" />
      </div>
      <div className="d-right">
        <div className="box1">
          <div className="box2">
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="green"></div>
          </div>
          <div className="para">
            Experience in building prototype for mobile and web applications
            using Figma.
          </div>
          <div className="para">
            Learned how to design wireframes, create prototypes and conduct
            usability testing.
          </div>
        </div>
        <div className={hide}>
          <Link to="/work/UIUXDesign">Show More</Link>
        </div>
      </div>
    </div>
  );
};

export default Design;
