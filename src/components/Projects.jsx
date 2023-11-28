import React, { useState } from "react";
import { CV } from "../utils/cv";
import "../styles/Button.scss";
import "../styles/MyProjects.scss";

const ComponentA = () => {
  const [showComponentB, setShowComponentB] = useState(false);

  const toggleComponentB = () => {
    setShowComponentB(!showComponentB);
  };

  return (
    <div>
      <button onClick={toggleComponentB} className="modern-button">
        See my projects now
      </button>
      {showComponentB && <ComponentB />}{" "}
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

export default ComponentA;
