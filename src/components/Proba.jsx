import React, { useState } from "react";
import { CV } from "../utils/cv";
import "../styles/Button.scss";
import "../styles/MyProjects.scss";

const ComponentA = () => {
  const [showComponentB, setShowComponentB] = useState(false);

  const toggleComponentB = () => {
    setShowComponentB(!showComponentB); // Toggling the state to show/hide ComponentB
  };

  return (
    <div>
      <button onClick={toggleComponentB} className="modern-button">
        See my projects now
      </button>
      {showComponentB && <ComponentB />}{" "}
      {/* Rendering ComponentB conditionally */}
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
            {/* <p className="my-projects-square">{info.description}</p> */}
            {/* <p className="my-projects-square">{info.url}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default ComponentA;
