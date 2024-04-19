import React from "react";
import { CV } from "../utils/cv";
import "../styles/MyProjects.scss";
import { useState } from "react";

const PersonalProjects = () => {
  const [showComponentC, setShowComponentC] = useState(false);

  const toggleComponentC = () => {
    setShowComponentC(!showComponentC); // Toggling the state to show/hide ComponentB
  };

  return (
    <div className="my-projects-block">
      <div>
        {CV.portfolio1.map((info) => {
          return (
            <button className="my-projects" onClick={toggleComponentC}>
              {info.name1}
            </button>
          );
        })}
        {showComponentC && <ComponentC />}
      </div>
    </div>
  );
};

const ComponentC = () => {
  return (
    <div className="my-projects-block">
      {CV.portfolio1.map((info) => {
        return (
          <div className="my-projects">
            <h2 className="my-projects-square">{info.name1}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default PersonalProjects;
