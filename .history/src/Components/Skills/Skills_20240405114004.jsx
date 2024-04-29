import { SKILLS } from "../../utils/data.js";
import "./Skills.css";
import SkillsCard from "./SkillsCard/SkillsCard";

const Skills = () => {
  const toggleMenu = () => {
    console.log("hi");
  };
  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => {
            <SkillsCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={true}
              onClick={toggleMenu}
            />;
          })}
        </div>
        <div className="skills-info"></div>
      </div>
    </section>
  );
};

export default Skills;