import React, { useState } from "react";

import Header from "../../components/Header/index";
import SectionBox from "../../components/SectionBox/index";
import Title from "../../utils/elements/Title";
import Paragraph from "../../utils/elements/Paragraph";
import Footer from "../../components/Footer/index";
import BrokerSection from "../../utils/json/brokerSectionBox.json";
import HighlightedTitle from "../../utils/elements/HighlightedTitle";

import "./styles.scss";

const Contrato = (props) => {
  const [brokerSection] = useState({
    BrokerSection,
  });

  return (
    <div className="contract">
      <Header />
      <div className="contract-container">
        <Title
          title={"Contrate agora o seu plano, e garanta o seu bem estar!"}
        />
        <Paragraph
          text={
            "Fale com um de nossos corretores, ou, clique “simular agora” para simular a sua cotação!"
          }
        />
        <HighlightedTitle title={"Fale com um de nossos corretores"} />
        <SectionBox box={brokerSection} />
      </div>
      <Footer />
    </div>
  );
};

export default Contrato;
