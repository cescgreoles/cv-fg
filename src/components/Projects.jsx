import React from "react";
import "../styles/Button.scss";
import { Link } from "react-router-dom";

const Projects = ({ text, onClick }) => {
  return (
    <div>
      <Link to={"/myprojects"}>
        <button className="modern-button" onClick={onClick}>
          My Projects
        </button>
      </Link>
    </div>
  );
};

export default Projects;
