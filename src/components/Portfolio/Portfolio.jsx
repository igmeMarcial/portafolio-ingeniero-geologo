import React from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { AiFillGithub } from "react-icons/ai";

import { TiWorld } from "react-icons/ti";
export default function Portfolio() {
  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.headding}`}>
          <div>
            <span className="primaryText">Concesiones</span>
            <p style={{ marginTop: "10px" }}>Relacion de propectos mineros</p>
          </div>
          <a href="#" target="_blank">
            <span className="secondaryText">Explorar más</span>
          </a>
        </div>
        {/* Image */}

        <div className={`flexCenter ${css.showCase}`}>
          <div className={`${css.cardProject}`}>
            <div className={`${css.proj_imgbx}`}>
              <motion.img
                variants={fadeIn("up", "tween", 0.7, 0.6)}
                onClick={() => handleImageClick("#")}
                src="./CILIA.png"
                alt="pepireyes project"
              />
              <div className={`${css.proj_txtx}`}>
                <h4></h4>
                <span></span>
                <div>
                  <a href="#" target="_blank">
                    <TiWorld /> Web{" "}
                  </a>
                  <a href="#" target="_blank">
                    {" "}
                    <AiFillGithub /> Github{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
