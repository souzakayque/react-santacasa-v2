import React, { useEffect, useState } from "react";

import "./styles.scss";

const Title = (props) => {
  console.log(props);
  if (props && props.width > 900) {
    return (
      <div className="primary-title-desktop-container">
        <h1 className="primary-title-desktop">{props && props.title}</h1>
      </div>
    );
  } else {
    return <h1 className="primary-title">{props && props.title}</h1>;
  }
};

export default Title;
