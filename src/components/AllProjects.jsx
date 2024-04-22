import React, { useState } from "react";
import { CV } from "../utils/cv";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "../styles/AllProjects.scss"; // Asegúrate de importar tu archivo de estilos SCSS

const AllProjects = () => {
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);
  const [isBootcampOpen, setIsBootcampOpen] = useState(false);

  const togglePersonal = () => {
    setIsPersonalOpen(!isPersonalOpen);
  };

  const toggleBootcamp = () => {
    setIsBootcampOpen(!isBootcampOpen);
  };

  return (
    <div className="all-projects-container">
      <div className="projects-section">
        <button onClick={toggleBootcamp} className="project-button">
          {isBootcampOpen ? "Bootcamp Projects" : "Bootcamp Projects"}
        </button>
        {isBootcampOpen && (
          <div className="projects-list">
            {CV.portfolio.map((info, index) => (
              <Link to={info.url} className="project-item" key={index}>
                {info.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="projects-section">
        <button onClick={togglePersonal} className="project-button">
          {isPersonalOpen ? "Personal Projects" : "Personal Projects"}
        </button>
        {isPersonalOpen && (
          <div className="projects-list">
            {CV.portfolio1.map((info, index) => (
              <Link to={info.url} className="project-item" key={index}>
                {info.name1}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
