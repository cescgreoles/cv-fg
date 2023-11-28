import React from "react";
import Introduccion from "../components/Introduccion.jsx";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import IconsGitLin from "../components/IconsGitLin.jsx";
import "../Home/Home.jsx";
import ComponentA from "../components/Projects.jsx";
import "../Home/Home.scss";
import { LanguageProvider } from "../Home/ContextLanguage.jsx";

const Home = () => {
  return (
    <LanguageProvider>
      <div className="container-home">
        <IconsGitLin />
        <Introduccion />
        <Education />
        <Experience />
        <Skills />
        <ComponentA />
      </div>
    </LanguageProvider>
  );
};

export default Home;
