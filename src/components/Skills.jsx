import React from "react";
import { CV } from "../utils/cv";

const Skills = () => {
  return (
    <div className="experience-block">
      <img src="" alt=""></img>
      {CV.skills.map((info) => {
        return (
          <div className="experience">
            <h2 className="experience-square">{info.name}</h2>

            <p className="experience-square">{info.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
