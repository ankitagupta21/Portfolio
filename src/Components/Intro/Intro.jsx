import React from "react";
import "./Intro.css";
import "../../App.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-name">
        <div>Hi, I'm Ankita</div>
        <div>A Software Engineer.</div>
      </div>
      <div className="box1">
        <div className="box2">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <div className="para">
          Experience in building mobile application with React Native and web
          application in ReactJs.
        </div>
        <div className="para">
          Experience in implementing scalable and robust back-end systems
          including APIs, databases, and server-side logic.
        </div>
      </div>
    </div>
  );
};

export default Intro;
