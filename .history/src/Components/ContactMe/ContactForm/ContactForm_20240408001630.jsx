import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" id="" />
          <input type="text" name="lastname" placeholder="Last Name" id="" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
