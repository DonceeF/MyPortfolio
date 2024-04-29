import "./Skills.css";

const SKILL = [
  {
    title: "Frontend",
    icon: "./assets/images/frontend-icon.png",
    skills: [
      { skill: "HTML5", percentage: "80%" },
      { skill: "CSS3", percentage: "90%" },
      { skill: "Javascript", percentage: "75%" },
      { skill: "React.js", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: "./assets/images/backend-icon.png",
    skills: [
      { skill: "Node.js", percentage: "70%" },
      { skill: "Express.js", percentage: "60%" },
    ],
  },
  {
    title: "Tools",
    icon: "./assets/images/tools-icon.png",
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code)", percentage: "75%" },
      { skill: "Responsive Design", percentage: "60%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "./assets/images/soft-skills-icon.png",
    skills: [
      { skill: "Problem-solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Details", percentage: "75%" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILL.map((item) => (
            <img key={item.title} src={item.icon} alt={item.title} />
          ))}
        </div>
        <div className="skills-info"></div>
      </div>
    </section>
  );
};

export default Skills;
