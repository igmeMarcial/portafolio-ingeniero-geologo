import ResaltarTexto from "../../utils/ResaltarTexto";
import { GiGoldBar } from "react-icons/gi";
const MoreContent = ({ data }) => {
  return (
    <div className="container my-8 mx-auto px-4 leading-normal">
      <ul className="list-reset text-black mb-8 p-8 text-grey-darker rounded shadow-lg">
        {data.map((item) => (
          <li key={item.id} className="flex items-center mb-3 gap-4">
            <GiGoldBar size={20} color="#0D2F3F" className="w-8 h-8" />

            <span className="secondaryText leading-4">
              <strong className=" font-bold">{item.title} </strong>
              <ResaltarTexto
                parrafo={item.description}
                palabrasResaltar={["Au"]}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoreContent;
