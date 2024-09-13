import React from "react";
import ResaltarTexto from "../../utils/ResaltarTexto";

function ContentItemIcon({ mineralData }) {
  return (
    <ul className="list-reset text-black mb-8 p-8 text-grey-darker rounded shadow-lg">
      {mineralData.map((item) => (
        <li key={item.id} className="flex items-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-none w-8 mr-2"
            viewBox="0 0 24 24"
            fill="green"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <span className="secondaryText leading-4">
            <strong className=" font-bold">{item.title}: </strong>
            <ResaltarTexto
              parrafo={item.title}
              palabrasResaltar={["CONTRATO PRELIMINAR DE OPCION DE VENTA"]}
            />
            <ResaltarTexto
              parrafo={item.description}
              palabrasResaltar={["Au"]}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ContentItemIcon;
