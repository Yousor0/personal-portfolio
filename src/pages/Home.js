import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import backgroundImage from "../assets/background.jpg";
import profilePicture from "../assets/profilepic.jpg";

const Home = () => {
  return (
    <div
      className="home-container"
      style={{
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profilePicture}
          alt="Profile"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "10%",
            objectFit: "cover",
          }}
        />
        <h1 className="home-title">Hi, I'm Andrew Jiang</h1>
        <p className="home-subtitle">
          I am an aspiring Web Developer, Graphic Designer, & Photographer
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
