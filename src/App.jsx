import "./App.scss";
import { Route, Routes } from "react-router-dom";
import MyProjects from "./components/MyProjects";
import Home from "./Home/Home";

function App() {
  return (
    <div className="container">
      <Home />
      <Routes>
        <Route path="myprojects" element={<MyProjects />} />
      </Routes>
    </div>
  );
}

export default App;
