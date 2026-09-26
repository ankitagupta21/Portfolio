import React from "react";
import "./ML.css";
import "../../../App.css";
import ML1 from "../../../img/ML1.png";
import ML2 from "../../../img/ML2.png";
import ML3 from "../../../img/ML3.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ML = () => {
  const location = useLocation();
  const path = location.pathname;
  const hide = path === "/explore/MachineLearning" ? "hide" : "more";
  return (
    <div className="container m">
      <div className="m-left">
        <div className="box1">
          <div className="box2">
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="green"></div>
          </div>
          <div className="para">
            Integrating local LLMs (Ollama) into applications for semantic
            classification, keeping user data on-device.
          </div>
          <div className="para">
            Classic ML with Python: NumPy, Pandas, Scikit-learn, NLP, and model
            evaluation.
          </div>
        </div>
        <div className={hide}>
          <Link to="/explore/MachineLearning">Show More</Link>
        </div>
      </div>
      <div className="m-right">
        <div className="s-heading m-heading">AI &amp; Machine Learning</div>
        <div className="m-image">
          <img src={ML1} className="image-1" alt="" />
          <img src={ML2} className="image-2" alt="" />
          <img src={ML3} className="image-3" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ML;
