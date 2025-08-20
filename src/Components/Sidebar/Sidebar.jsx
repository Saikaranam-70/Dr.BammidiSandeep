import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaPhone, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/ribbon.png';
import { Link } from 'react-router-dom';
import i18n from 'i18next';

import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';
import bg3 from '../../assets/bg3.jpg';
import bg4 from '../../assets/bg4.jpg';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { t } = useTranslation();
  const images = [bg1, bg2, bg3, bg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('selectedLanguage', lng);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  const whatsappNumber = "9052221122";
  const whatsappMessage = "Hello Doctor, I want to book a consultation.";
  const whatsappLink = `https://wa.me/+91${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>

      <div className="sidebar-bg">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`bg-${index}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>


      <button className="sidebar-close mobile-only" onClick={toggleSidebar}>×</button>

      <div className="language-selector">
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={i18n.language}
          
        >
          <option value="en" onClick={toggleSidebar}>English</option>
          <option value="hi" onClick={toggleSidebar}>हिन्दी</option>
          <option value="te" onClick={toggleSidebar}>తెలుగు</option>
          <option value="or" onClick={toggleSidebar}>ଓଡ଼ିଆ</option>
        </select>
      </div>

      <div className="sidebar-logo">
        <Link to='/' onClick={toggleSidebar}><img src={logo} alt="Logo" /></Link>
      </div>

      <ul className="sidebar-links">
        <Link to='/' onClick={toggleSidebar}><li>{t("sidebar_link_home")}</li></Link>
        <Link to='/about-dr-bammidi-sandeep' onClick={toggleSidebar}><li>{t("sidebar_link_About")}</li></Link>
        
        <Link to='/knowyourcancer' onClick={toggleSidebar}><li>{t("sidebar_link_knowAboutCancer")}</li></Link>
        <Link to='/certifications' onClick={toggleSidebar}><li>{t("sidebar_link_certifications")}</li></Link>
        <Link to='/organisations' onClick={toggleSidebar}><li>{t("title")}</li></Link>
        <Link to='/awards' onClick={toggleSidebar}><li>{t("titleAwards")}</li></Link>
        <Link to='/contact' onClick={toggleSidebar}><li>{t("sidebar_link_consultation")}</li></Link>
        <Link to='/testimonials' onClick={toggleSidebar}><li>{t("sidebar_link_testimonials")}</li></Link>
      </ul>

      <div className="sidebar-social">
        {/* WhatsApp */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
          <FaWhatsapp />
        </a>
        {/* Call */}
        <a href="tel:+919052881122" title="Call Now">
          <FaPhone />
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/dr_bammidi_sandeep?igsh=MTczbnNyZjcwd2NmaA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/dr-bammidi-sandeep-a22966238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/drbammidi?s=11&t=_uKV_0m7IisGwobUdclQCw" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>

      {/* Developer Info */}
      <div className="sidebar-developer">
        <p>{t("design")}</p>
        <p>
          <a href="https://kolors.in/" style={{ color: 'yellow', textDecoration: 'none' }} target='_blank' rel="noreferrer">
            Kolors
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
