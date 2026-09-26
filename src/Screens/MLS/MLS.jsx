import React from "react";
import CardSection from "../../Components/Cards/CardSection";
import {
  courseworkCards,
  projectCards,
} from "../../Components/Cards/cardData";
import proj from "../../img/proj.png";
import cer from "../../img/cer.png";
import ML from "../../Components/Skills/ML/ML";
import "./MLS.css";
import sq13 from "../../img/sq13.png";
import sq2 from "../../img/sq2.png";

export const projects = [
  {
    id: 3,
    name: "JobTracker",
    subHead:
      "Self-hosted job application tracker with automatic Gmail scanning and AI classification.",
    demo: "https://ankitagupta21.github.io/Job-Tracker/",
    link: "https://github.com/ankitagupta21/Job-Tracker",
    desc: [
      "Designed an email-classification pipeline using a local LLM (Ollama) to detect job application status changes from Gmail, replacing brittle keyword matching with semantic filtering.",
      "Kept email content on-device for privacy by running the model locally instead of calling a cloud API.",
    ],
    skills: ["Ollama", "LLM Integration", "NLP", "Spring Boot"],
  },
  {
    id: 1,
    name: "Sentiment Prediction of Movie Reviews",
    subHead: "ML model to predict the sentiment of the review text",
    link: "https://www.kaggle.com/code/ankitagupta20/sentiment-analysis-of-movie-reviews",
    desc: [
      "Built a sentiment classification model on the IMDb dataset (50K reviews) using Python and Scikit-learn, with tokenization, stop-word removal, and TF-IDF vectorization.",
      "Compared Logistic Regression, SVM, Random Forest, and Naive Bayes using F1-score and precision-recall metrics; Logistic Regression achieved 87% accuracy.",
    ],
    skills: ["Python", "Scikit-learn", "NLP"],
    date: "May 2023 - Aug 2023",
  },
  {
    id: 2,
    name: "Web Scraping IMDb",
    subHead: "Web scraping of IMDb website to extract movie data",
    link: "https://colab.research.google.com/drive/1ylgzglcdob8wzy_zQplxKcPCm9ztzOrr?usp=sharing",
    desc: ["Utilized Python's BeautifulSoup library to scrape IMDb website."],
    skills: ["Python", "BeautifulSoup"],
    date: "Mar 2023",
  },
];

export const certificates = [
  {
    id: 1,
    name: "Diploma (Programming and Data Science)",
    link: "",
    date: "Nov 2020 - Dec 2023",
    organization: "Indian Institute of Technology, Madras",
    skills: [
      "Mathematics",
      "Statistics",
      "Machine Learning",
      "System Commands",
    ],
  },
];

function MLS() {
  return (
    <div className="sub-container ml">
      <img src={sq13} className="sq1 ml" alt="" />
      <img src={sq2} className="sq2 ml" alt="" />
      <ML />
      <CardSection heading="Projects" icon={proj} cards={projectCards(projects)} />
      <CardSection
        heading="Specialization"
        icon={cer}
        cards={courseworkCards(certificates)}
      />
    </div>
  );
}

export default MLS;
