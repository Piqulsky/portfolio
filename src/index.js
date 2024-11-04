import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./nav/AboutMe";
import Projects from "./nav/Projects";
import ProhibitionTime from "./projects/ProhibitionTime";
import Moonsoup from "./projects/Moonsoup";
import WhenTheDuskComes from "./projects/WhenTheDuskComes";
import IntoInferno from "./projects/IntoInferno";
import CoalInMyHeart from "./projects/CoalInMyHeart";
import Razem from "./projects/Razem";
import CriticalFighter from "./projects/CriticalFighter";
import ScytheOfTime from "./projects/ScytheOfTime";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<App />} />
        <Route path="prohibition-time" element={<ProhibitionTime />} />
        <Route path="moonsoup" element={<Moonsoup />} />
        <Route path="when-the-dusk-comes" element={<WhenTheDuskComes />} />
        <Route path="into-inferno" element={<IntoInferno />} />
        <Route path="coal-in-my-heart" element={<CoalInMyHeart />} />
        <Route path="razem-rpg" element={<Razem />} />
        <Route path="critical-fighter" element={<CriticalFighter />} />
        <Route path="scythe-of-time" element={<ScytheOfTime />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
