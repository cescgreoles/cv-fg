import React from "react";
import { CV } from "../utils/cv";
import { RiComputerFill } from "react-icons/ri";
import "../styles/Skills.scss";

const Skills = () => {
  return (
    <div className="skills-block">
      <p>
        <RiComputerFill className="icon-2" />
      </p>
      {CV.skills.map((info) => {
        return (
          <div className="skills">
            <h2 className="skills-square">{info.name}</h2>

            <p className="skills-square">{info.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
