import React, { useEffect, useState } from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Title from "../../utils/elements/Title";
import Paragraph from "../../utils/elements/Paragraph";

import "./styles.scss";

const LGPD = (props) => {
  const [width, setWidth] = useState(0);
  const [logo, setLogo] = useState("marcia_logo.jpeg");

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  return (
    <div className="LGPD">
      <Header />
      <div className="LGPD-container">
        <div>
          <Title
            title={"Lei Geral de Proteção de Dados Pessoais (LGPD)"}
            width={width}
          />
          <Paragraph
            text={`A Lei Geral de Proteção de Dados Pessoais (LGPD), Lei n° 13.709/2018, foi promulgada para proteger os direitos fundamentais de liberdade e de privacidade e a livre formação da personalidade de cada indivíduo. A Lei fala sobre o tratamento de dados pessoais, dispostos em meio físico ou digital, feito por pessoa física ou jurídica de direito público ou privado, englobando um amplo conjunto de operações que podem ocorrer em meios manuais ou digitais.`}
            width={width}
          />
          <Paragraph
            text={`No âmbito da LGPD, o tratamento dos dados pessoais pode ser realizado por dois agentes de tratamento, o Controlador e o Operador. Além deles, há a figura do Encarregado, que é a pessoa indicada pelo Controlador para atuar como canal de comunicação entre o Controlador, o Operador, os(as) titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD).
`}
            width={width}
          />
          <Paragraph
            text={`Tema fundamental trabalhado pela Lei, o tratamento de dados diz respeito a qualquer atividade que utiliza um dado pessoal na execução da sua operação, como, por exemplo: coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.`}
            width={width}
          />
          <Paragraph
            text={`Antes de iniciar qualquer tipo de tratamento de dados pessoais, o agente deve se certificar que a finalidade da operação está registrada de forma clara e explícita e os propósitos especificados e informados ao(à) titular dos dados. No caso do setor público, a principal finalidade do tratamento está relacionada à execução de políticas públicas, devidamente previstas em lei, regulamentos ou respaldadas em contratos, convênios ou instrumentos semelhantes.`}
            width={width}
          />
          <Paragraph
            text={`O compartilhamento dentro da administração pública, no âmbito da execução de políticas públicas, é previsto na Lei e dispensa o consentimento específico. Contudo, o órgão que coleta deve informar com transparência qual dado será compartilhado e com quem. Do outro lado, o órgão que solicita receber o compartilhamento precisa justificar esse acesso com base na execução de uma política pública específica e claramente determinada, descrevendo o motivo da solicitação de acesso e o uso que será feito com os dados. Informações protegidas por sigilo seguem protegidas e sujeitas a normativos e regras específicas. Essas e outras questões fundamentais devem ser observadas pelos órgãos e entidades da administração federal no sentido de assegurar a conformidade do tratamento de dados pessoais de acordo com as hipóteses legais e princípios da LGPD.`}
            width={width}
          />
          <Paragraph
            text={`A Lei estabelece uma estrutura legal de direitos dos(as) titulares de dados pessoais. Esses direitos devem ser garantidos durante toda a existência do tratamento dos dados pessoais realizado pelo órgão ou entidade. Para o exercício dos direitos dos(as) titulares, a LGPD prevê um conjunto de ferramentas que aprofundam obrigações de transparência ativa e passiva, e criam meios processuais para mobilizar a Administração Pública.`}
            width={width}
          />
          <Paragraph
            text={`Documento base:  Guia de Boas Práticas para Implementação na Administração Pública Federal da Lei Geral de Proteção de Dados, documento elaborado pelos diferentes órgãos que compõem o Comitê Central de Governança de Dados e que contém orientações sobre as atribuições e atuação do Controlador, do Operador e do Encarregado, bem como da Autoridade Nacional de Proteção de Dados (ANPD) e versa, ainda, sobre os direitos fundamentais dos(as) cidadãos(ãs) titulares dos dados, aborda hipóteses de tratamento dos dados e sua realização, indica o ciclo de vida do tratamento dos dados pessoais e apresenta boas práticas em segurança da informação.`}
            width={width}
          />
          <div className="LGPD-logo-image">
            <img
              src={require(`../../assets/images/${logo}`)}
              alt="Logo Marcia Corretora de Seguros"
              title="Logo Marcia Corretora de Seguros"
            />
          </div>
          <Paragraph
            text={`Marcia Corretora de Seguros Ltda. | CNPJ: 29.752.203/0001-16 | SUSEP n°202064269 | Avenida Barão de Mauá, 3232 Sala 12 - Jd. Maringá  Mauá  - SP.
            CEP - 09340-440`}
            width={width}
          />
          <Paragraph text={``} width={width} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LGPD;
