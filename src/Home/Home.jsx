import React from "react";
import Introduccion from "../components/Introduccion.jsx";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import IconsGitLin from "../components/IconsGitLin";
import "../Home/Home.jsx";

const Home = () => {
  return (
    <div>
      <IconsGitLin />
      <Introduccion />
      <Education />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
