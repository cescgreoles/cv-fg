import "./App.scss";
import Introduccion from "../src/components/Introduccion";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="container">
      <Introduccion />
      <Education />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
