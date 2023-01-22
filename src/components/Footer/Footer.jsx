import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="footer"></a>
      <motion.div
        variants={footerVariants}
        className={`innerWidth ypaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's change Your style <br />
            It will be Amazing
          </span>
          <span className="primaryText">
            Start by <a href="mailto:chrisosei400@gmail.com">saying hi</a>
            <br />
            And the Job is done
          </span>
        </div>
        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Infomation</span>
            <p>356 Konongo, St.1, Ghana </p>
          </div>

          <div className={css.menu}>
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
