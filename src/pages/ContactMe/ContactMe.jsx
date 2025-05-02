import { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.scss";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import contactImg from "../../shared/assets/images/contact.jpg";
import HeadTitle from "../../widgets/HeadTitle/HeadTitle";

const ContactMe = () => {
  const [focusedField, setFocusedField] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    subject: false,
    message: false,
  });
  const [notification, setNotification] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });

    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() === "",
      subject: formData.subject.trim() === "",
      message: formData.message.trim() === "",
    };
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (!hasError) {
      setIsSending(true);

      const templateParams = {
        from_name: formData.name,
        subject: formData.subject,
        message: formData.message,
      };

      emailjs
        .send(
          "service_yanakiiev",
          "template_oc17g1d",
          templateParams,
          "IglQVioWchNXBhI0n"
        )
        .then(() => {
          showNotification("success", "Message sent successfully!");
          setFormData({ name: "", subject: "", message: "" });
        })
        .catch((err) => {
          console.error("Failed to send message:", err);
          showNotification("error", "Something went wrong. Please try again.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <main className="contact">
      <div className="container">
        {notification && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}

        <HeadTitle title={"Contact Me"} subtitle={"For Any Project Knock Me"} />

        <div className="contact__body">
          <h3 className="contact__subtitle">Get in Touch With Me</h3>
          <form onSubmit={handleSubmit} className="contact__form">
            <label
              htmlFor="name"
              className={`contact__label contact__label_name ${
                focusedField === "name" ? "focused" : ""
              } ${errors.name ? "error" : ""}`}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className={`contact__name ${errors.name ? "error" : ""}`}
              value={formData.name}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField("")}
              onChange={handleChange}
            />

            <label
              htmlFor="subject"
              className={`contact__label contact__label_subject ${
                focusedField === "subject" ? "focused" : ""
              } ${errors.subject ? "error" : ""}`}
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className={`contact__subject ${errors.subject ? "error" : ""}`}
              value={formData.subject}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField("")}
              onChange={handleChange}
            />

            <label
              htmlFor="message"
              className={`contact__label contact__label_message ${
                focusedField === "message" ? "focused" : ""
              } ${errors.message ? "error" : ""}`}
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className={`contact__message ${errors.message ? "error" : ""}`}
              value={formData.message}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField("")}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="contact__btn hover-target" disabled={isSending}>
              {isSending ? <AiOutlineLoading3Quarters className="contact__loading"/> : "Send"}
            </button>
          </form>
        </div>

        <div className="contact__info">
          <div className="contact__img">
            <img src={contactImg} alt="contact" />
          </div>
          <div className="contact__links">
            <div className="contact__address contact__link">
              Platz der Freiheit 2, Marl
            </div>
            <a
              href="tel:+4915201357760"
              className="contact__number contact__link"
            >
              +49 (1520)-135-7760
            </a>
            <a
              href="mailto:yanakiiev@gmail.com"
              className="contact__mail contact__link"
            >
              yanakiiev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactMe;
