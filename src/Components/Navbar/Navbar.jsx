import React from 'react';
import './SampleNavbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/logo.png';
import navImg from '../../assets/god.png'; // 👈 add your image here
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = ({ toggleSidebar }) => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      {/* Left: Logo & Info */}
      <div className="navbar-left">
        <Link to='/'>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <div className="navbar-info">
          <span className="navbar-name">{t("about_doctor_full_name")}</span>
          <span className="navbar-specialization">{t("cancer_specialist")}</span>
        </div>
      </div>

      {/* Right: Image + Book Consultation & Hamburger menu */}
      <div className="navbar-right">
        {/* 👇 new image */}
        <img src={navImg} alt="Navbar Icon" className="navbar-extra-img" />

        <Link to="/contact">
          <button className="book-consultation-btn">
            {t("nav_bt")}
          </button>
        </Link>

        <button className="hamburger mobile-only" onClick={toggleSidebar}>
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
