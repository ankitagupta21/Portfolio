import React from "react";
import "./Proj.css";
import proj from "../../img/proj.png";

const Proj = ({ projects }) => {
  return (
    <div className="sub-container1 p">
      <img src={proj} className="sub-img" alt="" />
      <div className="sub-right">
        <p className="sub-heading">Projects</p>
        <div>
          {projects.map((project) => (
            <div className="project">
              <div className="p-head">
                <div className="p-headl">
                  <p className="p-name">
                    {project.name}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-link"
                    >
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </p>
                </div>

                <p className="p-date">{project.date}</p>
              </div>
              <p className="p-subhead">{project.subHead}</p>
              <div className="p-para">
                <ul>
                  {project.desc.map((d) => (
                    <li>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="skills">
                {project.skills.map((skill) => (
                  <div className="skill p">
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
              {project.contributors && (
                <div className="p-contributors">
                  <p>Contributors:</p>
                  <div className="p-contributors-list">
                    {project.contributors.map((contributor) => (
                      <a
                        href={contributor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contributor.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proj;
