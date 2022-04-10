import React, { useEffect, useState } from "react";
import Router from "./router/router";

import WhatsAppIco from "./assets/images/icons/whatsapp.ico";

import "./assets/styles/global.css";

function App() {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.screen.width);
  });

  if (width <= 600) {
    return (
      <div>
        <div className="container-whatsapp">
          <span>Fale com o corretor!</span>
          <a href="https://api.whatsapp.com/send?phone=+5511993691207&text=Gostaria%20de%20cotar%20um%20plano%20da%20Santa%20Casa%20de%20Mau%C3%A1">
            <img src={WhatsAppIco} alt="WhatsApp" title="WhatsApp" />
          </a>
        </div>
        <Router />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default App;
