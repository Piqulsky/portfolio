import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import Resonance from "./Pages/PerProject/Resonance/Resonance";
import Moonsoup from "./Pages/PerProject/Moonsoup/Moonsoup";
import ProhibitionTime from "./Pages/PerProject/ProhibitionTime/ProhibitionTime";
import WhenTheDuskComes from "./Pages/PerProject/WhenTheDuskComes/WhenTheDuskComes";
import CoalInMyHeart from "./Pages/PerProject/CoalInMyHeart/CoalInMyHeart";
import AdventurersLeague from "./Pages/OtherEndeavors/AdventurersLeague/AdventurersLeague";
import DesignBible from "./Pages/OtherEndeavors/DesignBible/DesignBible";
import GameJams from "./Pages/OtherEndeavors/GameJams/GameJams";
import GameMastering from "./Pages/OtherEndeavors/GameMastering/GameMastering";
import MiroTemplates from "./Pages/OtherEndeavors/MiroTemplates/MiroTemplates";
import ScrollToTop from "./Modules/FlowControl/ScrollToTop";
import WIP from "./Pages/WIP/WIP";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route index element={<App />} />
      <Route path="*" element={<App />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:skillFilter" element={<ProjectsPage />} />
      <Route path="/project/resonance" element={<Resonance />} />
      <Route path="/project/prohibitiontime" element={<ProhibitionTime />} />
      <Route path="/project/moonsoup" element={<Moonsoup />} />
      <Route
        path="/project/coalinmyheart"
        element={<WIP /> /*<CoalInMyHeart />*/}
      />
      <Route
        path="/other/adventurersleague"
        element={<WIP /> /*<AdventurersLeague />*/}
      />
      <Route path="/other/designbible" element={<WIP /> /*<DesignBible />*/} />
      <Route path="/other/gamejams" element={<WIP /> /*<GameJams />*/} />
      <Route
        path="/other/gamemastering"
        element={<WIP /> /*<GameMastering />*/}
      />
      <Route
        path="/other/mirotemplates"
        element={<WIP /> /*<MiroTemplates />*/}
      />
    </Routes>
  </BrowserRouter>,
);
