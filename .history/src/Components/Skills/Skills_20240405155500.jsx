import { SKILLS } from "../../utils/data.js";
import "./Skills.css";
// import SkillsCard from "./SkillsCard/SkillsCard";

const Skills = () => {
  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => {
            // <SkillsCard
            //   key={item.title}
            //   title={item.title}
            //   // iconUrl={item.icon}
            //   isActive={true}
            // />;
            <img src={item.icon} alt={item.title} />;
          })}
        </div>
        <div className="skills-info"></div>
      </div>
    </section>
  );
};

export default Skills;
