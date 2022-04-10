import React from "react";

import "./styles.scss";

const HighlightedTitle = (props) => {
  return (
    <div className="highlighted-title-box">
      <h1 className="highlighted-title">{props && props.title}</h1>
    </div>
  );
};

export default HighlightedTitle;
