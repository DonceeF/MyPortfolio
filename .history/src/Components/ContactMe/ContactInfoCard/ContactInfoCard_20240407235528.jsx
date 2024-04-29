import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text }) => {
  const Icon = iconUrl;

  return (
    <div className="contact-details-card">
      <div className="icon">
        <Icon />
      </div>
      <p>{text}</p>
    </div>
  );
};

ContactInfoCard.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactInfoCard;
