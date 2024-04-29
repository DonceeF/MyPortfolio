import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard iconUrl={FaGithub} text="https//github.com" />
          <ContactInfoCard iconUrl={CiMail} text="monsefmastour06@gmail.com" />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
