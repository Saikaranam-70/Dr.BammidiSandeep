import React from "react";
import "./Home.css";
import doctorImage from "../../assets/doctor1.png"; 
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="home">
      <div className="home-content">
        <h2 className="home-intro">{t("home_hi")}</h2>
        <h1 className="home-name">
          <span className="highlight">{t("home_name")}</span> {t("home_second_name")}
        </h1>

        <p className="home-description">{t("home_intro")}</p>
        <p className="home-description">{t("home_intro2")}</p>

        <Link to="/about">
          <button className="home-button">{t("home_button")}</button>
        </Link>
      </div>

      {/* Doctor Image Flip Card */}
      <div className="home-image">
        <div className="flip-card">
          <div className="flip-card-inner">
            {/* Front side - Image */}
            <div className="flip-card-front">
              <img src={doctorImage} alt="Dr. Sandeep Bammidi" />
            </div>

            {/* Back side - Quote */}
            <div className="flip-card-back">
              <p className="quote-text">
                <span className="quote-mark">“</span>
                {t("home_quote") || "My mission is to bring world-class cancer care closer to patients’ homes, ensuring hope and healing for every family."}
                <span className="quote-mark">”</span>
              </p>
              <p className="quote-author">—{t("about_doctor_full_name")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
