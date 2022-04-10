import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Menu from "../Menu/index";

import Logo from "../../assets/images/santacasa.png";

import "./styles.scss";

const Header = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  return (
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
  );
};

export default Header;
