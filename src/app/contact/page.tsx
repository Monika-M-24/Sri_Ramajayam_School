import { FaInstagram } from "react-icons/fa";
export default function ContactPage() {
  return (
    <div className="contact-container">

      <div className="contact-info">
        <h2>Contact Us</h2>

        <p>
          Sri Ramajayam Matric Higher Secondary School
          <br />
          📍 No. 466 C.C. Road,
Pappambadi Village (Near TNHB), Polur,
Thiruvannamalai Dt - 606 803, TamilNadu, India.
        </p>

        <div className="contact-numbers">
  <a href="tel:+919965527501" className="contact-link">
    📞 +91 99655 27501
  </a>

  <a href="tel:+919443329983" className="contact-link">
    📞 +91 94433 29983
  </a>

  <a href="tel:+919443329984" className="contact-link">
    📞 +91 94433 29984
  </a>

  <a href="tel:+91-4181-224640" className="contact-link">☎️ +91-4181-224640</a>
</div>
        

        

        <p>✉️ sriramajayammhss@gmail.com</p>
        <div className="admission-box">
  <h3>🎓 Admission Enquiries</h3>
  <p>
    For admission-related questions, please contact our admission office.
  </p>

  <a href="tel:+919965527501" className="admission-number">
    📞 +91 99655 27501
  </a>
  
</div>

<a
  href="https://www.instagram.com/sri_ramajayam_matric_school/"
  target="_blank"
  rel="noopener noreferrer"
  className="instagram-btn"
>
  <FaInstagram />
</a>
      </div>

      <div className="contact-form">
        <h2>Get In Touch</h2>

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />

        <textarea
          rows={4}
          placeholder="Your Message"
        ></textarea>

        <button>Send Message</button>

        <div className="map">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.5472787471867!2d79.1380311!3d12.5222203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacd9114c90d04b%3A0x150337fab7418b43!2sSri%20Ramajayam%20Educational%20Institute!5e1!3m2!1sen!2sin!4v1780895505528!5m2!1sen!2sin"
  width="100%"
  height="300"
  style={{ border: 0 }}
  loading="lazy"
></iframe>
        </div>

      </div>

    </div>
  );
}