import React from "react";
import "../styles/Experience.scss";
import { CV } from "../utils/cv";
import { MdOutlineWork } from "react-icons/md";

const Experience = () => {
  return (
    <div className="experience-block">
      <p>
        <MdOutlineWork />
      </p>
      {CV.experience.map((info) => {
        return (
          <div className="experience">
            <h2 className="experience-square">{info.name}</h2>
            <p className="experience-square">{info.date}</p>
            <p className="experience-square">{info.where}</p>
            <p className="experience-square">{info.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
