import React, { useEffect, useState } from "react";

import Paragraph from "../../utils/elements/Paragraph";
import SubTitle from "../../utils/elements/SubTitle";
import SectionButton from "../../utils/elements/SectionButton";

import "./styles.scss";

const SectionBox = (props) => {
  const [content, setContent] = useState("");
  const [typeBox, setTypeBox] = useState("");
  const [paragraphSize, setParagraphSize] = useState("");
  const [type, setType] = useState("");
  const [boxClassName, setBoxClassName] = useState("");
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  useEffect(() => {
    setContent(props && props.box && props.box[Object.keys(props.box)[0]]);
  }, []);

  useEffect(() => {
    setParagraphSize(
      props && props.box && props.box[Object.keys(props.box)[0]].paragraphSize
    );

    setType(props && props.box && props.box[Object.keys(props.box)[0]].type);

    switch (type) {
      case 1:
        setTypeBox("primary");
        setBoxClassName("section-box-container");
        break;
      case 2:
        setTypeBox("secondary");
        setBoxClassName("secondary-section-box-container");
        break;
      default:
        break;
    }
  }, [content]);

  return (
    <div className="section-container">
      {/*SECTION DESKTOP IMAGE*/}
      {width > 900 && boxClassName === "section-box-container" && (
        <div className="section-desktop-image">
          <img
            src={require(`../../assets/images/${
              content && content.desktopImage
            }`)}
            alt="Section Santa Casa"
            title="Section Santa Casa"
          />
        </div>
      )}
      <section className={boxClassName}>
        <ul>
          {content &&
            content.content &&
            content.content.map((i, index) => {
              return (
                <li key={i.id}>
                  <SubTitle subtitle={i.title} typeBox={typeBox} />
                  <img
                    src={require(`../../assets/images/${i.asset}`)}
                    alt="Sec"
                    title="Sec"
                    className="section-image"
                  />
                  <Paragraph
                    text={i.text}
                    sectionBox={true}
                    typeBox={typeBox}
                    size={paragraphSize}
                  />
                  {index !== (content && content.content.length) - 1 && <hr />}
                </li>
              );
            })}
        </ul>
        <span>
          <SectionButton button={content && content.button} typeBox={typeBox} />
        </span>
      </section>
    </div>
  );
};

export default SectionBox;
