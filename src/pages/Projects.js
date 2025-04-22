import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css"; // Import CSS directly
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";

const projects = [
  {
    title: "To-Do App",
    description: "A simple To-Do list app that helps you keept track of tasks.",
    image: Project1,
    link: "https://github.com/Yousor0/todoapp",
  },
  {
    title: "Quiz App",
    description: "A fun little quiz designed to test form functions.",
    image: Project2,
    link: "https://github.com/Yousor0/quiz-app",
  },
  {
    title: "Exercise App",
    description: "An exercise app helping you track reps and sets.",
    image: Project3,
    link: "https://github.com/Yousor0/exerciseappreactnative",
  },
];

const Projects = () => {
  return (
    <div className="container">
      <h1 className="title">My Projects</h1>
      <div className="grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={project.image} alt={project.title} className="image" />
            <div className="content">
              <h2 className="projectTitle">{project.title}</h2>
              <p className="description">{project.description}</p>
              <div className="links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Check Out
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
