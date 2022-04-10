import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Title from "../../utils/elements/Title";
import Paragraph from "../../utils/elements/Paragraph";

import ImageHospital from "../../assets/images/dom_jose_gaspar.png";
import ImagePoliclinica from "../../assets/images/policlinica.png";

import "./styles.scss";

const LookBook = (props) => {
  if (true) {
    return <div></div>;
  } else {
    return (
      <div className="lookbook-container">
        <div className="lookbook-box">
          <div className="lookbook-image">
            <img src={ImageHospital} alt="Phone" tile="phone" />
          </div>
          <div className="lookbook-text">
            <Title title={"Hospital"} />
            <Paragraph text={"Av. Dom José Gaspar, 1374 Matriz - Mauá - SP"} />
          </div>
        </div>
        <div className="lookbook-box">
          <div className="lookbook-text">
            <Title title={"Policlínica"} />
            <Paragraph text={"Av. Dom José Gaspar, 275 Matriz - Mauá - SP"} />
          </div>
          <div className="lookbook-image">
            <img src={ImagePoliclinica} alt="Phone" tile="phone" />
          </div>
        </div>
      </div>
    );
  }
};

export default LookBook;
