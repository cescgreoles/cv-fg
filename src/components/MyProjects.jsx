import React from "react";
import { CV } from "../utils/cv";
import "../styles/MyProjects.scss";
import { useState } from "react";

const MyProjects = () => {
  const [showComponentB, setShowComponentB] = useState(false);

  const toggleComponentB = () => {
    setShowComponentB(!showComponentB); // Toggling the state to show/hide ComponentB
  };

  return (
    <div className="my-projects-block">
      <div>
        {CV.portfolio.map((info) => {
          return (
            <button className="my-projects" onClick={toggleComponentB}>
              {info.name}
            </button>
          );
        })}
        {showComponentB && <ComponentB />}
      </div>

      <div>
        {CV.portfolio.map((info) => {
          return (
            <button className="my-projects" onClick={toggleComponentB}>
              {info.name}
            </button>
          );
        })}
        {showComponentB && <ComponentB />}
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
            <h2 className="my-projects-square">{info.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default MyProjects;
