import React, { useEffect } from "react";
import Intro from "../Components/Intro/Intro";
import Web from "../Components/Skills/Web/Web";
import AppD from "../Components/Skills/AppD/AppD";
import Design from "../Components/Skills/Design/Design";
import ML from "../Components/Skills/ML/ML";

function WebD() {
  return (
    <div>
      <Web />
      <AppD />
      <Design />
      <ML />
    </div>
  );
}

export default WebD;
