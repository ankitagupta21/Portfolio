import React from "react";
import "./AppD.css";
import "../../../App.css";
import flutter from "../../../img/Flutter.png";
import react from "../../../img/React.png";
import android from "../../../img/android.png";

const AppD = () => {
  return (
    <div className="container">
      <div className="a-left">
        <img src={android} className="an-image" />

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
        <div className="more">Show More</div>
      </div>
      <div className="a-right">
        <div className="s-heading a-heading">App Development</div>
        <div className="a-image">
          <img src={flutter} className="f-image" />
          <img src={react} className="r-image" />
        </div>
      </div>
    </div>
  );
};

export default AppD;
