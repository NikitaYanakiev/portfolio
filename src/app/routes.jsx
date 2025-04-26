import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutMe from "../pages/AboutMe/AboutMe";
import MyWorks from "../pages/MyWorks/MyWorks";
import ContactMe from "../pages/ContactMe/ContactMe";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/portfolio" element={<HomePage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/works" element={<MyWorks />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
};

export default AppRoutes;
