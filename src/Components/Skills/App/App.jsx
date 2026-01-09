import React from "react";
import "./App.css";
import "../../../App.css";
import flutter from "../../../img/Flutter.png";
import react from "../../../img/React.png";
import android from "../../../img/android.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const path = location.pathname;
  const hide = path === "/work/AppDevelopment" ? "hide" : "more";
  return (
    <div className="container">
      <div className="a-left">
        <img src={android} className="an-image" alt="" />

        <div className="box1">
          <div className="box2">
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="green"></div>
          </div>
          <div className="para">
            Experience (at a startup) in building, and implementing mobile
            application with React Native.
          </div>
          <div className="para">
            Build mobile applications using Flutter and have familiarity of
            using features like Google Maps, the device camera and
            authentication.
          </div>
        </div>
        <div className={hide}>
          <Link to="/work/AppDevelopment">Show More</Link>
        </div>
      </div>
      <div className="a-right">
        <div className="s-heading a-heading">App Development</div>
        <div className="a-image">
          <img src={flutter} className="f-image" alt="" />
          <img src={react} className="r-image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
