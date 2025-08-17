import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";
import "./ContactPage.css";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const {t} = useTranslation();
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
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>{t("email")}</h4>
              <p>contact@drbamadisandeep.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaClock className="info-icon" />
            <div>
              <h4>{t("workingHrs")}</h4>
              <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
              {/* <p>Sunday: Closed</p> */}
            </div>
          </div>

          {/* ===== Social Media Links ===== */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d658.3486163049307!2d83.90368411836333!3d18.351890252751208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c6ac250b7df1d%3A0x998ac901db4a0024!2sGreat%20Eastern%20Medical%20School%20%26%20Hospital%2C%20Ragolupeta%2C%20Andhra%20Pradesh%20532484!5e1!3m2!1sen!2sin!4v1755274478475!5m2!1sen!2sin"
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
