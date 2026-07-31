import "../../css/Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function Contact() {
  return (
<section className="contact" id="contact">
      <div className="contact-title">
        <h4>CONTACT ME</h4>
        <h1>Let's Work Together</h1>
        <p>
          Have a project in mind? Feel free to contact me.
          I'll respond as soon as possible.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>dgubbaladevendra@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhone className="icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 9110313465</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Location</h3>
              <p>Hyderabad, India</p>
            </div>
          </div>

          <div className="socials">

            <a
               href="https://github.com/DevendraGubbala"
               target="_blank"
              rel="noopener noreferrer"
                  >
                <FaGithub />
               </a>

            <a
                href="https://www.linkedin.com/in/devendragubbala"
                target="_blank"
                 rel="noopener noreferrer"
                 >
              <FaLinkedin />
              </a>

          </div>

        </div>

        <form
  className="contact-form"
  action="https://formsubmit.co/dgubbaladevendra@gmail.com"
  method="POST"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
  />

  <input
    type="text"
    name="subject"
    placeholder="Subject"
    required
  />

  <textarea
    name="message"
    rows="6"
    placeholder="Write your message..."
    required
  ></textarea>

  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />

  <button type="submit">
    Send Message
  </button>
</form>

      </div>

    </section>
  );
}

export default Contact;