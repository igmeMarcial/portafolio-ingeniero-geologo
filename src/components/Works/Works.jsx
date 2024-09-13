import React from "react";
import css from "./Work.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import { workExp } from "../../utils/data";
const Works = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` ${css.wrapper}`}
    >
      <a className="anchor" id="work"></a>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <span className="primaryText paddings">ORO EN JIMENA UNO</span>
        <p
          style={{
            lineHeight: "25px",
            width: "50%",
            margin: "0 auto",
            textAlign: "center",
          }}
          className=" secondaryText flexCenter"
        >
          Distritos: Quilcapuncu. Provincia: San Antonio de Putina.
          Departamento: Puno Por Javier Barreda Ampuero. Ingeniero Geólogo
          CIP14093 30 de octubre del 2022
        </p>
        <div className={`flexCenter ${css.experiences}`}>
          {workExp.map((exp, i) => {
            return (
              <motion.div
                className={`flexCenter ${css.exp}`}
                variants={textVariant2}
                key={i}
              >
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p style={{ width: "90%", lineHeight: "25px" }}>
                    {exp.tenure}
                  </p>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p style={{ lineHeight: "25px" }}>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })}

          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className={css.line}
            ></motion.div>
            <div>
              {" "}
              <div
                className={css.circle}
                style={{ background: "#F2704E" }}
              ></div>{" "}
            </div>
            <div>
              {" "}
              <div
                className={css.circle}
                style={{ background: "#286f6C" }}
              ></div>{" "}
            </div>
            <div>
              {" "}
              <div
                className={css.circle}
                style={{ background: "#F2704E" }}
              ></div>{" "}
            </div>
            <div>
              {" "}
              <div
                className={css.circle}
                style={{ background: "#EEC048" }}
              ></div>{" "}
            </div>
            <div>
              {" "}
              <div
                className={css.circle}
                style={{ background: "#286f6C" }}
              ></div>{" "}
            </div>
            <div>
              {" "}
              <div
                className={css.circle}
                style={{ background: "#F2704E" }}
              ></div>{" "}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Works;
