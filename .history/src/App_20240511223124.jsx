import "./App.css";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import { Route, Routes } from "react-router-dom";

function App() {
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
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/WorkExperience" element={<WorkExperience />}></Route>
          <Route path="/ContactMe" element={<ContactMe />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
