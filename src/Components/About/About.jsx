import React, { useEffect, useState } from 'react';
import scope from '../../assets/scope.png';
import bg4 from '../../assets/bg4.jpg';
import './About.css';
import { useTranslation } from 'react-i18next';
import map from '../../assets/map.png'
import one from '../../assets/1st.png'

// Counter component
const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    let animationFrame;

    const updateCounter = () => {
      start += increment;
      if (start < target) {
        setCount(Math.ceil(start));
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    updateCounter();

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count}</span>;
};

const About = () => {
  const { t } = useTranslation();
  return (
    <div className='about'>
      <div className="stats">
  <div className="stat">
    <h3>{t("total_surgeries")}:</h3>
    <p>{t("more_than")} <Counter target={800} duration={2000} /></p>
  </div>
  <div className="stat">
    <h3>{t("outpatient_cases")}:</h3>
    <p>{t("more_than")} <Counter target={3000} duration={2500} /></p>
  </div>
</div>

      <div className="top">
        <div className="content">
            <h2 className='aboutTag'>{t("about")}</h2>
            <p className='about-content'><b>{t("about_doctor_full_name")}</b> {t("about_para1")}</p>
        </div>
        <div className="scope">
          <img src={scope} alt="" />
        </div>
      </div>

      {/* Animated Counters Section */}
      

      <div className="bannerImg">
        <img src={bg4} alt="" />
        <div className="contact-details">
            <h4 className='emailHead'>{t("email")}</h4>
            <p>drsandeepsurgicaloncologist@gmail.com</p>
            <h4 className='emailHead'>{t("role")}</h4>
            <p>Surgical Oncologist</p>
            <h4 className='emailHead'>{t("contactNo")}</h4>
            <p>+91 9052881122</p>
        </div>
      </div>

      <div className="bottom">
        <p>{t("about_para2")}</p>
        <p>{t("about_para3")}</p>
        <p>{t("about_para4")}</p>
        <p>{t("about_para5")}</p>
        <p>{t("about_para6")}</p>
      </div>

      {/* <div className="achievments">
        <h4>{t("achievement")}</h4>
        <ul>
            <li>{t("achievement1")}</li>
            <li>{t("achievement2")}</li>
            <li>{t("achievement3")}</li>
            <li>{t("achievement4")}</li>
            <li>{t("achievement5")}</li>
            <li>{t("achievement6")}</li>
            <li>{t("achievement7")}</li>
            <li>{t("achievement8")}</li>
            <li>{t("achievement9")}</li>
            <li>{t("achievement10")}</li>
        </ul>
      </div> */}
      
<div class="parent">
        <div class="map">
          <img src={map} alt="Srikakulam and Uddanam Map" />
        </div>
    <div class="one">
      <img src={one} alt="Logo Achivements" />
    </div>
</div>
    
    </div>
  )
}

export default About;
