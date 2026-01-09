import React from "react";
import "./Prototype.css";
import pro from "../../img/pro.png";

const Pro = ({ prototypes }) => {
  return (
    <div className="sub-container1">
      <img src={pro} className="sub-img" alt="" />
      <div className="sub-right">
        <p className="sub-heading">Prototypes (hi-fi)</p>
        <div>
          {prototypes.map((prototype) => (
            <div className="prototype">
              <div className="p-headl">
                <p className="p-name">{prototype.name}</p>
                <a
                  href={prototype.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-link"
                >
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>

              <div className="p-para">
                <img src={prototype.img} className="p-img" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pro;
