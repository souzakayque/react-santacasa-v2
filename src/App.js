import React, { useEffect, useState } from "react";
import Router from "./router/router";

import WhatsAppIco from "./assets/images/icons/whatsapp.ico";
import PhoneIco from "./assets/images/icons/phone.ico";
//import PopUp from "./components/PopUp";

import "./assets/styles/global.css";

function App() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.screen.width);
  }, []);
  if (width <= 900) {
    return (
      <div>
        {/*<PopUp />*/}
        <div className="container-whatsapp">
          <div className="whatsapp-box">
            <span className="phone-popup">Ligue para o corretor!</span>
            <a href="tel:+5511993691207">
              <img src={PhoneIco} alt="WhatsApp" title="WhatsApp" />
            </a>
          </div>
          <div className="whatsapp-box">
            <span className="whatsapp-popup">Fale com o corretor!</span>
            <a href="https://api.whatsapp.com/send?phone=+5511982626977&text=Gostaria%20de%20cotar%20um%20plano%20da%20Santa%20Casa%20de%20Mau%C3%A1">
              <img src={WhatsAppIco} alt="WhatsApp" title="WhatsApp" />
            </a>
          </div>
        </div>
        <Router />
      </div>
    );
  } else {
    return (
      <div>
        <div className="container-whatsapp">
          <div className="whatsapp-box">
            <span className="phone-popup">Ligue para o corretor!</span>
            <a href="tel:+5511993691207">
              <img src={PhoneIco} alt="WhatsApp" title="WhatsApp" />
            </a>
          </div>
          <div className="whatsapp-box">
            <span className="whatsapp-popup">Fale com o corretor!</span>
            <a href="https://api.whatsapp.com/send?phone=+5511982626977&text=Gostaria%20de%20cotar%20um%20plano%20da%20Santa%20Casa%20de%20Mau%C3%A1">
              <img src={WhatsAppIco} alt="WhatsApp" title="WhatsApp" />
            </a>
          </div>
        </div>
        <Router />
      </div>
    );
  }
}

export default App;
