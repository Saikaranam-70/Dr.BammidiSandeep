import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaPhone
} from "react-icons/fa";
import "./ContactPage.css";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const {t} = useTranslation();
  const whatsappNumber = "9052221122";
  const whatsappMessage = "Hello Doctor, I want to book a consultation.";
  const whatsappLink = `https://wa.me/+91${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  return (
    <section className="contact-section">
      <h2 className="contact-title">{t("sidebar_link_consultation")}</h2>
      {/* <p className="contact-subtitle">
        Have questions or want to book an appointment? We’re here to help.
      </p> */}

      <div className="contact-container">
        {/* ===== Left Side - Contact Info ===== */}
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>{t("address")}</h4>
              <p>{t("addressVal")}</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h4>{t("contactNo")}</h4>
              <p>+91 9052881122</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>{t("email")}</h4>
              <p>drsandeepsurgicaloncologist@gmail.com</p>
            </div>
          </div>

          {/* <div className="info-item">
            <FaClock className="info-icon" />
            <div>
              <h4>{t("workingHrs")}</h4>
              <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
              {/* <p>Sunday: Closed</p> 
            </div>
          </div> */}

          {/* ===== Social Media Links ===== */}
          <div className="social-icons">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://x.com/drbammidi?s=11&t=_uKV_0m7IisGwobUdclQCw" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/dr-bammidi-sandeep-a22966238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/dr_bammidi_sandeep?igsh=MTczbnNyZjcwd2NmaA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="tel:+919052881122" title="Call Now">
                      <FaPhone />
                    </a>
          </div>
        </div>

        {/* ===== Right Side - Contact Form ===== */}
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Your Phone" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="contact-button">
            {t("sendMessage")}
          </button>
        </form>
      </div>

      {/* ===== Google Map Embed ===== */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.51706001664877!2d83.89254382782069!3d18.305438631711002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c15c8afff60c9%3A0x51a524b6178c4fa6!2sTrinetra%20Superspeciality%20eye%20hospital!5e1!3m2!1sen!2sin!4v1755451388994!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        
      </div>
    </section>
  );
};

export default ContactPage;
