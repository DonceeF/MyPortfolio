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
            path="/Home"
            element={
              <>
                <Hero />
                <Skills />
                <WorkExperience />
                <ContactMe />
                <Footer />
              </>
            }
          ></Route>
          <Hero />
          <Skills />
          <WorkExperience />
          <ContactMe />
          <Footer />
        </Routes>
      </div>
    </>
  );
}

export default App;
