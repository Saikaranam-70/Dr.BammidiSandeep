import React from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = ({ toggleSidebar }) => {
  const {t} = useTranslation()
  return (
    <nav className="navbar">
      {/* Left: Logo & Info */}
      <div className="navbar-left">
       <Link to='/'> <img src={logo} alt="Logo" className="navbar-logo" /></Link>
        <div className="navbar-info">
          <span className="navbar-name">{t("about_doctor_full_name")}</span>
          <span className="navbar-specialization">{t("cancer_specialist")}</span>
        </div>
      </div>

      {/* Right: Hamburger menu for mobile */}
      <button className="hamburger mobile-only" onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </button>
    </nav>
  );
};

export default Navbar;
