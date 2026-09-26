import React from "react";
import Intro from "../../Components/Intro/Intro";
import CardSection from "../../Components/Cards/CardSection";
import exp from "../../img/exp.png";
import proj from "../../img/proj.png";
import sq1 from "../../img/sq1.png";
import sq2 from "../../img/sq2.png";
import sq13 from "../../img/sq13.png";
import cer from "../../img/cer.png";
import "./Home.css";
import { experienceCards, projectCards } from "../../Components/Cards/cardData";
import * as web from "../WebD/WebD";
import * as app from "../AppD/AppD";
import * as ml from "../MLS/MLS";
import * as design from "../DesignS/DesignS";

const experience = [
  {
    id: 1,
    company: "Walmart Global Tech India",
    title: "Software Engineer II",
    date: "Aug 2024 - Present",
    desc: [
      "Built a service-to-team search for the Infosec Support portal, using a scheduled job to index 36 team forms into a searchable table and auto-suggest the correct form when users know an app or service name but not the owning team.",
      "Delivered ServiceNow solutions across ~6 Infosec teams, redesigning the SSH/SFTP key approval workflow to reduce mean delivery time by 18.9% and the Data Governance intake form to reduce mean delivery time by 53.5%.",
      "Engineered a Power BI analytics dashboard for Infosec products using data from GCP and Apache Airflow.",
      "Built an automated PR creation workflow in Payment Cryptography to update service registry files upon customer certificate renewals.",
      "Received two internal recognition awards for rapid technology adaptation and delivery speed.",
    ],
    skills: ["ServiceNow", "Power BI", "GCP", "Apache Airflow"],
  },
  {
    id: 2,
    company: "GoodLives",
    title: "Frontend Developer Intern",
    date: "Mar 2024 - Jul 2024",
    desc: [
      "Implemented the frontend of the company's website using React.js.",
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
      "Engaged in productive collaboration with colleagues to address intricate software challenges, resulting in a 40% reduction in bug backlogs.",
    ],
    skills: ["React Native", "Figma"],
  },
  {
    id: 4,
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

const projects = [
  {
    id: 1,
    name: "JobTracker",
    subHead:
      "Self-hosted job application tracker with automatic Gmail scanning and AI classification.",
    demo: "https://ankitagupta21.github.io/Job-Tracker/",
    link: "https://github.com/ankitagupta21/Job-Tracker",
    desc: [
      "Built a full-stack, self-hosted application using Spring Boot, React, PostgreSQL, and Apache Kafka, orchestrated via Docker Compose across 5 containerized services.",
      "Designed an email-classification pipeline using a local LLM (Ollama) to detect job application status changes from Gmail, replacing brittle keyword matching with semantic filtering and keeping email content on-device for privacy.",
      "Implemented Gmail OAuth2 with incremental scan tracking and converted the frontend into an installable PWA.",
    ],
    skills: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Apache Kafka",
      "Docker",
      "Ollama",
      "OAuth2",
    ],
    date: "Jun 2026 - Present",
  },
  {
    id: 2,
    name: "Sentiment Prediction of Movie Reviews",
    subHead: "ML model to predict the sentiment of the review text.",
    link: "https://www.kaggle.com/code/ankitagupta20/sentiment-analysis-of-movie-reviews",
    desc: [
      "Built a sentiment classification model on the IMDb dataset (50K reviews) using Python and Scikit-learn, with tokenization, stop-word removal, and TF-IDF vectorization.",
      "Compared Logistic Regression, SVM, Random Forest, and Naive Bayes using F1-score and precision-recall metrics; Logistic Regression achieved 87% accuracy.",
    ],
    skills: ["Python", "Scikit-learn", "NLP"],
    date: "May 2023 - Aug 2023",
  },
  {
    id: 5,
    name: "MedEasy",
    subHead:
      "A web platform that allows people to donate unused medicines to those in need.",
    demo: "https://medeasy-aixe.onrender.com/",
    desc: [
      "Played a pivotal role as a back-end developer in a team project.",
      "Managed the back-end infrastructure using Node.js and employed MongoDB (NoSQL) for data storage.",
    ],
    skills: ["Node.js", "MongoDB", "Express.js"],
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
    id: 4,
    name: "Flash Card Application",
    subHead:
      "A web platform to make virtual flashcards for effective memorization of topics.",
    link: "https://github.com/ankitagupta21/Flash-Card",
    desc: [],
    skills: ["Flask", "SQLite", "HTML", "CSS", "Bootstrap"],
    date: "Dec 2021 - Jan 2022",
  },
];

const skills = [
  {
    id: 1,
    group: "Languages",
    items: ["Java", "JavaScript", "Python", "SQL", "C++"],
  },
  {
    id: 2,
    group: "Frontend",
    items: ["React.js", "React Native", "HTML", "CSS"],
  },
  {
    id: 3,
    group: "Backend & Databases",
    items: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    id: 4,
    group: "Data & AI/ML",
    items: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "NLP",
      "LLM Integration (Ollama)",
      "Power BI",
      "Apache Airflow",
    ],
  },
  {
    id: 5,
    group: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Apache Kafka",
      "ServiceNow",
      "GCP",
      "Linux",
    ],
  },
];

const education = [
  {
    id: 1,
    name: "B.Tech (Computer Science and Engineering)",
    organization: "JSS Academy of Technical Education, Noida",
    date: "Oct 2020 - Jun 2024",
    grade: "CGPA: 8.4/10",
    coursework: [
      "Design and Analysis of Algorithms",
      "Data Structures and Algorithms",
      "Object Oriented Programming",
      "Operating System",
      "Database Management System",
      "Computer Networks",
    ],
  },
  {
    id: 2,
    name: "Diploma (Programming and Data Science)",
    organization: "Indian Institute of Technology, Madras",
    date: "Nov 2020 - Dec 2023",
    grade: "CGPA: 7.7/10",
    coursework: [
      "Mathematics",
      "Statistics",
      "Machine Learning",
      "System Commands",
    ],
  },
];

const count = (items, singular, plural = `${singular}s`) =>
  items.length ? `${items.length} ${items.length === 1 ? singular : plural}` : null;
const uniqueSkills = (...groups) => [
  ...new Set(groups.flat().flatMap((item) => item.skills || [])),
];

// Summaries of the Work pages, counted from each page's own data.
const areas = [
  {
    id: 1,
    title: "Web Development",
    to: "/explore/WebDevelopment",
    note: [count(web.experience, "internship"), count(web.projects, "project")],
    skills: uniqueSkills(web.projects, web.experience),
  },
  {
    id: 2,
    title: "App Development",
    to: "/explore/AppDevelopment",
    note: [
      count(app.experience, "internship"),
      count(app.projects, "project"),
      count(app.certificates, "certification"),
    ],
    skills: uniqueSkills(app.projects, app.experience, app.certificates),
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    to: "/explore/MachineLearning",
    note: [
      count(ml.projects, "project"),
      ml.certificates.length ? "IIT Madras coursework" : null,
    ],
    skills: uniqueSkills(ml.projects),
  },
  {
    id: 4,
    title: "UI/UX Design",
    to: "/explore/UIUXDesign",
    note: [
      count(design.prototypes, "prototype"),
      count(design.certificates, "certification"),
    ],
    skills: ["Figma", "Wireframing", "Prototyping", "UX Research"],
  },
].map((area) => ({ ...area, note: area.note.filter(Boolean).join(" · ") }));

function Home() {
  return (
    <div className="h-container">
      <Intro />
      <img src={sq1} className="sq1 home" alt="" />
      <img src={sq2} className="sq2 home" alt=""/>
      <img src={sq13} className="sq1 home th" alt="" />
      <CardSection
        heading="Experience"
        icon={exp}
        cards={experienceCards(experience)}
      />
      <CardSection
        heading="Projects"
        icon={proj}
        cards={projectCards(projects)}
      />
      <CardSection heading="Explore by Area" icon={proj} cards={areas} />
      <CardSection
        heading="Skills"
        icon={cer}
        expandable={false}
        cards={skills.map((category) => ({
          id: category.id,
          title: category.group,
          skills: category.items,
        }))}
      />
      <CardSection
        heading="Education"
        icon={cer}
        cards={education.map((item) => ({
          id: item.id,
          title: item.organization,
          subtitle: item.name,
          date: item.date,
          note: item.grade,
          sections: [{ label: "Coursework", items: item.coursework }],
        }))}
      />
    </div>
  );
}

export default Home;
