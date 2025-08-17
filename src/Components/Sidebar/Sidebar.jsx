import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';
import i18n from 'i18next';

// Background images
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

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>

      {/* Background Carousel */}
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

      {/* Close button */}
      <button className="sidebar-close mobile-only" onClick={toggleSidebar}>×</button>

      {/* Language Selector - top right */}
      <div className="language-selector">
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={i18n.language}
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="te">తెలుగు</option>
          <option value="or">ଓଡ଼ିଆ</option>
        </select>
      </div>

      {/* Logo */}
      <div className="sidebar-logo">
        <Link to='/'><img src={logo} alt="Logo" /></Link>
      </div>

      {/* Navigation Links */}
      {/* Navigation Links */}
<ul className="sidebar-links">
  <Link to='/' onClick={toggleSidebar}><li>{t("sidebar_link_home")}</li></Link>
  <Link to='/about' onClick={toggleSidebar}><li>{t("sidebar_link_About")}</li></Link>
  {/* <li onClick={toggleSidebar}>{t("sidebar_link_consultation")}</li> */}
  <Link to='/testimonials' onClick={toggleSidebar}><li>{t("sidebar_link_testimonials")}</li></Link>
  {/* <li onClick={toggleSidebar}>{t("sidebar_link_successStories")}</li> */}
  <Link to='/knowyourcancer' onClick={toggleSidebar}><li>{t("sidebar_link_knowAboutCancer")}</li></Link>
  <Link to='/certifications' onClick={toggleSidebar}><li>{t("sidebar_link_certifications")}</li></Link>
  <Link to='/contact' onClick={toggleSidebar}><li>{t("sidebar_link_consultation")}</li></Link>
</ul>


      {/* Social Icons */}
      <div className="sidebar-social">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
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
