import React from "react";
import "./WebD.css";
import Web from "../../Components/Skills/Web/Web";
import Exp from "../../Components/Experience/Exp";
import Proj from "../../Components/Projects/Proj";
import sq1 from "../../img/sq1.png";
import sq2 from "../../img/sq2.png";

const experience = [
  {
    id: 1,
    company: "Kaarvaan Labs Pvt Ltd",
    title: "Web Developer Intern",
    date: "Feb 2022-Apr 2022",
    desc: [
      "Produced the prototype utilizing Bootstrap Studio and leveraged React.js for the website's front-end development.",
      "Exhibited self-motivation in acquiring new skills autonomously.",
    ],
    skills: ["React.js", "Bootstrap Studio", "HTML", "CSS"],
  },
];

const projects = [
  {
    id: 1,
    name: "MedEasy",
    subHead:
      "A web platform that allows people to donate unused medicines to those in need.",
    link: "https://medeasy.aditisahu6.repl.co/",
    desc: [
      "Played a pivotal role as a back-end developer in a team project.",
      "Managed the back-end infrastructure using Node.js and employed MongoDB (NoSQL) for data storage.",
    ],
    skills: ["Node.js", "MongoDB", "Express.js"],
    date: "Feb 2022-Mar 2022",
    contributors: [
      {
        id: 1,
        name: "Aditi Sahu",
        link: "https://www.linkedin.com/in/aditi-sahu9800/",
      },
      {
        id: 2,
        name: "Reeti Agarwal",
        link: "https://www.linkedin.com/in/reeti-agarwal/",
      },
      {
        id: 3,
        name: "Astha Tripathi",
        link: "https://www.linkedin.com/in/astha-tripathi-078031217/",
      },
    ],
  },
  {
    id: 2,
    name: "Flash Card Application",
    subHead:
      "A web platform to make virtual flashcards for effective memorization of topics.",
    link: "https://github.com/ankitagupta21/Flash-Card",
    desc: [
      "Made front-end of the application using HTML, CSS and Bootstrap and used the Flask framework for maintaining the back-end.",
      "Stored data using SQLite and used Flask SQLAlchemy for object-relational mapping.",
    ],
    skills: ["Flask", "SQLite", "HTML", "CSS", "Bootstrap"],
    date: "Dec 2021-Jan 2022",
  },
];

function WebD() {
  return (
    <div className="sub-container">
      <img src={sq1} className="sq1" alt="" />
      <img src={sq2} className="sq2" alt="" />
      <Web />
      <Exp experience={experience} />
      <Proj projects={projects} />
    </div>
  );
}

export default WebD;
