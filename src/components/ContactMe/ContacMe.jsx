import { useRef } from "react";
import css from "./ContactMe.module.scss";
import { motion } from "framer-motion";
import { staggerChildren, textVariant } from "../../utils/motion";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import emailjs from "@emailjs/browser";

export default function ContacMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // service_lho7c0d
    emailjs
      .sendForm(
        "service_lho7c0d",
        "template_ozg6bnh",
        form.current,
        "YlzgSN1UZ1WmJXYvs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper} `}
    >
      <a className="anchor" id="contactme"></a>
      <div className={`flexCenter ${css.container}`}>
        <h1 className="flexCenter primaryText">Contacto</h1>
        <p className="secondary flexCenter">Javier Barreda Ampuero </p>
        <div className={css.informationdiv}>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Nombre" name="user_name" required />
            <input
              type="email"
              name="user_email"
              placeholder="Correo Electronico"
              required
            />
            <textarea
              placeholder="Tú mensaje"
              name="message"
              rows="10"
              required
            />
            <button type="submit" className="btn-primary">
              {" "}
              Enviar Mensaje
            </button>
          </form>

          <motion.div
            variants={textVariant(0.5)}
            className={css.rigthSideElement}
            style={{ paddingTop: "1rem" }}
          >
            <div className={css.info}>
              <div>
                {" "}
                <AiOutlineMail />{" "}
              </div>
              <p>lasermin2002@yahoo.es</p>
            </div>
            <div className={css.info}>
              <div>
                {" "}
                <AiOutlineWhatsApp />{" "}
              </div>
              <p>+51 987557007 </p>
            </div>
            <div className={css.info}>
              <div>
                {" "}
                <BiLocationPlus />{" "}
              </div>
              <p>Ingeniero Geólogo CIP 4093 </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
