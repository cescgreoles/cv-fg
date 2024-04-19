import React, { useState } from "react";
import { CV } from "../utils/cv";
import "../styles/Button.scss";
import "../styles/MyProjects.scss";

const ComponentA = () => {
  const [showComponentB, setShowComponentB] = useState(false);
  const [showComponentC, setShowComponentC] = useState(false);

  const toggleComponentB = () => {
    setShowComponentB(!showComponentB);
  };

  const toggleComponentC = () => {
    setShowComponentC(!showComponentC);
  };

  return (
    <div className="projects-be">
      <div>
        <button onClick={toggleComponentB} className="modern-button">
          My projects from Bootcamp
        </button>
        {showComponentB && <ComponentB />}
      </div>
      <div>
        <button onClick={toggleComponentC} className="modern-button">
          My personal projects
        </button>
        {showComponentC && <ComponentC />}
      </div>
    </div>
  );
};

const ComponentB = () => {
  return (
    <div className="my-projects-block">
      {CV.portfolio.map((info) => {
        return (
          <div className="my-projects">
            <a href={info.url} className="a-href">
              <h2 className="my-projects-square">{info.name}</h2>
            </a>
          </div>
        );
      })}
    </div>
  );
};

const ComponentC = () => {
  return (
    <div className="my-projects-block">
      {CV.portfolio1.map((info) => {
        return (
          <div className="my-projects">
            <a href={info.url} className="a-href">
              <h2 className="my-projects-square">{info.name1}</h2>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ComponentA;
