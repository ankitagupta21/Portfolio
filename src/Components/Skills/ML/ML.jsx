import React from "react";
import "./ML.css";
import "../../../App.css";
import ML1 from "../../../img/ML1.png";
import ML2 from "../../../img/ML2.png";
import ML3 from "../../../img/ML3.png";
import { useLocation } from "react-router-dom";

const ML = () => {
  const location = useLocation();
  const path = location.pathname;
  const hide = path === "/work/MachineLearning" ? "hide" : "more";
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
            Proficient in Python libraries such as NumPy, Pandas, Matplotlib,
            Scikit-learn, etc.
          </div>
          <div className="para">
            Knowledge of Linear Algebra, Probability and Statistics required for
            Machine Learning.
          </div>
        </div>
        <div className={hide}>
          <a href="/work/MachineLearning">Show More</a>
        </div>
      </div>
      <div className="m-right">
        <div className="s-heading m-heading">Machine Learning</div>
        <div className="m-image">
          <img src={ML1} className="image-1" />
          <img src={ML2} className="image-2" />
          <img src={ML3} className="image-3" />
        </div>
      </div>
    </div>
  );
};

export default ML;
