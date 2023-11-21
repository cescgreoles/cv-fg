import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import "../styles/IconGitLin.scss";

const IconsGitLin = () => {
  const handleIconClick = () => {
    console.log("Icon clickeado");
  };
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/francesc-greoles-a215a5152/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          icon={FaLinkedin}
          onClick={handleIconClick}
          className="icon-1"
        />
      </a>
      <a
        href="https://github.com/cescgreoles"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          icon={FaGithub}
          onClick={handleIconClick}
          className="icon-1"
        />
      </a>
    </div>
  );
};

export default IconsGitLin;
