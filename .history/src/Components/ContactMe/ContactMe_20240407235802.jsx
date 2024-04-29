import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css";
import { FaGithub } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5></h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard iconUrl={FaGithub} text="https//github.com" />
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
    </section>
  );
};

export default ContactMe;
