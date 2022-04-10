import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
  IoIosHome,
  IoIosCall,
  IoIosPaper,
  IoMdPin,
  IoIosSearch,
} from "react-icons/io";

import "./styles.css";

const Menu = (props) => {
  const [menu, setMenu] = useState("");

  function toggleButton() {
    const btnMobile = document.getElementsByClassName("menu-btn");
    btnMobile[0].addEventListener("click", toggleMenu);
    btnMobile[0].addEventListener("touchstart", toggleMenu);
  }

  function toggleMenu(e) {
    if (e.type === "touchstart") e.preventDefault();
    const nav = document.getElementsByClassName("menu-list");
    nav[0].classList.toggle("active");

    const overlay = document.getElementsByClassName("overlay");
    overlay[0].style.display =
      nav[0].classList && nav[0].classList.value.includes("active")
        ? "block"
        : "none";
  }

  useEffect(() => {
    if (props && props.width <= 900) {
      setMenu(
        <div className="menu-list">
          <button className="menu-btn" onClick={toggleButton}>
            <span className="hamburger"></span>
          </button>
          <ul>
            <li>
              <Link to="/">
                <IoIosHome />
                Início
              </Link>
            </li>
            <li>
              <Link to="/falar-com-corretor">
                <IoIosCall />
                Falar com corretor
              </Link>
            </li>
            <li>
              <Link to="/planos">
                <IoIosPaper />
                Nossos planos
              </Link>
            </li>
            <li>
              <Link to="/unidades">
                <IoMdPin />
                Unidades
              </Link>
            </li>
            <li>
              <Link to="/simular">
                <IoIosSearch />
                Simular cotação
              </Link>
            </li>
          </ul>
          <div className="overlay"></div>
        </div>
      );
    } else {
      setMenu();
    }
  }, []);

  return menu;
};

export default Menu;
