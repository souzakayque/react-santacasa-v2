import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Menu from "../Menu/index";
import TopBar from "../TopBar/index";
import PopUpStrip from "../PopUpStrip/index";

import Logo from "../../assets/images/santacasa.png";

import "./styles.scss";

const Header = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  if (width <= 900) {
    return (
      <div className="container">
        <TopBar />
        <header className="header-container">
          <div className="logo-box">
            <img src={Logo} alt="Logo Santa Casa" title="Logo Santa Casa" />
          </div>
          <div className="menu-box">
            <Link to="/simular" className="simulate-btn">
              Simule aqui!
            </Link>
            <Menu width={width} />
          </div>
        </header>
        <PopUpStrip />
      </div>
    );
  } else {
    return (
      <div className="container">
        <TopBar />
        <header className="header-container-desktop">
          <div className="logo-box">
            <img src={Logo} alt="Logo Santa Casa" title="Logo Santa Casa" />
          </div>
          <div className="menu-box">
            <Menu width={width} />
          </div>
        </header>
      </div>
    );
  }
};

export default Header;
