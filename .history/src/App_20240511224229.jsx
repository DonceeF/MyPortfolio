import "./App.css";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  // const link_home = (
  //   <Link to="/" className="menu-item">
  //     Home
  //   </Link>
  // );
  // const link_Skills = (
  //   <Link to="/Skills" className="menu-item">
  //     Skills
  //   </Link>
  // );
  // const link_experience = (
  //   <Link to="/WorkExperience" className="menu-item">
  //     Work Experience
  //   </Link>
  // );
  // const link_contact = (
  //   <Link to="/ContactMe" className="menu-item">
  //     Contact Me
  //   </Link>
  // );
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={[
              <Hero key="Hero" />,
              <Skills key="Skills" />,
              <WorkExperience key="WorkExperience" />,
              <ContactMe key="ContactMe" />,
            ]}
          ></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/workexperience" element={<WorkExperience />}></Route>
          <Route path="/contactme" element={<ContactMe />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
