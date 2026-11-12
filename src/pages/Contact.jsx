import { useState } from "react";
import { toast } from "react-toastify";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Your message has been sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      <section className="contact-header text-center">
        <p className="hero-subtitle">WE'D LOVE TO HEAR FROM YOU</p>
        <h1>Contact Us</h1>
        <p>Have a question? Get in touch with us.</p>
      </section>

      <section className="contact-section container">
        <div className="row g-5 align-items-start">

          <div className="col-12 col-lg-5">
            <div className="contact-info">
              <p className="hero-subtitle">GET IN TOUCH</p>
              <h2>Let's Talk Beauty</h2>
              <p>
                We are here to help you with any questions
                about our products. Send us a message and
                we will be happy to hear from you.
              </p>

              <div className="contact-item">
                <span>✉</span>
                <div>
                  <h5>Email</h5>
                  <p>info@makeupproducts.com</p>
                </div>
              </div>

              <div className="contact-item">
                <span>♡</span>
                <div>
                  <h5>Customer Support</h5>
                  <p>We're always happy to help.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Your Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn contact-btn">
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;
