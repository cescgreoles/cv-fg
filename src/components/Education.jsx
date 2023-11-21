import React from "react";
import "../styles/Education.scss";
import { CV } from "../utils/cv";
import { MdSchool } from "react-icons/md";

const Education = (education) => {
  return (
    <div className="education-block">
      <p className="icon-2">
        <MdSchool />
      </p>
      {CV.education.map((info) => {
        return (
          <div className="education">
            <h2 className="education-square">{info.name}</h2>
            <p className="education-square">{info.date}</p>
            <p className="education-square">{info.where}</p>
            <p className="education-square">{info.info}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
