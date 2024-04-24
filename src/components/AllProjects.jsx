import { CV } from "../utils/cv";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "../styles/AllProjects.scss"; // Asegúrate de importar tu archivo de estilos SCSS

const AllProjects = () => {
  return (
    <div className="all-projects-container">
      <div className="projects-section">
        <h3>My Bootcamp Projects</h3>
        <div className="projects-list">
          {CV.portfolio.map((info, index) => (
            <Link to={info.url} className="project-item" key={index}>
              <img src={info.img} alt={info.name}></img>
            </Link>
          ))}
        </div>
      </div>
      <div className="projects-section">
        <h3>My Personal Projects</h3>
        <div className="projects-list">
          {CV.portfolio1.map((info, index) => (
            <Link to={info.url} className="project-item" key={index}>
              <img src={info.img} alt={info.name}></img>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
