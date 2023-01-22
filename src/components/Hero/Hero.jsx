import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideIn } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <a className="anchor" id="hero"></a>
        {/* Upper Elements */}
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hey There,
            <br />
            I'm CHRIS.
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            I Design Awesome Things
            <br />
            And I Love What I Do
          </motion.span>
        </div>

        {/* Person */}
        <motion.div
          className={css.person}
          variants={fadeIn("up", "tween", 0.3, 1)}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./chris.png"
            alt=""
          />
        </motion.div>

        {/* email */}

        <motion.a
          variants={fadeIn("right", "tween", 0.5, 1)}
          href="mailto:chrisosei400@gmail.com"
          className={css.email}
        >
          chrisosei400@gmail.com
        </motion.a>

        {/* Lower Elemnts */}
        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">5</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>CERFIFIED PROFESSION</span>
            <span>UI/UX DESIGNER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
