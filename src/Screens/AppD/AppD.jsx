import React from "react";
import CardSection from "../../Components/Cards/CardSection";
import {
  certificateCards,
  experienceCards,
  projectCards,
} from "../../Components/Cards/cardData";
import exp from "../../img/exp.png";
import proj from "../../img/proj.png";
import cer from "../../img/cer.png";
import "./AppD.css";
import App from "../../Components/Skills/App/App";
import sq1 from "../../img/sq1.png";
import sq2 from "../../img/sq2.png";

export const experience = [
  {
    id: 1,
    company: "Argyle Enigma Tech Labs",
    title: "Software Engineer Intern",
    date: "Mar 2023 - Sep 2023",
    desc: [
      "Constructed a React Native app for the company's latest product, Budgetalizer.",
      "Engaged in productive collaboration with colleagues to address intricate software challenges, resulting in a 40% reduction in bug backlogs.",
    ],
    skills: ["React Native", "Figma"],
  },
];

export const projects = [
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
    date: "Mar 2023",
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
    date: "Feb 2023",
  },
];

export const certificates = [
  {
    id: 1,
    name: "Flutter & Dart - The Complete Guide [2023 Edition]",
    link: "https://www.udemy.com/certificate/UC-f2e636ef-a548-4266-92f0-c92ea6753027/",
    date: "Mar 2023",
    organization: "Udemy",
    skills: ["Flutter", "Dart"],
  },
];
function AppD() {
  return (
    <div className="sub-container">
      <img src={sq1} className="sq1 app" alt="" />
      <img src={sq2} className="sq2" alt="" />
      <App />
      <CardSection heading="Experience" icon={exp} cards={experienceCards(experience)} />
      <CardSection heading="Projects" icon={proj} cards={projectCards(projects)} />
      <CardSection
        heading="Certifications"
        icon={cer}
        cards={certificateCards(certificates)}
      />
    </div>
  );
}

export default AppD;
