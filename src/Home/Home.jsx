import React from "react";
import Introduccion from "../components/Introduccion.jsx";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import IconsGitLin from "../components/IconsGitLin.jsx";
import "../Home/Home.jsx";
import "../Home/Home.scss";
import AllProjects from "../components/AllProjects.jsx";

const Home = () => {
  return (
    <div className="container-home">
      <IconsGitLin />
      <Introduccion />
      <Education />
      <Experience />
      <Skills />
      <AllProjects />
    </div>
  );
};

export default Home;
