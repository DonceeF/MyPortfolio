import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import ContactForm from "./ContactForm/ContactForm";

const contactInfo = [
  {
    icon: FaGithub,
    path: "https://github.com/DonceeF",
  },
  {
    icon: CiMail,
    path: "monsefmastour16@gmail.com",
  },
];

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          {contactInfo.map((info, index) => (
            <ContactInfoCard
              key={`info_${index}`}
              iconUrl={info.icon}
              text={info.path}
            />
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
