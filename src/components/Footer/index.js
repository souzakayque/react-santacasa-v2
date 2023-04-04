import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PhoneImg from "../../assets/images/icons/phone.png";

import "./styles.scss";

const Footer = () => {
  const [width, setWidth] = useState(0);
  const [logo, setLogo] = useState("marcia_logo.png");

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);
  return (
    <footer className="footer-container">
      <span className="list-container">
        <h1>Fale com o Corretor</h1>
        <ul>
          <li>
            <a href="tel:551134214743">
              <img
                src={PhoneImg}
                alt="Phone"
                tile="phone"
                className="footer-icon"
              />
              <span>(11) 3421-4743</span>
            </a>
          </li>
          <li>
            <a href="tel:5511982626977">
              <img
                src={PhoneImg}
                alt="Phone"
                tile="phone"
                className="footer-icon"
              />
              <span>(11) 98262-6977</span>
            </a>
          </li>
          <li>
            <a href="tel:5511993691207">
              <img
                src={PhoneImg}
                alt="Phone"
                tile="phone"
                className="footer-icon"
              />
              <span>(11) 99369-1207</span>
            </a>
          </li>
        </ul>
      </span>
      <span className="list-container">
        <h1>Política de Privacidade</h1>
        <ul>
          <li>
            <Link to="/lgpd">Lei Geral de Proteção de Dados</Link>
          </li>
        </ul>
      </span>
      <span className="list-container">
        <h1>{""}</h1>
        <ul>
          <li>
            {" "}
            <img
              className="footer-logo"
              src={require(`../../assets/images/${logo}`)}
              alt="Logo Marcia Corretora de Seguros"
              title="Logo Marcia Corretora de Seguros"
            />
          </li>
        </ul>
      </span>
      {/*
      <span className="list-container">
        <h1>Atendimento</h1>
        <ul>
          <li>Seg à Sex das 8:00 às 18:00</li>
        </ul>
      </span>
      <span className="list-container">
        <h1>Local</h1>
        <ul>
          <li>Av. Barão de Mauá, 3232 - Jardim Maringá, Mauá - SP</li>
        </ul>
      </span>
      */}
      {width <= 900 && (
        <span className="copyright">
          <span>Santa Casa de Mauá</span>
        </span>
      )}
    </footer>
  );
};

export default Footer;
