import React from "react";
import { CV } from "../utils/cv";
import "../styles/Introduccion.scss";
import { IoIosPersonAdd } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Introduccion = (about) => {
  return (
    <div className="container">
      <h1 className="title">{CV.about.fullName}</h1>
      <IoIosPersonAdd />
      <h2 className="content">{CV.about.profesion}</h2>
      <CiCalendarDate />
      <p className="content">{CV.about.birthDate}</p>
      <IoIosMail />
      <p className="content">{CV.about.email}</p>
      <FaPhone />
      <p className="content">{CV.about.phone}</p>
    </div>
  );
};

export default Introduccion;
