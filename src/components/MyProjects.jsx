import React from "react";
import { CV } from "../utils/cv";
import "../styles/MyProjects.scss";

const MyProjects = () => {
  return (
    <div className="my-projects-block">
      {CV.portfolio.map((info) => {
        return (
          <div className="my-projects">
            <h2 className="my-projects-square">{info.name}</h2>
            {/* <p className="my-projects-square">{info.description}</p> */}
            {/* <p className="my-projects-square">{info.url}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default MyProjects;
