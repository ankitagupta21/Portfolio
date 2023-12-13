import React from "react";
import cer from "../../img/cer.png";

const Cer = ({ certificates }) => {
  return (
    <div className="sub-container1 p">
      <img src={cer} className="sub-img" />
      <div className="sub-right">
        <p className="sub-heading">Certifications</p>
        <div>
          {certificates.map((certificate) => (
            <div className="project">
              <p className="p-name">{certificate.name}</p>
              <div className="p-head">
                <div className="p-headl">
                  <p className="p-para">{certificate.organization}</p>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-link"
                  >
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
                <p className="p-date">{certificate.date}</p>
              </div>

              <div className="skills">
                {certificate.skills.map((item) => {
                  return (
                    <div className="skill e">
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cer;
