import React, { useEffect, useState } from "react";

import "./styles.scss";

const SubTitle = (props) => {
  const [subTitleType, setTitleType] = useState();
  const [className, setClassName] = useState();

  useEffect(() => {
    setTitleType(props && props.typeBox);
    switch (subTitleType) {
      case "primary":
        setClassName("primary-subtitle");
        break;
      case "secondary":
        setClassName("secondary-subtitle");
        break;
      default:
        break;
    }
  }, [subTitleType]);

  return <h2 className={className}>{props && props.subtitle}</h2>;
};

export default SubTitle;
