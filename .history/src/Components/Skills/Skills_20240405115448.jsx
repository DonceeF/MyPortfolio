import { SKILLS } from "../../utils/data.js";
import "./Skills.css";
import SkillsCard from "./SkillsCard/SkillsCard";

const Skills = () => {
  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => {
            <SkillsCard iconUrl={item.icon} title={item.title} />;
          })}
        </div>
        <div className="skills-info"></div>
      </div>
    </section>
  );
};

export default Skills;
