import React from "react";
import Intro from "../../Components/Intro/Intro";
import Web from "../../Components/Skills/Web/Web";
import AppD from "../../Components/Skills/AppD/AppD";
import Design from "../../Components/Skills/Design/Design";
import ML from "../../Components/Skills/ML/ML";
import "./Home.css";
import background from "../../img/style.png";

function Home() {
  return (
    <div className="h-container">
      <Intro />
      <Web />
      <AppD />
      <Design />
      <ML />
    </div>
  );
}

export default Home;
