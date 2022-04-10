import React, { useEffect, useState } from "react";

import SectionBox from "../../components/SectionBox/index";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Title from "../../utils/elements/Title";
import Paragraph from "../../utils/elements/Paragraph";
import HighlightedTitle from "../../utils/elements/HighlightedTitle";
import Plans from "../../utils/json/plans.json";
import ContractPlan from "../../utils/json/contractPlan.json";

import "./styles.scss";

const Plan = () => {
  const [plans, setPlans] = useState();
  const [contractPlan] = useState({ ContractPlan });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  useEffect(() => {
    setPlans(Plans);
  }, []);

  return (
    <div className="plan">
      <Header />
      <div className="plan-container">
        <div>
          <Title
            title={
              "Santa casa de Mauá tem os melhores especialistas e laboratórios que um plano de saúde poderia ter."
            }
            width={width}
          />
          <Paragraph
            text={`Tenha acesso hospitais de excelência,
            às tecnologias de ponta e ao atendimento mais atencioso da região ABCDMR`}
            width={width}
          />
          {width <= 900 && <HighlightedTitle title={"Conheça nossos planos"} />}
          {plans &&
            plans.map((i, index) => {
              return (
                <div className="plans-box" key={i.id}>
                  <Title title={i.title} width={width} />
                  <Paragraph text={i.paragraph} width={width} />
                </div>
              );
            })}
          {/*<SectionBox box={contractPlan} />*/}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Plan;
