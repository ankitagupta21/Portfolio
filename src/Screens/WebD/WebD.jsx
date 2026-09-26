import React from "react";
import CardSection from "../../Components/Cards/CardSection";
import {
  experienceCards,
  projectCards,
} from "../../Components/Cards/cardData";
import exp from "../../img/exp.png";
import proj from "../../img/proj.png";
import "./WebD.css";
import Web from "../../Components/Skills/Web/Web";
import sq1 from "../../img/sq1.png";
import sq2 from "../../img/sq2.png";

export const experience = [
  {
    id: 2,
    company: "GoodLives",
    title: "Frontend Developer Intern",
    date: "Mar 2024 - Jul 2024",
    desc: [
      "Implemented the frontend of the company's website using React.js.",
      "Addressed bugs and optimized data loading, resulting in a 10% reduction in webpage loading time.",
    ],
    skills: ["React.js", "Version Control"],
  },
  {
    id: 1,
    company: "Kaarvaan Labs Pvt Ltd",
    title: "Web Developer Intern",
    date: "Feb 2022 - Apr 2022",
    desc: [
      "Produced the prototype utilizing Bootstrap Studio and leveraged React.js for the website's front-end development.",
      "Exhibited self-motivation in acquiring new skills autonomously.",
    ],
    skills: ["React.js", "Bootstrap Studio", "HTML", "CSS"],
  },
];

export const projects = [
  {
    id: 3,
    name: "JobTracker",
    subHead:
      "Self-hosted job application tracker with automatic Gmail scanning and AI classification.",
    demo: "https://ankitagupta21.github.io/Job-Tracker/",
    link: "https://github.com/ankitagupta21/Job-Tracker",
    desc: [
      "Built a full-stack, self-hosted application using Spring Boot, React, PostgreSQL, and Apache Kafka, orchestrated via Docker Compose across 5 containerized services.",
      "Implemented Gmail OAuth2 with incremental scan tracking and converted the frontend into an installable PWA.",
    ],
    skills: ["Spring Boot", "React", "PostgreSQL", "Apache Kafka", "Docker", "OAuth2", "PWA"],
  },
  {
    id: 1,
    name: "MedEasy",
    subHead:
      "A web platform that allows people to donate unused medicines to those in need.",
    demo: "https://medeasy-aixe.onrender.com/",
    desc: [
      "Played a pivotal role as a back-end developer in a team project.",
      "Managed the back-end infrastructure using Node.js and employed MongoDB (NoSQL) for data storage.",
    ],
    skills: ["Node.js", "MongoDB", "Express.js"],
    date: "Feb 2022 - Mar 2022",
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
    date: "Dec 2021 - Jan 2022",
  },
];

function WebD() {
  return (
    <div className="sub-container">
      <img src={sq1} className="sq1" alt="" />
      <img src={sq2} className="sq2" alt="" />
      <Web />
      <CardSection heading="Experience" icon={exp} cards={experienceCards(experience)} />
      <CardSection heading="Projects" icon={proj} cards={projectCards(projects)} />
    </div>
  );
}

export default WebD;
