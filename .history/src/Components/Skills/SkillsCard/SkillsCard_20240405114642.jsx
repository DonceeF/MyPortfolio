import "./SkillsCard.css";
import PropTypes from "prop-types";

const SkillsCard = ({ title, iconUrl }) => {
  return (
    <div className="skill-icon">
      <img src={iconUrl} alt={title} />

      <span>{title}</span>
    </div>
  );
};

SkillsCard.propTypes = {
  title: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
};

export default SkillsCard;
