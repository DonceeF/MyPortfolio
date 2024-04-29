import "./SkillsCard.css";
import PropTypes from "prop-types";

const SkillsCard = ({ title /*, iconUrl*/, isActive, onClick }) => {
  return (
    <div
      className={`skills-cars ${isActive ? "active" : " "}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        {/* <img src={iconUrl} alt={title} /> */}
        <span>{title}</span>
      </div>
    </div>
  );
};

SkillsCard.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  // iconUrl: PropTypes.string,
};

export default SkillsCard;
