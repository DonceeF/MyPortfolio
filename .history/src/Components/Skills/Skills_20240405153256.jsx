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
            <SkillsCard
              key={item.title}
              title={item.title}
              // iconUrl={item.icon}
              isActive={true}
            />;
          })}
          {SKILLS.forEach((skillCategory) => {
            // Iterate through each skill category
            skillCategory.skills.forEach((skill) => {
              // Iterate through each skill
              const iconPath =
                require(`../assets/images/${skillCategory.title.toLowerCase()}-icon.png`).default;
              // Form the relative path based on the skill category title
              console.log("Icon path for", skill.skill, ":", iconPath);
              // Log the image path to the console
            });
          })}
        </div>
        <div className="skills-info"></div>
      </div>
    </section>
  );
};

export default Skills;
