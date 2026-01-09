import React from "react";
import cer from "../../img/cer.png";

const Cer = ({ certificates, ml }) => {
  return (
    <div className="sub-container1 p">
      <img src={cer} className="sub-img" alt="" />
      <div className="sub-right">
        {ml ? (
          <p className="sub-heading">Specialization</p>
        ) : (
          <p className="sub-heading">Certifications</p>
        )}
        <div>
          {certificates.map((certificate) => (
            <div className="project">
              <p className="p-name">{certificate.name}</p>
              <div className="p-head">
                <div className="p-headl">
                  <p className="p-subhead">{certificate.organization}</p>
                  {!ml && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-link"
                    >
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
                <p className="p-date">{certificate.date}</p>
              </div>
              {ml ? (
                <div className="p-contributors">
                  <p>Coursework:</p>
                  <div className="p-contributors-list">
                    {certificate.skills.map((item) => {
                      return (
                        <div className="skill e">
                          <p>{item}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="skills">
                  {certificate.skills.map((item) => {
                    return (
                      <div className="skill e">
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cer;
