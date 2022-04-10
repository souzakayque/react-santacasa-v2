import React, { useEffect, useState } from "react";

import "./styles.scss";

const Title = (props) => {
  return <h1 className="primary-title">{props && props.title}</h1>;
};

export default Title;
