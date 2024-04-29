import "./SkillsInfoCard.css";
import PropTypes from "prop-types";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>
    </div>
  );
};

SkillsInfoCard.propTypes = {
  heading: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default SkillsInfoCard;
