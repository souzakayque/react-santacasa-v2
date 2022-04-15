import React from "react";

import "./styles.scss";

const Paragraph = (props) => {
  if (props && props.width > 900) {
    if (!(props && props.sectionBox)) {
      return (
        <div className="paragraph-desktop-container">
          <p className="paragraph-desktop">{props && props.text}</p>
        </div>
      );
    } else {
      if (props && props.typeBox === "primary") {
        if (props && props.size === "1.25") {
          return (
            <p className="primary-paragraph-section-box-desktop-biggest">
              {props && props.text}
            </p>
          );
        } else {
          return (
            <p className="primary-paragraph-section-box-desktop">
              {props && props.text}
            </p>
          );
        }
      } else {
        return (
          <p className="secondary-paragraph-section-box-desktop">
            {props && props.text}
          </p>
        );
      }
    }
  } else {
    if (!(props && props.sectionBox)) {
      return <p className="paragraph">{props && props.text}</p>;
    } else {
      if (props && props.typeBox === "primary") {
        if (props && props.size === "1.25") {
          return (
            <p className="primary-paragraph-section-box-biggest">
              {props && props.text}
            </p>
          );
        } else {
          return (
            <p className="primary-paragraph-section-box">
              {props && props.text}
            </p>
          );
        }
      } else {
        return (
          <p className="secondary-paragraph-section-box">
            {props && props.text}
          </p>
        );
      }
    }
  }
};

export default Paragraph;
