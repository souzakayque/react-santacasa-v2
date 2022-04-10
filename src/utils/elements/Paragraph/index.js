import React from "react";

import "./styles.scss";

const Paragraph = (props) => {
  if (!(props && props.sectionBox)) {
    return <p className="paragraph">{props && props.text}</p>;
  } else {
    if (props && props.typeBox === "primary") {
      return (
        <p className="primary-paragraph-section-box">{props && props.text}</p>
      );
    } else {
      return (
        <p className="secondary-paragraph-section-box">{props && props.text}</p>
      );
    }
  }
};

export default Paragraph;
