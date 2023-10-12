import React, { useEffect, useState } from "react";
import Paragraph from "../../utils/elements/Paragraph";
import Title from "../../utils/elements/Title";

import "./styles.scss";

const PopUpStrip = (props) => {
  return (
    <div className="pop-up-strip-container">
      <div className="pop-up-strip">
        <Paragraph text="Só neste mês 20% OFF na primeira mensalidade"></Paragraph>
      </div>
    </div>
  );
};

export default PopUpStrip;
