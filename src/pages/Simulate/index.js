import React, { useState, useEffect } from "react";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import SectionBox from "../../components/SectionBox/index";
import HighlightedTitle from "../../utils/elements/HighlightedTitle";
import TalksBroker from "../../utils/json/talksBroker.json";
import Title from "../../utils/elements/Title";
import Paragraph from "../../utils/elements/Paragraph";

import "./styles.scss";

const Unit = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [plan, setPlan] = useState();
  const [age, setAge] = useState();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    var param = `Oi sou ${name}. Gostaria de cotar o plano ${plan}. Contato: ${phone}`;

    window.location.href = `https://api.whatsapp.com/send?phone=+5511993691207&text=${param}`;
  }

  const [talksBroker] = useState({ TalksBroker });
  return (
    <div className="simulate">
      <Header />
      <div className="simulate-container">
        <Title
          title={"Contrate agora o seu plano, e garanta o seu bem estar!"}
          width={width}
        />
        <Paragraph
          text={`Preencha o formulário abaixo para simular a sua cotação!`}
          width={width}
        />
        {width <= 900 && <HighlightedTitle title={"Conheça nossos planos"} />}

        <form onSubmit={handleSubmit} id="simulate-form">
          <div className="first-section">
            <input
              type="text"
              name="name"
              placeholder="Informe seu nome"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="number"
              name="celular"
              placeholder="(ddd) celular"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <Title title={"Informe o plano que deseja"} width={width} />
          <div
            className="second-section"
            onChange={(e) => setPlan(e.target.value)}
          >
            <div className="second-section-group-one">
              <span>
                <input
                  type="radio"
                  id="individual"
                  name="plano"
                  value="Individual"
                />
                <label htmlFor="individual">Individual</label>
              </span>

              <span>
                <input
                  type="radio"
                  id="empresarial"
                  name="plano"
                  value="Empresarial"
                />
                <label htmlFor="empresarial">Empresarial</label>
              </span>
            </div>

            <div className="second-section-group-two">
              <span>
                <input
                  type="radio"
                  id="familiar"
                  name="plano"
                  value="Familiar"
                />
                <label htmlFor="familiar">Familiar</label>
              </span>

              <span>
                <input
                  type="radio"
                  id="coletivoporadesao"
                  name="plano"
                  value="Coletivo por Adesao"
                />
                <label htmlFor="coletivoporadesao">Coletivo por Adesão</label>
              </span>
            </div>
          </div>

          <Title
            title={"Informe as idades de quem você deseja incluir no plano"}
            width={width}
          />
          <div
            className="third-section"
            onChange={(e) => setAge(e.target.value)}
          >
            <div className="third-section-group-one">
              <div>
                <input type="checkbox" id="zero" name="zero" defaultChecked />
                <label htmlFor="zero">0-18</label>
              </div>

              <div>
                <input type="checkbox" id="nineteen" name="nineteen" />
                <label htmlFor="nineteen">19-23</label>
              </div>

              <div>
                <input type="checkbox" id="twentyfour" name="twentyfour" />
                <label htmlFor="twentyfour">24-28</label>
              </div>
            </div>

            <div className="third-section-group-two">
              <div>
                <input type="checkbox" id="twentynine" name="twentynine" />
                <label htmlFor="twentynine">29-33</label>
              </div>

              <div>
                <input type="checkbox" id="thirtyfour" name="thirtyfour" />
                <label htmlFor="thirtyfour">34-38</label>
              </div>

              <div>
                <input type="checkbox" id="thirtynine" name="thirtynine" />
                <label htmlFor="thirtynine">39-43</label>
              </div>
            </div>

            <div className="third-section-group-three">
              <div>
                <input type="checkbox" id="fortyfour" name="fortyfour" />
                <label htmlFor="fortyfour">44-48</label>
              </div>

              <div>
                <input type="checkbox" id="fortynine" name="fortynine" />
                <label htmlFor="fortynine">49-53</label>
              </div>

              <div>
                <input type="checkbox" id="fiftyfour" name="fiftyfour" />
                <label htmlFor="fiftyfour">54-58</label>
              </div>
            </div>

            <div className="third-section-group-four">
              <div>
                <input type="checkbox" id="fiftynine" name="fiftynine" />
                <label htmlFor="fiftynine">59 ou mais</label>
              </div>
            </div>
          </div>
          <div className="form-btn">
            <input type="submit" value="Enviar" form="simulate-form" />
          </div>
        </form>

        {/*
          <SectionBox box={talksBroker} />
        */}
      </div>
      <Footer />
    </div>
  );
};

export default Unit;
