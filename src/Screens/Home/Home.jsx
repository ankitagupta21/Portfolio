import React from "react";
import Intro from "../../Components/Intro/Intro";
import Exp from "../../Components/Experience/Exp";
import Proj from "../../Components/Projects/Proj";
import sq1 from "../../img/sq1.png";
import sq2 from "../../img/sq2.png";
import sq13 from "../../img/sq13.png";
import cer from "../../img/cer.png";
import "./Home.css";
import { Link } from "react-router-dom";

const experience = [
  {
    id: 1,
    company: "Walmart Global Tech India",
    title: "Software Engineer II",
    date: "Aug 2024 - Present",
    desc: [
      "Built Power BI analytics dashboards to analyze metrics across all InfoSec products.",
      "Developed understanding of encryption/decryption flows for Tier-0 Walmart products, supporting secure system design and compliance.",
      "Contributing to ServiceNow development, improving operational efficiency and internal service workflows."
    ],
    skills: ["PowerBI", "Servicenow Devlopement", "Airflow"],
  },
  {
    id: 2,
    company: "GoodLives",
    title: "Frontend Developer Intern",
    date: "Mar 2024 - Jul 2024",
    desc: [
      "Implemented the front-end of the company's website using React.js.",
      "Addressed bugs and optimized data loading, resulting in a 10% reduction in webpage loading time."
    ],
    skills: ["React.js","Version Control"],
  },
  {
    id: 3,
    company: "Argyle Enigma Tech Labs",
    title: "Software Engineer Intern",
    date: "Mar 2023 - Sep 2023",
    desc: [
      "Constructed a React Native app for the company's latest product, Budgetalizer.",
      "Cultivated expertise in Software Development Life Cycle(SDLC) and effectively applied Scrum (Agile Framework), enhancing project delivery efficiency by 35%.",
    ],
    skills: ["React Native", "Figma"],
  },
  {
    id: 4,
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
    desc: [],
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
    desc: [],
    skills: ["Flask", "SQLite", "HTML", "CSS", "Bootstrap"],
    date: "Dec 2021-Jan 2022",
  },
  {
    id: 3,
    name: "Chat App",
    subHead:
      "An application for a group of people to have a conversation with each other.",
    link: "https://github.com/ankitagupta21/Chat-App",
    desc: [],
    skills: ["Flutter", "Firebase"],
    date: "Mar 2023",
  },
  {
    id: 4,
    name: "Sentiment Prediction of Movie Reviews",
    subHead: "ML model to predict the sentiment of the review text",
    link: "https://www.kaggle.com/code/ankitagupta20/sentiment-analysis-of-movie-reviews",
    desc: [],
    skills: ["Python", "scikit-learn"],
    date: "May 2023-Aug 2023",
  },
];

const skills = [
  "C++",
  "React Native",
  "UI/UX Design",
  "Python Development (Flask)",
  "Machine Learning",
  "SQL",
  "HTML",
  "CSS",
  "Javascript",
  "Node.js",
  "React.js",
  "Express.js",
  "MongoDB",
  "Git",
  "Linux",
  "Figma",
  "Flutter",
  "Dart",
];

const domains = [
  {
    id: 1,
    name: "Web Development",
    link: "/work/WebDevelopment",
  },
  {
    id: 2,
    name: "App Development",
    link: "/work/AppDevelopment",
  },
  {
    id: 3,
    name: "Machine Learning",
    link: "/work/MachineLearning",
  },
  {
    id: 4,
    name: "UI/UX Design",
    link: "/work/UIUXDesign",
  },
];

function Home() {
  return (
    <div className="h-container">
      <Intro />
      <img src={sq1} className="sq1 home" alt="" />
      <img src={sq2} className="sq2 home" alt=""/>
      <img src={sq13} className="sq1 home th" alt="" />
      <Exp experience={experience} />
      <Proj projects={projects} />
      {skills.length > 0 && (
        <div className="sub-container1">
          <img src={cer} className="sub-img" alt="" />
          <div className="sub-right">
            <p className="sub-heading">Skills</p>
            <div>
              <div className="skills">
                {skills.map((skill) => (
                  <div className="skill h">{skill}</div>
                ))}
              </div>
            </div>
            <div className="p-contributors">
              <p>Domains:</p>
              <div className="p-contributors-list">
                {domains.map((contributor) => (
                  <Link to={contributor.link} rel="noopener noreferrer">
                    {contributor.name}
                    {contributor.id !== 4 && <span> , </span>}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
