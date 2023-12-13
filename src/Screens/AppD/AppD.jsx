import React, { useEffect } from "react";
import "./AppD.css";
import App from "../../Components/Skills/App/App";
import Exp from "../../Components/Experience/Exp";
import Proj from "../../Components/Projects/Proj";
import Cer from "../../Components/Certificates/Certificate";
import sq1 from "../../img/sq1.png";
import sq2 from "../../img/sq2.png";

const experience = [
  {
    id: 1,
    company: "Argyle Enigma Tech Labs",
    title: "Software Engineer Intern",
    date: "March 2023 - September 2023",
    desc: [
      "Constructed a React Native app for the company's latest product, Budgetalizer.",
      "Cultivated expertise in Software Development Life Cycle(SDLC) and effectively applied Scrum (Agile Framework), enhancing project delivery efficiency by 35%.",
    ],
    skills: ["React Native", "Scrum", "Agile"],
  },
];

const projects = [
  {
    id: 1,
    name: "Chat App",
    subHead:
      "An application for a group of people to have a conversation with each other.",
    link: "https://github.com/ankitagupta21/Chat-App",
    desc: [
      "Used Flutter to develop the front-end of the application.",
      "Used Firebase for authentication and storage of data.",
    ],
    skills: ["Flutter", "Firebase"],
    date: "March 2023",
  },
  {
    id: 2,
    name: "Expense Tracker",
    subHead: "An application to keep track of your personal expenses.",
    link: "https://github.com/ankitagupta21/Expense-Tracker",
    desc: [
      "Used Flutter to develop the front-end of the application.",
      "Provided a user-friendly interface to the user through the use of charts and graphs.",
    ],
    skills: ["Flutter"],
    date: "February 2023",
  },
];

const certificates = [
  {
    id: 1,
    name: "Flutter & Dart - The Complete Guide [2023 Edition]",
    link: "https://www.udemy.com/certificate/UC-f2e636ef-a548-4266-92f0-c92ea6753027/",
    date: "March 2023",
    organization: "Udemy",
    skills: ["Flutter", "Dart"],
  },
];
function AppD() {
  return (
    <div className="sub-container">
      <img src={sq1} className="sq1 app" />
      <img src={sq2} className="sq2" />
      <App />
      <Exp experience={experience} />
      <Proj projects={projects} />
      <Cer certificates={certificates} />
    </div>
  );
}

export default AppD;
