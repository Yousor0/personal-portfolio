import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <footer className="footer">
        <div className="footer-icons">
          <a
            href="https://github.com/Yousor0"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/ajiang.photography/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/jkeshao/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Andrew Jiang</p>
      </footer>
    </motion.div>
  );
};

export default Footer;
