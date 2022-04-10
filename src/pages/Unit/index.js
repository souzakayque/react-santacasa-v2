import React, { useState } from "react";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import SectionBox from "../../components/SectionBox/index";
//import GoogleMaps from "../../components/GoogleMaps";
import LookBook from "../../components/LookBook";
import HighlightedTitle from "../../utils/elements/HighlightedTitle";
import GoogleMapsInfo from "../../utils/json/googleMapsInfo.json";
import ContractPlan from "../../utils/json/contractPlan.json";
import Title from "../../utils/elements/Title";

import "./styles.scss";

const Unit = () => {
  const [googleMapsInfo] = useState({
    GoogleMapsInfo,
  });

  const [contractPlan] = useState({ ContractPlan });

  return (
    <div className="unit">
      <Header />
      <div className="unit-container">
        <Title
          title={
            "Nossas unidades ficam bem localizadas, saiba onde nos encontrar:"
          }
        />
        <HighlightedTitle title={"Conheça nossas unidades"} />
        <LookBook />
        {/*
          <GoogleMaps mapsInfo={googleMapsInfo} />
          */}
        <SectionBox box={contractPlan} />
        <Footer />
      </div>
    </div>
  );
};

export default Unit;
