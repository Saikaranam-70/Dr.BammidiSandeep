import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";
import "./SampleContactPage.css";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("https://doctor-backend-kmtx.onrender.com/send-consultation-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: formData.patientEmail,
          patientName: formData.patientName,
          patientEmail: formData.patientEmail,
          patientPhone: formData.patientPhone,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ patientName: "", patientEmail: "", patientPhone: "", message: "" });
      } else {
        setStatus(`Failed to send email: ${data.error}`);
      }
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  const whatsappNumber = "9052221122";
  const whatsappMessage = "Hello Doctor, I want to book a consultation.";
  const whatsappLink = `https://wa.me/+91${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="contact-section">
      <h2 className="contact-title">{t("sidebar_link_consultation")}</h2>

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
              <p>drsandeepbammidi@gmail.com</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="social-icons">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://x.com/drbammidi?s=11&t=_uKV_0m7IisGwobUdclQCw" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/dr-bammidi-sandeep-a22966238" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/dr_bammidi_sandeep" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="tel:+919052881122" title="Call Now">
              <FaPhone />
            </a>
          </div>
        </div>

        {/* ===== Right Side - Contact Form ===== */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="patientName"
              placeholder="Your Name"
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="patientEmail"
              placeholder="Your Email"
              value={formData.patientEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="patientPhone"
              placeholder="Your Phone"
              value={formData.patientPhone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-button">
            {t("sendMessage")}
          </button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>

      {/* Google Map Embed */}
      {/* <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.51706001664877!2d83.89254382782069!3d18.305438631711002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c15c8afff60c9%3A0x51a524b6178c4fa6!2sTrinetra%20Superspeciality%20eye%20hospital!5e1!3m2!1sen!2sin!4v1755451388994!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div> */}
    </section>
  );
};

export default ContactPage;
