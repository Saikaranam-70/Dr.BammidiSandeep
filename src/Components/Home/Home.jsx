import React from "react";

import "./Home.css";
import doctorImage from "../../assets/doctor1.png"; // replace with your image path
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
        <p className="home-description">{t("home_intro")}
          {/* Dr. Bommidi Sandeep combines extensive surgical expertise with a deep understanding
          of patient concerns. His training under eminent oncologists across India and
          hands-on experience in performing complex cancer surgeries make him a reliable
          choice for patients seeking advanced treatment. He remains dedicated to bringing
          tertiary-level cancer care to regions like Kutch, ensuring that patients can
          receive high-quality treatment closer to home. */}
        </p>
        <p className="home-description">{t("home_intro2")}
          {/* For consultations and comprehensive cancer care, you can connect with Dr.
          Bommidi Sandeep to take the next step in your journey toward recovery. */}
        </p>
        <Link to='/about'><button className="home-button">{t("home_button")}</button></Link>
      </div>

      <div className="home-image">
        <img src={doctorImage} alt="Dr. Nikunj Chauhan" />
      </div>
    </section>
  );
};

export default Home;
