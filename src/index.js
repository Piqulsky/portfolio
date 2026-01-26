import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutMe from "./Pages/AboutMe/AboutMe";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="*" element={<App />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/aboutme" element={<AboutMe />} />
    </Routes>
  </BrowserRouter>,
);
