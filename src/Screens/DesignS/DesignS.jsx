import React from "react";
import CardSection from "../../Components/Cards/CardSection";
import {
  certificateCards,
  prototypeCards,
} from "../../Components/Cards/cardData";
import pro from "../../img/pro.png";
import cer from "../../img/cer.png";
import Design from "../../Components/Skills/Design/Design";
import sq12 from "../../img/sq12.png";
import sq22 from "../../img/sq22.png";
import design1 from "../../img/design1.png";
import design2 from "../../img/design2.png";
import "./DesignS.css";

export const prototypes = [
  {
    id: 1,
    name: "Expense Tracker",
    link: "https://www.figma.com/proto/MfWjhV1GOQz5i8Jw5kwS4n/Untitled?type=design&t=e7jmQZzf6HFdNFjA-1&scaling=min-zoom&page-id=0%3A1&node-id=5-8&starting-point-node-id=5%3A8&mode=design",
    img: design1,
  },
  {
    id: 2,
    name: "Shield",
    link: "https://www.figma.com/proto/D2bsIZ5U9PcpypX9tHH2OK/Untitled?type=design&node-id=1-2&t=tBMK7RU8iXWim0hj-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
    img: design2,
  },
];
export const certificates = [
  {
    id: 1,
    name: "Foundations of User Experience (UX) Design",
    link: "https://coursera.org/share/e116f6ea093c965b33a746b3396007e1",
    date: "May 2022",
    organization: "Coursera",
    skills: [],
  },
  {
    id: 2,
    name: "Start the UX Design Process: Empathize, Define, and Ideate",
    link: "https://coursera.org/share/6415261b49ebf954a706d3c63aa8e49d",
    date: "Jun 2022",
    organization: "Coursera",
    skills: [],
  },
  {
    id: 3,
    name: "Build Wireframes and Low-Fidelity Prototypes",
    link: "https://coursera.org/share/e4027e86038760988b32d63722124b10",
    date: "Jul 2022",
    organization: "Coursera",
    skills: [],
  },
  {
    id: 4,
    name: "Conduct UX Research and Test Early Concepts",
    link: "https://coursera.org/share/846d1ae09bfa06103d96d54d51270b92",
    date: "Sep 2022",
    organization: "Coursera",
    skills: [],
  },
];
function DesignS() {
  return (
    <div className="sub-container">
      <img src={sq12} className="sq1 de" alt="" />
      <img src={sq22} className="sq2 de" alt="" />
      <Design />
      <CardSection
        heading="Prototypes"
        icon={pro}
        cards={prototypeCards(prototypes)}
      />
      <CardSection
        heading="Certifications"
        icon={cer}
        cards={certificateCards(certificates)}
      />
    </div>
  );
}

export default DesignS;
