import React from "react";
import Illustration1 from "../../../public/mina1.png";

import {
  JIMENA_DOS_CONTRATO,
  JIMENA_DOS_DELIMITACION_TITLE,
  JIMENA_DOS_DELIMITACION_UNIDADES,
  JIMENA_DOS_DISEMINADO,
  JIMENA_DOS_INFORMATION,
  JIMENA_DOS_METALOGENIA_DE_CENTROS_VOLCANICOS,
  JIMENA_DOS_SUBTITLE,
  JIMENA_DOS_TITLE,
} from "../../utils/data";
import "../About/About.module.scss";

import WrapSection from "../WrapSection";
import WrapParrafo from "../WrapParrafo";
import Parrafo from "../Parrafo";
import Table from "../List/Table";
import MoreContent from "../List/MoreContent";

function MinaTres() {
  const leftComponents = [
    <Parrafo
      key="left1"
      data={JIMENA_DOS_METALOGENIA_DE_CENTROS_VOLCANICOS}
      palabras={["Cu-Au", "Cu-Mo", "Cu", "Cu-Ag"]}
    />,
    <Table key="left2" data={JIMENA_DOS_DISEMINADO} />,
  ];

  const rightComponents = [
    <Parrafo
      key="right1"
      title={JIMENA_DOS_DELIMITACION_TITLE}
      data={JIMENA_DOS_DELIMITACION_UNIDADES}
      palabras={["Cantidad de onzas de oro: 372,298.5", "667,456,871"]}
    />,
  ];

  return (
    <>
      <WrapSection
        heading={JIMENA_DOS_TITLE}
        subHeading={JIMENA_DOS_SUBTITLE}
        data={JIMENA_DOS_INFORMATION}
        illustrationMobile={Illustration1}
        illustrationDesktop={Illustration1}
      />
      <WrapParrafo
        leftComponents={leftComponents}
        rightComponents={rightComponents}
      />
      <MoreContent data={JIMENA_DOS_CONTRATO} />
    </>
  );
}

export default MinaTres;
