import React from "react";
import "./Web.css";
import "../../../App.css";
import wd from "../../../img/wd.png";

const Web = () => {
  return (
    <div className="container">
      <div className="w-left">
        <div className="s-heading w-heading">Web Development</div>
        <img src={wd} className="w-image" />
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
        <div className="more">Show More</div>
      </div>
    </div>
  );
};

export default Web;
