import React, { useState, useEffect } from "react";

import {
  IoIosMedical,
  IoIosCheckmarkCircleOutline,
  IoIosHeartEmpty,
} from "react-icons/io";

import Header from "../../components/Header/index";
import SectionBox from "../../components/SectionBox/index";
import Footer from "../../components/Footer/index";
import Title from "../../utils/elements/Title";
import Paragraph from "../../utils/elements/Paragraph";
import OperatorSection from "../../utils/json/operatorSectionBox.json";
import BrokerSection from "../../utils/json/brokerSectionBox.json";
import LearnMoreSection from "../../utils/json/learnMore.json";
import GoogleMapsInfo from "../../utils/json/googleMapsInfo.json";
import Banner from "../../assets/images/banner.png";

import "./styles.css";
//import GoogleMaps from "../../components/GoogleMaps";
//import LookBook from "../../components/LookBook";

const Home = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  const [operatorSection] = useState({
    OperatorSection,
  });

  const [brokerSection] = useState({
    BrokerSection,
  });

  const [learnMoreSection] = useState({
    LearnMoreSection,
  });

  const [googleMapsInfo] = useState({
    GoogleMapsInfo,
  });

  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <div className="banner-box">
          <span className="banner-text">
            <p>O plano de saúde para garantir</p>
            <p>o bem estar da usa família,</p>
            <p>você encontra aqui!</p>
          </span>
          <img
            src={Banner}
            className="banner"
            alt="Banner Santa Casa"
            title="Banner Santa Casa"
          />
        </div>
        <div className="home-content">
          <div className="home-content-box">
            <ul>
              <li>
                <span className="icon-circle">
                  <IoIosMedical />
                </span>
                Todas as especialidades
              </li>
              <li>
                <span className="icon-circle">
                  <IoIosCheckmarkCircleOutline />
                </span>
                Garantia de bom atendimento
              </li>
              <li>
                <span className="icon-circle">
                  <IoIosHeartEmpty />
                </span>
                Hospital 24 horas
              </li>
            </ul>
          </div>
        </div>
        <article className="home-article">
          <Title
            title={
              "Santa casa de Mauá tem os melhores especialistas e laboratórios que um plano de saúde poderia ter."
            }
            width={width}
          ></Title>
          <Paragraph
            text={
              "Tenha acesso hospitais de excelência, às tecnologias de ponta e ao atendimento mais atencioso da região ABCDMR."
            }
            width={width}
          />
          <SectionBox box={operatorSection} />
        </article>
        <article className="home-article">
          {/*
          <Title
            title={"Estamos bem localizados, saiba onde nos encontrar:"}
            width={width}
          />
            <GoogleMaps mapsInfo={googleMapsInfo} />
          <LookBook />
            */}
          <Title
            title={"Contrate agora o seu plano, e garanta o seu bem estar!"}
            width={width}
          />
          <Paragraph
            text={
              'Fale com um de nossos corretores, ou, clique "simular agora" para simular a sua cotação!'
            }
            width={width}
          />
          <SectionBox box={brokerSection} />
          {width <= 900 && <SectionBox box={learnMoreSection} />}
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
