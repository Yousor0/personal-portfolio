import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import AboutMe from "../assets/1.jpg";

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-image-wrapper">
          <img src={AboutMe} alt="Andrew Jiang" className="about-image" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I'm <strong>Andrew Jiang</strong>, an aspiring Web Developer,
            Graphic Designer, and Photographer. I enjoy combining technology and
            creativity to build visually stunning and functional experiences.
          </p>
          <p>
            My skills include HTML, CSS, JavaScript, React, Photoshop, and
            Lightroom. Whether I'm coding up a sleek website or capturing the
            perfect shot, I’m always creating something new.
          </p>
          <p>
            Outside of work,I love exploring design trends, learning new tech,
            and traveling with my camera. Let's build something amazing
            together!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
