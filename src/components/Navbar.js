import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="navbar-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
