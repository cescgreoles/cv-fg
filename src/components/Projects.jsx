import React from "react";
import "../styles/Button.scss";

const Projects = ({ text, onClick }) => {
  return (
    <button className="modern-button" onClick={onClick}>
      My Projects
    </button>
  );
};

export default Projects;
