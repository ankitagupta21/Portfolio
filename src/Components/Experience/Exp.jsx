import React from "react";
import "./Exp.css";
import exp from "../../img/exp.png";

const Exp = ({ experience }) => {
  return (
    <div className="sub-container1">
      <img src={exp} className="sub-img" />
      <div className="sub-right">
        <p className="sub-heading">Experience</p>
        <div>
          {experience.map((item) => {
            const { id, company, title, date, desc, skills } = item;
            return (
              <div key={id} className="exp">
                <div className="exp-top">
                  <p className="exp-heading">
                    <u>{company}</u>
                  </p>
                  <p className="exp-date">{date}</p>
                </div>

                <p className="exp-title">{title}</p>

                <ul className="exp-para">
                  {desc.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
                <div className="skills">
                  {skills.map((item) => {
                    return (
                      <div className="skill e">
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Exp;
