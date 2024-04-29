import "./ExperienceCard.css";
import PropTypes from "prop-types";

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <h6>{details.title}</h6>
      <div className="work-duration">{details.date}</div>
      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

ExperienceCard.propTypes = {
  details: PropTypes.object.isRequired,
};

export default ExperienceCard;
