import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Works from "./components/Works/Works.jsx";
import css from "./style/app.module.scss";
import Hero from "./components/Hero/Heros.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import ContacMe from "./components/ContactMe/ContacMe.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MineContainer from "./components/MineContainer.jsx";
import {
  MINA_JIMENA_TABLE,
  MINA_JIMENA_CONTRATO,
  MINA_JIMENA_PATHS,
  MINA_JIMENA_PROPERTIES,
  MINA_JIMENA_SUBTITLE,
  MINA_JIMENA_TITLE,
  PRIMO_CINCO_CONTRATO,
  PRIMO_CINCO_CONTRATO_TITLE,
  PRIMO_CINCO_PATHS,
  PRIMO_CINCO_PROPIEDADES,
  PRIMO_CINCO_SUBTITLE,
  PRIMO_CINCO_TITLE,
  PRIMO_CUATRO_CONTRATO,
  PRIMO_CUATRO_CONTRATO_TITLE,
  PRIMO_CUATRO_PATHS,
  PRIMO_CUATRO_PROPIEDADES,
  PRIMO_CUATRO_SUBTITLE,
  PRIMO_CUATRO_TITLE,
  PRIMO_NUEVE_CONTRATO,
  PRIMO_NUEVE_CONTRATO_TITLE,
  PRIMO_NUEVE_PATHS,
  PRIMO_NUEVE_PROPIEDADES,
  PRIMO_NUEVE_SUBTITLE,
  PRIMO_NUEVE_TITLE,
  PRIMO_SEIS_CONTRATO,
  PRIMO_SEIS_CONTRATO_TITLE,
  PRIMO_SEIS_PATHS,
  PRIMO_SEIS_PROPIEDADES,
  PRIMO_SEIS_SUBTITLE,
  PRIMO_SEIS_TITLE,
  PRIMO_TRES_CONTRATO,
  PRIMO_TRES_CONTRATO_TITLE,
  PRIMO_TRES_PATHS,
  PRIMO_TRES_PROPIEDADES,
  PRIMO_TRES_SUBTITLE,
  PRIMO_TRES_TITLE,
  PRIMO_UNO_CONTRATO,
  PRIMO_UNO_CONTRATO_TITLE,
  PRIMO_UNO_PATHS,
  PRIMO_UNO_PROPIEDADES,
  PRIMO_UNO_SUBTITLE,
  PRIMO_UNO_TITLE,
  MINA_JIMENA_INFO,
  MINA_CILIA_TITLE,
  MINA_CILIA_SUBTITLE,
  MINA_CILIA_PROPIEDADES,
  MINA_CILIA_PATHS,
  MINA_CILIA_CONTRATO,
  JIMENA_DOS_TITLE,
  JIMENA_DOS_SUBTITLE,
  JIMENA_DOS_PROPERTIES,
  JIMENA_DOS_CONTRATO,
  JIMENA_DOS_PATHS,
} from "./utils/data.js";
import Table from "./components/List/Table.jsx";
import WrapParrafo from "./components/WrapParrafo.jsx";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  return (
    <div className={`bg-primary ${css.container}`}>
      <p>{t("greeting")}</p>
      <Header />
      <Hero />
      <About />
      <MineContainer
        title={MINA_JIMENA_TITLE}
        subTitle={MINA_JIMENA_SUBTITLE}
        properties={MINA_JIMENA_PROPERTIES}
        agreementTitle={""}
        agreement={MINA_JIMENA_CONTRATO}
        imgTitle={""}
        imgUrl={MINA_JIMENA_PATHS}
      />
      <Table data={MINA_JIMENA_TABLE} title="EVALUACION ECONOMICA" />
      <WrapParrafo info={MINA_JIMENA_INFO} />

      <MineContainer
        title={MINA_CILIA_TITLE}
        subTitle={MINA_CILIA_SUBTITLE}
        properties={MINA_CILIA_PROPIEDADES}
        agreementTitle={""}
        agreement={MINA_CILIA_CONTRATO}
        imgTitle={""}
        imgUrl={MINA_CILIA_PATHS}
      />

      <MineContainer
        title={JIMENA_DOS_TITLE}
        subTitle={JIMENA_DOS_SUBTITLE}
        properties={JIMENA_DOS_PROPERTIES}
        agreementTitle={""}
        agreement={JIMENA_DOS_CONTRATO}
        imgTitle={""}
        imgUrl={JIMENA_DOS_PATHS}
      />
      <MineContainer
        title={PRIMO_UNO_TITLE}
        subTitle={PRIMO_UNO_SUBTITLE}
        properties={PRIMO_UNO_PROPIEDADES}
        agreementTitle={PRIMO_UNO_CONTRATO_TITLE}
        agreement={PRIMO_UNO_CONTRATO}
        imgTitle={""}
        imgUrl={PRIMO_UNO_PATHS}
      />

      <MineContainer
        title={PRIMO_TRES_TITLE}
        subTitle={PRIMO_TRES_SUBTITLE}
        properties={PRIMO_TRES_PROPIEDADES}
        agreementTitle={PRIMO_TRES_CONTRATO_TITLE}
        agreement={PRIMO_TRES_CONTRATO}
        imgTitle={""}
        imgUrl={PRIMO_TRES_PATHS}
      />
      <MineContainer
        title={PRIMO_CUATRO_TITLE}
        subTitle={PRIMO_CUATRO_SUBTITLE}
        properties={PRIMO_CUATRO_PROPIEDADES}
        agreementTitle={PRIMO_CUATRO_CONTRATO_TITLE}
        agreement={PRIMO_CUATRO_CONTRATO}
        imgTitle={""}
        imgUrl={PRIMO_CUATRO_PATHS}
      />
      <MineContainer
        title={PRIMO_CINCO_TITLE}
        subTitle={PRIMO_CINCO_SUBTITLE}
        properties={PRIMO_CINCO_PROPIEDADES}
        agreementTitle={PRIMO_CINCO_CONTRATO_TITLE}
        agreement={PRIMO_CINCO_CONTRATO}
        imgTitle={""}
        imgUrl={PRIMO_CINCO_PATHS}
      />
      <MineContainer
        title={PRIMO_SEIS_TITLE}
        subTitle={PRIMO_SEIS_SUBTITLE}
        properties={PRIMO_SEIS_PROPIEDADES}
        agreementTitle={PRIMO_SEIS_CONTRATO_TITLE}
        agreement={PRIMO_SEIS_CONTRATO}
        imgTitle={""}
        imgUrl={PRIMO_SEIS_PATHS}
      />
      <MineContainer
        title={PRIMO_NUEVE_TITLE}
        subTitle={PRIMO_NUEVE_SUBTITLE}
        properties={PRIMO_NUEVE_PROPIEDADES}
        agreementTitle={PRIMO_NUEVE_CONTRATO_TITLE}
        agreement={PRIMO_NUEVE_CONTRATO}
        imgTitle={""}
        imgUrl={PRIMO_NUEVE_PATHS}
      />

      <Works />
      <Portfolio />
      <ContacMe />
      <Footer />
    </div>
  );
};

export default App;
