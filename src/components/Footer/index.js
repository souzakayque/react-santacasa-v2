import React from "react";

import PhoneImg from "../../assets/images/icons/phone.png";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <span className="list-container">
        <h1>Fale com o Corretor</h1>
        <ul>
          <li>
            <img src={PhoneImg} alt="Phone" tile="phone" />
            <span>(11) 3421-4743</span>
          </li>
          <li>
            <img src={PhoneImg} alt="Phone" tile="phone" />
            <span>(11) 98269-6977</span>
          </li>
          <li>
            <img src={PhoneImg} alt="Phone" tile="phone" />
            <span>(11) 99369-1207</span>
          </li>
        </ul>
      </span>
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
      <span className="copyright">
        <span>Santa Casa de Mauá</span>
      </span>
    </footer>
  );
};

export default Footer;
