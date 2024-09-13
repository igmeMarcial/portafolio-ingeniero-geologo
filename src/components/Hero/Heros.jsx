import React from "react";
import css from "./Heros.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { ReactTypical } from "@deadcoder0904/react-typical";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Heros = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={css.leftElement}>
          <div className={css.profile_details_nameleftElement}>
            <div className={css.profile_details_name}>
              <span className={`primaryText`}>
                {" "}
                Hola, Soy{" "}
                <span className={css.highted_text}> Javier Barreda </span>
              </span>
            </div>
            <div className={css.profile_detail_role}>
              <span className="primaryText">
                {" "}
                <h1>
                  <ReactTypical
                    steps={[
                      "Senior Geólogist  ",
                      1000,
                      "Ingeniero Geólogo  ",
                      1000,
                    ]}
                    loop={1}
                    wrapper="p"
                  />
                </h1>
                <span className={css.profile_role_tagline}>
                  CIP: 14093
                  <br />
                  Prospecto Cilia UNO y Cilia Tres: Litio
                </span>
              </span>
            </div>

            <div className={css.profile_options}>
              <a href="#contactme">
                <button className={css.btn}>
                  {""}
                  Contacto
                </button>
              </a>
              <a href="javier_barreda.pdf" download="javier-barreda.pdf">
                <button className={css.btn}> Cv</button>
              </a>
            </div>
            <div className={`${css.icon}`}>
              <a href="#">
                <FaFacebook size={30} />{" "}
              </a>
              <a href="#">
                <AiFillLinkedin size={30} />{" "}
              </a>
              <a href="#">
                <IoLogoWhatsapp size={30} />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className={css.rigthElement}>
          <div className={css.profile_picture}>
            <div className={css.profile_picture_background}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Heros;
