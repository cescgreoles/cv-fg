import React from "react";
import { CV } from "../utils/cv";
import "../styles/Introduccion.scss";

const Introduccion = (about) => {
  return (
    <div className="container">
      <h1 className="title">{CV.about.fullName}</h1>
      <h2 className="content">{CV.about.profesion}</h2>
      <p className="content">{CV.about.birthDate}</p>
      <p className="content">{CV.about.email}</p>
      <p className="content">{CV.about.phone}</p>
    </div>
  );
};

export default Introduccion;
