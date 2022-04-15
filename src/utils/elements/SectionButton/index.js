import React, { useEffect, useState } from "react";

import "./styles.css";

const SectionButton = (props) => {
  const [typeBox, setTypeBox] = useState("");
  const [buttonClass, setButtonClass] = useState("");
  useEffect(() => {
    setTypeBox(props && props.typeBox);
    switch (typeBox) {
      case "primary":
        setButtonClass("primary-section-button");
        break;
      case "secondary":
        setButtonClass("secondary-section-button");
        break;
      default:
        break;
    }
  }, [props, typeBox]);

  return (
    <a href={props && props.button && props.button.to}>
      <button className={buttonClass}>
        {props && props.button && props.button.value}
      </button>
    </a>
  );
};

export default SectionButton;
