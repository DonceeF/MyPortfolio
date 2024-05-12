import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7ea3daeb-5cd7-44f3-9185-ee8a692e708b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={onSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            required
          />
          <input type="text" name="lastname" placeholder="Last Name" required />
        </div>
        <input type="text" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" rows="3" />
        <button type="submit">SEND</button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default ContactForm;
