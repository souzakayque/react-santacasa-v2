import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IoIosCloseCircle } from "react-icons/io";

import "./styles.scss";

const PopUp = () => {
  const popUpContainer = document.getElementsByClassName("pop-up-container");
  const popUpBackground = document.getElementsByClassName("pop-up-background");
  const popUpBackgroundImage = document.getElementsByClassName(
    "pop-up-background-image"
  );
  const body = document.body;

  const [popUpDisplay, setPopUpDisplay] = useState(true);
  const [width, setWidth] = useState(0);

  function closePopUp(e) {
    e.preventDefault();
    popUpContainer[0].style.display = "none";
    popUpBackground[0].style.display = "none";
    popUpBackgroundImage[0].style.display = "none";
    body.style.overflow = "scroll";
    setPopUpDisplay(false);
  }

  function openPopUP(e) {
    popUpContainer[0].style.display = "block";
    popUpBackground[0].style.display = "flex";
    popUpBackgroundImage[0].style.display = "block";
    setPopUpDisplay(true);
    body.style.overflow = "hidden";
  }

  useEffect(() => {
    setWidth(window.screen.width);

    if (window.screen.width <= 900) {
      body.style.overflow = "hidden";
    }

    const interval = setInterval(() => {
      openPopUP();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="pop-up-container"></div>
      <div className="pop-up-background">
        <div className="pop-up-background-image">
          <button onClick={closePopUp}>
            <IoIosCloseCircle size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
