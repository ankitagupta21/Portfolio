import React from "react";
import ML from "../../Components/Skills/ML/ML";
import "./MLS.css";
import Proj from "../../Components/Projects/Proj";
import Cer from "../../Components/Certificates/Certificate";
import sq13 from "../../img/sq13.png";
import sq2 from "../../img/sq2.png";

const projects = [
  {
    id: 1,
    name: "Sentiment Prediction of Movie Reviews",
    subHead: "ML model to predict the sentiment of the review text",
    link: "https://www.kaggle.com/code/ankitagupta20/sentiment-analysis-of-movie-reviews",
    desc: [
      "Utilized Python's scikit-learn library for predictive data analysis.",
      "Conducted exploratory data analysis and preprocessing resulting in a 15% accuracy improvement.",
      "Evaluated and contrasted the results of four classification models.",
    ],
    skills: ["Python", "scikit-learn"],
    date: "May 2023-Aug 2023",
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

const certificates = [
  {
    id: 1,
    name: "BSc (Programming and Data Science)",
    link: "",
    date: "2020-Present",
    organization: "Indian Institute of Technology, Madras",
    skills: [
      "Python",
      "Machine Learning",
      "Statistics",
      "Probability",
      "Linear Algebra",
      "Tools in Data Science",
    ],
  },
];

function MLS() {
  return (
    <div className="sub-container ml">
      <img src={sq13} className="sq1 ml" alt="" />
      <img src={sq2} className="sq2 ml" alt="" />
      <ML />
      <Proj projects={projects} />
      <Cer certificates={certificates} ml="true" />
    </div>
  );
}

export default MLS;
