import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" id="" />
          <input type="text" name="lastname" id="" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
