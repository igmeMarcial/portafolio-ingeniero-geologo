import { textVariant } from "../utils/motion";
import ResaltarTexto from "../utils/ResaltarTexto";
import { motion } from "framer-motion";
import css from "../components/About/About.module.scss";

const Parrafo = ({ title = "", description = "" }) => {
  return (
    <motion.div
      style={{ paddingTop: "0.8rem" }}
      variants={textVariant(0.5)}
      className={css.rightSide}
    >
      <div className="mb-2">
        <span style={{ fontWeight: "bold" }} className="secondaryText mr-1">
          {title}
        </span>
        <ResaltarTexto
          parrafo={description}
          palabrasResaltar={[]}
          color="#FFFF00"
        />
      </div>
    </motion.div>
  );
};

export default Parrafo;
