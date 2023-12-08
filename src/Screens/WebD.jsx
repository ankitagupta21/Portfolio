import React, { useEffect } from "react";
import Intro from "../Components/Intro/Intro";
import Web from "../Components/Skills/Web/Web";
import AppD from "../Components/Skills/AppD/AppD";
import Design from "../Components/Skills/Design/Design";
import ML from "../Components/Skills/ML/ML";

function WebD() {
  useEffect(() => {
    document.body.style.backgroundColor = "#000089";
  }, []);
  return (
    <div>
      <Intro />
      <Web />
      <AppD />
      <Design />
      <ML />
    </div>
  );
}

export default WebD;
