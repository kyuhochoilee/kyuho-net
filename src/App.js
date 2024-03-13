// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Play from "./pages/Play";
import ArtworkDetails from "./pages/ArtworkDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router style={{ backgroundColor: "white" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Projects />} />
        <Route path="/work/:projectId" element={<ProjectDetails />} />
        <Route path="/play" element={<Play />} />
        <Route path="/play/:projectId" element={<ArtworkDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
