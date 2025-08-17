import React from 'react'
import scope from '../../assets/scope.png'
import bg4 from '../../assets/bg4.jpg'
import './About.css'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation();
  return (
    <div className='about'>
      <div className="top">
        <div className="content">
            <h2 className='aboutTag'>{t("about")}</h2>
            <p className='about-content'><b>{t("about_doctor_full_name")}</b> {t("about_para1")}</p>
        </div>
        <div className="scope">
        <img src={scope} alt="" />
      </div>
      </div>
      <div className="bannerImg">
        <img src={bg4} alt="" />
        <div className="contact-details">
            <h4 className='emailHead'>{t("email")}</h4>
            <p>care@drnikunjchauhan.com</p>
            <h4 className='emailHead'>{t("role")}</h4>
            <p>Surgical Oncologist</p>
            <h4 className='emailHead'>{t("contactNo")}</h4>
            <p>+91 85919 67968</p>
        </div>
      </div>
      <div className="bottom">
        <p>{t("about_para2")}</p>
        <p>{t("about_para3")}</p>
        <p>{t("about_para4")}</p>
        <p>{t("about_para5")}</p>
        <p>{t("about_para6")}</p>
      </div>
      <div className="achievments">
        <h4>{t("achievement")}</h4>
        <ul>
            <li>{t("achievement1")}
</li>
            <li>{t("achievement2")}
</li>
            <li>{t("achievement3")}
</li>
            <li>{t("achievement4")}
</li>
            <li>{t("achievement5")}</li>
            
        </ul>
      </div>
    </div>
  )
}

export default About
